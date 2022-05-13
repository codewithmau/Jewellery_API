const mongoose = require("mongoose")
const mscSchema = mongoose.Schema({

Firstname:{type:String,required:true},
Middlename:{type:String,required:true},
Lastname:{type:String,required:true},
Collagename:{type:String,required:true},
Email_id:{type:String,required:true},
Mobile_no:{type:Number,required:true},
Department:{type:String,required:true},
City:{type:String,required:true}

})

module.exports = mongoose.model("msc",mscSchema)