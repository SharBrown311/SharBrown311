const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
//const jwt = require('jsonwebtoken')
const { expressjwt: jwt } = require("express-jwt")
const morgan = require('morgan')




//middleware
app.use(express.json())
app.use('/post', express.json())
app.use('/auth', express.json())// looks for a request body and turns it into a 'req.body'
app.use(morgan('dev'))//logs requests and request statuses to the console

//Connect to MongoDB Database
mongoose.set('strictQuery', true)
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ibgpire.mongodb.net/politicalPostsdb`,() => console.log("Mongoose Connected to DB"))

  app.use('/auth', require('./routes/authRouter.js'))
  app.use('/post', require('./routes/postRouter.js'))
  
  jwt({
  secret: "SECRET",
  algorithms: ["HS256"],
});


//Error for handling middleware
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({ errMsg: err.message })
})




//Starting of the Server
app.listen(3000, console.log('App is Listening'))


