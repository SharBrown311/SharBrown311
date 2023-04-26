const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.PORT || 9000
const morgan = require('morgan')
mongoose.set('strictQuery', true)
const expressJwt = require("express-jwt")


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ibgpire.mongodb.net/test`,() => console.log("Mongoose Connected to DB"))

//app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api/todo', require('./routes/todoRouter.js'))

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({ errMsg: err.message })
})



app.listen(port, () => {
  console.log(`Server is running on local port ${port}`)
})