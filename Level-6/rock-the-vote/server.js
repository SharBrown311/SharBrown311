const express = require("express")
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const {expressjwt} = require('express-jwt')
const PORT = process.env.PORT || 3000;


const authRouter = require("./routes/authRouter.js")
const issueRouter = require("./routes/issueRouter.js")
const commentRouter = require("./routes/commentRouter.js")
//parse requests of content type application/json
//middleware
app.use(express.json())
app.use(morgan('dev'))


// //CONNECTION TO MONGODB
mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pv3uzqt.mongodb.net/`
  ,() => console.log("Mongoose Connected to DB"))

//defining routes
app.use('/auth', authRouter)
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/issue', issueRouter)
app.use('/api/comment', commentRouter)


//middleware error handler
app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "Unauthorized Error"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
