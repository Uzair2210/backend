const router = require('express').Router();
const users = require('../models/users');
const bcrypt = require('bcrypt')


router.post("/register",async (req,res)=>{
    try {

        var hashedPassword = await bcrypt.hash(req.body.password,10)

        var user = await UserModel.create({...req.body,password:hashedPassword})

        res.json({
            success:true,
            message:user
        })
        
        

    } catch (error) {
        res.json({
            success:false,
            message:"Something went wrong, Please try again later!"
        })
    }
})






router.get('/', async function (req, res) {
    var students = await users.create(req.query);
    res.send("<h1>Form Submission Successfully!</h1>.");
});


module.exports = router;