const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))

app.use("/foods", require("./routes/foodRouter.js"))

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pe9zh0w.mongodb.net/crud-store?retryWrites=true&w=majority`, (x) => console.log(x))

// mongoose.connect('mongodb://127.0.0.1:5500/')
app.use((err, req, res, next) => {
  res.send(err.message)
})

app.listen(process.env.PORT || 8000, () => console.log("Port 8000 Connected"))










//mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pe9zh0w.mongodb.net/bounty-hunter?retryWrites=true&w=majority`)
