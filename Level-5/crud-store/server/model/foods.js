const mongoose = require("mongoose")
const { ObjectID } = require("mongoose/lib/schema/index")
const Schema = mongoose.Schema


const foodSchema = new Schema({
  item: String, 
  quanity: Number, 
  sku: ObjectID, 
  unitPrice: Number, 
  unit: {
    enum: ["pieces, cartons, bags, units"]
  },
})

module.exports = mongoose.model("Foods", foodSchema)