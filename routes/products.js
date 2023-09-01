var router = require('express').Router()



router.get('/', function (req, res) {
    res.send("<h1>These are the products</h1>")
})


router.get('/add-product', function (req, res) {
    res.send('<h1>This api will add your product</h1>')
})




module.exports = router