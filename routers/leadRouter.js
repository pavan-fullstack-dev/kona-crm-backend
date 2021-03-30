var express=require("express");
var JWT= require('jsonwebtoken');
var leadRouter=express.Router();

var LeadController=require("../controllers/lead.controller");

//http://localhost:8185/lead/createlead
leadRouter.post('/createlead',LeadController.CreateLead);

//http://localhost:8185/lead/updatelead
leadRouter.post('/updatelead',LeadController.UpdateLead);

//http://localhost:8185/lead/deletelead
leadRouter.post('/deletelead',LeadController.deleteLead);



module.exports=leadRouter;