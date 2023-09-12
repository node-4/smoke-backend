const cronJob = require("cron").CronJob;
let questionAnswer = require("../../model/questionAnswer");
let questions = require("../../model/questions");
let whatAppContact = require("../../model/whatAppContact");
let user = require("../../model/user");

async function startCondition1() {
    let date = new Date(Date.now()).getDate();
    let month = new Date(Date.now()).getMonth() + 1;
    let year = new Date(Date.now()).getFullYear();
    let fullDate = (`${date}/${month}/${year}`).toString();
    let hrs = new Date(Date.now()).getHours() + 1
    let min = new Date(Date.now()).getMinutes();
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
    if (hr < 10) {
        hrs2 = '' + 0 + parseInt(hr + 1);
    } else {
        hrs2 = parseInt(hr + 1);
    }
    // hrs3 = hrs2; /// server
    // hrs3 = hrs;  //local
    hrs3 = "11"
    console.log("*****************************************************************************");
    console.log("startCondition1  Full Date ===>", fullDate);
    console.log("startCondition1 Min ===>", min);
    console.log("startCondition1 Befor create time + 5:30  ===>", hrs,);
    console.log("startCondition1 after create time + 5:30  ===>", hrs3);
    let totalQuestion = await questionAnswer.find({ questionDate: fullDate, questionTime: hrs3, })
    if (totalQuestion.length > 0) {
        for (let i = 0; i < totalQuestion.length; i++) {
            if (totalQuestion[i].optionCount == 14) {
                console.log("145-----------------------------", totalQuestion[i].optionCount);
            } else {
                let findUser = await user.findOne({ _id: totalQuestion[i].userID })
                if (findUser) {
                    let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                    if (totalQuestion[i].condition1 == true) {
                        if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                            console.log("50-------------startCondition1", findUser.firstName);
                            condition1Function(totalQuestion[i]._id, totalQuestion[i].userID, totalQuestion[i].questionDate, totalQuestion[i].questionTime)
                        } else if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition1: false, condition2: true } }, { new: true })
                            if (update.condition2 == true) {
                                console.log("55----------------startCondition1", findUser.firstName);
                                condition2Function(totalQuestion[i]._id, totalQuestion[i].userID, totalQuestion[i].questionDate, totalQuestion[i].questionTime,)
                            }
                        } else if (findUser.friends.length > 4) {
                            console.log("59-----------------startCondition1");
                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion[i]._id }, { $set: { condition1: false, condition3: true } }, { new: true })
                            if (update.condition3 == true) {
                                condition3Function(totalQuestion[i]._id, totalQuestion[i].userID, totalQuestion[i].questionDate, totalQuestion[i].questionTime)
                            }
                        } else {
                            console.log("65-------------startCondition1", findUser.firstName);
                        }
                    }
                    if (totalQuestion[i].condition2 == true) {
                        console.log("69-----------------startCondition1", findUser.firstName);
                        condition2Function(totalQuestion[i]._id, totalQuestion[i].userID, totalQuestion[i].questionDate, totalQuestion[i].questionTime)
                    }
                    if (totalQuestion[i].condition3 == true) {
                        console.log("73-----------------startCondition1", findUser.firstName);
                        condition3Function(totalQuestion[i]._id, totalQuestion[i].userID, totalQuestion[i].questionDate, totalQuestion[i].questionTime)
                    }
                }
            }
        }

    } else {
        console.log('startCondition1 cron job  No Question found');
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    }
}
async function condition1Function(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        if (totalQuestion.optionCount == 14) {
            console.log("94-----------------------------", totalQuestion.optionCount);
        } else {
            let findUser = await user.findOne({ _id: totalQuestion.userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion.condition1 == true) {
                    if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        console.log("93-------------condition1Function", findUser.firstName);
                        condition1Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition1: false, condition2: true } }, { new: true })
                        if (update.condition2 == true) {
                            console.log("98-------------condition1Function", findUser.firstName);
                            condition2Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                        }
                    }
                    else if (findUser.friends.length > 4) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition1: false, condition3: true } }, { new: true })
                        if (update.condition3 == true) {
                            console.log("105-------------condition1Function", findUser.firstName);
                            condition3Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                        }
                    } else {
                        console.log("109-------------condition1Function", findUser.firstName);
                    }
                }
                if (totalQuestion.condition2 == true) {
                    console.log("113-------------condition1Function", findUser.firstName);
                    condition2Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                }
                if (totalQuestion.condition3 == true) {
                    console.log("117-------------condition1Function", findUser.firstName);
                    condition3Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                }
            }
        }

    } else {
        console.log('Question Condition 1 cron job  No data found');
    }
}
async function condition2Function(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        if (totalQuestion.optionCount == 14) {
            console.log("141-----------------------------", totalQuestion.optionCount);
        } else {
            let findUser = await user.findOne({ _id: totalQuestion.userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion.condition2 == true) {
                    console.log("135-------------condition2Function", findUser.firstName);
                    if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                        if (totalQuestion.priority2_1 == true) {
                            console.log("138-------------condition2Function", findUser.firstName);
                            condition2priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                        }
                        if (totalQuestion.priority2_2 == true) {
                            console.log("142-------------condition2Function", findUser.firstName);
                            condition2priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                        }
                    } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        console.log("146-------------condition2Function", findUser.firstName);
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition2: false, condition1: true } }, { new: true })
                        condition1Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else if (findUser.friends.length > 4) {
                        console.log("150-------------condition2Function", findUser.firstName);
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition2: false, condition3: true } }, { new: true })
                        condition3Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else {
                        console.log("154-------------condition2Function", findUser.firstName);
                    }
                }
            }
        }

    } else {
        console.log('Question Condition 2 cron job  No data found');
    }
}
async function condition3Function(questionId, userId, fullDate, hrs3) {
    console.log("164-------------condition3Function");
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        if (totalQuestion.optionCount == 14) {
            console.log("182-----------------------------", totalQuestion.optionCount);
        } else {
            let findUser = await user.findOne({ _id: totalQuestion.userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion.condition3 == true) {
                    console.log("172-------------condition3Function", findUser.firstName);
                    if (findUser.friends.length > 4) {
                        if (totalQuestion.optionCount == 14) {
                            console.log("175-------------condition3Function", findUser.firstName);
                        } else {
                            if (totalQuestion.priority1 == true) {
                                console.log("178-------------condition3Function", findUser.firstName);
                                condition3priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                            }
                            if (totalQuestion.priority2 == true) {
                                console.log("182-------------condition3Function", findUser.firstName);
                                condition3priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                            }
                            if (totalQuestion.priority3 == true) {
                                console.log("186-------------condition3Function", findUser.firstName);
                                condition3priority3(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                            }
                            if (totalQuestion.priority4 == true) {
                                console.log("190-------------condition3Function", findUser.firstName);
                                condition3priority4(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                            }
                            if (totalQuestion.priority5 == true) {
                                console.log("194-------------condition3Function", findUser.firstName);
                                condition3priority5(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                            }
                        }
                    } else if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                        console.log("199-------------condition3Function", findUser.firstName);
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition2: true } }, { new: true })
                        condition2Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        console.log("203-------------condition3Function", findUser.firstName);
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition1: true } }, { new: true })
                        condition1Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else {
                        console.log("207-------------condition3Function", findUser.firstName);
                    }
                }
            }
        }

    } else {
        console.log('Question Condition 3 cron job  No data found');
    }
}
async function condition2priority1(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        if (totalQuestion.optionCount == 14) {
            console.log("239-----------------------------", totalQuestion.optionCount);
        } else {
            let findUser = await user.findOne({ _id: totalQuestion.userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion.condition2 == true) {
                    console.log("226-------------condition2priority1", findUser.firstName);
                    if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                        console.log("229-------------condition2priority1", findUser.firstName);
                        if (totalQuestion.priority2_1 == true) {
                            if (totalQuestion.optionCount == 14) {
                                console.log("231-------------condition2priority1", findUser.firstName);
                            } else {
                                if (totalQuestion.type == 'Flirtatious') {
                                    console.log("234-------------condition2priority1", findUser.firstName);
                                    var userArray = [];
                                    for (let j = 0; j < findUser.friends.length; j++) {
                                        if (userArray.includes(findUser.friends[j].toString())) {
                                            console.log("238-------------condition2priority1", findUser.firstName);
                                        } else {
                                            if ((findUser.gender == 'female') == true) {
                                                let findFriend = await user.findOne({ _id: findUser.friends[j].toString(), gender: 'male' });
                                                if (findFriend.flameCount == 0) {
                                                    userArray.push((findFriend._id).toString())
                                                }
                                            }
                                            if ((findUser.gender == 'male') == true) {
                                                let findFriend = await user.findOne({ _id: findUser.friends[j].toString(), gender: 'female' });
                                                if (findFriend.flameCount == 0) {
                                                    userArray.push((findFriend._id).toString())
                                                }
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority2_1: false, priority2_2: true } }, { new: true })
                                    } else {
                                        condition2priority1a(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray, totalQuestion._id);
                                    }
                                } else {
                                    var userArray = [];
                                    for (let j = 0; j < findUser.friends.length; j++) {
                                        if (userArray.includes(findUser.friends[j].toString())) {
                                            console.log("774-------------condition2priority1", findUser.firstName);
                                        } else {
                                            let findFriend = await user.findOne({ _id: findUser.friends[j].toString() });
                                            if (findFriend.flameCount > 0) {
                                                userArray.push((findFriend._id).toString())
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority2_1: false, priority2_2: true } }, { new: true })
                                    } else {
                                        condition2priority1a(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray, totalQuestion._id);
                                    }
                                }
                            }
                        }
                        if (totalQuestion.priority2_2 == true) {
                            condition2priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                        }
                    } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition2: false, condition1: true } }, { new: true })
                        condition1Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else if (findUser.friends.length > 4) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition2: false, condition3: true } }, { new: true })
                        condition3Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else {
                        console.log("40----------------------------");
                    }
                }
            }
        }
    }
};
async function condition2priority1a(userId, fullDate, hrs3, userArray, questionId) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
    let optionCount;
    if (totalQuestion.optionCount === 0) {
        let obj = {}; optionCount = 0;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 1) {
        let obj = {}; optionCount = 1;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                console.log(obj)
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 2) {
        let obj = {}; optionCount = 2;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 3) {
        let obj = {}; optionCount = 3;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 4) {
        let obj = {}; optionCount = 4;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 5) {
        let obj = {}; optionCount = 5;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 6) {
        let obj = {}; optionCount = 6;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 7) {
        let obj = {}; optionCount = 7;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 8) {
        let obj = {}; optionCount = 8;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 9) {
        let obj = {}; optionCount = 9;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 10) {
        let obj = {}; optionCount = 10;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 11) {
        let obj = {}; optionCount = 11;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 12) {
        let obj = {}; optionCount = 12;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 13) {
        let obj = {}; optionCount = 13;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    let c = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (optionCount >= 14) {
        obj = { priority2_1: false, priority2_2: false, optionCount: 14 };
    } else {
        obj = { priority2_1: false, priority2_2: true, optionCount: optionCount };
    }
    await questionAnswer.findByIdAndUpdate({ _id: c._id }, { $set: obj }, { new: true });

};
async function condition2priority2(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        if (totalQuestion.optionCount == 14) {
            console.log("1282-----------------------------", totalQuestion.optionCount);
        } else {
            let findUser = await user.findOne({ _id: totalQuestion.userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school }).select('_id');
                if (totalQuestion.condition2 == true) {
                    console.log("------------------------------------------");
                    if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                        console.log("Enter into Condition 2-", findUser.firstName);
                        if (totalQuestion.priority2_1 == true) {
                            if (totalQuestion.optionCount == 14) {
                                console.log("145-----------------------------", totalQuestion.optionCount);
                            } else {
                                condition2priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                            }
                        }
                        if (totalQuestion.priority2_2 == true) {
                            if (totalQuestion.optionCount == 14) {
                                console.log("145-----------------------------", totalQuestion.optionCount);
                            } else {
                                if (totalQuestion.type == 'Flirtatious') {
                                    console.log("-263------------------------------");
                                    var userArray = [];
                                    if (findSchoolMember.length > 0) {
                                        for (let j = 0; j < findSchoolMember.length; j++) {
                                            if (userArray.includes((findSchoolMember[j]._id).toString())) {
                                                console.log("267=================a=================================");
                                            } else {
                                                if ((findUser.gender == 'female') == true) {
                                                    let findFriend = await user.findOne({ _id: (findSchoolMember[j]._id).toString(), gender: 'male' });
                                                    if (findFriend && findFriend.flameCount == 0) {
                                                        userArray.push((findFriend._id).toString());
                                                    }
                                                }
                                                if ((findUser.gender == 'male') == true) {
                                                    let findFriend = await user.findOne({ _id: (findSchoolMember[j]._id).toString(), gender: 'female' });
                                                    if (findFriend && findFriend.flameCount == 0) {
                                                        userArray.push((findFriend._id).toString());
                                                    }
                                                }
                                            }
                                            console.log("userArray:", userArray);
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition2: false, condition3: true, priority2_1: true, priority2_2: false, } }, { new: true })
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition2: false, condition3: true, priority2_1: true, priority2_2: false, } }, { new: true })
                                    } else {
                                        condition2priority2a(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray);
                                    }
                                } else {
                                    console.log("-263------------------------------");
                                    var userArray = [];
                                    if (Array.isArray(findSchoolMember) && findSchoolMember.length > 0) {
                                        for (let j = 0; j < findSchoolMember.length; j++) {
                                            const currentId = (findSchoolMember[j]._id).toString();
                                            if (!userArray.includes(currentId)) {
                                                userArray.push(currentId);
                                            }
                                            console.log(userArray);
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition2: false, condition3: true, priority2_1: true, priority2_2: false, } }, { new: true })
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition2: false, condition3: true, priority2_1: true, priority2_2: false, } }, { new: true })
                                    } else {
                                        console.log("610*****************************************************", userArray);
                                        condition2priority2a(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray);
                                    }
                                }
                            }
                        }
                    } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition2: false, condition1: true } }, { new: true })
                        condition1Function(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else if (findUser.friends.length > 4) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition2: false, condition3: true } }, { new: true })
                        condition3Function(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else {
                        console.log("40----------------------------");
                    }
                }
            }
        }
    }
};
async function condition2priority2a(questionId, userId, fullDate, hrs3, userArray) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
    let optionCount;
    if (totalQuestion.optionCount === 0) {
        let obj = {}; optionCount = 0;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 1) {
        let obj = {}; optionCount = 1;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                console.log(obj)
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 2) {
        let obj = {}; optionCount = 2;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 3) {
        let obj = {}; optionCount = 3;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 4) {
        let obj = {}; optionCount = 4;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 5) {
        let obj = {}; optionCount = 5;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 6) {
        let obj = {}; optionCount = 6;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 7) {
        let obj = {}; optionCount = 7;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 8) {
        let obj = {}; optionCount = 8;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 9) {
        let obj = {}; optionCount = 9;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 10) {
        let obj = {}; optionCount = 10;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 11) {
        let obj = {}; optionCount = 11;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 12) {
        let obj = {}; optionCount = 12;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 13) {
        let obj = {}; optionCount = 13;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    let c = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (optionCount >= 14) {
        obj = { condition3: false, priority2_1: false, priority2_2: false, optionCount: 14 };
    } else {
        obj = { condition2: false, condition3: true, priority2_1: true, priority2_2: false, optionCount: optionCount };
    }
    await questionAnswer.findByIdAndUpdate({ _id: c._id }, { $set: obj }, { new: true });

};
async function condition3priority1(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        if (totalQuestion.optionCount == 14) {
            console.log("2330-----------------------------", totalQuestion.optionCount);
        } else {
            let findUser = await user.findOne({ _id: totalQuestion.userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion.condition3 == true) {
                    console.log("27-----------------------------");
                    if (findUser.friends.length > 4) {
                        if (totalQuestion.optionCount == 14) {
                            console.log("145-----------------------------", totalQuestion.optionCount);
                        } else {
                            console.log("Enter into Condition 3", findUser.firstName);
                            if (totalQuestion.type == 'Flirtatious') {
                                console.log("-------------------32-----------------", totalQuestion.type);
                                if (totalQuestion.priority1 == true) {
                                    condition3priority1a(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority2 == true) {
                                    console.log("-45-------------------------------");
                                    condition3priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority3 == true) {
                                    console.log("-120-------------------------------");
                                    condition3priority3(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority4 == true) {
                                    console.log("-49-------------------------------");
                                    condition3priority4(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority5 == true) {
                                    console.log("-263------------------------------");
                                    condition3priority5(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                            } else {
                                console.log("------------2261---------------------", totalQuestion.priority4);
                                if (totalQuestion.priority1 == true) {
                                    condition3priority1b(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority2 == true) {
                                    console.log("-45-------------------------------");
                                    condition3priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority3 == true) {
                                    console.log("-120-------------------------------");
                                    condition3priority3(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority4 == true) {
                                    console.log("-49-------------------------------");
                                    condition3priority4(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority5 == true) {
                                    console.log("-263------------------------------");
                                    condition3priority5(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                            }
                        }
                    } else if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition2: true } }, { new: true })
                        condition2Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition1: true } }, { new: true })
                        condition1Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else {
                        console.log("40----------------------------");
                    }
                }
            }
        }

    } else {
        console.log('Question Condition 3 cron job  No data found');
    }
};
async function condition3priority1a(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        let findUser = await user.findOne({ _id: totalQuestion.userID });
        if (findUser) {
            if (findUser.poleUser.length > 0) {
                for (let k = 0; k < findUser.poleUser.length; k++) {
                    if (findUser.poleUser[k].count == 0) {
                        console.log("33-----------------------------");
                    } else {
                        var userArray = [];
                        if (userArray.includes(findUser.poleUser[k].user.toString())) {
                            console.log("49==================================================");
                        } else {
                            if ((findUser.gender == 'female') == true) {
                                let findFriend = await user.findOne({ _id: findUser.poleUser[k].user.toString(), gender: 'male' });
                                if (totalQuestion.optionCount == 0) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_1: (findFriend._id).toString, optionCount: 1 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 1) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_2: (findFriend._id).toString, optionCount: 2 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 2) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_3: (findFriend._id).toString, optionCount: 3 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 3) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_4: (findFriend._id).toString, optionCount: 4 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 4) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_5: (findFriend._id).toString, optionCount: 5 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 5) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_6: (findFriend._id).toString, optionCount: 6 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 6) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_7: (findFriend._id).toString, optionCount: 7 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 7) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_8: (findFriend._id).toString, optionCount: 8 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 8) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_9: (findFriend._id).toString, optionCount: 9 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 9) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_10: (findFriend._id).toString, optionCount: 10 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 10) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_11: (findFriend._id).toString, optionCount: 11 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 11) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_12: (findFriend._id).toString, optionCount: 12 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 12) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_13: (findFriend._id).toString, optionCount: 13 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 13) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_14: (findFriend._id).toString, optionCount: 14 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                            }
                            if ((findUser.gender == 'male') == true) {
                                let findFriend = await user.findOne({ _id: findUser.poleUser[k].user.toString(), gender: 'female' });
                                if (totalQuestion.optionCount == 0) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_1: (findFriend._id).toString, optionCount: 1 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 1) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_2: (findFriend._id).toString, optionCount: 2 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 2) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_3: (findFriend._id).toString, optionCount: 3 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 3) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_4: (findFriend._id).toString, optionCount: 4 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 4) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_5: (findFriend._id).toString, optionCount: 5 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 5) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_6: (findFriend._id).toString, optionCount: 6 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 6) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_7: (findFriend._id).toString, optionCount: 7 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 7) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_8: (findFriend._id).toString, optionCount: 8 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 8) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_9: (findFriend._id).toString, optionCount: 9 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 9) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_10: (findFriend._id).toString, optionCount: 10 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 10) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_11: (findFriend._id).toString, optionCount: 11 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 11) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_12: (findFriend._id).toString, optionCount: 12 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 12) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_13: (findFriend._id).toString, optionCount: 13 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                                if (totalQuestion.optionCount == 13) {
                                    let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_14: (findFriend._id).toString, optionCount: 14 } }, { new: true });
                                    let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                    userArray.push(findUser.poleUser[k].user.toString())
                                }
                            }
                        }
                    }
                }
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority1: false, priority2: true } }, { new: true });
            } else {
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority1: false, priority2: true } }, { new: true })
            }
        }
    } else {
        console.log("---------------------------------------");
    }
};
async function condition3priority1b(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        let findUser = await user.findOne({ _id: totalQuestion.userID });
        if (findUser) {
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
                            let findFriend = await user.findOne({ _id: findUser.poleUser[k].user.toString() });
                            if (totalQuestion.optionCount == 0) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_1: (findFriend._id).toString, optionCount: 1 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 1) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_2: (findFriend._id).toString, optionCount: 2 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 2) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_3: (findFriend._id).toString, optionCount: 3 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 3) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_4: (findFriend._id).toString, optionCount: 4 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 4) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_5: (findFriend._id).toString, optionCount: 5 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 5) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_6: (findFriend._id).toString, optionCount: 6 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 6) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_7: (findFriend._id).toString, optionCount: 7 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 7) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_8: (findFriend._id).toString, optionCount: 8 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 8) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_9: (findFriend._id).toString, optionCount: 9 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 9) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_10: (findFriend._id).toString, optionCount: 10 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 10) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_11: (findFriend._id).toString, optionCount: 11 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 11) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_12: (findFriend._id).toString, optionCount: 12 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 12) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_13: (findFriend._id).toString, optionCount: 13 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                            if (totalQuestion.optionCount == 13) {
                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { option_14: (findFriend._id).toString, optionCount: 14 } }, { new: true });
                                let update1 = await user.findOneAndeUpdate({ _id: findUser._id, 'poleUser.user': findFriend._id }, { $set: { 'poleUser.$.count': findUser.poleUser[k].count - 1 } }, { new: true })
                                userArray.push(findUser.poleUser[k].user.toString())
                            }
                        }
                    }
                }
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority1: false, priority2: true } }, { new: true });
            } else {
                console.log("2342-----------------------------");
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority1: false, priority2: true } }, { new: true })
            }
        }
    } else {
        console.log("---------------------------------------");
    }
};
async function condition3priority2(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        if (totalQuestion.optionCount == 14) {
            console.log("2657-----------------------------", totalQuestion.optionCount);
        } else {
            let findUser = await user.findOne({ _id: totalQuestion.userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion.condition3 == true) {
                    console.log("27-----------------------------");
                    if (findUser.friends.length > 4) {
                        if (totalQuestion.optionCount == 14) {
                            console.log("145-----------------------------", totalQuestion.optionCount);
                        } else {
                            console.log("Enter into Condition 3", findUser.firstName);
                            if (totalQuestion.type == 'Flirtatious') {
                                console.log("-------------------32-----------------", totalQuestion.type);
                                if (totalQuestion.priority1 == true) {
                                    condition3priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority2 == true) {
                                    console.log("-45-------------------------------");
                                    var userArray = [];
                                    for (let j = 0; j < findUser.friends.length; j++) {
                                        if (userArray.includes(findUser.friends[j].toString())) {
                                            console.log("49==================================================");
                                        } else {
                                            if ((findUser.gender == 'female') == true) {
                                                let findFriend = await user.findOne({ _id: findUser.friends[j].toString(), gender: 'male' });
                                                if (findFriend == null) {
                                                    console.log("-----------------");
                                                } else {
                                                    if ((findFriend.flameCount == 0) || (findFriend.flameCount == null)) {
                                                        userArray.push((findFriend._id).toString())
                                                    } else {
                                                        console.log("-----------------");
                                                    }
                                                }
                                            }
                                            if ((findUser.gender == 'male') == true) {
                                                let findFriend = await user.findOne({ _id: findUser.friends[j].toString(), gender: 'female' });
                                                if (findFriend == null) {
                                                    console.log("-----------------");
                                                } else {
                                                    if ((findFriend.flameCount == 0) || (findFriend.flameCount == null)) {
                                                        userArray.push((findFriend._id).toString())
                                                    } if (findFriend.flameCount > 0) {
                                                        console.log("-----------------");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (findSchoolMember.length > 0) {
                                        for (let j = 0; j < findSchoolMember.length; j++) {
                                            if (userArray.includes((findSchoolMember[j]._id).toString())) {
                                                console.log("57==================================================");
                                            } else {
                                                if ((findUser.gender == 'female') == true) {
                                                    let findFriend = await user.findOne({ _id: (findSchoolMember[j]._id).toString(), gender: 'male' });
                                                    if (findFriend == null) {
                                                        console.log("-----------------");
                                                    } else {
                                                        if ((findFriend.flameCount == 0) || (findFriend.flameCount == null)) {
                                                            userArray.push((findFriend._id).toString())
                                                        } if (findFriend.flameCount > 0) {
                                                            console.log("-----------------");
                                                        }
                                                    }
                                                }
                                                if ((findUser.gender == 'male') == true) {
                                                    let findFriend = await user.findOne({ _id: (findSchoolMember[j]._id).toString(), gender: 'female' });
                                                    if (findFriend == null) {
                                                        console.log("-----------------");
                                                    } else {
                                                        if ((findFriend.flameCount == 0) || (findFriend.flameCount == null)) {
                                                            userArray.push((findFriend._id).toString())
                                                        } if (findFriend.flameCount > 0) {
                                                            console.log("-----------------");
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority2: false, priority3: true } }, { new: true })
                                    } else {
                                        condition3priority2a(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray, totalQuestion._id);
                                    }
                                }
                                if (totalQuestion.priority3 == true) {
                                    console.log("-120-------------------------------");
                                    condition3priority3(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority4 == true) {
                                    console.log("-49-------------------------------");
                                    condition3priority4(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority5 == true) {
                                    console.log("-263------------------------------");
                                    condition3priority5(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                            } else {
                                console.log("------------2261---------------------", totalQuestion.priority4);
                                if (totalQuestion.priority1 == true) {
                                    condition3priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority2 == true) {
                                    console.log("-45-------------------------------");
                                    var userArray = [];
                                    for (let j = 0; j < findUser.friends.length; j++) {
                                        if (userArray.includes(findUser.friends[j].toString())) {
                                            console.log("49==================================================");
                                        } else {
                                            let findFriend = await user.findOne({ _id: findUser.friends[j].toString() });
                                            if (findFriend == null) {
                                                console.log("-----------------");
                                            } else {
                                                if ((findFriend.flameCount == 0) || (findFriend.flameCount == null)) {
                                                    userArray.push((findFriend._id).toString())
                                                } if (findFriend.flameCount > 0) {
                                                    console.log("-----------------");
                                                }
                                            }
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
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority2: false, priority3: true } }, { new: true })
                                    } else {
                                        condition3priority2a(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray, totalQuestion._id);
                                    }
                                }
                                if (totalQuestion.priority3 == true) {
                                    console.log("-120-------------------------------");
                                    condition3priority3(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority4 == true) {
                                    console.log("-49-------------------------------");
                                    condition3priority4(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority5 == true) {
                                    console.log("-263------------------------------");
                                    condition3priority5(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                            }
                        }
                    } else if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition2: true } }, { new: true })
                        condition2Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition1: true } }, { new: true })
                        condition1Function(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else {
                        console.log("40----------------------------");
                    }
                }
            }
        }
    } else {
        console.log('Question Condition 3 cron job  No data found');
    }
};
async function condition3priority2a(userId, fullDate, hrs3, userArray, questionId) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
    let optionCount;
    if (totalQuestion.optionCount === 0) {
        let obj = {}; optionCount = 0;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 1) {
        let obj = {}; optionCount = 1;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                console.log(obj)
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 2) {
        let obj = {}; optionCount = 2;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 3) {
        let obj = {}; optionCount = 3;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 4) {
        let obj = {}; optionCount = 4;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 5) {
        let obj = {}; optionCount = 5;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 6) {
        let obj = {}; optionCount = 6;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 7) {
        let obj = {}; optionCount = 7;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 8) {
        let obj = {}; optionCount = 8;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 9) {
        let obj = {}; optionCount = 9;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 10) {
        let obj = {}; optionCount = 10;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 11) {
        let obj = {}; optionCount = 11;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 12) {
        let obj = {}; optionCount = 12;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 13) {
        let obj = {}; optionCount = 13;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    let c = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (optionCount >= 14) {
        obj = { priority2: false, priority3: false, condition3: false, optionCount: 14 };
    } else {
        obj = { priority2: false, priority3: true, optionCount: optionCount };
    }
    await questionAnswer.findByIdAndUpdate({ _id: c._id }, { $set: obj }, { new: true });

};
async function condition3priority3(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        if (totalQuestion.optionCount == 14) {
            console.log("3812-----------------------------", totalQuestion.optionCount);
        } else {
            let findUser = await user.findOne({ _id: totalQuestion.userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion.condition3 == true) {
                    console.log("27-----------------------------");
                    if (findUser.friends.length > 4) {
                        if (totalQuestion.optionCount == 14) {
                            console.log("145-----------------------------", totalQuestion.optionCount);
                        } else {
                            console.log("Enter into Condition 3", findUser.firstName);
                            if (totalQuestion.type == 'Flirtatious') {
                                console.log("-------------------32-----------------", totalQuestion.type);
                                if (totalQuestion.priority1 == true) {
                                    condition3priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority2 == true) {
                                    console.log("-45-------------------------------");
                                    condition3priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority3 == true) {
                                    console.log("-120-------------------------------");
                                    var userArray = [];
                                    for (let j = 0; j < findUser.friends.length; j++) {
                                        if (userArray.includes(findUser.friends[j].toString())) {
                                            console.log("49==================================================");
                                        } else {
                                            if ((findUser.gender == 'female') == true) {
                                                let findFriend = await user.findOne({ _id: findUser.friends[j].toString(), gender: 'male' });
                                                if (findFriend == null) {
                                                    console.log("-----------------");
                                                } else {
                                                    if ((findFriend.flameCount == 0) || (findFriend.flameCount == null)) {
                                                        userArray.push((findFriend._id).toString())
                                                    } else {
                                                        console.log("-----------------");
                                                    }
                                                }
                                            }
                                            if ((findUser.gender == 'male') == true) {
                                                let findFriend = await user.findOne({ _id: findUser.friends[j].toString(), gender: 'female' });
                                                if (findFriend == null) {
                                                    console.log("-----------------");
                                                } else {
                                                    if ((findFriend.flameCount == 0) || (findFriend.flameCount == null)) {
                                                        userArray.push((findFriend._id).toString())
                                                    } else {
                                                        console.log("-----------------");
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority3: false, priority4: true } }, { new: true })
                                    } else {
                                        condition3priority3a(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray, totalQuestion._id)
                                    }
                                }
                                if (totalQuestion.priority4 == true) {
                                    console.log("-49-------------------------------");
                                    condition3priority4(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority5 == true) {
                                    console.log("-263------------------------------");
                                    condition3priority5(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                            } else {
                                console.log("------------2261---------------------", totalQuestion.priority4);
                                if (totalQuestion.priority1 == true) {
                                    condition3priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority2 == true) {
                                    console.log("-45-------------------------------");
                                    condition3priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority3 == true) {
                                    console.log("-120-------------------------------");
                                    var userArray = [];
                                    for (let j = 0; j < findUser.friends.length; j++) {
                                        if (userArray.includes(findUser.friends[j].toString())) {
                                            console.log("49==================================================");
                                        } else {
                                            let findFriend = await user.findOne({ _id: findUser.friends[j].toString() });
                                            if (findFriend == null) {
                                                console.log("-----------------");
                                            } else {
                                                if ((findFriend.flameCount == 0) || (findFriend.flameCount == null)) {
                                                    userArray.push((findFriend._id).toString())
                                                } if (findFriend.flameCount > 0) {
                                                    console.log("-----------------");
                                                }
                                            }
                                        }
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority3: false, priority4: true } }, { new: true })
                                    } else {
                                        condition3priority3a(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray)
                                    }
                                }
                                if (totalQuestion.priority4 == true) {
                                    console.log("-49-------------------------------");
                                    condition3priority4(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority5 == true) {
                                    console.log("-263------------------------------");
                                    condition3priority5(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                            }
                        }
                    } else if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition2: true } }, { new: true })
                        condition2Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition1: true } }, { new: true })
                        condition1Function(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else {
                        console.log("40----------------------------");
                    }
                }
            }
        }

    } else {
        console.log('Question Condition 3 cron job  No data found');
    }
};
async function condition3priority3a(questionId, userId, fullDate, hrs3, userArray) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
    let optionCount;
    if (totalQuestion.optionCount === 0) {
        let obj = {}; optionCount = 0;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 1) {
        let obj = {}; optionCount = 1;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                console.log(obj)
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 2) {
        let obj = {}; optionCount = 2;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 3) {
        let obj = {}; optionCount = 3;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 4) {
        let obj = {}; optionCount = 4;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 5) {
        let obj = {}; optionCount = 5;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 6) {
        let obj = {}; optionCount = 6;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 7) {
        let obj = {}; optionCount = 7;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 8) {
        let obj = {}; optionCount = 8;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 9) {
        let obj = {}; optionCount = 9;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 10) {
        let obj = {}; optionCount = 10;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 11) {
        let obj = {}; optionCount = 11;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 12) {
        let obj = {}; optionCount = 12;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 13) {
        let obj = {}; optionCount = 13;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    let c = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (optionCount >= 14) {
        obj = { priority3: false, priority4: false, condition3: false, optionCount: 14 };
    } else {
        obj = { priority3: false, priority4: true, optionCount: optionCount };
    }
    await questionAnswer.findByIdAndUpdate({ _id: c._id }, { $set: obj }, { new: true });

};
async function condition3priority4(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        if (totalQuestion.optionCount == 14) {
            console.log("5088-----------------------------", totalQuestion.optionCount);
        } else {
            let findUser = await user.findOne({ _id: totalQuestion.userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion.condition3 == true) {
                    console.log("27-----------------------------");
                    if (findUser.friends.length > 4) {
                        if (totalQuestion.optionCount == 14) {
                            console.log("145-----------------------------", totalQuestion.optionCount);
                        } else {
                            console.log("Enter into Condition 3", findUser.firstName);
                            if (totalQuestion.type == 'Flirtatious') {
                                console.log("-------------------32-----------------", totalQuestion.type);
                                if (totalQuestion.priority1 == true) {
                                    condition3priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority2 == true) {
                                    console.log("-45-------------------------------");
                                    condition3priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority3 == true) {
                                    console.log("-120-------------------------------");
                                    condition3priority3(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority4 == true) {
                                    console.log("-49-------------------------------");
                                    let findwhatAppContact = await whatAppContact.findOne({ userID: totalQuestion.userID });
                                    if (findwhatAppContact) {
                                        if (findwhatAppContact.userContacts.length == 0) {
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                        } else {
                                            var userArray = [];
                                            for (let k = 0; k < findwhatAppContact.userContacts.length; k++) {
                                                if ((findUser.gender == 'female') == true) {
                                                    let findUsers = await user.findOne({ phone: findwhatAppContact.userContacts[k].phone, gender: 'male' });
                                                    if ((userArray.includes(findUsers._id).toString())) {
                                                        console.log("-198-------------------------------");
                                                    } else {
                                                        userArray.push((findUsers._id).toString())
                                                    }
                                                }
                                                if ((findUser.gender == 'male') == true) {
                                                    let findUsers = await user.findOne({ phone: findwhatAppContact.userContacts[k].phone, gender: 'female' });
                                                    if ((userArray.includes(findUsers._id).toString())) {
                                                        console.log("-198-------------------------------");
                                                    } else {
                                                        userArray.push((findUsers._id).toString())
                                                    }
                                                }
                                            }
                                            if (userArray.length == 0) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                            } else {
                                                condition3priority4a(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray, totalQuestion._id)
                                            }
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                    }
                                }
                                if (totalQuestion.priority5 == true) {
                                    console.log("-263------------------------------");
                                    condition3priority5(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                            } else {
                                console.log("------------2261---------------------", totalQuestion.priority4);

                                if (totalQuestion.priority1 == true) {
                                    condition3priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority2 == true) {
                                    console.log("-45-------------------------------");
                                    condition3priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority3 == true) {
                                    console.log("-120-------------------------------");
                                    condition3priority3(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority4 == true) {
                                    console.log("-49-------------------------------");
                                    let findwhatAppContact = await whatAppContact.findOne({ userID: totalQuestion.userID });
                                    if (findwhatAppContact) {
                                        if (findwhatAppContact.userContacts.length == 0) {
                                            let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                        } else {
                                            var userArray = [];
                                            for (let k = 0; k < findwhatAppContact.userContacts.length; k++) {
                                                let findUsers = await user.findOne({ phone: findwhatAppContact.userContacts[k].phone });
                                                if (userArray.includes((findSchoolMember[j]._id).toString())) {
                                                    console.log("-198-------------------------------");
                                                } else {
                                                    userArray.push((findUsers._id).toString())
                                                }
                                            }
                                            console.log("-------------------", userArray);
                                            if (userArray.length == 0) {
                                                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                            } else {
                                                condition3priority4a(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray, totalQuestion._id)
                                            }
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority4: false, priority5: true } }, { new: true })
                                    }
                                }
                                if (totalQuestion.priority5 == true) {
                                    console.log("-263------------------------------");
                                    condition3priority5(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                            }
                        }
                    } else if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition2: true } }, { new: true })
                        condition2Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition1: true } }, { new: true })
                        condition1Function(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else {
                        console.log("40----------------------------");
                    }
                }
            }
        }
    } else {
        console.log('Question Condition 3 cron job  No data found');
    }
};
async function condition3priority4a(userId, fullDate, hrs3, userArray, questionId) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
    let optionCount;
    if (totalQuestion.optionCount === 0) {
        let obj = {}; optionCount = 0;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 1) {
        let obj = {}; optionCount = 1;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                console.log(obj)
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 2) {
        let obj = {}; optionCount = 2;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 3) {
        let obj = {}; optionCount = 3;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 4) {
        let obj = {}; optionCount = 4;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 5) {
        let obj = {}; optionCount = 5;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 6) {
        let obj = {}; optionCount = 6;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 7) {
        let obj = {}; optionCount = 7;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 8) {
        let obj = {}; optionCount = 8;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 9) {
        let obj = {}; optionCount = 9;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 10) {
        let obj = {}; optionCount = 10;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 11) {
        let obj = {}; optionCount = 11;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 12) {
        let obj = {}; optionCount = 12;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 13) {
        let obj = {}; optionCount = 13;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    let c = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (optionCount >= 14) {
        obj = { priority4: false, condition3: false, priority5: false, optionCount: 14 };
    } else {
        obj = { priority4: false, priority5: true, optionCount: optionCount };
    }
    await questionAnswer.findByIdAndUpdate({ _id: c._id }, { $set: obj }, { new: true });
};
async function condition3priority5(questionId, userId, fullDate, hrs3) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (totalQuestion) {
        if (totalQuestion.optionCount == 14) {
            console.log("6363-----------------------------", totalQuestion.optionCount);
        } else {
            let findUser = await user.findOne({ _id: totalQuestion.userID })
            if (findUser) {
                let findSchoolMember = await user.find({ _id: { $ne: findUser._id }, school: findUser.school });
                if (totalQuestion.condition3 == true) {
                    console.log("27-----------------------------");
                    if (findUser.friends.length > 4) {
                        if (totalQuestion.optionCount == 14) {
                            console.log("145-----------------------------", totalQuestion.optionCount);
                        } else {
                            console.log("Enter into Condition 3", findUser.firstName);
                            if (totalQuestion.type == 'Flirtatious') {
                                console.log("-------------------32-----------------", totalQuestion.type);
                                if (totalQuestion.priority1 == true) {
                                    condition3priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority2 == true) {
                                    console.log("-45-------------------------------");
                                    condition3priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority3 == true) {
                                    console.log("-120-------------------------------");
                                    condition3priority3(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority4 == true) {
                                    console.log("-49-------------------------------");
                                    condition3priority4(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority5 == true) {
                                    console.log("-263------------------------------");
                                    var userArray = [];
                                    if (findSchoolMember.length > 0) {
                                        for (let j = 0; j < findSchoolMember.length; j++) {
                                            if (userArray.includes((findSchoolMember[j]._id).toString())) {
                                                console.log("267================c==================================");
                                            } else {
                                                if ((findUser.gender == 'female') == true) {
                                                    let findFriend = await user.findOne({ _id: (findSchoolMember[j]._id).toString(), gender: 'male' });
                                                    if ((findFriend.flameCount == 0) || (findFriend.flameCount == null)) {
                                                        userArray.push((findFriend._id).toString())
                                                    } if (findFriend.flameCount > 0) {
                                                        console.log("-----------------");
                                                    }
                                                }
                                                if ((findUser.gender == 'male') == true) {
                                                    let findFriend = await user.findOne({ _id: (findSchoolMember[j]._id).toString(), gender: 'female' });
                                                    if ((findFriend.flameCount == 0) || (findFriend.flameCount == null)) {
                                                        userArray.push((findFriend._id).toString())
                                                    } if (findFriend.flameCount > 0) {
                                                        console.log("-----------------");
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority5: false, condition1: true, condition3: false, priority1: true } }, { new: true })
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority5: false, condition1: true, condition3: false, priority1: true } }, { new: true })
                                    } else {
                                        condition3priority5a(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray, totalQuestion._id)
                                    }
                                }
                            } else {
                                console.log("------------2261---------------------", totalQuestion.priority4);
                                if (totalQuestion.priority1 == true) {
                                    condition3priority1(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority2 == true) {
                                    console.log("-45-------------------------------");
                                    condition3priority2(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority3 == true) {
                                    console.log("-120-------------------------------");
                                    condition3priority3(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority4 == true) {
                                    console.log("-49-------------------------------");
                                    condition3priority4(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                                }
                                if (totalQuestion.priority5 == true) {
                                    console.log("-263------------------------------");
                                    var userArray = [];
                                    if (findSchoolMember.length > 0) {
                                        for (let j = 0; j < findSchoolMember.length; j++) {
                                            if (userArray.includes((findSchoolMember[j]._id).toString())) {
                                                console.log("267=======================d===========================");
                                            } else {
                                                userArray.push((kkk).toString())
                                            }
                                        }
                                    } else {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority5: false, condition1: true, condition3: false, priority1: true } }, { new: true })
                                    }
                                    if (userArray.length == 0) {
                                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { priority5: false, condition1: true, condition3: false, priority1: true } }, { new: true })
                                    } else {
                                        condition3priority5a(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime, userArray, totalQuestion._id)
                                    }
                                }
                            }
                        }
                    } else if ((0 <= findSchoolMember.length <= 4) && (0 <= findUser.friends.length <= 4)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition2: true } }, { new: true })
                        condition2Function(totalQuestion._id, totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else if (((findUser.friends.length) == 0) && (findSchoolMember.length == 0)) {
                        let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: { condition3: false, condition1: true } }, { new: true })
                        condition1Function(totalQuestion.userID, totalQuestion.questionDate, totalQuestion.questionTime)
                    } else {
                        console.log("40----------------------------");
                    }
                }
            }
        }
    } else {
        console.log('Question Condition 3 cron job  No data found');
    }
};
async function condition3priority5a(userId, fullDate, hrs3, userArray, questionId) {
    let totalQuestion = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    const sample = userArray.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, userArray.length);
    let optionCount;
    if (totalQuestion.optionCount === 0) {
        let obj = {}; optionCount = 0;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 1) {
        let obj = {}; optionCount = 1;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                console.log(obj)
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 2) {
        let obj = {}; optionCount = 2;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    };
    if (totalQuestion.optionCount == 3) {
        let obj = {}; optionCount = 3;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 4) {
        let obj = {}; optionCount = 4;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 5) {
        let obj = {}; optionCount = 5;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 6) {
        let obj = {}; optionCount = 6;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 7) {
        let obj = {}; optionCount = 7;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 8) {
        let obj = {}; optionCount = 8;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 9) {
        let obj = {}; optionCount = 9;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 10) {
        let obj = {}; optionCount = 10;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 11) {
        let obj = {}; optionCount = 11;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount === 12) {
        let obj = {}; optionCount = 12;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    if (totalQuestion.optionCount == 13) {
        let obj = {}; optionCount = 13;
        if (optionCount < 14) {
            for (let i = 0; i < sample.length; i++) {
                obj[`option_${i + totalQuestion.optionCount + 1}`] = sample[i];
                optionCount++;
                let update = await questionAnswer.findByIdAndUpdate({ _id: totalQuestion._id }, { $set: obj }, { new: true });
            }
        }
    }
    let c = await questionAnswer.findOne({ _id: questionId, questionDate: fullDate, questionTime: hrs3, userID: userId });
    if (optionCount >= 14) {
        obj = { priority5: false, condition3: false, optionCount: 14 };
    } else {
        obj = { condition1: true, condition2: false, priority2_1: true, priority2_2: false, condition3: false, priority1: true, priority2: false, priority3: false, priority4: false, priority5: false, optionCount: optionCount };
        condition1Function(questionId, userId, fullDate, hrs3)
    }
    await questionAnswer.findByIdAndUpdate({ _id: c._id }, { $set: obj }, { new: true });
};
setInterval(startCondition1, 60000);
