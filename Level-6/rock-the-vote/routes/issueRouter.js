
const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/Issue')
const Comment = require('../models/Comment')


//get all issues//getpublicIssues
//works
//req (Object) - The express request object.
//auth = the user
issueRouter.get('/', (req, res, next) => {
  Issue.find((err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

//get the issues by userid
//works - getUserIssues
issueRouter.get("/user", (req, res, next) => {
  Issue.find({user: req.auth._id}, (err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})


//add new issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})


//get one issue
issueRouter.get("/:issueId", (req, res, next) => {
  Issue.find({_id: req.params.issueId},
    (err, issue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issue)
    }
    )
})


//deleteIssue
//works
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`)
    }
  )
})


//add Comment to Issue
//works
issueRouter.post("/comment/:issueId", (req, res, next) => {
  req.body.user = req.auth._id
  req.body.issue = req.params.issueId
  const newComment = new Comment(req.body)
  newComment.save((err, savedComment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    Issue.updateOne({_id: req.params.issueId}, 
      {$push: {comments: savedComment._id}}, (err, savedComment) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(savedComment)
      })
  })
})


//edit / update issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id},
    req.body, 
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

module.exports = issueRouter