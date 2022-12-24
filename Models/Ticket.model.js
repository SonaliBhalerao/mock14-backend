const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const ticketSchema = new mongoose.Schema({
    category: String,
    title: String,
    message: String,
    date: String,
    userId:String
},
{timestamps:true})

const TicketModel = mongoose.model("tickets", ticketSchema);


module.exports = {
    TicketModel
}