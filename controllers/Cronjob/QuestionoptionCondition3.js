const cronJob = require("cron").CronJob;
let questionAnswer = require("../../model/questionAnswer");
let questions = require("../../model/questions");
let whatAppContact = require("../../model/whatAppContact");
let user = require("../../model/user");
async function CreateSession() {
    console.log("----------------------------------------------------------------------------------7----------------------------------");
    let date = new Date(Date.now()).getDate();
    let month = new Date(Date.now()).getMonth() + 1;
    let year = new Date(Date.now()).getFullYear();
    let fullDate = (`${date}/${month}/${year}`).toString();
    console.log("12---------3------", fullDate)
    // userID: '64902ae7ff2e7a8d9c5355fa', 
    let totalQuestion = await questionAnswer.find({ questionDate: fullDate, })
    if (totalQuestion.length > 0) {
        for (let i = 0; i < totalQuestion.length; i++) {
            let findUser = await user.findById({ _id: totalQuestion[i].userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion[i].condition3 == true) {
                    console.log("27-----------------------------", totalQuestion.length);
                    if (findUser.friends.length >= 4) {
                        if (totalQuestion[i].optionCount == 14) {
                            console.log("145-----------------------------", totalQuestion[i].optionCount);
                        } else {
                            console.log("Enter into Condition 3", findUser.firstName);
                            if (totalQuestion[i].type == 'Flirtatious') {
                                console.log("-------------------32-----------------", totalQuestion[i].type);
                                if (totalQuestion[i].priority1 == true) {
                                    if (findUser.poleUser.length > 0) {
                                        for (let k = 0; k < findUser.poleUser.length; k++) {
                                            if (findUser.poleUser[k].count == 0) {
                                                console.log("33-----------------------------");
                                            } else {
                                                var userArray = [];
                                                if (userArray.includes(findUser.poleUser[k].user.toString())) {
                                                    console.log("49==================================================");
                                                } else {
                                                    if (findUser.gender == 'female') {
                                                        let findFriend = await user.findById({ _id: findUser.poleUser[k].user.toString(), gender: 'male' });
                                                        if (totalQuestion[i].optionCount == 0) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: (findFriend._id).toString, optionCount: 1 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 1) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_2: (findFriend._id).toString, optionCount: 2 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 2) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_3: (findFriend._id).toString, optionCount: 3 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 3) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_4: (findFriend._id).toString, optionCount: 4 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 4) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_5: (findFriend._id).toString, optionCount: 5 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 5) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_6: (findFriend._id).toString, optionCount: 6 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 6) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_7: (findFriend._id).toString, optionCount: 7 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 7) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_8: (findFriend._id).toString, optionCount: 8 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 8) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_9: (findFriend._id).toString, optionCount: 9 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 9) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_10: (findFriend._id).toString, optionCount: 10 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 10) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_11: (findFriend._id).toString, optionCount: 11 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 11) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_12: (findFriend._id).toString, optionCount: 12 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 12) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_13: (findFriend._id).toString, optionCount: 13 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 13) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_14: (findFriend._id).toString, optionCount: 14 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                    }
                                                    if (findUser.gender == 'male') {
                                                        let findFriend = await user.findById({ _id: findUser.poleUser[k].user.toString(), gender: 'female' });
                                                        if (totalQuestion[i].optionCount == 0) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: (findFriend._id).toString, optionCount: 1 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 1) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_2: (findFriend._id).toString, optionCount: 2 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 2) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_3: (findFriend._id).toString, optionCount: 3 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 3) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_4: (findFriend._id).toString, optionCount: 4 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 4) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_5: (findFriend._id).toString, optionCount: 5 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 5) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_6: (findFriend._id).toString, optionCount: 6 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 6) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_7: (findFriend._id).toString, optionCount: 7 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 7) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_8: (findFriend._id).toString, optionCount: 8 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 8) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_9: (findFriend._id).toString, optionCount: 9 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 9) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_10: (findFriend._id).toString, optionCount: 10 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 10) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_11: (findFriend._id).toString, optionCount: 11 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 11) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_12: (findFriend._id).toString, optionCount: 12 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 12) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_13: (findFriend._id).toString, optionCount: 13 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                        if (totalQuestion[i].optionCount == 13) {
                                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_14: (findFriend._id).toString, optionCount: 14 } }, { new: true });
                                                            let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                            userArray.push(findUser.poleUser[k].user.toString())
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority1: false, priority2: true } }, { new: true });
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
                                                } else {
                                                    console.log("-----------------");
                                                }
                                            }
                                            if (findUser.gender == 'male') {
                                                let findFriend = await user.findById({ _id: findUser.friends[j].toString(), gender: 'female' });
                                                console.log(findFriend);
                                                if (findFriend.flameCount == 0) {
                                                    userArray.push(findUser.friends[j].toString())
                                                } else {
                                                    console.log("-----------------");
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
                                                    } else {
                                                        console.log("-----------------");
                                                    }
                                                }
                                                if (findUser.gender == 'male') {
                                                    let findFriend = await user.findById({ _id: (findSchoolMember[j]._id).toString(), gender: 'female' });
                                                    if (findFriend.flameCount == 0) {
                                                        userArray.push((findSchoolMember[j]._id).toString())
                                                    } else {
                                                        console.log("-----------------");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority2: false, priority3: true } }, { new: true })
                                    } else {
                                        if (totalQuestion[i].optionCount == 0) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_1: userArray[0], optionCount: 1, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], optionCount: 2, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], optionCount: 3, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], optionCount: 4, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], optionCount: 5, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], optionCount: 6, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], optionCount: 7, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], optionCount: 8, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], optionCount: 9, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], option_12: userArray[11], optionCount: 12, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 13) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], option_12: userArray[11], option_13: userArray[12], optionCount: 13, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 14) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], option_12: userArray[11], option_13: userArray[12], option_14: userArray[13], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 1) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_2: userArray[0], optionCount: 2, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], optionCount: 3, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], optionCount: 4, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], optionCount: 5, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], optionCount: 6, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], optionCount: 7, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], optionCount: 8, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], optionCount: 9, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], option_10: userArray[8], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], option_10: userArray[8], option_11: userArray[9], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], option_10: userArray[8], option_11: userArray[9], option_12: userArray[10], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], option_10: userArray[8], option_11: userArray[9], option_12: userArray[10], option_13: userArray[11], optionCount: 13, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 13) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], option_10: userArray[8], option_11: userArray[9], option_12: userArray[10], option_13: userArray[11], option_14: userArray[12], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 2) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_3: userArray[0], optionCount: 3, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], optionCount: 4, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], optionCount: 5, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], optionCount: 6, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], optionCount: 7, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], optionCount: 8, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], optionCount: 9, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], option_10: userArray[7], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], option_10: userArray[7], option_11: userArray[8], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], option_10: userArray[7], option_11: userArray[8], option_12: userArray[9], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], option_10: userArray[7], option_11: userArray[8], option_12: userArray[9], option_13: userArray[10], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], option_10: userArray[7], option_11: userArray[8], option_12: userArray[9], option_13: userArray[10], option_14: userArray[11], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 3) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_4: userArray[0], optionCount: 4, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], optionCount: 5, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], optionCount: 6, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], optionCount: 7, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], optionCount: 8, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], optionCount: 9, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], option_11: userArray[7], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], option_11: userArray[7], option_12: userArray[8], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], option_11: userArray[7], option_12: userArray[8], option_13: userArray[9], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], option_11: userArray[7], option_12: userArray[8], option_13: userArray[9], option_14: userArray[10], optionCount: 14, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], option_11: userArray[7], option_12: userArray[8], option_13: userArray[9], option_14: userArray[10], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 4) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_5: userArray[0], optionCount: 5, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], optionCount: 6, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], optionCount: 7, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], optionCount: 8, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], optionCount: 9, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], option_12: userArray[7], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], option_12: userArray[7], option_13: userArray[8], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], option_12: userArray[7], option_13: userArray[8], option_14: userArray[9], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], option_12: userArray[7], option_13: userArray[8], option_14: userArray[9], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], option_12: userArray[7], option_13: userArray[8], option_14: userArray[9], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 5) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_6: userArray[0], optionCount: 6, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], optionCount: 7, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], optionCount: 8, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], optionCount: 9, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], option_13: userArray[7], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], option_13: userArray[7], option_14: userArray[8], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], option_13: userArray[7], option_14: userArray[8], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], option_13: userArray[7], option_14: userArray[8], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], option_13: userArray[7], option_14: userArray[8], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 6) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_7: userArray[0], optionCount: 7, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], optionCount: 8, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], optionCount: 9, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], optionCount: 10, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], option_14: userArray[7], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], option_14: userArray[7], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], option_14: userArray[7], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], option_14: userArray[7], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], option_14: userArray[7], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 7) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_8: userArray[0], optionCount: 8, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], optionCount: 9, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], optionCount: 10, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], optionCount: 11, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 8) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_9: userArray[0], optionCount: 9, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], optionCount: 10, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], optionCount: 11, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], optionCount: 12, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 9) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_10: userArray[0], optionCount: 10, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], optionCount: 11, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], optionCount: 12, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], optionCount: 13, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 10) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_11: userArray[0], optionCount: 11, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], optionCount: 12, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], optionCount: 13, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 11) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_12: userArray[0], optionCount: 12, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], optionCount: 13, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
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
                                                } else {
                                                    console.log("-----------------");
                                                }
                                            }
                                            if (findUser.gender == 'male') {
                                                let findFriend = await user.findById({ _id: findUser.friends[j].toString(), gender: 'female' });
                                                if (findFriend.flameCount == 0) {
                                                    userArray.push(findUser.friends[j].toString())
                                                } else {
                                                    console.log("-----------------");
                                                }
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority3: false, priority4: true } }, { new: true })
                                    } else {
                                        const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                                        if (totalQuestion[i].optionCount == 0) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_1: sample[0], optionCount: 1, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_1: sample[0], option_2: sample[1], optionCount: 2, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 13) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 14) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], option_14: sample[13], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 1) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_2: sample[0], optionCount: 2, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_2: sample[0], option_3: sample[1], optionCount: 3, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], optionCount: 4, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], optionCount: 5, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], optionCount: 6, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], optionCount: 7, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], optionCount: 8, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], optionCount: 9, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 13) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], option_14: sample[12], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 2) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_3: sample[0], optionCount: 3, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_3: sample[0], option_4: sample[1], optionCount: 4, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 5, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 6, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], optionCount: 7, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], optionCount: 8, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], optionCount: 9, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], option_14: sample[11], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 3) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_4: sample[0], optionCount: 4, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_4: sample[0], option_5: sample[1], optionCount: 5, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], optionCount: 6, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], optionCount: 7, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], optionCount: 8, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], optionCount: 9, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 4) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_5: sample[0], optionCount: 5, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_5: sample[0], option_6: sample[1], optionCount: 6, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], optionCount: 7, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], optionCount: 8, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], optionCount: 9, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 5) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_6: sample[0], optionCount: 6, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_6: sample[0], option_7: sample[1], optionCount: 7, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], optionCount: 8, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], optionCount: 9, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 6) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_7: sample[0], optionCount: 7, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_7: sample[0], option_8: sample[1], optionCount: 8, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], optionCount: 9, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], optionCount: 10, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 7) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_8: sample[0], optionCount: 8, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_8: sample[0], option_9: sample[1], optionCount: 9, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], optionCount: 10, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], optionCount: 11, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 8) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_9: sample[0], optionCount: 9, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_9: sample[0], option_10: sample[1], optionCount: 10, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], optionCount: 11, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            console.log("2640===========================", obj);
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 9) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_10: sample[0], optionCount: 10, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_10: sample[0], option_11: sample[1], optionCount: 11, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], optionCount: 13, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 10) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_11: sample[0], optionCount: 11, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], optionCount: 13, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 11) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_12: sample[0], optionCount: 12, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_12: sample[0], option_13: sample[1], optionCount: 13, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 12) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_13: sample[0], optionCount: 13, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 13) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                    }
                                }
                                if (totalQuestion[i].priority4 == true) {
                                    console.log("-49-------------------------------");
                                    let findwhatAppContact = await whatAppContact.findOne({ userID: totalQuestion[i].userID });
                                    if (findwhatAppContact) {
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
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_1: sample[0], optionCount: 1, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_1: sample[0], option_2: sample[1], optionCount: 2, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 13) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 14) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], option_14: sample[13], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 1) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_2: sample[0], optionCount: 2, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_2: sample[0], option_3: sample[1], optionCount: 3, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], optionCount: 4, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], optionCount: 5, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], optionCount: 6, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], optionCount: 7, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], optionCount: 8, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], optionCount: 9, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 13) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], option_14: sample[12], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 2) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_3: sample[0], optionCount: 3, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_3: sample[0], option_4: sample[1], optionCount: 4, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 5, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 6, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], optionCount: 7, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], optionCount: 8, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], optionCount: 9, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], option_14: sample[11], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 3) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_4: sample[0], optionCount: 4, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_4: sample[0], option_5: sample[1], optionCount: 5, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], optionCount: 6, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], optionCount: 7, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], optionCount: 8, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], optionCount: 9, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 4) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_5: sample[0], optionCount: 5, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_5: sample[0], option_6: sample[1], optionCount: 6, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], optionCount: 7, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], optionCount: 8, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], optionCount: 9, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 5) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_6: sample[0], optionCount: 6, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_6: sample[0], option_7: sample[1], optionCount: 7, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], optionCount: 8, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], optionCount: 9, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 6) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_7: sample[0], optionCount: 7, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_7: sample[0], option_8: sample[1], optionCount: 8, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], optionCount: 9, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], optionCount: 10, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 7) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_8: sample[0], optionCount: 8, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_8: sample[0], option_9: sample[1], optionCount: 9, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], optionCount: 10, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], optionCount: 11, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 8) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_9: sample[0], optionCount: 9, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_9: sample[0], option_10: sample[1], optionCount: 10, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], optionCount: 11, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    console.log("2640===========================", obj);
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 9) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_10: sample[0], optionCount: 10, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_10: sample[0], option_11: sample[1], optionCount: 11, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], optionCount: 13, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 10) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_11: sample[0], optionCount: 11, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], optionCount: 13, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 11) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_12: sample[0], optionCount: 12, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_12: sample[0], option_13: sample[1], optionCount: 13, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 12) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_13: sample[0], optionCount: 13, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 13) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                            }
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority4: false, priority5: true } }, { new: true })
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
                                                    } else {
                                                        console.log("-----------------");
                                                    }
                                                }
                                                if (findUser.gender == 'male') {
                                                    let findFriend = await user.findById({ _id: (findSchoolMember[j]._id).toString(), gender: 'female' });
                                                    if (findFriend.flameCount == 0) {
                                                        userArray.push((findSchoolMember[j]._id).toString())
                                                    } else {
                                                        console.log("-----------------");
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority5: false, condition1: true, condition3: false, priority1: true } }, { new: true })
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority5: false, condition1: true, condition3: false, priority1: true } }, { new: true })

                                    } else {
                                        const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);

                                        if (totalQuestion[i].optionCount == 0) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_1: sample[0], optionCount: 1, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_1: sample[0], option_2: sample[1], optionCount: 2, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority5: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 13) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 14) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], option_14: sample[13], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 1) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_2: sample[0], optionCount: 2, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_2: sample[0], option_3: sample[1], optionCount: 3, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], optionCount: 4, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], optionCount: 5, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], optionCount: 6, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], optionCount: 7, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], optionCount: 8, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], optionCount: 9, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 13) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], option_14: sample[12], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 2) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_3: sample[0], optionCount: 3, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_3: sample[0], option_4: sample[1], optionCount: 4, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 5, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 6, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], optionCount: 7, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], optionCount: 8, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], optionCount: 9, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], option_14: sample[11], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 3) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_4: sample[0], optionCount: 4, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_4: sample[0], option_5: sample[1], optionCount: 5, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], optionCount: 6, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], optionCount: 7, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], optionCount: 8, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], optionCount: 9, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 4) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_5: sample[0], optionCount: 5, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_5: sample[0], option_6: sample[1], optionCount: 6, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], optionCount: 7, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], optionCount: 8, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], optionCount: 9, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 5) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_6: sample[0], optionCount: 6, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_6: sample[0], option_7: sample[1], optionCount: 7, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], optionCount: 8, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], optionCount: 9, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 6) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_7: sample[0], optionCount: 7, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_7: sample[0], option_8: sample[1], optionCount: 8, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], optionCount: 9, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], optionCount: 10, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 7) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_8: sample[0], optionCount: 8, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_8: sample[0], option_9: sample[1], optionCount: 9, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], optionCount: 10, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], optionCount: 11, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 8) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_9: sample[0], optionCount: 9, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_9: sample[0], option_10: sample[1], optionCount: 10, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], optionCount: 11, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            console.log("2640===========================", obj);
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 9) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_10: sample[0], optionCount: 10, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_10: sample[0], option_11: sample[1], optionCount: 11, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], optionCount: 13, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 10) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_11: sample[0], optionCount: 11, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], optionCount: 13, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 11) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_12: sample[0], optionCount: 12, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_12: sample[0], option_13: sample[1], optionCount: 13, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 12) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_13: sample[0], optionCount: 13, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 13) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                    }
                                }
                            } else {
                                console.log("------------2261---------------------", totalQuestion[i].priority4);

                                if (totalQuestion[i].priority1 == true) {
                                    if (findUser.poleUser.length > 0) {
                                        for (let k = 0; k < findUser.poleUser.length; k++) {
                                            if (findUser.poleUser[k].count == 0) {
                                                console.log("33-----------------------------");
                                            } else {
                                                console.log("2270-----------------------------");
                                                var userArray = [];
                                                if (userArray.includes(findUser.poleUser[k].user.toString())) {
                                                    console.log("49==================================================");
                                                } else {
                                                    let findFriend = await user.findById({ _id: findUser.poleUser[k].user.toString() });
                                                    if (totalQuestion[i].optionCount == 0) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_1: (findFriend._id).toString, optionCount: 1 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 1) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_2: (findFriend._id).toString, optionCount: 2 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 2) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_3: (findFriend._id).toString, optionCount: 3 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 3) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_4: (findFriend._id).toString, optionCount: 4 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 4) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_5: (findFriend._id).toString, optionCount: 5 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 5) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_6: (findFriend._id).toString, optionCount: 6 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 6) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_7: (findFriend._id).toString, optionCount: 7 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 7) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_8: (findFriend._id).toString, optionCount: 8 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 8) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_9: (findFriend._id).toString, optionCount: 9 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 9) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_10: (findFriend._id).toString, optionCount: 10 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 10) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_11: (findFriend._id).toString, optionCount: 11 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 11) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_12: (findFriend._id).toString, optionCount: 12 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 12) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_13: (findFriend._id).toString, optionCount: 13 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                    if (totalQuestion[i].optionCount == 13) {
                                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { option_14: (findFriend._id).toString, optionCount: 14 } }, { new: true });
                                                        let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                                        userArray.push(findUser.poleUser[k].user.toString())
                                                    }
                                                }
                                            }
                                        }
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority1: false, priority2: true } }, { new: true });
                                    } else {
                                        console.log("2342-----------------------------");
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
                                    console.log(userArray.length);
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority2: false, priority3: true } }, { new: true })
                                    } else {
                                        if (totalQuestion[i].optionCount == 0) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_1: userArray[0], optionCount: 1, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], optionCount: 2, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], optionCount: 3, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], optionCount: 4, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], optionCount: 5, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], optionCount: 6, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], optionCount: 7, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], optionCount: 8, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], optionCount: 9, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], option_12: userArray[11], optionCount: 12, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 13) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], option_12: userArray[11], option_13: userArray[12], optionCount: 13, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 14) {
                                                obj = { option_1: userArray[0], option_2: userArray[1], option_3: userArray[2], option_4: userArray[3], option_5: userArray[4], option_6: userArray[5], option_7: userArray[6], option_8: userArray[7], option_9: userArray[8], option_10: userArray[9], option_11: userArray[10], option_12: userArray[11], option_13: userArray[12], option_14: userArray[13], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true });
                                        }
                                        if (totalQuestion[i].optionCount == 1) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_2: userArray[0], optionCount: 2, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], optionCount: 3, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], optionCount: 4, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], optionCount: 5, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], optionCount: 6, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], optionCount: 7, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], optionCount: 8, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], optionCount: 9, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], option_10: userArray[8], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], option_10: userArray[8], option_11: userArray[9], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], option_10: userArray[8], option_11: userArray[9], option_12: userArray[10], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], option_10: userArray[8], option_11: userArray[9], option_12: userArray[10], option_13: userArray[11], optionCount: 13, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 13) {
                                                obj = { option_2: userArray[0], option_3: userArray[1], option_4: userArray[2], option_5: userArray[3], option_6: userArray[4], option_7: userArray[5], option_8: userArray[6], option_9: userArray[7], option_10: userArray[8], option_11: userArray[9], option_12: userArray[10], option_13: userArray[11], option_14: userArray[12], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 2) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_3: userArray[0], optionCount: 3, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], optionCount: 4, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], optionCount: 5, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], optionCount: 6, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], optionCount: 7, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], optionCount: 8, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], optionCount: 9, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], option_10: userArray[7], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], option_10: userArray[7], option_11: userArray[8], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], option_10: userArray[7], option_11: userArray[8], option_12: userArray[9], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], option_10: userArray[7], option_11: userArray[8], option_12: userArray[9], option_13: userArray[10], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_3: userArray[0], option_4: userArray[1], option_5: userArray[2], option_6: userArray[3], option_7: userArray[4], option_8: userArray[5], option_9: userArray[6], option_10: userArray[7], option_11: userArray[8], option_12: userArray[9], option_13: userArray[10], option_14: userArray[11], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 3) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_4: userArray[0], optionCount: 4, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], optionCount: 5, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], optionCount: 6, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], optionCount: 7, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], optionCount: 8, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], optionCount: 9, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], option_11: userArray[7], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], option_11: userArray[7], option_12: userArray[8], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], option_11: userArray[7], option_12: userArray[8], option_13: userArray[9], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], option_11: userArray[7], option_12: userArray[8], option_13: userArray[9], option_14: userArray[10], optionCount: 14, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_4: userArray[0], option_5: userArray[1], option_6: userArray[2], option_7: userArray[3], option_8: userArray[4], option_9: userArray[5], option_10: userArray[6], option_11: userArray[7], option_12: userArray[8], option_13: userArray[9], option_14: userArray[10], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 4) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_5: userArray[0], optionCount: 5, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], optionCount: 6, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], optionCount: 7, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], optionCount: 8, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], optionCount: 9, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], option_12: userArray[7], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], option_12: userArray[7], option_13: userArray[8], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], option_12: userArray[7], option_13: userArray[8], option_14: userArray[9], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], option_12: userArray[7], option_13: userArray[8], option_14: userArray[9], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_5: userArray[0], option_6: userArray[1], option_7: userArray[2], option_8: userArray[3], option_9: userArray[4], option_10: userArray[5], option_11: userArray[6], option_12: userArray[7], option_13: userArray[8], option_14: userArray[9], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 5) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_6: userArray[0], optionCount: 6, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], optionCount: 7, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], optionCount: 8, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], optionCount: 9, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], optionCount: 10, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], option_13: userArray[7], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], option_13: userArray[7], option_14: userArray[8], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], option_13: userArray[7], option_14: userArray[8], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], option_13: userArray[7], option_14: userArray[8], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_6: userArray[0], option_7: userArray[1], option_8: userArray[2], option_9: userArray[3], option_10: userArray[4], option_11: userArray[5], option_12: userArray[6], option_13: userArray[7], option_14: userArray[8], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 6) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_7: userArray[0], optionCount: 7, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], optionCount: 8, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], optionCount: 9, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], optionCount: 10, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], optionCount: 11, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], option_14: userArray[7], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], option_14: userArray[7], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], option_14: userArray[7], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], option_14: userArray[7], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_7: userArray[0], option_8: userArray[1], option_9: userArray[2], option_10: userArray[3], option_11: userArray[4], option_12: userArray[5], option_13: userArray[6], option_14: userArray[7], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 7) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_8: userArray[0], optionCount: 8, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], optionCount: 9, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], optionCount: 10, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], optionCount: 11, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], optionCount: 12, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_8: userArray[0], option_9: userArray[1], option_10: userArray[2], option_11: userArray[3], option_12: userArray[4], option_13: userArray[5], option_14: userArray[6], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 8) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_9: userArray[0], optionCount: 9, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], optionCount: 10, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], optionCount: 11, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], optionCount: 12, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], optionCount: 13, priority2: false, priority3: true };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_9: userArray[0], option_10: userArray[1], option_11: userArray[2], option_12: userArray[3], option_13: userArray[4], option_14: userArray[5], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 9) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_10: userArray[0], optionCount: 10, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], optionCount: 11, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], optionCount: 12, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], optionCount: 13, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_10: userArray[0], option_11: userArray[1], option_12: userArray[2], option_13: userArray[3], option_14: userArray[4], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 10) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_11: userArray[0], optionCount: 11, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], optionCount: 12, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], optionCount: 13, priority2: false, priority3: true }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_11: userArray[0], option_12: userArray[1], option_13: userArray[2], option_14: userArray[3], optionCount: 14, priority2: false, priority3: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 11) {
                                            let obj;
                                            if (userArray.length == 1) {
                                                obj = { option_12: userArray[0], optionCount: 12, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 2) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], optionCount: 13, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 3) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 4) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 5) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 6) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 7) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 8) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 9) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 10) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 11) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            if (userArray.length == 12) {
                                                obj = { option_12: userArray[0], option_13: userArray[1], option_14: userArray[2], optionCount: 14, priority2: false, priority3: false }
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
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
                                    console.log("---------", userArray);
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority3: false, priority4: true } }, { new: true })
                                    } else {
                                        const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                                        if (totalQuestion[i].optionCount == 0) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_1: sample[0], optionCount: 1, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_1: sample[0], option_2: sample[1], optionCount: 2, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 13) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 14) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], option_14: sample[13], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 1) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_2: sample[0], optionCount: 2, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_2: sample[0], option_3: sample[1], optionCount: 3, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], optionCount: 4, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], optionCount: 5, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], optionCount: 6, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], optionCount: 7, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], optionCount: 8, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], optionCount: 9, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 13) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], option_14: sample[12], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 2) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_3: sample[0], optionCount: 3, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_3: sample[0], option_4: sample[1], optionCount: 4, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 5, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 6, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], optionCount: 7, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], optionCount: 8, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], optionCount: 9, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], option_14: sample[11], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 3) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_4: sample[0], optionCount: 4, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_4: sample[0], option_5: sample[1], optionCount: 5, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], optionCount: 6, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], optionCount: 7, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], optionCount: 8, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], optionCount: 9, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 4) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_5: sample[0], optionCount: 5, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_5: sample[0], option_6: sample[1], optionCount: 6, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], optionCount: 7, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], optionCount: 8, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], optionCount: 9, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 5) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_6: sample[0], optionCount: 6, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_6: sample[0], option_7: sample[1], optionCount: 7, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], optionCount: 8, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], optionCount: 9, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], optionCount: 10, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 6) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_7: sample[0], optionCount: 7, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_7: sample[0], option_8: sample[1], optionCount: 8, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], optionCount: 9, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], optionCount: 10, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], optionCount: 11, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 7) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_8: sample[0], optionCount: 8, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_8: sample[0], option_9: sample[1], optionCount: 9, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], optionCount: 10, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], optionCount: 11, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 8) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_9: sample[0], optionCount: 9, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_9: sample[0], option_10: sample[1], optionCount: 10, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], optionCount: 11, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], optionCount: 13, priority3: false, priority4: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            console.log("2640===========================", obj);
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 9) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_10: sample[0], optionCount: 10, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_10: sample[0], option_11: sample[1], optionCount: 11, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], optionCount: 13, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 10) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_11: sample[0], optionCount: 11, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], optionCount: 13, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 11) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_12: sample[0], optionCount: 12, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_12: sample[0], option_13: sample[1], optionCount: 13, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 12) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_13: sample[0], optionCount: 13, priority3: false, priority4: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 13) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_14: sample[0], optionCount: 14, priority3: false, priority4: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                    }
                                }
                                if (totalQuestion[i].priority4 == true) {
                                    console.log("-49-------------------------------");
                                    let findwhatAppContact = await whatAppContact.findOne({ userID: totalQuestion[i].userID });
                                    if (findwhatAppContact) {
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
                                            console.log("-------------------", userArray);
                                            if (userArray.length == 0) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                            } else {
                                                const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
                                                if (totalQuestion[i].optionCount == 0) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_1: sample[0], optionCount: 1, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_1: sample[0], option_2: sample[1], optionCount: 2, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 13) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 14) {
                                                        obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], option_14: sample[13], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 1) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_2: sample[0], optionCount: 2, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_2: sample[0], option_3: sample[1], optionCount: 3, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], optionCount: 4, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], optionCount: 5, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], optionCount: 6, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], optionCount: 7, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], optionCount: 8, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], optionCount: 9, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 13) {
                                                        obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], option_14: sample[12], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 2) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_3: sample[0], optionCount: 3, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_3: sample[0], option_4: sample[1], optionCount: 4, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 5, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 6, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], optionCount: 7, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], optionCount: 8, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], optionCount: 9, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], option_14: sample[11], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 3) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_4: sample[0], optionCount: 4, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_4: sample[0], option_5: sample[1], optionCount: 5, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], optionCount: 6, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], optionCount: 7, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], optionCount: 8, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], optionCount: 9, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 4) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_5: sample[0], optionCount: 5, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_5: sample[0], option_6: sample[1], optionCount: 6, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], optionCount: 7, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], optionCount: 8, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], optionCount: 9, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 5) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_6: sample[0], optionCount: 6, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_6: sample[0], option_7: sample[1], optionCount: 7, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], optionCount: 8, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], optionCount: 9, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], optionCount: 10, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 6) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_7: sample[0], optionCount: 7, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_7: sample[0], option_8: sample[1], optionCount: 8, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], optionCount: 9, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], optionCount: 10, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], optionCount: 11, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 7) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_8: sample[0], optionCount: 8, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_8: sample[0], option_9: sample[1], optionCount: 9, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], optionCount: 10, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], optionCount: 11, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 8) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_9: sample[0], optionCount: 9, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_9: sample[0], option_10: sample[1], optionCount: 10, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], optionCount: 11, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], optionCount: 13, priority4: false, priority5: true };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    console.log("2640===========================", obj);
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 9) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_10: sample[0], optionCount: 10, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_10: sample[0], option_11: sample[1], optionCount: 11, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], optionCount: 13, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 10) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_11: sample[0], optionCount: 11, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], optionCount: 13, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 11) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_12: sample[0], optionCount: 12, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_12: sample[0], option_13: sample[1], optionCount: 13, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 12) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_13: sample[0], optionCount: 13, priority4: false, priority5: true }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                                if (totalQuestion[i].optionCount == 13) {
                                                    let obj;
                                                    if (sample.length == 1) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 2) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 3) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 4) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false }
                                                    }
                                                    if (sample.length == 5) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 6) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 7) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 8) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 9) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 10) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 11) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    if (sample.length == 12) {
                                                        obj = { option_14: sample[0], optionCount: 14, priority4: false, priority5: false };
                                                    }
                                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                                }
                                            }
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority4: false, priority5: true } }, { new: true })
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
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority5: false, condition1: true, condition3: false, priority1: true } }, { new: true })
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { priority5: false, condition1: true, condition3: false, priority1: true } }, { new: true })
                                    } else {
                                        const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);

                                        if (totalQuestion[i].optionCount == 0) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_1: sample[0], optionCount: 1, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_1: sample[0], option_2: sample[1], optionCount: 2, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], optionCount: 3, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], optionCount: 4, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], optionCount: 5, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], optionCount: 6, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], optionCount: 7, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], optionCount: 8, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], optionCount: 9, priority5: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 13) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 14) {
                                                obj = { option_1: sample[0], option_2: sample[1], option_3: sample[2], option_4: sample[3], option_5: sample[4], option_6: sample[5], option_7: sample[6], option_8: sample[7], option_9: sample[8], option_10: sample[9], option_11: sample[10], option_12: sample[11], option_13: sample[12], option_14: sample[13], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 1) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_2: sample[0], optionCount: 2, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_2: sample[0], option_3: sample[1], optionCount: 3, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], optionCount: 4, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], optionCount: 5, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], optionCount: 6, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], optionCount: 7, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], optionCount: 8, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], optionCount: 9, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 13) {
                                                obj = { option_2: sample[0], option_3: sample[1], option_4: sample[2], option_5: sample[3], option_6: sample[4], option_7: sample[5], option_8: sample[6], option_9: sample[7], option_10: sample[8], option_11: sample[9], option_12: sample[10], option_13: sample[11], option_14: sample[12], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 2) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_3: sample[0], optionCount: 3, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_3: sample[0], option_4: sample[1], optionCount: 4, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], optionCount: 5, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], optionCount: 6, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], optionCount: 7, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], optionCount: 8, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], optionCount: 9, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_3: sample[0], option_4: sample[1], option_5: sample[2], option_6: sample[3], option_7: sample[4], option_8: sample[5], option_9: sample[6], option_10: sample[7], option_11: sample[8], option_12: sample[9], option_13: sample[10], option_14: sample[11], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 3) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_4: sample[0], optionCount: 4, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_4: sample[0], option_5: sample[1], optionCount: 5, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], optionCount: 6, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], optionCount: 7, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], optionCount: 8, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], optionCount: 9, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_4: sample[0], option_5: sample[1], option_6: sample[2], option_7: sample[3], option_8: sample[4], option_9: sample[5], option_10: sample[6], option_11: sample[7], option_12: sample[8], option_13: sample[9], option_14: sample[10], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 4) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_5: sample[0], optionCount: 5, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_5: sample[0], option_6: sample[1], optionCount: 6, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], optionCount: 7, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], optionCount: 8, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], optionCount: 9, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_5: sample[0], option_6: sample[1], option_7: sample[2], option_8: sample[3], option_9: sample[4], option_10: sample[5], option_11: sample[6], option_12: sample[7], option_13: sample[8], option_14: sample[9], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 5) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_6: sample[0], optionCount: 6, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_6: sample[0], option_7: sample[1], optionCount: 7, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], optionCount: 8, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], optionCount: 9, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], optionCount: 10, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_6: sample[0], option_7: sample[1], option_8: sample[2], option_9: sample[3], option_10: sample[4], option_11: sample[5], option_12: sample[6], option_13: sample[7], option_14: sample[8], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 6) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_7: sample[0], optionCount: 7, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_7: sample[0], option_8: sample[1], optionCount: 8, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], optionCount: 9, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], optionCount: 10, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], optionCount: 11, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_7: sample[0], option_8: sample[1], option_9: sample[2], option_10: sample[3], option_11: sample[4], option_12: sample[5], option_13: sample[6], option_14: sample[7], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 7) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_8: sample[0], optionCount: 8, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_8: sample[0], option_9: sample[1], optionCount: 9, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], optionCount: 10, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], optionCount: 11, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], optionCount: 12, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_8: sample[0], option_9: sample[1], option_10: sample[2], option_11: sample[3], option_12: sample[4], option_13: sample[5], option_14: sample[6], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 8) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_9: sample[0], optionCount: 9, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_9: sample[0], option_10: sample[1], optionCount: 10, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], optionCount: 11, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], optionCount: 12, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], optionCount: 13, priority5: true };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_9: sample[0], option_10: sample[1], option_11: sample[2], option_12: sample[3], option_13: sample[4], option_14: sample[5], optionCount: 14, priority5: false };
                                            }
                                            console.log("2640===========================", obj);
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 9) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_10: sample[0], optionCount: 10, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_10: sample[0], option_11: sample[1], optionCount: 11, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], optionCount: 12, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], optionCount: 13, priority5: true }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_10: sample[0], option_11: sample[1], option_12: sample[2], option_13: sample[3], option_14: sample[4], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 10) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_11: sample[0], optionCount: 11, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_11: sample[0], option_12: sample[1], optionCount: 12, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], optionCount: 13, priority5: true }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_11: sample[0], option_12: sample[1], option_13: sample[2], option_13: sample[3], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 11) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_12: sample[0], optionCount: 12, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_12: sample[0], option_13: sample[1], optionCount: 13, priority5: true }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_12: sample[0], option_13: sample[1], option_14: sample[2], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 12) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_13: sample[0], optionCount: 13, priority5: true }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_13: sample[0], option_14: sample[1], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
                                        }
                                        if (totalQuestion[i].optionCount == 13) {
                                            let obj;
                                            if (sample.length == 1) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 2) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 3) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 4) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false }
                                            }
                                            if (sample.length == 5) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 6) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 7) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 8) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 9) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 10) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 11) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            if (sample.length == 12) {
                                                obj = { option_14: sample[0], optionCount: 14, priority5: false };
                                            }
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: obj }, { new: true })
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
        console.log('Question Condition 3 cron job  No data found');
    }
}
setInterval(CreateSession, 10000);
