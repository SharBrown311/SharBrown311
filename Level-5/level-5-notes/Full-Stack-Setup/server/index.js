//server - npm init -y, npm install express, npm install morgan, npm i mongoose@6.10.3
const express = require("express")
const index = express()
// const morgan = require("morgan")
require('dotenv').config()
const mongoose = require("mongoose")
const port = process.env.PORT || 8080

mongoose.set('strictQuery', true)//suppresses deprecation warning
//Middleware (for every request) //
index.use(express.json())
// index.use(morgan('dev'))

// //Connect to DB
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pe9zh0w.mongodb.net/moviedb?retryWrites=true&w=majority`, () => console.log("The Connection is Successful"))
// //

// const MongoClient  = require("mongodb").MongoClient
// const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pe9zh0w.mongodb.net/?retryWrites=true&w=majority`;
// MongoClient.connect(uri, (error,client) => {
//   if(error){
//     return console.log("Connection failed for some reason")
//   }
//   console.log("Connection established- proceed")
//   const db = client.db(moviedb)
// })
// name of database is moviesdb
//Routes//

index.use("/movies", require("./routes/movieRouter.js"))
index.use("/shows", require("./routes/tvshowRouter.js"))


//Error Handler

index.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})


index.listen(port, () => {
  console.log("The server is listening on port 8080")
})
