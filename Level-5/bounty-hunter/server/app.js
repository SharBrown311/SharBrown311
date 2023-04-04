//server - npm init -y, npm install express, npm install morgan, npm i mongoose@6.10.3
const express = require("express")
const app = express()
require('dotenv').config()
const mongoose = require("mongoose")
const port = process.env.PORT || 8000
//const morgan = require("morgan")
require('dotenv').config()

mongoose.set('strictQuery', true)//suppresses deprecation warning
//Middleware (for every request) //
app.use(express.json())
// app.use(morgan('dev'))
app.use("/bounties", require("./routes/bountyRouter"))


//Connection to MongoDB
// mongoose.connect(, () => console.log("The Connection is Successful"))
mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}
@cluster0.ysosfzq.mongodb.net/bountiesdb?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.error(err);
    });



app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})
app.listen(port, () => {
  console.log(port)
})