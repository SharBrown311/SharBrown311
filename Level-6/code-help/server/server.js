// router can take 3 parameters
//if user doesnt equal the user that made the comment then dont show the model

const express = require("express")
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
//const {expressjwt} = require('express-jwt')
const PORT = process.env.PORT || 3000;

const authRouter = require("./routes/authRouter.js")
const issueRouter = require("./routes/issueRouter.js")
const commentRouter = require("./routes/commentRouter.js")

app.use(express.json())
app.use(morgan('dev'))



// //CONNECTION TO MONGODB

mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ngdhmss.mongodb.net/rockthevotedb`
  ,() => console.log("Mongoose Connected to DB"))



  app.use('/auth', authRouter)
  app.use('/api/issue', issueRouter)
  app.use('/api/comment', commentRouter)




//middleware error handler
app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


//100% backend check before even touching the frontend