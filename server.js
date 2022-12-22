const express = require("express");
const app = express();
require("dotenv").config;
const cors = require('cors');
const {quizRoutes }= require('./Routes/Quiz.route');
const {userRoutes }= require('./Routes/User.route');
const {QuizModel} = require('./Models/Quiz.model')


const {connection} = require("./db.js");
const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

app.get("/", async(req, res)=>{
    res.send("Homepage")
});

// app.post("/",async(req, res)=>{
//     console.log(req.body)
//     const { category, type, difficulty, question, correct_answer, 
//         incorrect_answers } = req.body;
//     console.log(category, type, difficulty, question, correct_answer, 
//         incorrect_answers)
//         const quizs = new QuizModel({ category, type, difficulty, question, correct_answer, incorrect_answers })
//         await quizs.save();
//          res.send(quizs);
   
// });


app.use("/quiz", quizRoutes);





app.listen(PORT, async()=>{
    try{
         await connection;
        console.log("connected to db successfully");
    }catch(err)
    {
        console.log(err)
    }
    console.log("server is started on 8000");
})