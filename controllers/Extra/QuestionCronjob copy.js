const cronJob = require("cron").CronJob;
let questionAnswer = require("../../model/questionAnswer");
let questions = require("../../model/questions");
let user = require("../../model/user");
async function CreateSession() {
    // new cronJob("*/20 * * * * *", async function () {
    let date = new Date(Date.now()).getDate() - 1;
    let month = new Date(Date.now()).getMonth() + 1;
    let year = new Date(Date.now()).getFullYear();
    let fullDate = (`${date}/${month}/${year}`).toString();
    let findData = await questionAnswer.find({ questionDate: "10/7/2023", optionCount: 0 })
    if (findData.length > 0) {
        for (let i = 0; i < findData.length; i++) {
            let findData1 = await questionAnswer.findByIdAndDelete({ _id: findData[i]._id })

        }
    }

}
// ).start();
// }).stop()
setInterval(CreateSession, 10000);
