const express = require('express')
const commentRouter = express.Router()
const Comment = require("../models/comment")



//create a comment
//works
commentRouter.post("/:issueId", (req, res, next) => {
  req.body.user = req.auth._id;
  req.body.created = new Date().toLocaleString()
  const newComment = new Comment(req.body);

  newComment.save((err, savedComment) => {
    if(err){
      res.status(500).json({msg: err.message})
      return next(err)
    }
    return res.status(201).send(savedComment)
  })
})
// empty
//Get all Comments for one issue
commentRouter.get('/:issueId', (req, res, next) => {
  Comment.find({issue: req.params.commentId}, (err, comments) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})


//delete comment
//api/comment/:commentId
//works
commentRouter.delete("/:commentId", (req, res, next) => {
  Comment.findOneAndDelete(
    { _id: req.params.commentId, user: req.auth._id },
    (err, deletedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted comment: ${deletedComment.content}`)
    }
  )
})


//edit comment
//api/comment/:commentId
//works
commentRouter.put("/:commentId", (req, res, next) => {
  Comment.findOneAndUpdate(
    { _id: req.params.commentId, 
      user: req.auth._id},
    req.body, 
    { new: true },
    (err, updatedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedComment)
    }
  )
})

module.exports = commentRouter

//✔   x
//Create a comment ✔
//Get all Comments of an Issue✔
//Edit Comment✔
//Delete Comment✔