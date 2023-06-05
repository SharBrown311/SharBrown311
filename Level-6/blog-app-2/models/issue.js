const mongoose = require('mongoose')
const Schema = mongoose.Schema


const issueSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  description: {
    type: String, 
    required: true
  }, 
  image: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }, 
  createdOn: {
    type: Date,
    default: Date.now
  }, 
  likes: [
    {
      type: Array, 
      default: []
    }
  ], 
  user: {
    type: Schema.Types.ObjectId, 
    ref: "User", 
    required: true
  }, 
  comments: {
    type: Schema.Types.ObjectId
  }
})
module.exports = mongoose.model("Issue", issueSchema)