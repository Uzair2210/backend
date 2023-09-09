const express = require('express')
const app = express()
const studentsRoutes = require('./routes/students')
const mongoose = require('mongoose')



app.use(express.json())
app.use('/api/students',studentsRoutes)



mongoose.connect('mongodb://127.0.0.1:27017').then((res)=>{
    console.log("Connected!")
}).catch((err)=>{
    console.log(err.message)
})



var port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("server is running")
})