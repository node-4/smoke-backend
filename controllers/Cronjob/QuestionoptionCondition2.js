const cronJob = require("cron").CronJob;
let questionAnswer = require("../../model/questionAnswer");
let questions = require("../../model/questions");
let whatAppContact = require("../../model/whatAppContact");
let user = require("../../model/user");
new cronJob("*/60 * * * * *", async function () {
    console.log("----------------------------------------------------------------------------------7----------------------------------");
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
    console.log("----------------------26-----------option 2 cronjob-----------------------",hr);
    return;
    let totalQuestion = await questionAnswer.find({ questionTime: hr + 1, questionDate: fullDate })
    if (totalQuestion.length > 0) {
        console.log(hr + 1);
        for (let i = 0; i < totalQuestion.length; i++) {
            let findUser = await user.findById({ _id: totalQuestion[i].userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion[i].condition2 == true) {
                    console.log("------------------------------------------");
                    // if (((0 < findSchoolMember.length) && (findSchoolMember.length < 4)) && ((0 < findUser.friends.length) && (findUser.friends.length < 4))) {
                    //     console.log("Enter into Condition 2-", findUser.firstName);
                    //     if (totalQuestion[i].priority2_1 == true) {
                    //         if (totalQuestion[i].optionCount == 12) {
                    //             console.log("145-----------------------------", totalQuestion[i].optionCount);
                    //         } else {
                    //             if (totalQuestion[i].type == 'Flirtatious') {
                    //                 console.log("-------------------32-----------------", totalQuestion[i].type);
                    //                 var userArray = [];
                    //                 for (let j = 0; j < findUser.friends.length; j++) {
                    //                     if (userArray.includes(findUser.friends[j].toString())) {
                    //                         console.log("49==================================================");
                    //                     } else {
                    //                         if (findUser.gender == 'female') {
                    //                             let findFriend = await user.findById({ _id: findUser.friends[j].toString(), gender: 'male' });
                    //                             if (findFriend.flameCount == 0) {
                    //                                 userArray.push(findUser.friends[j].toString())
                    //                             }
                    //                         }
                    //                         if (findUser.gender == 'male') {
                    //                             let findFriend = await user.findById({ _id: findUser.friends[j].toString(), gender: 'female' });
                    //                             if (findFriend.flameCount == 0) {
                    //                                 userArray.push(findUser.friends[j].toString())
                    //                             }
                    //                         }
                    //                     }
                    //                 }
                    //                 if (userArray.length == 0) {
                    //                     let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority2_1: false, priority2_2: true } }, { new: true })
                    //                 } else {
                    //                     const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                    //                     if (totalQuestion[i].optionCount == 0) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_1: sample[0], optionCount: 1, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], optionCount: 2, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 1) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_3: sample[0], optionCount: 2, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], optionCount: 3, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 4, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 5, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], optionCount: 6, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_54: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 2) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_3: sample[0], optionCount: 3, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], optionCount: 4, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 5, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 6, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], optionCount: 7, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 3) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_4: sample[0], optionCount: 4, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], optionCount: 5, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], optionCount: 6, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], optionCount: 8, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 4) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_5: sample[0], optionCount: 5, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], optionCount: 6, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], optionCount: 9, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 5) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_6: sample[0], optionCount: 6, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], optionCount: 10, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 6) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_7: sample[0], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], optionCount: 11, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 7) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_8: sample[0], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 8) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_9: sample[0], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 9) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_10: sample[0], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 10) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_11: sample[0], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 11) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                 }
                    //             } else {
                    //                 var userArray = [];
                    //                 for (let j = 0; j < findUser.friends.length; j++) {
                    //                     if (userArray.includes(findUser.friends[j].toString())) {
                    //                         console.log("49==================================================");
                    //                     } else {
                    //                         let findFriend = await user.findById({ _id: findUser.friends[j].toString() });
                    //                         if (findFriend.flameCount > 0) {
                    //                             userArray.push(findUser.friends[j].toString())
                    //                         }
                    //                     }
                    //                 }
                    //                 if (userArray.length == 0) {
                    //                     let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority2_1: false, priority2_2: true } }, { new: true })
                    //                 } else {
                    //                     const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                    //                     if (totalQuestion[i].optionCount == 0) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_1: sample[0], optionCount: 1, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], optionCount: 2, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 1) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_3: sample[0], optionCount: 2, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], optionCount: 3, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 4, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 5, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], optionCount: 6, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_54: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 2) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_3: sample[0], optionCount: 3, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], optionCount: 4, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 5, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 6, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], optionCount: 7, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 3) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_4: sample[0], optionCount: 4, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], optionCount: 5, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], optionCount: 6, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], optionCount: 8, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 4) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_5: sample[0], optionCount: 5, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], optionCount: 6, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], optionCount: 9, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 5) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_6: sample[0], optionCount: 6, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], optionCount: 10, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 6) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_7: sample[0], optionCount: 7, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], optionCount: 11, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 7) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_8: sample[0], optionCount: 8, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 8) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_9: sample[0], optionCount: 9, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 9) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_10: sample[0], optionCount: 10, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 10) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_11: sample[0], optionCount: 11, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 11) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: true };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                 }

                    //             }
                    //         }
                    //     }
                    //     if (totalQuestion[i].priority2_2 == true) {
                    //         if (totalQuestion[i].optionCount == 12) {
                    //             console.log("145-----------------------------", totalQuestion[i].optionCount);
                    //         } else {
                    //             if (totalQuestion[i].type == 'Flirtatious') {
                    //                 console.log("-263------------------------------");
                    //                 var userArray = [];
                    //                 if (findSchoolMember.length > 0) {
                    //                     for (let j = 0; j < findSchoolMember.length; j++) {
                    //                         if (userArray.includes(findSchoolMember[j]._id).toString() || ((totalQuestion[i].option_1).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_2).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_3).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_4).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_5).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_6).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_7).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_8).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_9).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_10).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_11).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_12).toString() == (findSchoolMember[j]._id).toString())) {
                    //                             console.log("267==================================================");
                    //                         } else {
                    //                             if (findUser.gender == 'female') {
                    //                                 let findFriend = await user.findById({ _id: (findSchoolMember[j]._id).toString(), gender: 'male' });
                    //                                 if (findFriend.flameCount == 0) {
                    //                                     userArray.push((findSchoolMember[j]._id).toString())
                    //                                 }
                    //                             }
                    //                             if (findUser.gender == 'male') {
                    //                                 let findFriend = await user.findById({ _id: (findSchoolMember[j]._id).toString(), gender: 'female' });
                    //                                 if (findFriend.flameCount == 0) {
                    //                                     userArray.push((findSchoolMember[j]._id).toString())
                    //                                 }
                    //                             }
                    //                         }
                    //                     }
                    //                 } else {
                    //                     let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition2: false, condition3: true, priority2_1: true, priority2_2: false, } }, { new: true })
                    //                 }
                    //                 if (userArray.length == 0) {
                    //                     let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition2: false, condition3: true, priority2_1: true, priority2_2: false, } }, { new: true })
                    //                 } else {
                    //                     const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                    //                     if (totalQuestion[i].optionCount == 0) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_1: sample[0], optionCount: 1, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], optionCount: 2, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 1) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_3: sample[0], optionCount: 2, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], optionCount: 3, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 4, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 5, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_54: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 2) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_3: sample[0], optionCount: 3, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], optionCount: 4, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 5, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 3) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_4: sample[0], optionCount: 4, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], optionCount: 5, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 4) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_5: sample[0], optionCount: 5, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 5) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_6: sample[0], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 6) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_7: sample[0], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 7) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_8: sample[0], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 8) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_9: sample[0], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 9) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_10: sample[0], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 10) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_11: sample[0], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 11) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                 }
                    //             } else {
                    //                 console.log("-263------------------------------");
                    //                 var userArray = [];
                    //                 if (findSchoolMember.length > 0) {
                    //                     for (let j = 0; j < findSchoolMember.length; j++) {
                    //                         if (userArray.includes(findSchoolMember[j]._id).toString() || ((totalQuestion[i].option_1).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_2).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_3).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_4).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_5).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_6).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_7).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_8).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_9).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_10).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_11).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_12).toString() == (findSchoolMember[j]._id).toString())) {
                    //                             console.log("267==================================================");
                    //                         } else {
                    //                             userArray.push((findSchoolMember[j]._id).toString())
                    //                         }
                    //                     }
                    //                 } else {
                    //                     let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition2: false, condition3: true, priority2_1: true, priority2_2: false, } }, { new: true })
                    //                 }
                    //                 if (userArray.length == 0) {
                    //                     let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition2: false, condition3: true, priority2_1: true, priority2_2: false, } }, { new: true })
                    //                 } else {
                    //                     const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                    //                     if (totalQuestion[i].optionCount == 0) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_1: sample[0], optionCount: 1, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], optionCount: 2, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 1) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_3: sample[0], optionCount: 2, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], optionCount: 3, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 4, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 5, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_54: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 2) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_3: sample[0], optionCount: 3, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], optionCount: 4, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 5, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 3) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_4: sample[0], optionCount: 4, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], optionCount: 5, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 4) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_5: sample[0], optionCount: 5, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 5) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_6: sample[0], optionCount: 6, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 6) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_7: sample[0], optionCount: 7, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 7) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_8: sample[0], optionCount: 8, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 8) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_9: sample[0], optionCount: 9, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 9) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_10: sample[0], optionCount: 10, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 10) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_11: sample[0], optionCount: 11, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                     if (totalQuestion[i].optionCount == 11) {
                    //                         let obj;
                    //                         if (sample.length == 1) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 2) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 3) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 4) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 5) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, }
                    //                         }
                    //                         if (sample.length == 6) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 7) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 8) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 9) {
                    //                             obj = { option_12: sample[0], optionCount: 12, condition2: false, condition3: true, priority2_1: true, priority2_2: false, };
                    //                         }
                    //                         if (sample.length == 10) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 11) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         if (sample.length == 12) {
                    //                             obj = { option_12: sample[0], optionCount: 12, priority2_1: false, priority2_2: false };
                    //                         }
                    //                         let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     }
                    // } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                    //     let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition2: false, condition1: true } }, { new: true })
                    // } else if (findUser.friends.length >= 4) {
                    //     let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition2: false, condition3: true } }, { new: true })
                    // } else {
                    //     console.log("40----------------------------");
                    // }
                }
            }
        }
    } else {
        console.log('Question Condition 2 cron job  No data found');
    }
}).start();
// }).stop()
