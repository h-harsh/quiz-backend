const express = require("express");
const router = express.Router();
const {QuizData} = require('../Models/quizData.model')
const {User} = require('../Models/user.model')

router.route('/:quizId')
// send quiz data
.get(async(req, res) => {
    const {quizId} = req.params
    const quiz = await QuizData.findById( quizId)
    res.json({quizData: quiz})
})

router.route('/')
// posting score of quiz in user 
.post(async (req, res) => {
    const {quizName, score} = req.body
    const {userId} = req.user
    const user = await User.findById(userId)
    user.userData.push({quizName, score})
    await user.save()
})

module.exports = router