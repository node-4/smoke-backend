const cronJob = require("cron").CronJob;
let questionAnswer = require("../model/questionAnswer");
let questions = require("../model/questions");
let whatAppContact = require("../model/whatAppContact");
let user = require("../model/user");
new cronJob("*/40 * * * * *", async function () {
    console.log("----------------------------------------------------------------------------------7----------------------------------");
    let hr = new Date(Date.now()).getHours();
    let date = new Date(Date.now()).getDate();
    let month = new Date(Date.now()).getMonth() + 1;
    let year = new Date(Date.now()).getFullYear();
    let fullDate = (`${date}/${month}/${year}`).toString()
    let totalQuestion = await questionAnswer.find({ questionTime: hr, questionDate: fullDate })
    if (totalQuestion.length > 0) {
        for (let i = 0; i < totalQuestion.length; i++) {
            let findUser = await user.findById({ _id: totalQuestion[i].userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion[i].condition3 == true) {
                    console.log("27-----------------------------", totalQuestion.length);
                    if (findUser.friends.length >= 4) {
                        if (totalQuestion[i].optionCount == 12) {
                            console.log("145-----------------------------", totalQuestion[i].optionCount);
                        } else {
                            console.log("Enter into Condition 3", findUser.firstName);
                            if (totalQuestion[i].type == 'Flirtatious') {
                                console.log("-------------------32-----------------", totalQuestion[i].type);
                                if (totalQuestion[i].priority1 == true) {
                                    if (findUser.poleUser.length > 0) {
                                        for (let k = 0; k < findUser.poleUser.length; k++) {
                                            console.log(findUser.poleUser[k]);
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority1: false, priority2: true } }, { new: true })
                                    }
                                }
                                if (totalQuestion[i].priority2 == true) {
                                    console.log("-45-------------------------------");
                                    var userArray = [];
                                    for (let j = 0; j < findUser.friends.length; j++) {
                                        if (userArray.includes(findUser.friends[j].toString())) {
                                            console.log("49==================================================");
                                        } else {
                                            if (findUser.gender == 'female') {
                                                let findFriend = await user.findById({ _id: findUser.friends[j].toString(), gender: 'male' });
                                                if (findFriend.flameCount == 0) {
                                                    userArray.push(findUser.friends[j].toString())
                                                }
                                            }
                                            if (findUser.gender == 'male') {
                                                let findFriend = await user.findById({ _id: findUser.friends[j].toString(), gender: 'female' });
                                                if (findFriend.flameCount == 0) {
                                                    userArray.push(findUser.friends[j].toString())
                                                }
                                            }
                                        }
                                    }
                                    if (findSchoolMember.length > 0) {
                                        for (let j = 0; j < findSchoolMember.length; j++) {
                                            if (userArray.includes(findSchoolMember[j]._id).toString() || ((totalQuestion[i].option_1).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_2).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_3).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_4).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_5).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_6).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_7).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_8).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_9).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_10).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_11).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_12).toString() == (findSchoolMember[j]._id).toString())) {
                                                console.log("57==================================================");
                                            } else {
                                                if (findUser.gender == 'female') {
                                                    let findFriend = await user.findById({ _id: (findSchoolMember[j]._id).toString(), gender: 'male' });
                                                    if (findFriend.flameCount == 0) {
                                                        userArray.push((findSchoolMember[j]._id).toString())
                                                    }
                                                }
                                                if (findUser.gender == 'male') {
                                                    let findFriend = await user.findById({ _id: (findSchoolMember[j]._id).toString(), gender: 'female' });
                                                    if (findFriend.flameCount == 0) {
                                                        userArray.push((findSchoolMember[j]._id).toString())
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority2: false, priority3: true } }, { new: true })
                                    } else {
                                        if (totalQuestion[i].optionCount == 0) {
                                            if (userArray.length == 1) {
                                                console.log("-------69--------");
                                                
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], optionCount: 1, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 2) {
                                                console.log("-------72--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], optionCount: 2, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 3) {
                                                console.log("-------75--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], optionCount: 3, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 4) {
                                                console.log("-------78--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], optionCount: 4, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 5) {
                                                console.log("-------81--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], optionCount: 5, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 6) {
                                                console.log("-------84--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], optionCount: 6, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 7) {
                                                console.log("-------87--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], optionCount: 7, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 8) {
                                                console.log("-------90--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], optionCount: 8, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 9) {
                                                console.log("-------93--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], optionCount: 9, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 10) {
                                                console.log("-------96--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], optionCount: 10, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 11) {
                                                console.log("-------99--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], optionCount: 11, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 12) {
                                                console.log("-------102--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], option_12: userArray[11], optionCount: 12, priority2: false, priority3: false } }, { new: true });
                                            }
                                        }
                                    }
                                }
                                if (totalQuestion[i].priority3 == true) {
                                    console.log("-120-------------------------------");
                                    var userArray = [];
                                    for (let j = 0; j < findUser.friends.length; j++) {
                                        if (userArray.includes(findUser.friends[j].toString())) {
                                            console.log("49==================================================");
                                        } else {
                                            if (findUser.gender == 'female') {
                                                let findFriend = await user.findById({ _id: findUser.friends[j].toString(), gender: 'male' });
                                                if (findFriend.flameCount == 0) {
                                                    userArray.push(findUser.friends[j].toString())
                                                }
                                            }
                                            if (findUser.gender == 'male') {
                                                let findFriend = await user.findById({ _id: findUser.friends[j].toString(), gender: 'female' });
                                                if (findFriend.flameCount == 0) {
                                                    userArray.push(findUser.friends[j].toString())
                                                }
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority3: false, priority4: true } }, { new: true })
                                    } else {
                                        const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                                        if (totalQuestion[i].optionCount == 0) {
                                            if (sample.length == 1) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], optionCount: 1, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 2) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], optionCount: 2, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 3) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 4) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 5) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 6) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 7) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 8) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 9) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 10) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 11) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 12) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority3: false, priority4: false } }, { new: true });
                                            }
                                        }
                                    }
                                }
                                if (totalQuestion[i].priority4 == true) {
                                    console.log("-49-------------------------------");
                                    let findwhatAppContact = await whatAppContact.findOne({ userID: totalQuestion[i].userID });
                                    if (findwhatAppContact.userContacts.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                    } else {
                                        var userArray = [];
                                        for (let k = 0; k < findwhatAppContact.userContacts.length; k++) {
                                            if (findUser.gender == 'female') {
                                                let findUsers = await user.findOne({ phone: findwhatAppContact.userContacts[k].phone, gender: 'male' });
                                                if ((userArray.includes(findUsers._id).toString()) || ((totalQuestion[i].option_1).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_2).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_3).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_4).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_5).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_6).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_7).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_8).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_9).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_10).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_11).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_12).toString() == (findUsers._id).toString())) {
                                                    console.log("-198-------------------------------");
                                                } else {
                                                    userArray.push((findUsers._id).toString())
                                                }
                                            }
                                            if (findUser.gender == 'male') {
                                                let findUsers = await user.findOne({ phone: findwhatAppContact.userContacts[k].phone, gender: 'female' });
                                                if ((userArray.includes(findUsers._id).toString()) || ((totalQuestion[i].option_1).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_2).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_3).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_4).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_5).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_6).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_7).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_8).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_9).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_10).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_11).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_12).toString() == (findUsers._id).toString())) {
                                                    console.log("-198-------------------------------");
                                                } else {
                                                    userArray.push((findUsers._id).toString())
                                                }
                                            }
                                        }
                                        if (userArray.length == 0) {
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                        } else {
                                            const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                                            if (totalQuestion[i].optionCount == 0) {
                                                if (sample.length == 1) {
                                                    console.log("-------138--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], optionCount: 1, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 2) {
                                                    console.log("-------142--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], optionCount: 2, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 3) {
                                                    console.log("-------146--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 4) {
                                                    console.log("-------150--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 5) {
                                                    console.log("-------154--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 6) {
                                                    console.log("-------158--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 7) {
                                                    console.log("-------162--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 8) {
                                                    console.log("-------166--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 9) {
                                                    console.log("-------170--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 10) {
                                                    console.log("-------174--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 11) {
                                                    console.log("-------178--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 12) {
                                                    console.log("-------182--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority4: false, priority5: false } }, { new: true });
                                                }
                                            }
                                        }
                                    }
                                }
                                if (totalQuestion[i].priority5 == true) {
                                    console.log("-263------------------------------");
                                    var userArray = [];
                                    if (findSchoolMember.length > 0) {
                                        for (let j = 0; j < findSchoolMember.length; j++) {
                                            if (userArray.includes(findSchoolMember[j]._id).toString() || ((totalQuestion[i].option_1).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_2).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_3).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_4).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_5).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_6).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_7).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_8).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_9).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_10).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_11).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_12).toString() == (findSchoolMember[j]._id).toString())) {
                                                console.log("267==================================================");
                                            } else {
                                                if (findUser.gender == 'female') {
                                                    let findFriend = await user.findById({ _id: (findSchoolMember[j]._id).toString(), gender: 'male' });
                                                    if (findFriend.flameCount == 0) {
                                                        userArray.push((findSchoolMember[j]._id).toString())
                                                    }
                                                }
                                                if (findUser.gender == 'male') {
                                                    let findFriend = await user.findById({ _id: (findSchoolMember[j]._id).toString(), gender: 'female' });
                                                    if (findFriend.flameCount == 0) {
                                                        userArray.push((findSchoolMember[j]._id).toString())
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority5: false } }, { new: true })
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority5: false } }, { new: true })
                                    } else {
                                        const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                                        if (totalQuestion[i].optionCount == 0) {
                                            if (sample.length == 1) {
                                                console.log("-------138--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], optionCount: 1, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 2) {
                                                console.log("-------142--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], optionCount: 2, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 3) {
                                                console.log("-------146--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 4) {
                                                console.log("-------150--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 5) {
                                                console.log("-------154--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 6) {
                                                console.log("-------158--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 7) {
                                                console.log("-------162--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 8) {
                                                console.log("-------166--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 9) {
                                                console.log("-------170--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 10) {
                                                console.log("-------174--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 11) {
                                                console.log("-------178--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 12) {
                                                console.log("-------182--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority5: false } }, { new: true });
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (totalQuestion[i].priority1 == true) {
                                    if (findUser.poleUser.length > 0) {
                                        for (let k = 0; k < findUser.poleUser.length; k++) {
                                            console.log(findUser.poleUser[k]);
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority1: false, priority2: true } }, { new: true })
                                    }
                                }
                                if (totalQuestion[i].priority2 == true) {
                                    console.log("-45-------------------------------");
                                    var userArray = [];
                                    for (let j = 0; j < findUser.friends.length; j++) {
                                        if (userArray.includes(findUser.friends[j].toString())) {
                                            console.log("49==================================================");
                                        } else {
                                            let findFriend = await user.findById({ _id: findUser.friends[j].toString() });
                                            if (findFriend.flameCount == 0) { userArray.push(findUser.friends[j].toString()) }
                                        }
                                    }
                                    if (findSchoolMember.length > 0) {
                                        for (let j = 0; j < findSchoolMember.length; j++) {
                                            if (userArray.includes(findSchoolMember[j]._id).toString()) {
                                                console.log("57==================================================");
                                            } else {
                                                if (findSchoolMember[j].flameCount == 0) {
                                                    userArray.push((findSchoolMember[j]._id).toString())
                                                }
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority2: false, priority3: true } }, { new: true })
                                    } else {
                                        if (totalQuestion[i].optionCount == 0) {
                                            if (userArray.length == 1) {
                                                console.log("-------69--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], optionCount: 1, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 2) {
                                                console.log("-------72--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], optionCount: 2, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 3) {
                                                console.log("-------75--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], optionCount: 3, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 4) {
                                                console.log("-------78--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], optionCount: 4, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 5) {
                                                console.log("-------81--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], optionCount: 5, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 6) {
                                                console.log("-------84--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], optionCount: 6, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 7) {
                                                console.log("-------87--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], optionCount: 7, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 8) {
                                                console.log("-------90--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], optionCount: 8, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 9) {
                                                console.log("-------93--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], optionCount: 9, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 10) {
                                                console.log("-------96--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], optionCount: 10, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 11) {
                                                console.log("-------99--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], optionCount: 11, priority2: false, priority3: true } }, { new: true });
                                            }
                                            if (userArray.length == 12) {
                                                console.log("-------102--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], option_12: userArray[11], optionCount: 12, priority2: false, priority3: false } }, { new: true });
                                            }
                                        }
                                    }
                                }
                                if (totalQuestion[i].priority3 == true) {
                                    console.log("-120-------------------------------");
                                    var userArray = [];
                                    for (let j = 0; j < findUser.friends.length; j++) {
                                        if (userArray.includes(findUser.friends[j].toString())) {
                                            console.log("49==================================================");
                                        } else {
                                            let findFriend = await user.findById({ _id: findUser.friends[j].toString() });
                                            if (findFriend.flameCount > 0) {
                                                userArray.push(findUser.friends[j].toString())
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority3: false, priority4: true } }, { new: true })
                                    } else {
                                        const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                                        if (totalQuestion[i].optionCount == 0) {
                                            if (sample.length == 1) {
                                                console.log("-------138--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], optionCount: 1, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 2) {
                                                console.log("-------142--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], optionCount: 2, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 3) {
                                                console.log("-------146--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 4) {
                                                console.log("-------150--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 5) {
                                                console.log("-------154--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 6) {
                                                console.log("-------158--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 7) {
                                                console.log("-------162--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 8) {
                                                console.log("-------166--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 9) {
                                                console.log("-------170--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 10) {
                                                console.log("-------174--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 11) {
                                                console.log("-------178--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority3: false, priority4: true } }, { new: true });
                                            }
                                            if (sample.length == 12) {
                                                console.log("-------182--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority3: false, priority4: false } }, { new: true });
                                            }
                                        }
                                    }
                                }
                                if (totalQuestion[i].priority4 == true) {
                                    console.log("-49-------------------------------");
                                    let findwhatAppContact = await whatAppContact.findOne({ userID: totalQuestion[i].userID });
                                    if (findwhatAppContact.userContacts.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                    } else {
                                        var userArray = [];
                                        for (let k = 0; k < findwhatAppContact.userContacts.length; k++) {
                                            let findUsers = await user.findOne({ phone: findwhatAppContact.userContacts[k].phone });
                                            if ((userArray.includes(findUsers._id).toString()) || ((totalQuestion[i].option_1).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_2).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_3).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_4).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_5).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_6).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_7).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_8).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_9).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_10).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_11).toString() == (findUsers._id).toString()) || ((totalQuestion[i].option_12).toString() == (findUsers._id).toString())) {
                                                console.log("-198-------------------------------");
                                            } else {
                                                userArray.push((findUsers._id).toString())
                                            }
                                        }
                                        if (userArray.length == 0) {
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                        } else {
                                            const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                                            if (totalQuestion[i].optionCount == 0) {
                                                if (sample.length == 1) {
                                                    console.log("-------138--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], optionCount: 1, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 2) {
                                                    console.log("-------142--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], optionCount: 2, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 3) {
                                                    console.log("-------146--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 4) {
                                                    console.log("-------150--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 5) {
                                                    console.log("-------154--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 6) {
                                                    console.log("-------158--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 7) {
                                                    console.log("-------162--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 8) {
                                                    console.log("-------166--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 9) {
                                                    console.log("-------170--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 10) {
                                                    console.log("-------174--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 11) {
                                                    console.log("-------178--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority4: false, priority5: true } }, { new: true });
                                                }
                                                if (sample.length == 12) {
                                                    console.log("-------182--------");
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority4: false, priority5: false } }, { new: true });
                                                }
                                            }
                                        }
                                    }
                                }
                                if (totalQuestion[i].priority5 == true) {
                                    console.log("-263------------------------------");
                                    var userArray = [];
                                    if (findSchoolMember.length > 0) {
                                        for (let j = 0; j < findSchoolMember.length; j++) {
                                            if (userArray.includes(findSchoolMember[j]._id).toString() || ((totalQuestion[i].option_1).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_2).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_3).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_4).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_5).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_6).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_7).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_8).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_9).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_10).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_11).toString() == (findSchoolMember[j]._id).toString()) || ((totalQuestion[i].option_12).toString() == (findSchoolMember[j]._id).toString())) {
                                                console.log("267==================================================");
                                            } else {
                                                userArray.push((findSchoolMember[j]._id).toString())
                                            }
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority5: false } }, { new: true })
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority5: false } }, { new: true })
                                    } else {
                                        const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                                        if (totalQuestion[i].optionCount == 0) {
                                            if (sample.length == 1) {
                                                console.log("-------138--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], optionCount: 1, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 2) {
                                                console.log("-------142--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], optionCount: 2, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 3) {
                                                console.log("-------146--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 4) {
                                                console.log("-------150--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 5) {
                                                console.log("-------154--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 6) {
                                                console.log("-------158--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 7) {
                                                console.log("-------162--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 8) {
                                                console.log("-------166--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 9) {
                                                console.log("-------170--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 10) {
                                                console.log("-------174--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 11) {
                                                console.log("-------178--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority5: true } }, { new: true });
                                            }
                                            if (sample.length == 12) {
                                                console.log("-------182--------");
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority5: false } }, { new: true });
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else if (((0 < findSchoolMember.length) && (findSchoolMember.length < 4)) && ((0 < findUser.friends.length) && (findUser.friends.length < 4))) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition3: false, condition2: true } }, { new: true })
                    } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition3: false, condition1: true } }, { new: true })
                    } else {
                        console.log("40----------------------------");
                    }
                }
            }
        }

    } else {
        console.log('No data found');
    }
    // }).start();
}).stop()
