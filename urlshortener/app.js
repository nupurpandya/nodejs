const express=require('express');
const app=express();
const urlRouter=require('./routes/url')
const userRouter=require('./routes/user')

app.use(express.json());

app.use('/url',urlRouter)
app.use('/user',userRouter)
module.exports=app
