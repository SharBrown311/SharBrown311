const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post.js')



//Get all posts by all users
postRouter.get('/post', async (req, res, next) => {
  Post.find((err, Post) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(Post)
  })
})


//Get One post from all users
postRouter.get("/:postId", (req, res, next) => {
  Post.findOne({ _id: req.params.postId }, (err, Post) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(Post)
  })
})

module.exports = postRouter 