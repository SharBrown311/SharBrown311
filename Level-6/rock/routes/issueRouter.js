const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')
// const User = require('../models/user.js');
const {expressjwt} = require('express-jwt')
require('dotenv').config()


//get all issues/posts
issueRouter.get('/', async(req, res, next) => {
  try{
    const issues = await Issue.find().sort({
      createdAt: -1
    }).populate(
      'user', 'username profileImage'
    )
    res.status(200).send(issues)
  }catch(err){
    res.status(500)
    return next(err)
  }
})


//get all issues/posts by the user id
issueRouter.get("/user/:id", expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), async (req, res, next) => {
  try {
    const issues = await Issue.find({ user: req.auth._id }).sort({ createdAt: -1 }).populate('user', 'username');
    res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

//add a new issue/post
issueRouter.post("/", (req, res, next) => {
  console.log('✅', req)
  req.body.user = req.auth._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})


//delete an issue or post
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId },
    (err, deletedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
    }
  )
})


//update an issue or post
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    (err, updatedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})



module.exports = issueRouter;
