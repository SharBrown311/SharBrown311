const mongoose = require("mongoose")
const Schema = mongoose.Schema

//fruit blueprint

const inventorySchema = new mongoose.Schema({
  item: {
    type: String, 
    required: true
  }, 
    category: {
      type: String, 
      required: true
    },
    price: {
      type: Number, 
      required: true
    }, 
    quantity: {
      type: String, 
      required: true  
    }, 
    comments: {
      type: String
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)