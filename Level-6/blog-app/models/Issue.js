//related to the user who created it

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IssueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments: [{
    type: Schema.Types.ObjectId, 
    ref: 'Comment'
  }],
  votes: [{
    userId: {
      type: String, 
      required: true
    }, 
    voteType: {
      type: Number, 
      default: 0,
      required: true
    }
  }] | Number
});

module.exports = mongoose.model("Issue", IssueSchema);
