const cronJob = require("cron").CronJob;
let userSubscription = require("../model/userSubscription");
new cronJob("0 0 * * *", async function () {
    let findAll = await userSubscription.find({ subscriptionStatus: true });
    if (findAll.length == 0) {
        for (let i = 0; i < findAll.length; i++) {
            if (findAll[i].subscriptionExpire < Date.now()) {
                let update = await userSubscription.findByIdAndUpdate({ _id: findAll[i]._id }, { $set: { subscriptionStatus: false } }, { new: true });
                if (update) {
                    console.log("subcription update");
                }
            }
        }
    } else {
        console.log("subcription not found");
    }
}).start();
// }).stop()
