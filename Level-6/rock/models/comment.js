const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment: {
    type: String, 
    required: true
  }, 
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  }, 
  issue: {
    type: Schema.Types.ObjectId, 
    ref: 'Issue',
    required: true
  }, 
  createdAt: {
    type: Date, 
    default: Date.now
  }, 
  likes: {
    type: Number, 
    default: 0, 
    required: true
  }
})
module.exports = mongoose.model('Comment', commentSchema);
