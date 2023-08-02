const mongoose = require('mongoose')
const Schema = mongoose.Schema


const noteSchema = new Schema({
  subject:{
    type: String, 
    required: true
  }, 
  notebody:{
    type: String, 
    required: true
  }, 
  createdWhen: {
    type: Date, 
    default: Date.now,
  }, 
  starred: {
    type: Boolean, 
    default: false
  }
})

module.exports = mongoose.model("Note", noteSchema)