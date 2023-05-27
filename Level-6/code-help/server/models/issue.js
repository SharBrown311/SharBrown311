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
  imgUrl : {
    type: String
  },
  createdAt: {
    type: Date, 
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      username: {
        type: String, 
        required: true
      },
    },
  ],
});

module.exports = mongoose.model("Issue", issueSchema)