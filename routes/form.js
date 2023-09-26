const router = require('express').Router();

router.get('/', async function (req, res) {
    var students = await users.create(req.query);
    res.send("<h1>Form Submission Successfully!</h1>.");
});


module.exports = router;