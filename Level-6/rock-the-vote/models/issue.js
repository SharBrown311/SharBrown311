const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const issueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  upVotes: {
    type: Number,
    default: 0
  },
  downVotes: {
    type: Number,
    default: 0
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  usersWhoHaveVoted: {
    type: [Schema.Types.ObjectId],
    ref: "User",
    default: []
  }
});
module.exports = mongoose.model("Issue", issueSchema)