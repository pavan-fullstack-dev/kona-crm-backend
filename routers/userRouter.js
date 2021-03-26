const express = require('express');
const router = express.Router();

const { createuser, getuserByuser_emailid, getAllusers, updateuser, removeuser} = require('../controllers/usercontroller')

//http://localhost:8185/create
router.post("/create", createuser);

//http://localhost:8185/oneuser
router.post("/oneuser", getuserByuser_emailid);

//http://localhost:8185/allusers
router.get("/allusers", getAllusers);

//http://localhost:8185/updateuser
router.put("/updateuser", updateuser);

//http://localhost:8185/delete
router.delete("/remove", removeuser)

module.exports = router