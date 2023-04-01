const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const { v4: uuidv4 } = require('uuid');
const port = process.env.PORT || 5500;


app.use(express.json())
app.use(morgan("dev"))

app.use("/foods", require("./routes/foodRouter"))

//fake data








//let foods = 
  //   name: {
  //     type: 'tomato', 
  //   quantity: 36, 
  //   sku: uuidv4(), 
  //   unitPrice: 1.00, 
  //   unit: "pieces"
  // }, 
  // {
  //   item: 'potato', 
  //   quantity: 45, 
  //   sku: uuidv4(),
  //   unitPrice: 1.25, 
  //   unit: "pieces"
  // }, 
  // {
  //   item: 'pineapples', 
  //   quanitity: 15, 
  //   sku: uuidv4(), 
  //   unitPrice: 3.60, 
  //   unit: "pieces"
  // }, 
  // {
  //   item: "asparagus", 
  //   quanitity: 26, 
  //   sku: uuidv4(), 
  //   unitPrice: 2.75, 
  //   unit: "bags"
  // }, 
  // {
  //   item: "spinach", 
  //   quanitity: 32, 
  //   sku: uuidv4(), 
  //   unitPrice: 2.05, 
  //   unit: "bags", 
  // }, 
  // {
  //   item: 'oranges', 
  //   quanitity: 62, 
  //   sku: uuidv4(), 
  //   unitPrice: 1.75, 
  //   unit: "pieces"
  // }
  //);


// mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pe9zh0w.mongodb.net/crud-store?retryWrites=true&w=majority`, (x) => console.log(x))

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}.mongodb.net/?retryWrites=true&w=majority`, () => console.log("Connected to Atlas"))


app.use((err, req, res, next) => {
  res.send(err.message)
})

app.listen(process.env.PORT || 8000, () => console.log("Port 8000 Connected"))