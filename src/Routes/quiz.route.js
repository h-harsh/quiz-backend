const express = require("express");
const router = express.Router();
const {QuizData} = require('../Models/quizData.model')
const {User} = require('../Models/user.model')
const {authVerify} = require('../utils/authVerify')

router.route('/:quizId')
// send quiz data
.get(authVerify, async(req, res) => {
    const {quizId} = req.params
    const quiz = await QuizData.findById( quizId)
    res.json({quizData: quiz})
})

router.route('/')
// posting score of quiz in user 
.post(authVerify, async (req, res) => {
    const {quizName, score} = req.body
    const {userId} = req.user
    const user = await User.findById(userId)
    user.userData.push({quizName, score})
    await user.save()
    res.json({user:user.userData})
})

router.route('/quiz/leaderboard')
.get(authVerify, async(req, res) => {
    const allUser = await User.find({});
    res.json({data: allUser})
})

module.exports = router