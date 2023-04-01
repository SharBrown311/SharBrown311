const mongoose = require("mongoose")
const Schema = mongoose.Schema

//MOVIE BLUEPRINT
const movieSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true, 
}, 
  genre:{
    type: String, 
    required: true
  }, 
  releaseYear: {
    type: Number
  } 
})

module.exports = mongoose.model("Movie", movieSchema)