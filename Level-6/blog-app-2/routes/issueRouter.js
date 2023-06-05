const express = require('express')
const issueRouter = express.Router()
const Issue = require("../models/issue.js")



//get all Public issues
//route= GET => /api/issue
//works
issueRouter.get("/",(req, res, next) => {
  Issue.find((err, issues) => {
       if (err) {
           res.status(500)
           return next(err)
       }
       return res.status(200).send(issues)
   })
})


//create an issue
//route= POST => /api/issue/
//works//
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
//route = GET => /api/issue/:issueId
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


//get all user issues
//route = /api/issue/user
//works
// Get issues by user id
issueRouter.get("/user/:id", (req, res, next) => {
  Issue.find({user: req.auth._id}, (err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})


//delete an issue
//route = DELETE => /api/issue/:issueId
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


//edit an issue
//route = PUT => /api/issue/:issueId
//works
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

//like an issue
//route = PUT => api/issue/issueId/like
//works
issueRouter.put('/:id/like', (req, res) => {
  try{
    const issue = Issue.find({
      _id: req.params.id, 
      likes: req.auth._id
    })
    if(issue.length > 0){
      return res.status(400).json({message: "You have already liked this post"})
    }
    const like = Issue.findOneAndUpdate(
      {_id: req.params.id}, 
      {
        $push: {likes: req.auth._id},
      },
      {new: true},
    );
    if(!like){
      return res.status(400).json({msg: "That Issue doesn't exists"});
    }
    res.json({msg: "Issue liked successfully"})
  }catch(err){
    return res.status(500).json({msg: err.message});
  }
}, 
)


//dislike an issue
//route = PUT => /api/issue/issueId/dislike
issueRouter.put('/:id/dislike', (req, res) => {
  try {
    const like = Issue.findOneAndUpdate(
      { _id: req.params.id },
      {
        $pull: { likes: req.auth._id },
      },
      {
        new: true,
      }
    );

    if (!like) {
      return res.status(400).json({ msg: "Issue does not exist." });
    }

    res.json({ msg: "Issue unliked successfully." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
})






module.exports = issueRouter



//✔   x
//Get all Issues  ✔
//Get One Issue   ✔ 
//Get All User Issues ✔
//Create New Issue✔ 
//Edit Issue      ✔
//Delete Issue    ✔
//Like an  Issue ✔
//Dislike an Issue✔
//-------------------
