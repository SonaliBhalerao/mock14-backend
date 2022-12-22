const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const userSchema = new mongoose.Schema({
    name: String,
    level: String,
    score: Number
})

const UserModel = mongoose.model("users", userSchema);


module.exports = {
    UserModel
}