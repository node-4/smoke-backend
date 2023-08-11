const cronJob = require("cron").CronJob;
let questionAnswer = require("../../model/questionAnswer");
let questions = require("../../model/questions");
let user = require("../../model/user");
async function CreateSession() {
    // new cronJob("*/20 * * * * *", async function () {
    let hrs = new Date(Date.now()).getHours();
    let date = new Date(Date.now()).getDate();
    let month = new Date(Date.now()).getMonth() + 1;
    let year = new Date(Date.now()).getFullYear();
    let fullDate = (`${date}/${month}/${year}`).toString();
    let min = new Date(Date.now()).getMinutes();
    console.log("server time ===>", hrs, ":", min);
    let hrs1, hr, hrs2, hrs3;
    if (hrs < 10) {
        hrs1 = '' + 0 + parseInt(hrs);
    } else {
        hrs1 = parseInt(hrs);
    }
    if (min < 0) {
        min = 0
    }
    if (min) {
        if (min > 30) {
            hr = parseInt(hrs1) + 6
        } else {
            hr = parseInt(hrs1) + 5
        }
    }
    console.log("after create time + 5:30  ===>", hr, ":", min);
    if (hr < 10) {
        hrs2 = '' + 0 + parseInt(hr + 1);
    } else {
        hrs2 = parseInt(hr + 1);
    }
    console.log(fullDate, "------26------question cronjob----------", hrs);
    // hrs3 = hrs2; /// server
    hrs3 = hrs;  //local
    if ((hrs3 == '07') || (hrs3 == '09') || (hrs3 == '11') || (hrs3 == '13') || (hrs3 == '15') || (hrs3 == '17') || (hrs3 == '19') || (hrs3 == '21') || (hrs3 == '23')) {
        let findUser = await user.find({});
        findUser.map(async i => {
            let totalQuestion = await questionAnswer.find({ userID: i._id, questionTime: hrs3, questionDate: fullDate })
            if (totalQuestion.length == 12) {
                console.log("total 12 question created", fullDate, "hr+1    ", hrs3);
            } else {
                let findQuestion = await questions.find({});
                let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                QuesRandom.map(async k => {
                    let totalQuestion = await questionAnswer.find({ userID: i._id, questionTime: hrs3, questionDate: fullDate })
                    if (totalQuestion.length == 12) {
                        console.log("total 12 question created", fullDate, "hr+1    ", hrs3);
                    } else {
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hrs3, questionDate: fullDate, question: k._id });
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
                                questionTime: hrs3,
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
        console.log("Question cron job hour is ", hrs3);
    }
}
// ).start();
// }).stop()
setInterval(CreateSession, 20000);
