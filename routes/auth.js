const router = require('express').Router()
const jwt = require('jsonwebtoken')


router.post("/login", async (req, res) => {
    try {
        

        // Data stored in DB at the time of registration
        var data = {username:"admin",password:"admin123"}

        // JSON WEB TOKEN   (JWT)
        var userData = req.body


        if((userData.username === data.username)  && (userData.password === data.password)){

            var token = jwt.sign({username:"admin"},"ajsdfSDKFJ%&&$4773",{expiresIn:"30m"})

            res.cookie("accessToken",token,{secure:true,httpOnly:true})

            res.json({
                success:true,
                message:"You'r loggedin Successfully!"
            })


        }else{
            res.status(403).json({
                success:false,
                message:"Invalid Username or Password!"
            })
        }




    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Something went wrong, Please try again later!"
        })
    }
})





module.exports = router