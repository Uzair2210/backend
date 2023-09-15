const express = require('express')
const app = express()
const studentsRoutes = require('./routes/students')
const mongoose = require('mongoose')



app.use(express.json())
app.use('/api/students',studentsRoutes)


mongoose.connect('mongodb+srv://uzair-cluster:uzair2552@uzaircluster.fdml45t.mongodb.net/backend?retryWrites=true&w=majority').then((res)=>{

    console.log("Connected!")
}).catch((err)=>{
    console.log(err.message)
})



var port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("server is running")
})