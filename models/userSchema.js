const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_firstname:{
        type:String,
        trim:true,
        required:true
    },
    user_lastname:{
        type:String,
        trim:true,
        required:true
    },
    user_emailid:{
        type:String,
        trim:true,
        required:true
    },
    user_mobile:{
        type:Number,
        required:true
    },
    user_password:{
        type:String,
        trim:true,
        required:true
    },
   
}, {timestamps: true})

module.exports = mongoose.model("user", userSchema)