const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel }= require("../Models/User.model");
const authentication = require("../Middleware/authentication");

const userRoutes = express.Router();

userRoutes.post("/signup",async(req, res)=>{
    const { name, email, password } = req.body;
    await bcrypt.hash(password, 8, function(err, hash){
        if(err){
            return res.send("Signup failed")
        }
        const user = new UserModel({name, email, password:hash})
        user.save();
        return res.send("Signup Successful!");
    })
});

userRoutes.post("/login", async(req, res)=>{
    const {email, password} = req.body;

    const user = await UserModel.findOne({email});
    const new_password = user.password;

    await bcrypt.compare(password, new_password, function(err, result){
        if(err){
            return res.send("Please Login");
        }
        if(result){
            const token = jwt.sign(
                {email:user.email, _id:user._id},
                "secret"
            );
            if(user.length === 0){
                return res.send("Invalid Credentials");
            }
            return res.send({message:"Login Successful!", token: token, userId:user._id});
        }
        else{
            return res.send("Invalid Credentials");
        }
    })
});


module.exports = {userRoutes};