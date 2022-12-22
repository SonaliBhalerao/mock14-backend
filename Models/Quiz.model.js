const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const quizSchema = new mongoose.Schema({
    category: String,
    type: String,
    difficulty: String,
    question: String,
    correct_answer: String,
    incorrect_answers : Array
})

const QuizModel = mongoose.model("quizs", quizSchema);


module.exports = {
    QuizModel
}