const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


//Middleware (for every request) //
app.use(express.json())
app.use(morgan('dev'))

//Connect to DB
mongoose.connect('mongodb://localhost:27017/db-name',{useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err))
//name of database is moviesdb
//Routes//

app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvShows", require("./routes/tvShowRouter.js"))


//Error Handler

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMessage: err.message})
})
