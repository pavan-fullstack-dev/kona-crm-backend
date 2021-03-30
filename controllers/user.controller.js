var JWT=require("jsonwebtoken");
var Config=require("../config/app.config");
// var LeadModel=require("../models/leadSchema");


exports.registerUser=(request,response)=>{

    console.log(request.body);
    var userData=request.body;
    var UserCollection=new UserModel(userData);
    UserCollection.save(function(err, doc){
        if(err){
            response.send({result:err.message})
        }
        if(doc._id){
            var payload={id:doc._id};
            var token=JWT.sign(payload,Config.config.JWT_SECRET)
          response.send({result:"Registration success", token:token});   
        }
    })
}


exports.loginUser= (request,response) => {

    console.log("I am in login");
    var userData= request.body;
    console.log(userData);

        UserModel.findOne({emailId:userData.emailId},(err, doc) => {
            if(err){
                console.log(err);
                response.send({status:false, err:err.message});
            } 
             if(doc){

                console.log('doc found',doc);

              
                    if(doc.password == userData.password){
                        var payload={id:doc._id};
                        var token=JWT.sign(payload,Config.config.JWT_SECRET)
                      response.send({result:true,token:token});   
                       }
                       else
                       {
                         response.send({result:false, message:"Password incorrect"})
                       }

               
                   
             }
        })
}

exports.checkUsername= (request,response) => {

    console.log("In check username");
 
    var userData= request.body;

     UserModel.findOne({firstname:userData.firstname},(err,doc) =>{
         if(err){
             console.log(err);
             response.send({status:false, err:err.message});
         }
         if(doc){
               response.send({status:true});
               console.log(doc)
         }
         else
         {
             response.send({status:false});
         }
     })
}

exports.changePassword=(request,response) =>{

    var userData= request.body;

    UserModel.findOne({emailId:userData.emailId},(err, doc) => {
        if(err){
            console.log(err);
            response.send({status:false, err:err.message})
        } 
         if(doc){
            //  console.log(doc)
               if(doc.password == userData.currentpassword){
                
                 UserModel.updateOne({emailId:userData.emailId},{password: userData.newpassword},(err,res) => {
                     if(err){
                        console.log(err);
                        response.send({status:false, err:err.message})
                     }
                     if(res){
                        response.send({status:true, message:"updated"})
                       // console.log("password changed from " + doc.password + "  to  " + userData.newPassword )
                     }
                 })

               }
               else
                {
                    response.send({status:false, err:"current password is incorrect"})
                }
         }
    })
}















// const users = require('../models/userSchema')

// exports.createuser = (req, res) => {
//     const user = new users(req.body);
//     user.save((err, user) => {
//         if(err){
//             console.log(err.message)
//             return res.status(400).json({
//                 error:"Unable to create a user"
//             })
//         }
//         res.json(user);
//     })
// }

// exports.getuserByuser_emailid = (req, res) => {
//     users.findOne({"user_emailid":req.body.user_emailid}).exec((err, oneuser) => {
//         if(err){
//             return res.status(400).json({
//                 error:"User does't exists"
//             })
//         }
//         res.json(oneuser);
//     })
// }
// // exports.getAllusers = (req, res) => {
// //         res.send([
// //             {
// //                 name:"pavan",
// //                 age:"23",
// //             }
// //         ])
// // }

// exports.getAllusers = (req, res) => {
//     users.find().exec((err, allusers) => {
//         if(err){
//             return res.status(400).json({
//                 error:"No users in database"
//             })
//         }
//         res.json(alluserss);
//     })
// }

// exports.updateuser = (req, res) => {
//     users.findOne({ "user_emailid": req.body.user_emailid }).exec((err, oneuser) => {
//         if (err) {
//             return res.status(400).json({
//                 error: "user does't exists"
//             })
//         }
//         let user = oneuser;
//         //console.log(onebook);
//         //console.log(book)
//         if (req.body.user_firstname){
//             user.user_firstname = req.body.user_firstname;
//         }
//         if (req.body.user_lastname){
//             user.user_lastname = req.body.user_lastname;
//         }
//         if(req.body.user_mobile){
//             user.user_mobile = req.body.user_mobile;
//         }
//         //console.log(book)
//         users.updateOne({user_firstname:user.user_firstname},{user_lastname:user.user_lastname},{user_emailid:user.user_emailid},{user_mobile:user.user_mobile}, {$set:user}, (err, upduser) => {
//             if(err){
//                 return res.status(400).json({
//                     error:"Unable to update"
//                 })
//             }
//             res.json(oneuser);
//         })
//     })
// }

// exports.removeuser = (req, res) => {
//     users.findOne({ "user_emailid": req.body.user_emailid }).exec((err, oneuser) => {
//         if (err) {
//             return res.status(400).json({
//                 error: "user does't exists"
//             })
//         }
//         const user = oneuser;

//         user.remove((err, rmuser) => {
//             if(err){
//                 return res.status(400).json({
//                     error:"Unable to remove"
//                 })
//             }
//             res.json(rmuser);
//         })
//     })
//   }