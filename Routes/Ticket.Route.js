const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { TicketModel }= require("../Models/Ticket.model");
const authentication = require("../Middleware/authentication");

const ticketRoutes = express.Router();

ticketRoutes.post("/tickets",  async(req, res)=>{
    const {userId}= req.body
    const tickets = await TicketModel.find({userId});
    res.send(tickets);
})

ticketRoutes.post("/create", async(req, res)=>{
    const {category,title, message, userId} = req.body;
    const date = new Date();

    const newTicket = new TicketModel({
        category:category,
        title: title, 
        message: message, 
        date:date,
        userId: userId
    } )
    await newTicket.save();
    //console.log(date)
    res.send("ticket created")
})

module.exports ={
    ticketRoutes
}

