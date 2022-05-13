const mongoose = require("mongoose")
const express = require("express")

const msc = require("./Router/mscRouter")
require("dotenv/config")
const app = express()


app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Good Morning")
})

app.use("/msc",msc)
app.listen(process.env.PORT || 5000);

mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Database Connected Successfully..!");
})
