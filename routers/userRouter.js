var express=require("express");
var JWT= require('jsonwebtoken');
var userRouter=express.Router();

var UserController=require("../controllers/user.controller");

//http://localhost:8185/user/register
userRouter.post('/register',UserController.registerUser);

//http://localhost:8185/user/login
userRouter.post('/login',UserController.loginUser);

//http://localhost:8185/user/checkusername
userRouter.post('/checkusername',UserController.checkUsername);

//http://localhost:8185/user/changepassword
userRouter.post('/changepassword',UserController.changePassword);


module.exports=userRouter;













// const express = require('express');
// const router = express.Router();

// const { createuser, getuserByuser_emailid, getAllusers, updateuser, removeuser} = require('../controllers/usercontroller')

// //http://localhost:8185/register
// router.post("/register", createuser);

// //http://localhost:8185/oneuser
// router.post("/oneuser", getuserByuser_emailid);

// //http://localhost:8185/allusers
// router.get("/allusers", getAllusers);

// //http://localhost:8185/updateuser
// router.put("/updateuser", updateuser);

// //http://localhost:8185/delete
// router.delete("/remove", removeuser)

// module.exports = router