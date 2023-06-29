const cronJob = require("cron").CronJob;
let questionAnswer = require("../model/questionAnswer");
let questions = require("../model/questions");
let user = require("../model/user");
new cronJob("*/20 * * * * *", async function () {
    console.log("-------------------------");
    let hr = new Date(Date.now()).getHours();
    let date = new Date(Date.now()).getDate();
    let month = new Date(Date.now()).getMonth() + 1;
    let year = new Date(Date.now()).getFullYear();
    let fullDate = (`${date}/${month}/${year}`).toString()
    if ((hr + 1) == '07') {
        let findUser = await user.find({});
        findUser.map(async i => {
            if ((i.friends.length > 4) == false) {
                console.log("No friends currently", i.firstName, "-", i.lastName, "-", i.userName);
            } else {
                let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate }).count();
                if (totalQuestion == 12) {
                    console.log("total 12 question created", fullDate, "hr    ", hr + 1);
                } else {
                    let findQuestion = await questions.find({});
                    let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                    QuesRandom.map(async k => {
                        const sample = i.friends.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
                        if (!findQuestionAnswer) {
                            let obj = {
                                userID: i._id,
                                questionTime: hr + 1,
                                questionDate: fullDate,
                                question: k._id,
                                option_1: sample[0],
                                option_2: sample[1],
                                option_3: sample[2],
                                option_4: sample[3],
                                option_5: sample[4] || sample[3] || sample[2] || sample[1] || sample[0],
                                option_6: sample[5] || sample[2] || sample[1] || sample[0] || sample[3] || sample[4],
                                option_7: sample[6] || sample[1] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2],
                                option_8: sample[7] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2] || sample[6] || sample[1],
                                option_9: sample[8] || sample[1] || sample[2] || sample[3] || sample[4] || sample[5] || sample[6] || sample[7] || sample[0],
                                option_10: sample[9] || sample[2] || sample[4] || sample[5] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[3],
                                option_11: sample[10] || sample[3] || sample[2] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[5] || sample[9] || sample[4],
                                option_12: sample[11] || sample[0] || sample[6] || sample[1] || sample[7] || sample[2] || sample[8] || sample[3] || sample[9] || sample[4] || sample[10] || sample[5],
                            }
                            const Data = await questionAnswer.create(obj);
                        } else {
                            console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
                        }
                    })
                }
            }
        })
    }
    if ((hr + 1) == '09') {
        let findUser = await user.find({});
        findUser.map(async i => {
            if ((i.friends.length > 4) == false) {
                console.log("No friends currently", i.firstName, "-", i.lastName, "-", i.userName);
            } else {
                let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate }).count();
                if (totalQuestion == 12) {
                    console.log("total 12 question created", fullDate, "hr    ", hr + 1);
                } else {
                    let findQuestion = await questions.find({});
                    let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                    QuesRandom.map(async k => {
                        const sample = i.friends.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
                        if (!findQuestionAnswer) {
                            let obj = {
                                userID: i._id,
                                questionTime: hr + 1,
                                questionDate: fullDate,
                                question: k._id,
                                option_1: sample[0],
                                option_2: sample[1],
                                option_3: sample[2],
                                option_4: sample[3],
                                option_5: sample[4] || sample[3] || sample[2] || sample[1] || sample[0],
                                option_6: sample[5] || sample[2] || sample[1] || sample[0] || sample[3] || sample[4],
                                option_7: sample[6] || sample[1] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2],
                                option_8: sample[7] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2] || sample[6] || sample[1],
                                option_9: sample[8] || sample[1] || sample[2] || sample[3] || sample[4] || sample[5] || sample[6] || sample[7] || sample[0],
                                option_10: sample[9] || sample[2] || sample[4] || sample[5] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[3],
                                option_11: sample[10] || sample[3] || sample[2] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[5] || sample[9] || sample[4],
                                option_12: sample[11] || sample[0] || sample[6] || sample[1] || sample[7] || sample[2] || sample[8] || sample[3] || sample[9] || sample[4] || sample[10] || sample[5],
                            }
                            const Data = await questionAnswer.create(obj);
                        } else {
                            console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
                        }
                    })
                }
            }
        })
    }
    if ((hr + 1) == '11') {
        let findUser = await user.find({});
        findUser.map(async i => {
            if ((i.friends.length > 4) == false) {
                console.log("No friends currently", i.firstName, "-", i.lastName, "-", i.userName);
            } else {
                let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate }).count();
                if (totalQuestion == 12) {
                    console.log("total 12 question created", fullDate, "hr    ", hr + 1);
                } else {
                    let findQuestion = await questions.find({});
                    let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                    QuesRandom.map(async k => {
                        const sample = i.friends.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
                        if (!findQuestionAnswer) {
                            let obj = {
                                userID: i._id,
                                questionTime: hr + 1,
                                questionDate: fullDate,
                                question: k._id,
                                option_1: sample[0],
                                option_2: sample[1],
                                option_3: sample[2],
                                option_4: sample[3],
                                option_5: sample[4] || sample[3] || sample[2] || sample[1] || sample[0],
                                option_6: sample[5] || sample[2] || sample[1] || sample[0] || sample[3] || sample[4],
                                option_7: sample[6] || sample[1] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2],
                                option_8: sample[7] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2] || sample[6] || sample[1],
                                option_9: sample[8] || sample[1] || sample[2] || sample[3] || sample[4] || sample[5] || sample[6] || sample[7] || sample[0],
                                option_10: sample[9] || sample[2] || sample[4] || sample[5] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[3],
                                option_11: sample[10] || sample[3] || sample[2] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[5] || sample[9] || sample[4],
                                option_12: sample[11] || sample[0] || sample[6] || sample[1] || sample[7] || sample[2] || sample[8] || sample[3] || sample[9] || sample[4] || sample[10] || sample[5],
                            }
                            const Data = await questionAnswer.create(obj);
                        } else {
                            console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
                        }
                    })
                }
            }
        })
    }
    if ((hr + 1) == '13') {
        console.log("------------");
        let findUser = await user.find({});
        findUser.map(async i => {
            if ((i.friends.length < 4) == true) {
                console.log("No friends currently", i._id, "-", i.lastName, "-", i.userName);
            } else if ((i.friends.length >= 4) == true) {
                let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate }).count();
                if (totalQuestion == 12) {
                    console.log("total 12 question created", fullDate, "hr    ", hr + 1);
                } else {
                    let findQuestion = await questions.find({});
                    let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                    QuesRandom.map(async k => {
                        const sample = i.friends.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
                        if (!findQuestionAnswer) {
                            let obj = {
                                userID: i._id,
                                questionTime: hr + 1,
                                questionDate: fullDate,
                                question: k._id,
                                option_1: sample[0],
                                option_2: sample[1],
                                option_3: sample[2],
                                option_4: sample[3],
                                option_5: sample[4] || sample[3] || sample[2] || sample[1] || sample[0],
                                option_6: sample[5] || sample[2] || sample[1] || sample[0] || sample[3] || sample[4],
                                option_7: sample[6] || sample[1] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2],
                                option_8: sample[7] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2] || sample[6] || sample[1],
                                option_9: sample[8] || sample[1] || sample[2] || sample[3] || sample[4] || sample[5] || sample[6] || sample[7] || sample[0],
                                option_10: sample[9] || sample[2] || sample[4] || sample[5] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[3],
                                option_11: sample[10] || sample[3] || sample[2] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[5] || sample[9] || sample[4],
                                option_12: sample[11] || sample[0] || sample[6] || sample[1] || sample[7] || sample[2] || sample[8] || sample[3] || sample[9] || sample[4] || sample[10] || sample[5],
                            }
                            const Data = await questionAnswer.create(obj);
                        } else {
                            console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
                        }
                    })
                }
            }
        })
    }
    if ((hr + 1) == '15') {
        let findUser = await user.find({});
        findUser.map(async i => {
            if ((i.friends.length > 4) == false) {
                console.log("No friends currently", i.firstName, "-", i.lastName, "-", i.userName);
            } else {
                let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate }).count();
                if (totalQuestion == 12) {
                    console.log("total 12 question created", fullDate, "hr    ", hr + 1);
                } else {
                    let findQuestion = await questions.find({});
                    let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                    QuesRandom.map(async k => {
                        const sample = i.friends.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
                        if (!findQuestionAnswer) {
                            let obj = {
                                userID: i._id,
                                questionTime: hr + 1,
                                questionDate: fullDate,
                                question: k._id,
                                option_1: sample[0],
                                option_2: sample[1],
                                option_3: sample[2],
                                option_4: sample[3],
                                option_5: sample[4] || sample[3] || sample[2] || sample[1] || sample[0],
                                option_6: sample[5] || sample[2] || sample[1] || sample[0] || sample[3] || sample[4],
                                option_7: sample[6] || sample[1] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2],
                                option_8: sample[7] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2] || sample[6] || sample[1],
                                option_9: sample[8] || sample[1] || sample[2] || sample[3] || sample[4] || sample[5] || sample[6] || sample[7] || sample[0],
                                option_10: sample[9] || sample[2] || sample[4] || sample[5] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[3],
                                option_11: sample[10] || sample[3] || sample[2] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[5] || sample[9] || sample[4],
                                option_12: sample[11] || sample[0] || sample[6] || sample[1] || sample[7] || sample[2] || sample[8] || sample[3] || sample[9] || sample[4] || sample[10] || sample[5],
                            }
                            const Data = await questionAnswer.create(obj);
                        } else {
                            console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
                        }
                    })
                }
            }
        })
    }
    if ((hr + 1) == '17') {
        let findUser = await user.find({});
        findUser.map(async i => {
            if ((i.friends.length > 4) == false) {
                console.log("No friends currently", i.firstName, "-", i.lastName, "-", i.userName);
            } else {
                let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate }).count();
                if (totalQuestion == 12) {
                    console.log("total 12 question created", fullDate, "hr    ", hr + 1);
                } else {
                    let findQuestion = await questions.find({});
                    let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                    QuesRandom.map(async k => {
                        const sample = i.friends.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
                        if (!findQuestionAnswer) {
                            let obj = {
                                userID: i._id,
                                questionTime: hr + 1,
                                questionDate: fullDate,
                                question: k._id,
                                option_1: sample[0],
                                option_2: sample[1],
                                option_3: sample[2],
                                option_4: sample[3],
                                option_5: sample[4] || sample[3] || sample[2] || sample[1] || sample[0],
                                option_6: sample[5] || sample[2] || sample[1] || sample[0] || sample[3] || sample[4],
                                option_7: sample[6] || sample[1] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2],
                                option_8: sample[7] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2] || sample[6] || sample[1],
                                option_9: sample[8] || sample[1] || sample[2] || sample[3] || sample[4] || sample[5] || sample[6] || sample[7] || sample[0],
                                option_10: sample[9] || sample[2] || sample[4] || sample[5] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[3],
                                option_11: sample[10] || sample[3] || sample[2] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[5] || sample[9] || sample[4],
                                option_12: sample[11] || sample[0] || sample[6] || sample[1] || sample[7] || sample[2] || sample[8] || sample[3] || sample[9] || sample[4] || sample[10] || sample[5],
                            }
                            const Data = await questionAnswer.create(obj);
                        } else {
                            console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
                        }
                    })
                }
            }
        })
    }
    if ((hr + 1) == '19') {
        let findUser = await user.find({});
        findUser.map(async i => {
            if ((i.friends.length > 4) == false) {
                console.log("No friends currently", i.firstName, "-", i.lastName, "-", i.userName);
            } else {
                let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate }).count();
                if (totalQuestion == 12) {
                    console.log("total 12 question created", fullDate, "hr    ", hr + 1);
                } else {
                    let findQuestion = await questions.find({});
                    let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                    QuesRandom.map(async k => {
                        const sample = i.friends.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
                        if (!findQuestionAnswer) {
                            let obj = {
                                userID: i._id,
                                questionTime: hr + 1,
                                questionDate: fullDate,
                                question: k._id,
                                option_1: sample[0],
                                option_2: sample[1],
                                option_3: sample[2],
                                option_4: sample[3],
                                option_5: sample[4] || sample[3] || sample[2] || sample[1] || sample[0],
                                option_6: sample[5] || sample[2] || sample[1] || sample[0] || sample[3] || sample[4],
                                option_7: sample[6] || sample[1] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2],
                                option_8: sample[7] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2] || sample[6] || sample[1],
                                option_9: sample[8] || sample[1] || sample[2] || sample[3] || sample[4] || sample[5] || sample[6] || sample[7] || sample[0],
                                option_10: sample[9] || sample[2] || sample[4] || sample[5] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[3],
                                option_11: sample[10] || sample[3] || sample[2] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[5] || sample[9] || sample[4],
                                option_12: sample[11] || sample[0] || sample[6] || sample[1] || sample[7] || sample[2] || sample[8] || sample[3] || sample[9] || sample[4] || sample[10] || sample[5],
                            }
                            const Data = await questionAnswer.create(obj);
                        } else {
                            console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
                        }
                    })
                }
            }
        })
    }
    if ((hr + 1) == '21') {
        let findUser = await user.find({});
        findUser.map(async i => {
            if ((i.friends.length > 4) == false) {
                console.log("No friends currently", i.firstName, "-", i.lastName, "-", i.userName);
            } else {
                let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate }).count();
                if (totalQuestion == 12) {
                    console.log("total 12 question created", fullDate, "hr    ", hr + 1);
                } else {
                    let findQuestion = await questions.find({});
                    let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                    QuesRandom.map(async k => {
                        const sample = i.friends.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
                        if (!findQuestionAnswer) {
                            let obj = {
                                userID: i._id,
                                questionTime: hr + 1,
                                questionDate: fullDate,
                                question: k._id,
                                option_1: sample[0],
                                option_2: sample[1],
                                option_3: sample[2],
                                option_4: sample[3],
                                option_5: sample[4] || sample[3] || sample[2] || sample[1] || sample[0],
                                option_6: sample[5] || sample[2] || sample[1] || sample[0] || sample[3] || sample[4],
                                option_7: sample[6] || sample[1] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2],
                                option_8: sample[7] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2] || sample[6] || sample[1],
                                option_9: sample[8] || sample[1] || sample[2] || sample[3] || sample[4] || sample[5] || sample[6] || sample[7] || sample[0],
                                option_10: sample[9] || sample[2] || sample[4] || sample[5] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[3],
                                option_11: sample[10] || sample[3] || sample[2] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[5] || sample[9] || sample[4],
                                option_12: sample[11] || sample[0] || sample[6] || sample[1] || sample[7] || sample[2] || sample[8] || sample[3] || sample[9] || sample[4] || sample[10] || sample[5],
                            }
                            const Data = await questionAnswer.create(obj);
                        } else {
                            console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
                        }
                    })
                }
            }
        })
    }
    if ((hr + 1) == '23') {
        let findUser = await user.find({});
        findUser.map(async i => {
            if ((i.friends.length > 4) == false) {
                console.log("No friends currently", i.firstName, "-", i.lastName, "-", i.userName);
            } else {
                let totalQuestion = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate }).count();
                if (totalQuestion == 12) {
                    console.log("total 12 question created", fullDate, "hr    ", hr + 1);
                } else {
                    let findQuestion = await questions.find({});
                    let QuesRandom = findQuestion.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                    QuesRandom.map(async k => {
                        const sample = i.friends.map(x => ({ x, r: Math.random() })).sort((a, b) => a.r - b.r).map(a => a.x).slice(0, 12);
                        let findQuestionAnswer = await questionAnswer.findOne({ userID: i._id, questionTime: hr + 1, questionDate: fullDate, question: k._id });
                        if (!findQuestionAnswer) {
                            let obj = {
                                userID: i._id,
                                questionTime: hr + 1,
                                questionDate: fullDate,
                                question: k._id,
                                option_1: sample[0],
                                option_2: sample[1],
                                option_3: sample[2],
                                option_4: sample[3],
                                option_5: sample[4] || sample[3] || sample[2] || sample[1] || sample[0],
                                option_6: sample[5] || sample[2] || sample[1] || sample[0] || sample[3] || sample[4],
                                option_7: sample[6] || sample[1] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2],
                                option_8: sample[7] || sample[0] || sample[3] || sample[4] || sample[5] || sample[2] || sample[6] || sample[1],
                                option_9: sample[8] || sample[1] || sample[2] || sample[3] || sample[4] || sample[5] || sample[6] || sample[7] || sample[0],
                                option_10: sample[9] || sample[2] || sample[4] || sample[5] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[3],
                                option_11: sample[10] || sample[3] || sample[2] || sample[6] || sample[1] || sample[7] || sample[0] || sample[8] || sample[5] || sample[9] || sample[4],
                                option_12: sample[11] || sample[0] || sample[6] || sample[1] || sample[7] || sample[2] || sample[8] || sample[3] || sample[9] || sample[4] || sample[10] || sample[5],
                            }
                            const Data = await questionAnswer.create(obj);
                        } else {
                            console.log("Question already created for", i.firstName, "-", i.lastName, "-", i.userName);
                        }
                    })
                }
            }
        })
    }
// }).start();
}).stop()