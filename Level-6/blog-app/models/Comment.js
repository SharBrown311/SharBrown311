///related to the issue it was comments on, and related to the user that created the comment

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  issue: {
    type: Schema.Types.ObjectId,
    ref: "Issue",
    required: true,
  }
});

module.exports = mongoose.model("Comment", CommentSchema);
