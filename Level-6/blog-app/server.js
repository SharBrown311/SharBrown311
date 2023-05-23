const express = require("express")
const mongoose = require('mongoose')
const server = express()
require('dotenv').config()
const morgan = require('morgan')
const {expressjwt} = require('express-jwt')
const PORT = process.env.PORT || 3000;

//middleware
server.use(express.json())
server.use(morgan('dev'))



//CONNECTION TO MONGODB
mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ibgpire.mongodb.net/rockthevotedb`
  ,() => console.log("Mongoose Connected to DB"))


server.use("/auth", require("./routes/authRouter.js"))
server.use("/api", expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
server.use("/api/issue", require('./routes/issueRouter.js'))



//middleware error handler
server.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "Unauthorized"){
    return res.send({errMsg: err.message})
  }
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})