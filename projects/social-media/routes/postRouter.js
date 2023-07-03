const express = require('express')
const postRouter = express.Router()
const Post = require('../models/post.js')
//route => /api/post
//method => GET
postRouter.get('/', (req, res, next) => {
  Post.find((err, posts) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(posts)
  })
})

//route => /api/post/user
//method => GET
postRouter.get('/user/:userId/posts', (req, res, next) => {
  Post.find({user: req.auth._id}, (err, posts) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(posts)
  })
})


// likesRouter.get('/user/:userId/likes', (req, res, next) => {
//   Likes.find({user: req.auth._id}, (err, likes) => {
//     if(err){
//       res.status(500)
//       return next(err)
//     }
//     return res.status(200).send(likes)
//   })
// })


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

// router.get('/user/:userId/issues', async (req, res) => {
//   try {
//     const issues = await Issue.find({ author: req.params.userId });
//     res.json(issues);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
module.exports = postRouter