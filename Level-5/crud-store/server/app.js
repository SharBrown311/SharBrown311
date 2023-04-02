const express = require("express")
const app = express()
require('dotenv').config()
const mongoose = require("mongoose")
const port = process.env.PORT || 5050
//const morgan = require("morgan")
mongoose.set('strictQuery', true)//suppresses deprecation warning


//Middleware (for every request) //
app.use(express.json())
//app.use(morgan('dev'))

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pe9zh0w.mongodb.net/itemsdb?retryWrites=true&w=majority`, () => console.log("The Connection is Successful"))

//Routes//
app.use("/items", require("./routes/inventoryRouter.js"))


app.use((err, req, res, next) =>{
  console.log(err)
  return res.send({errMsg: err.message})

})
app.listen(port, () => {
  console.log("The server is listening on port 5050")
})