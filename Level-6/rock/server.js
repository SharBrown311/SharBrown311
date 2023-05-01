//import required modules

const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')





//middleware
app.use(express.json())
app.use(morgan('dev'))
app.use('/auth', require('./routes/authRouter.js'))
app.use('./api', expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/issue', require('./routes/issueRouter.js'))

//connection to mongoDb
mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ibgpire.mongodb.net/politicalPostsdb`,() => console.log("Mongoose Connected to DB"))


  //middleware error handler
  app.use((err, req, res, next) =>{
    console.log(err)
    if(err.name === "Unauthorized"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })


  //Starting of the Server
app.listen(4000, console.log('App is Listening'))
