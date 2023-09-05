const cronJob = require("cron").CronJob;
let questionAnswer = require("../../model/questionAnswer");
let questions = require("../../model/questions");
let whatAppContact = require("../../model/whatAppContact");
let user = require("../../model/user");

async function CreateSession() {
    // new cronJob("*/60 * * * * *", async function () {
    let date = new Date(Date.now()).getDate();
    let month = new Date(Date.now()).getMonth() + 1;
    let year = new Date(Date.now()).getFullYear();
    let fullDate = (`${date}/${month}/${year}`).toString();
    console.log("8---------------", fullDate)
    // userID: '64902ae7ff2e7a8d9c5355fa'
    let totalQuestion = await questionAnswer.find({ questionDate: fullDate, questionTime: "13", userID: '64902ae7ff2e7a8d9c5355fa' })
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
                        console.log(i, "----------------56-");
                    } else {
                        console.log("28----------------------------");
                    }
                }
            }
        }

    } else {
        console.log('Question Condition 1 cron job  No data found');
    }
}
// ).start();
// }).stop()
setInterval(CreateSession, 10000);
