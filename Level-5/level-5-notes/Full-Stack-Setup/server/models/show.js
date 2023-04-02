const mongoose = require("mongoose")
const Schema = mongoose.Schema()

//MOVIE BLUEPRINT
const showSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true, 
}, 
  genre:{
    type: String, 
    required: true
  }, 
  releaseYear:{
    type: Number
  } ,
  seasons:{
    type: Number
  }  
})

module.exports = mongoose.model("Show", showSchema)