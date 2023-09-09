const mongoose = require('mongoose')

var studentModel = mongoose.model("students",new mongoose.Schema({
    fullName:String,
    gender:String,
    age:Number
}))


module.exports = studentModel