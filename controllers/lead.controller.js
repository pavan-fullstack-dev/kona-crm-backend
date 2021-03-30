var LeadModel= require('../models/leadschema');
var JWT=require("jsonwebtoken");
var Config=require("../config/app.config");
var url= require('url');

exports.CreateLead=(request,response)=>{

    console.log(request.body);
    var userData=request.body;
    var LeadCollection=new LeadModel(userData);
    LeadCollection.save(function(err, doc){
        if(err){
            response.send({result:err.message})
        }
        if(doc._id){
            var payload={id:doc._id};
            var token=JWT.sign(payload,Config.config.JWT_SECRET)
          response.send({result:"Lead Created", token:token});   
        }
    })
}
// exports.UpdateLead=(request,response)=>{
//     var userData=request.body;
//     LeadModel.findOne({emailId:userData.emailId},(err, doc) => {
//         if(err){
//             console.log(err);
//             response.send({status:false, err:err.message})
//         } 
//          if(doc){
//             //  console.log(doc)
                
//                  LeadModel.updateone({emailId:userData.emailId},{leadDate: userData.leadDate},{mobile:userData.mobile},{technology:userData.technology},{source:userData.source},{leadOwner:userData.leadOwner},(err,res) => {
//                      if(err){
//                         console.log(err);
//                         response.send({status:false, err:err.message})
//                      }
//                      if(res){
//                         response.send({status:true, message:"UpdatedLead"})
//                        // console.log("password changed from " + doc.password + "  to  " + userData.newPassword )
//                      }
//                  })

//                }
               
//          })
//         }
        exports.UpdateLead=function(request,response){
            var email=request.params.emailId;
            var UpdatedLead=request.body;
 
        
            LeadModel.updateOne({email:email},UpdatedLead,function(err,res){
                if(err){
                    response.send(err.message);
                    console.log("error")
                }
                if(res){
                    response.send(res);
                    console.log("success")
                }
            })
        }
        exports.deleteLead= function(request,response){

            var email=request.params.emailId;
        
            // console.log('email',email);
        
            LeadModel.deleteOne({email:email},function(err){
                if(err){
        
                    response.send(false);
                }
                else
                {
                    response.send("Lead deleted");
                }
            })
        }
