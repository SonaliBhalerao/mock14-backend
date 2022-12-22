const express = require("express");
const { QuizModel }= require("../Models/Quiz.model");

const quizRoutes = express.Router();

quizRoutes.get("/", async(req, res)=>{
    const {category,difficulty,amount}=req.query;
    const data = await QuizModel.find({category:category,difficulty:difficulty}).limit(amount);
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