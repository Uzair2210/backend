const mongoose = require('mongoose');

const studentsModel = mongoose.model('Students', new mongoose.Schema({
    fullname:String,
    username:String,
    email:String,
    phone:String,
    gender:String,
}));

module.exports = studentsModel;