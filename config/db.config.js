var mongoose=require('mongoose');
var Config=require("../config/app.config");


exports.connect=()=>{

    mongoose.connect(Config.config.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
      
        if(err){
            console.log("error");
        }
        else{
            console.log("connected to Data Base in MONGO_URL");
        }

    });

  
}
