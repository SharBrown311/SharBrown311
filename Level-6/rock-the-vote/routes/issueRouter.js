const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')
const Comment = require('../models/comment.js')


//get all issues -> getPublicIssues
//GET route => /api/issue 
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


//get issues by userId => getUserIssues
//GET route => /api/issue/user 
//received empty array
issueRouter.get("/user", (req, res, next) => {
  Issue.find({user: req.auth._id}, (err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})



//add new issue => createIssue()
//POST route => /api/issue 
//works
//--->adds on front end
issueRouter.post('/', (req, res, next) => {
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


//delete issue
//DELETE route => /api/issue/${issueId}
//works
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    {_id: req.params.issueId, 
    user: req.auth._id},
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`)
    }
  )
})


//update Issue
//PUT route => /api/issue/${issueId}
//works
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    {_id: req.params.issueId, 
    user: req.auth._id}, 
    req.body,
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})



//get one issue
// GET /api/issue/:issueId
//works
issueRouter.get('/:issueId', (req, res, next) => {
  const {issueId} = req.params
  // Find the issue by ID in the database
  Issue.findById(issueId)
  .then((issue) => {
    if(!issue){
      // If the issue is not found, return a 404 status code
      return res.status(404).send({err: 'Issue Not Found'})

    }
      // Issue found, return it as the response
      res.status(200).send(issue);
  })
   .catch(error => {
      console.log(error)
})
})


//POST /api/issue/:issueId/comment
//works
//addcomment to issue
issueRouter.post("/:issueId/comment", (req, res, next) => {
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







//delete a comment from an issue
issueRouter.delete("/:issueId/comment/:commentId", (req, res, next) => {
  const {issueId, commentId} = req.params;
  Issue.findByIdAndUpdate(issueId)
  .then((issue) => {
    if(!issue){
      return res.status(404).send({err: "Issue not Found"})
    }
     // Find the index of the comment in the comments array
     const commmentIndex = issue.comments.findIndex(
      (comment) => comment._id.toString() === commentId
     );
     if(commmentIndex === -1){
      return res.status(404).send({err: `Comment not Found`})
     }
  })
})



issueRouter.put("/upvote/:_id",
   async (req, res, next) => {
  try {
    const issue = await Issue.findOne({ _id: req.params._id });
    if (issue.usersWhoHaveVoted.includes(req.auth_id)) {
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