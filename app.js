const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users.js')

const app = express();
const PORT = 5000;

//specifies that we will use json in our entire app
app.use(bodyParser.json())

app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    res.send('My name is hughes')
})

app.listen(PORT,()=>{
    console.log(`Server runnig on port:http://localhost:${PORT}`);
})