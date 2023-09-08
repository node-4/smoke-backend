const cronJob = require("cron").CronJob;
let userSchema = require("../../model/user");
const whatAppContact = require('../../model/whatAppContact');
async function CreateSession() {
    let findData = await whatAppContact.find().lean();
    if (findData.length == 0) {
        console.log("Data not found");
    } else {
        for (let k = 0; k < findData.length; k++) {
            let userContacts = [];
            for (let i = 0; i < findData[k].userContacts.length; i++) {
                let obj1;
                const data = await userSchema.findOne({ phone: findData[k].userContacts[i].phone });
                if (data) {
                    obj1 = {
                        phone: findData[k].userContacts[i].phone,
                        firstName: findData[k].userContacts[i].firstName,
                        lastName: findData[k].userContacts[i].lastName,
                        appId: data._id,
                        onApp: true
                    };
                } else {
                    obj1 = {
                        phone: findData[k].userContacts[i].phone,
                        firstName: findData[k].userContacts[i].firstName,
                        lastName: findData[k].userContacts[i].lastName,
                        onApp: false
                    };
                }
                userContacts.push(obj1)
            }
            let update = await whatAppContact.findByIdAndUpdate({ _id: findData[k]._id }, { $set: { userContacts: userContacts } }, { new: true })
        }
    }
}
setInterval(CreateSession, 30000);