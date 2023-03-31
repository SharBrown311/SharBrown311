const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()


app.use(express.json())


app.use("/bounties", require("./routes/bountiesRouter"))

app.use((err, req, res, next) => {
  res.send(err.message)
})

app.listen(process.env.PORT || 8000, () => console.log("Port 8000 Connected"))

//mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pe9zh0w.mongodb.net/bounty-hunter?retryWrites=true&w=majority`)
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pe9zh0w.mongodb.net/bounty-hunter?retryWrites=true&w=majority`, (x) => console.log(x))