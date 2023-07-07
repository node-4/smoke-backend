const cronJob = require("cron").CronJob;
let questionAnswer = require("../../model/questionAnswer");
let questions = require("../../model/questions");
let user = require("../../model/user");
new cronJob("*/20 * * * * *", async function () {
    let hrs = new Date(Date.now()).getHours();
    let date = new Date(Date.now()).getDate();
    let month = new Date(Date.now()).getMonth() + 1;
    let year = new Date(Date.now()).getFullYear();
    let fullDate = (`${date}/${month}/${year}`).toString();
    let min = new Date(Date.now()).getMinutes();
    let hrs1, hr;
    if (hrs < 10) {
        hrs1 = '' + 0 + hrs;
    } else {
        hrs1 = hrs
    }
    if (min) {
        if (min > 30) {
            hr = hrs1 + 6
        } else {
            hr = hrs1 + 5
        }
    }
    // let hrs = new Date(Date.now()).getHours();
    // let date = new Date(Date.now()).getDate();
    // let month = new Date(Date.now()).getMonth() + 1;
    // let year = new Date(Date.now()).getFullYear();
    // let fullDate = (`${date}/${month}/${year}`).toString();
    // let min = new Date(Date.now()).getMinutes();
    // let hrs1, hr;
    // if (hrs < 10) {
    //     hrs1 = '' + 0 + hrs;
    // } else {
    //     hrs1 = hrs
    // }
    // hr = hrs1 - 1;
    console.log("----------------------26-----------question cronjob-----------------------",hr);
    if (((hr + 1) == '07') || ((hr + 1) == '09') || ((hr + 1) == '11') || ((hr + 1) == '13') || ((hr + 1) == '15') || ((hr + 1) == '17') || ((hr + 1) == '19') || ((hr + 1) == '21') || ((hr + 1) == '23')) {
        let findUser = await user.find({ _id: "64902ae7ff2e7a8d9c5355fa" });
        findUser.map(async i => {
            let totalQuestion = await questionAnswer.find({ userID: i._id, questionTime: hr + 1, questionDate: fullDate })
            if (totalQuestion.length == 12) {
                console.log("total 12 question created", fullDate, "hr+1    ", hr + 1);
            } else {
                let findQuestion = await questions.find({});
                let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                QuesRandom.map(async k => {
                    let totalQuestion = await questionAnswer.find({ userID: i._id, questionTime: hr + 1, questionDate: fullDate })
                    if (totalQuestion.length == 12) {
                        console.log("total 12 question created", fullDate, "hr+1    ", hr + 1);
                    } else {
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
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
                                questionTime: hr + 1,
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
        console.log("Question cron job hour is ", (hr + 1));
    }
}).start();
// }).stop()