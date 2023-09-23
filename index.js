const express = require('express')
const app = express()
const authRoutes = require('./routes/auth')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const studentsRoutes = require('./routes/form')


app.set("view engine" , "ejs")
app.use(express.static(__dirname+"/public"))
app.use(cookieParser())


app.use(express.json())
app.use('/api/students',studentsRoutes)
app.use('/api/auth',authRoutes)

app.get("/",(req,res)=>{
    res.render(__dirname+"/views/index.ejs")
})



app.get("/login",(req,res)=>{
    if(req.cookies.accessToken){
        try{
            var isTokenValid = jwt.verify(req.cookies.accessToken,"uiop@@4743")
            res.redirect('/dashboard')
        }catch(error){
        }
    }
    res.render(__dirname+"/views/login.ejs")
})


app.get("/dashboard",(req,res)=>{
    if(req.cookies.accessToken){

        try {
            var isTokenValid = jwt.verify(req.cookies.accessToken,"uiop@@4743")
        } catch (error) {
            try {
                var isTokenValid = jwt.verify(req.cookies.refreshToken, "uiop@@4743")

                var token = jwt.sign({ username: "admin" }, "uiop@@4743", { expiresIn: "30s" })
                var token1 = jwt.sign({ username: "admin" }, "uiop@@4743", { expiresIn: "7d" })

                res.cookie("accessToken", token, { secure: true, httpOnly: true })
                res.cookie("refreshToken", token1, { secure: true, httpOnly: true })


            } catch (error) {
            res.redirect('/login')
        }
    }
 } else{
        res.redirect('/login')
    }

    res.render(__dirname+"/views/dashboard.ejs")
})


mongoose.connect('mongodb+srv://uzair-cluster:uzair2552@uzaircluster.fdml45t.mongodb.net/backend?retryWrites=true&w=majority').then((res)=>{

    console.log("Connected!")
}).catch((err)=>{
    console.log(err.message)
})



var port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("server is running")
})