const express = require('express');
const users=require('./MOCK_DATA (1).json');
const app=express();
const mongoose=require('mongoose');
const userRouter=require('./routes/user');
const fs=require('fs');
const {logReqRes} = require('./middlewares/index');
const {connectMongoDb}  = require('./connection');
const { log } = require('console');



//connect database

// .then(() =>{
//     console.log('DB connected successfully!');
// })
// .catch((error) =>{
//     console.log("DB FACING ERRORS!");
// })



// if we find or collect req body data then express does not know these data which format then we use middleware for parse a req body data 
app.use(express.urlencoded({extended:false}));

// connect mongodb
connectMongoDb('mongodb://localhost:27017/youtubeApp1')
.then(() => {
    console.log('DB connected successfully!');
})
.catch((error) =>{
    console.log('DB FACING ERROR');
})
app.use('/user',userRouter);

app.use(logReqRes('log.txt'));

const port=8000;


app.listen(port,() =>{
    console.log(`server started at \nlocalhost:${port}`);
})

