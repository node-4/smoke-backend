const cronJob = require("cron").CronJob;
let questionAnswer = require("../../model/questionAnswer");
let questions = require("../../model/questions");
let user = require("../../model/user");
new cronJob("*/20 * * * * *", async function () {
    let hr = new Date(Date.now()).getHours();
    let date = new Date(Date.now()).getDate();
    let month = new Date(Date.now()).getMonth() + 1;
    let year = new Date(Date.now()).getFullYear();
    let fullDate = (`${date}/${month}/${year}`).toString()
    if (((hr + 2) == '07') || ((hr + 2) == '09') || ((hr + 2) == '11') || ((hr + 2) == '13') || ((hr + 2) == '19') || ((hr + 2) == '21') || ((hr + 2) == '23')) {
        let findUser = await user.find({});
        findUser.map(async i => {
            let totalQuestion = await questionAnswer.find({ userID: i._id, questionTime: hr + 2, questionDate: fullDate })
            if (totalQuestion.length == 12) {
                console.log("total 12 question created", fullDate, "hr+1    ", hr + 2);
            } else {
                let findQuestion = await questions.find({});
                let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                QuesRandom.map(async k => {
                    let totalQuestion = await questionAnswer.find({ userID: i._id, questionTime: hr + 2, questionDate: fullDate })
                    if (totalQuestion.length == 12) {
                        console.log("total 12 question created", fullDate, "hr+1    ", hr + 2);
                    } else {
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 2, questionDate: fullDate, question: k._id });
                        if (!findQuestionAnswer) {
                            let findSchoolMember = await user.find({ _id: { $ne: i._id }, school: i.school });
                            let condition1, condition2, condition3;
                            if (((i.friends.length) == 0) && (findSchoolMember.length == 0)) {
                                condition1 = true; condition2 = false; condition3 = false;
                            }
                            if (((0 < findSchoolMember.length) && (findSchoolMember.length < 4)) && ((0 < i.friends.length) && (i.friends.length < 4))) {
                                condition1 = false; condition2 = true; condition3 = false;
                            }
                            let obj = {
                                userID: i._id,
                                questionTime: hr + 2,
                                questionDate: fullDate,
                                question: k._id,
                                type: k.type,
                                condition1: condition1,
                                condition2: condition2,
                                condition3: condition3
                            }
                            const Data = await questionAnswer.create(obj);
                        } else {
                            console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
                        }
                    }
                })
            }

        })
    } else {
        console.log("Question cron job hour is ", (hr + 2));
    }
}).start();
// }).stop()
