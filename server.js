const express = require("express");
const app = express();
require("dotenv").config;
const cors = require('cors');
const userRoutes = require('./Routes/User.Route');


const {connection} = require("./db.js");
const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

app.get("/", async(req, res)=>{
    res.send("Homepage")
});

app.use("/user", userRoutes);




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