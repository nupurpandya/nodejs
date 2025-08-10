const express=require('express');
const app=express();
const urlRouter=require('./routes/url')

app.use(express.json());

app.use('/url',urlRouter)
module.exports=app
