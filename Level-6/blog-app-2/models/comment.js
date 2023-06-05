const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    likes: [
      { 
        type: Schema.Types.ObjectId, ref: "user" 
      }
    ],
    user: { 
      type: Schema.Types.ObjectId, ref: "user" 
    },
    issue: {
      type: Schema.Types.ObjectId, 
      ref: "Issue"
    }
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("Comment", commentSchema)