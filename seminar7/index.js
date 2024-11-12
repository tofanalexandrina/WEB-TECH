const express = require('express'); 
const cors =require('cors');
const userRoutes=require('./user/user.routes');
const dotenv=require("dotenv");
const path=require('path');

const app = express(); 
dotenv.config();

const PORT=process.env.PORT||3000;

app.use(express.static(path.join(__dirname, 'client')));
app.use(cors({
    origin:'http://127.0.0.1:5500'
}));
app.use("/users", userRoutes)

app.get('/', function (req, res) { 
  res.send('Hello World') 
}) 

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://127.0.0.1:${PORT}`)
});

