const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post.js')
const jwt = require('jsonwebtoken')

//Get All Posts
postRouter.get("/", (req, res, next) => {
  Post.find((err , posts) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(posts)
  })
})

//Get User Posts
postRouter.get("/user", (req, res, next) => {
  Post.fin({ user: req.auth._id}, (err, posts) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(posts)
  })
})

//Add new Post
postRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newPost = new Post(req.body)
  newPost.save((err, savedPost) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedPost)
  })
})

//Delete Post
postRouter.delete("/:postId", (req, res, next) => {
  Post.findOneAndDelete(
    {_id: req.params.todoId , user: req.auth._id}, 
    (err, deletedPost) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted Post: ${deletedPost.title}`)
    }

  )
})


//Edit/Update Post
postRouter.put("/:postId", (req, res, next) => {
  Post.findOneAndUpdate(
    {_id: req.params.todoId, user: req.auth._id}, 
    req.body, 
    { new: true}, 
    (err, updatedPost) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedPost)
    }
  )
})

//UPVOTE
postRouter.put("/upvote/:postId", (req, res, next) =>{
  Post.findOneAndUpdate(
    {_id: req.params.postId}, 
    {
      $inc: {votes: 1}, 
      $push: {votedUser: req.auth._id} 
    }, 
    { new: true}, 
    (err, updatedPost) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedPost)
    }
  )
})


//DownVote
postRouter.put("/upvote/:postId", (req, res, next) =>{
  Post.findOneAndUpdate(
    {_id: req.params.postId}, 
    {
      $inc: {votes: -1}, 
      $push: {votedUser: req.auth._id} 
    }, 
    { new: true}, 
    (err, updatedPost) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedPost)
    }
  )
})


//AddComment
postRouter.put('/addcomment/:postId', (req, res, next) => {
  Post.findOneAndUpdate(
    {_id : req.params.postId}, 
    {
      $push: {comments: {username: req.user.username, comment: req.body.comment}}
    }, 
    {new:true}, 
    (err, updatedPost) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedPost)
    }
  )
})

//DeleteComment
postRouter.put("/deletecomment/:postId", (req, res, next) => {
  Post.findOneAndUpdate(
    { _id: req.params.postId },
    {
      $pull: { comments: req.body }
    },
    { new: true },
    (err, updatedPost) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedPost)
    }
  )
})
module.exports = postRouter



//The lesson uses req.user._id to access the ID, which will cause an error.
//Instead, use req.auth._id