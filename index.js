require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.port

app.get("/",(req,res)=>{
    res.send({status:true,message:"server is started on port",PORT})
})

app.listen(PORT,()=>{
    console.log(`server is started on port ${PORT}`);
})