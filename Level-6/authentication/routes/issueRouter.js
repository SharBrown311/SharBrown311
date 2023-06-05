const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue')




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
//getting a comment on a specific post
//api/issue/:issueId/comment







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
//get issues by user Id with comments
// issueRouter.get("/user", (req, res, next) => {
//   Issue.find({user: req.auth._id})
//   .populate('comments')
//   .exec(function(err, issues) {
//     if(err){
//       res.status(500)
//       return next(err)
//     }
//     return res.status(200).send(issues.map(transformVotes))
//   })
// })
//add new issue
//works
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
//works
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



// //upvote
issueRouter.put("/upvote/:issueId", (req, res, next) => {
  Issue.findOne(
    { _id: req.params.issueId},
    (err, issue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(issue.voters.includes(req.user._id)){
        res.status(403)
        return next(new Error("You already voted on this issue"))
      } else {
        Issue.findOneAndUpdate(
          { _id: req.params.issueId },
          { 
            $inc: { upVotes: 1 }, 
            $push: { voters: req.user._id}
          },
          { new: true },
          (err, issue) => {
            if (err) {
              res.status(500)
              return next(err)
            }
            return res.status(201).send(issue)
          })
      }
    })
  })

// //downvote
issueRouter.put("/downvotes/:issueId", (req, res, next) => {
  Issue.findOne(
    { _id: req.params.issueId},
    (err, issue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(issue.voters.includes(req.user._id)){
        res.status(403)
        return next(new Error("You already voted on this issue"))
      } else {
        Issue.findOneAndUpdate(
          { _id: req.params.issueId },
          { 
            $inc: { downVotes: 1 }, 
            $push: { voters: req.user._id}
          },
          { new: true },
          (err, issue) => {
            if (err) {
              res.status(500)
              return next(err)
            }
            return res.status(201).send(issue)
          })
      }
    })
  })









//upvote or downvote an issue
// issueRouter.put("/vote/:issueId/:type", (req, res, next) => {
//   Issue.findOneAndUpdate(
//     {_id: req.params.issueId, 'votes.userId': {$ne : req.auth._id}},
//     {$push: {votes: {userId: req.auth._id, voteType: req.params.type === 'increment' ? 1 : -1}}},
//     {new: true},
//     (err, updatedIssue) => {
//       if(err){
//         res.status(500)
//         return next(err)
//       }
//       console.log(updatedIssue)
//       return res.status(201).send(updatedIssue ? transformVotes(updatedIssue) : null)
//     }
//   )
// })





// //tranform votes
// function transformVotes(issue){
//   if(!issue.votes){
//     issue.votes = []
//   }
//   const tally = issue.votes.reduce((total, vote) => {
//     return total += vote.voteType
//   }, 0)
//   issue.votes = tally
//   return issue
// }


module.exports = issueRouter
