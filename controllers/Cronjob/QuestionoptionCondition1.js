const cronJob = require("cron").CronJob;
let questionAnswer = require("../../model/questionAnswer");
let questions = require("../../model/questions");
let whatAppContact = require("../../model/whatAppContact");
let user = require("../../model/user");
new cronJob("*/10 * * * * *", async function () {
    // let hrs = new Date(Date.now()).getHours();
    // let date = new Date(Date.now()).getDate();
    // let month = new Date(Date.now()).getMonth() + 1;
    // let year = new Date(Date.now()).getFullYear();
    // let fullDate = (`${date}/${month}/${year}`).toString();
    // let min = new Date(Date.now()).getMinutes();
    // // let hrs1, hr;
    // // if (hrs < 10) {
    // //     hrs1 = '' + 0 + hrs;
    // // } else {
    // //     hrs1 = hrs
    // // }
    // // if (min) {
    // //     if (min > 30) {
    // //         hr = hrs1 + 6
    // //     } else {
    // //         hr = hrs1 + 5
    // //     }
    // // }
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
    hr = hrs1 - 1;
    console.log("----------------------26-----------option 1 cronjob-----------------------");
    let totalQuestion = await questionAnswer.find({ questionTime: hr + 1, questionDate: fullDate })
    if (totalQuestion.length > 0) {
        for (let i = 0; i < totalQuestion.length; i++) {
            let findUser = await user.findById({ _id: totalQuestion[i].userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion[i].condition1 == true) {
                    if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        console.log("Enter into Condition 1", findUser.firstName);
                    }
                    else if ((0 < findSchoolMember.length) && (findSchoolMember.length < 4) && (0 < findUser.friends.length) && (findUser.friends.length < 4)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition1: false, condition2: true } }, { new: true })
                        console.log("52----------------");
                    }
                    else if (findUser.friends.length >= 4) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition1: false, condition3: true } }, { new: true })
                        console.log("56----------------");
                    } else {
                        console.log("28----------------------------");
                    }
                }
            }
        }

    } else {
        console.log('Question Condition 1 cron job  No data found');
    }
// }).start();
    }).stop()
