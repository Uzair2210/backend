var router = require('express').Router()
var studentModel = require('../models/students')


router.post('/',async function (req, res) {
    await studentModel.create(req.body)
    res.send("Student Enrolled Successfully!")
})


router.get('/',async function (req, res) {
    var students = await studentModel.find()
    res.json(students)
})


router.put('/',async function (req, res) {
    await studentModel.findByIdAndUpdate(req.query.id,{$set:req.body})
    res.send("Student Updated Successfully!")
})

router.delete('/',async function (req, res) {
    await studentModel.findByIdAndDelete(req.query.i)
    res.send("Student Deleted Successfully!")
})



module.exports = router