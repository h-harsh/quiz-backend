const mongoose  = require('mongoose')

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Name is required"]
    },
    userName: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "mail is required"]
    },
    password: {
        type: String,
        required: [true, "Password ke liye bhi bole kya ab"]
    },
    userData:[
        {
            quizName:String,
            score:Number
        }
    ]
})

const User = mongoose.model('User', UserSchema)

module.exports = {User}