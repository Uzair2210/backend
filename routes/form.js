const router = require('express').Router();
const registrationModel = require('../models/users');

router.get('/', async function (req, res) {
    var students = await registrationModel.create(req.query);
    res.send("<h1>Form Submission successfull!</h1>");
});


module.exports = router;