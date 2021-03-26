const users = require('../models/userSchema')

exports.createuser = (req, res) => {
    const user = new users(req.body);
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                error:"Unable to create a user"
            })
        }
        res.json(user);
    })
}

exports.getuserByuser_emailid = (req, res) => {
    users.findOne({"user_emailid":req.body.user_emailid}).exec((err, oneuser) => {
        if(err){
            return res.status(400).json({
                error:"User does't exists"
            })
        }
        res.json(oneuser);
    })
}

exports.getAllusers = (req, res) => {
    users.find().exec((err, allusers) => {
        if(err){
            return res.status(400).json({
                error:"No users in database"
            })
        }
        res.json(alluserss);
    })
}

exports.updateuser = (req, res) => {
    users.findOne({ "user_emailid": req.body.user_emailid }).exec((err, oneuser) => {
        if (err) {
            return res.status(400).json({
                error: "user does't exists"
            })
        }
        let user = oneuser;
        //console.log(onebook);
        //console.log(book)
        if (req.body.user_firstname){
            user.user_firstname = req.body.user_firstname;
        }
        if (req.body.user_lastname){
            user.user_lastname = req.body.user_lastname;
        }
        if(req.body.user_mobile){
            user.user_mobile = req.body.user_mobile;
        }
        //console.log(book)
        users.updateOne({user_firstname:user.user_firstname},{user_lastname:user.user_lastname},{user_emailid:user.user_emailid},{user_mobile:user.user_mobile}, {$set:user}, (err, upduser) => {
            if(err){
                return res.status(400).json({
                    error:"Unable to update"
                })
            }
            res.json(oneuser);
        })
    })
}

exports.removeuser = (req, res) => {
    users.findOne({ "user_emailid": req.body.user_emailid }).exec((err, oneuser) => {
        if (err) {
            return res.status(400).json({
                error: "user does't exists"
            })
        }
        const user = oneuser;

        user.remove((err, rmuser) => {
            if(err){
                return res.status(400).json({
                    error:"Unable to remove"
                })
            }
            res.json(rmuser);
        })
    })
}