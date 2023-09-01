var router = require('express').Router()



router.get('/', function (req, res) {
    res.send("<h1>These are your Customers</h1>")
})


router.get('/add-customer', function (req, res) {
    res.send('<h1>This api will add customers</h1>')
})




module.exports = router