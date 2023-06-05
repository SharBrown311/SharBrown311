const express = require("express")
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const {expressjwt} = require('express-jwt')
const PORT = process.env.PORT || 5000;






app.use(express.json())
app.use(morgan('dev'))

// //CONNECTION TO MONGODB
mongoose.set('strictQuery', true);
mongoose.connect(
  `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pv3uzqt.mongodb.net/flashCardDb`
  ,() => console.log("Mongoose Connected to DB"))


app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/decks', require('./routes/decksRouter.js'))
app.use('/api/cards', require('./routes/cardsRouter.js'))

//parse requests of content type application/json
//middleware

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