const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel }= require("../Models/User.model");

const userRoutes = express.Router();

userRoutes.post("/",async(req, res)=>{
    const { name, level, score } = req.body;
    console.log(name, level, score)
    
        const user = new UserModel({name, level, score})
        user.save();
        return res.send("Your score has been added!");
   
});

userRoutes.get('/', async (req, res)=>{
    const users = await UserModel.find();
    res.send(users);
})





module.exports = userRoutes;