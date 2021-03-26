const express = require('express');
const router = express.Router();

const { createuser, getuserByuser_emailid, getAllusers, updateuser, removeuser} = require('../controllers/usercontroller')

router.post("/create", createuser);
router.post("/oneuser", getuserByuser_emailid);

router.get("/allusers", getAllusers);

router.put("/updateuser", updateuser);

router.delete("/remove", removeuser)

module.exports = router