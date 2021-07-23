const mongoose = require("mongoose");
const quiz1 = require('../db/data/quiz1')
const quiz2 = require('../db/data/quiz2')
const quiz3 = require('../db/data/quiz3')

const QuizDataSchema = mongoose.Schema({
  quizName: String,
  questions: [
    {
      question: String,
      options: [
        {
          text: String,
          isRight: Boolean,
          isUserSelected: Boolean,
        },
      ],
    },
  ]
});

const QuizData = mongoose.model('QuizData', QuizDataSchema)

// async function hello (){
//   const NewQuizData = new QuizData(quiz3.quiz3)
//   await NewQuizData.save()
// }
// hello()

module.exports = {QuizData}



