const cronJob = require("cron").CronJob;
let questionAnswer = require("../model/questionAnswer");
let questions = require("../model/questions");
let whatAppContact = require("../model/whatAppContact");
let user = require("../model/user");
new cronJob("*/20 * * * * *", async function () {
    console.log("-------------------------");
    let hr = new Date(Date.now()).getHours();
    let date = new Date(Date.now()).getDate();
    let month = new Date(Date.now()).getMonth() + 1;
    let year = new Date(Date.now()).getFullYear();
    let fullDate = (`${date}/${month}/${year}`).toString()
    let findUser = await user.find({});
    findUser.map(async i => {
        //1. let findSchoolMember = await user.find({ _id: { $ne: i._id }, school: i.school });
        // if (((i.friends.length) == 0) && (findSchoolMember.length == 0)) {
        //     let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate }).count();
        //     if (totalQuestion == 12) {
        //         console.log("total 12 question created", fullDate, "hr    ", hr + 1);
        //     } else {
        //         let findQuestion = await questions.find({});
        //         let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
        //         QuesRandom.map(async k => {
        //             let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
        //             if (!findQuestionAnswer) {
        //                 let obj = {
        //                     userID: i._id,
        //                     questionTime: hr + 1,
        //                     questionDate: fullDate,
        //                     question: k._id,
        //                 }
        //                 const Data = await questionAnswer.create(obj);
        //             } else {
        //                 console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
        //             }
        //         })
        //     }
        // }
        //2.  if (((0 < findSchoolMember.length) && (findSchoolMember.length < 4)) && ((0 < i.friends.length) && (i.friends.length < 4))) {
        //     // console.log(i.friends.length, "-----------257--------------", findSchoolMember.length, "===", ((0 < findSchoolMember.length) && (findSchoolMember.length < 4)) && ((0 < i.friends.length) && (i.friends.length < 4)));
        // }
        //3. 
        if (i.friends.length >= 4) {
            console.log(i.friends.length, "--------------260-----------");
            let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr, questionDate: fullDate }).count();
            if (totalQuestion == 12) {
                console.log("total 12 question created", fullDate, "hr    ", hr);
            } else {
                if (i.poleUser.length > 0) { // 3. Priority1

                } else {
                    // 3. Priority2
                    var userArray = [];
                    for (let j = 0; j < i.friends.length; j++) {
                        if (userArray.includes(i.friends[j].toString())) {

                        } else {
                            let findFriend = await user.findById({ _id: i.friends[j].toString() });
                            if (findFriend.flameCount == 0) {
                                userArray.push(i.friends[j].toString())
                            }
                        }
                    }
                    let findSchoolMember = await user.find({ _id: { $ne: i._id }, school: i.school });
                    for (let j = 0; j < findSchoolMember.length; j++) {
                        if (userArray.includes(findSchoolMember[j]._id).toString()) {

                        } else {
                            if (findSchoolMember[j].flameCount == 0) {
                                userArray.push((findSchoolMember[j]._id).toString())
                            }
                        }
                    }
                }
                // 3. Priority3
                console.log(i.friends);



                //3. Priority4
                let findWhatAppContact = await whatAppContact.findOne({ userID: i._id });
                if(findWhatAppContact){
                    
                }
            }
        }
    })
    // }).start();
}).stop()
