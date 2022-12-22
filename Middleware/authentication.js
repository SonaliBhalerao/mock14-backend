const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = (req, res, next)=>{
    if(!req.headers.authorization){
        return res.send("please login");
    }
    const user_token = req.headers.authorization.split(" ")[1];
    jwt.verify(user_token, "secret", function(err, decoded){
        if(err){
            return res.send("please login");
        }
        req.body.email = decoded.email;
        req.body.userId = decoded.userId;
        next();
    })
}



module.exports = authentication;