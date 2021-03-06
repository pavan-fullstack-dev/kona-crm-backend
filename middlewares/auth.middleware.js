var JWT= require('jsonwebtoken');
var Config= require('../config/app.config');
exports.authMiddleware= function(request,response,next){    
    console.log(request.headers);

    if(request.headers.authorization == null || request.headers.authorization == "" ){
        response.status(401).send("Unauthorized access!");

        //bearer token
    }
    var token= request.headers.authorization.split(' ')[1];

    console.log('token',token);

     JWT.verify(token,Config.config.JWT_SECRET,function(error, payload){
         if(error){
             response.send({error:error.message})
         }
         if(payload){
             console.log(payload);
             next();
         }
     })

   
}