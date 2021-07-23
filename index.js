const express = require('express')
const {dbConnector} = require('./src/db/dbConnect')
const cors = require('cors')
const app = express();
const port = 7000;
const QuizData = require('./src/Models/quizData.model')

app.use(express.json())
app.use(cors());

dbConnector()
const user = require('./src/Routes/user.route')
const quiz = require('./src/Routes/quiz.route')

app.use('/quiz', quiz)


app.get('/',(req, res) => {
    res.send("Hello Quiz")
})

app.use((req, res) => {
    res.status(404).json({ success: false, message: "route not found on server, please check"})
  })
  
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "error occured, see the errMessage key for more details", errorMessage: err.message})
  })
  

app.listen(port, () => {
    console.log("app is listening, bolo")
})