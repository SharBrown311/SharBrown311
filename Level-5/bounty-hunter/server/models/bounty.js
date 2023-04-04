const mongoose = require("mongoose")
const Schema = mongoose.Schema

//bounty blueprint
const bountySchema = new Schema({
  firstName: {
    type: String, 
    required: true, 
}, 
  lastName:{
    type: String, 
    required: true
  }, 
  isLiving: {
    type: Boolean, 
    required: true, 
  }, 
  species:{
    type:String,
    required: true
  }, 
  bountyAmount:{
    type: Number, 
    required: true
  }, 
  status:{
    type: String
  }, 
  img: {
    type: String
  }
})

module.exports = mongoose.model("Bounty", bountySchema)