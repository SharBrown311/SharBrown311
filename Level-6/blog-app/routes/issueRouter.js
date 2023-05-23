//manage the one to many = relating the user to the issues, and relating the comments to the issues

//manage the many to many = relating upvote/downvoted by many users, and many users can upvote downvote many issues.


//upvote/downvote per issue one time per user




const express = require("express")
const issueRouter = express.Router()
const Comment = require('../models/Comment')
const Issue = require("../models/Issue")



//get all issues//getpublicIssues
//works
issueRouter.get('/', (req, res, next) => {
  Issue.find((err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

//get the issues by user
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


// add a comment to issue
issueRouter.post("/comments/:issueId", (req, res, next) => {
  req.body.user = req.auth._id
  req.body.issue = req.params.issueId
  const newComment = new Comment(req.body)
  newComment.save((err, savedComment) => {
      if (err) {
          res.status(500)
          return next(err)
      }
      Issue.updateOne({ _id: req.params.issueId },
          { $push: { comments: savedComment._id } }, (err, savedComment) => {
              if (err) {
                  res.status(500)
                  return next(err)
              }
              return res.status(201).send(savedComment)
          })
  })
})

// delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
      { _id: req.params.issueId, user: req.auth._id },
      (err, deletedIssue) => {
          if (err) {
              res.status(500)
              return next(err)
          }
          console.log(deletedIssue)
          return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}.`)
      }
  )
})

// update/edit Issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
      { _id: req.params.issueId, user: req.auth._id },
      req.body,
      { new: true },
      (err, updatedIssue) => {
          if (err) {
              res.status(500)
              return next(err)
          }
          return res.status(201).send(transformVotes(updatedIssue))
      }
  )
})
//Upvote or Downvote an Issue
issueRouter.put("/vote/:issueId/:type", (req, res, next) => {
  Issue.findOneAndUpdate(
      { _id: req.params.issueId, 'votes.userId': { $ne: req.auth._id } },
      { $push: { votes: { userId: req.auth._id, voteType: req.params.type === 'increment' ? 1 : -1 } } },
      { new: true },
      (err, updatedIssue) => {
          if (err) {
              res.status(500)
              return next(err)
          }
          console.log(updatedIssue)
          return res.status(201).send(updatedIssue ? transformVotes(updatedIssue) : null)
      }
  )
})

function transformVotes(issue) {
  if (!issue.votes) {
      issue.votes = []
  }
  const test = issue.votes.reduce((total, vote) => {
      return total += vote.voteType
  }, 0)
  issue.votes = test
  return issue
}


module.exports = issueRouter