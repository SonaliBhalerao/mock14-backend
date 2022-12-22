const express = require("express");
const { QuizModel }= require("../Models/Quiz.model");

const quizRoutes = express.Router();

quizRoutes.get("/", async(req, res)=>{
    const {category,difficulty,amount}=req.query;

    console.log(category)
    if(category==undefined||difficulty==undefined||amount==undefined){
        var data = await QuizModel.find();
    }
    else{
    var data = await QuizModel.find({category:category,difficulty:difficulty}).limit(amount);
    }
    console.log(data)
    res.send(data);
})


quizRoutes.post("/",async(req, res)=>{
    console.log(req.body)
    const { category, type, difficulty, question, correct_answer, 
        incorrect_answers } = req.body;
    console.log(category, type, difficulty, question, correct_answer, 
        incorrect_answers)
        const quizs = new QuizModel({ category, type, difficulty, question, correct_answer, incorrect_answers })
        await quizs.save();
         res.send("quiz added successfully");
   
});

module.exports = {quizRoutes}