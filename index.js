const express = require('express');
const app = express();


const productRoutes = require('./routes/products');
const customerRoutes = require('./routes/customers');



app.use('/api/products',productRoutes)
app.use('/api/customers',customerRoutes)





app.get('/', function (req, res) {
    res.send("<h1>This is the main page</h1>")
})



app.listen(3000,()=>{
    console.log("Server is Running...")
})