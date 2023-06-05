const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/Issue.js')

// GET ALL ISSUES
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// GET USER ISSUES
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.auth._id }, (err, issues) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// ADD ISSUE
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

// DELETE ISSUE
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

// UPDATE ISSUE
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


issueRouter.put("/upvote/:_id",
   async (req, res, next) => {
  try {
    const issue = await Issue.findOne({ _id: req.params._id });
    if (issue.usersWhoHaveVoted.includes(req.auth._id)) {
      res.status(403);
      throw new Error("You can only vote once per issue!");
    }
    const updated = await Issue.findOneAndUpdate(
      { _id: req.params._id },
      {
        $inc: { upVotes: 1 },
        $push: { usersWhoHaveVoted: req.auth._id }
      },
      { new: true }
    );
    return res.status(200).send(updated);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

issueRouter.put("/downvote/:_id", 
  async (req, res, next) => {
  try {
    const issue = await Issue.findOne({ _id: req.params._id });
    if (issue.usersWhoHaveVoted.includes(req.auth._id)) {
      res.status(403);
      throw new Error("You can only vote once per issue!");
    }
    const updated = await Issue.findOneAndUpdate(
      { _id: req.params._id },
      {
        $inc: { downVotes: 1 },
        $push: { usersWhoHaveVoted: req.auth._id }
      },
      { new: true }
    );
    return res.status(200).send(updated);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// // UP VOTE
// issueRouter.put("/upvote/:issueId", (req, res, next) => {
//   Issue.findOneAndUpdate(
//     { _id: req.params.issueId },
//     {
//       $inc: { votes: 1 },
//       $push: { userWhoHaveVoted: req.auth._id }
//     },
//     { new: true },
//     (err, updatedIssue) => {
//       if (err) {
//         res.status(500)
//         return next(err)
//       }
//       return res.status(201).send(updatedIssue)
//     }
//   )
// })

// // DOWN VOTE
// issueRouter.put("/downvote/:issueId", (req, res, next) => {
//   Issue.findOneAndUpdate(
//     { _id: req.params.issueId },
//     {
//       $inc: { votes: -1 },
//       $push: { usersWhoHaveVoted: req.auth._id }
//     },
//     { new: true },
//     (err, updatedIssue) => {
//       if (err) {
//         res.status(500)
//         return next(err)
//       }
//       return res.status(201).send(updatedIssue)
//     }
//   )
// })

// ADD COMMENT 
issueRouter.put("/addcomment/:issueId", (req, res, next) => {
  req.body.user = req.auth._id
  req.body.issue = req.params.issueId
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    {
      $push: { comments: { username: req.user.username, comment: req.body.comment } }
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

// DELETE COMMENT 
issueRouter.put("/deletecomment/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    {
      $pull: { comments: req.body }
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

module.exports = issueRouter


//Get Issues - check -works
//Get User Issues - check -empty array
//Get One Issue -check -works
//Add New Issue - check - works back and front
//Get issue and its comments -works
//update an issue -check title? -works
//delete an issue - check -works
//upvote - check
//downvote - check



//add Comment - check -works
//delete comment -check