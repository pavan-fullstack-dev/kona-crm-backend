var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var leadSchema=new Schema(
    {
        leadDate:{
            type:String,
            required:true
        },
        emailId:{
            type:String,
            required:true
        },
        mobile:{
            type:Number,
            required:true
        },
        technology:{
            type:String,
            required:true
        },
        source:{
            type:String,
            required:true,
        },
        leadOwner:{
            type:String,
            required:true
        },
        
        
    }
);

module.exports=mongoose.model('lead',leadSchema)