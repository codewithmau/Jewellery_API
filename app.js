const mongoose = require("mongoose")
const express = require("express")

const shop = require("./Route/shopRoute")
const user = require("./Route/userRoute")
const login = require("./Route/loginRoute")

const app = express()
require("dotenv/config")

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/shop",shop)
app.use("/user",user)
app.use("/login",login)

app.listen(process.env.PORT || 4000);

mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Database Connected Succefully..!");
})