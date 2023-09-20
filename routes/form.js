const router = require('express').Router();
const registrationModel = require('../models/studentsModel');

router.get('/', async function (req, res) {
    var students = await registrationModel.create(req.query);
    res.send("<h1>Form Submitted</h1>.");
});


module.exports = router;