const express = require("express");
const issueRouter = express.Router();
const Issue = require('../models/issue.js');
const User = require('../models/user.js');
const {expressjwt} = require('express-jwt')
require('dotenv').config()

// Get All Issues
//works => gets a list of all issues in the database
//route => /api/issue
issueRouter.get("/", async (req, res, next) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 }).populate('user', 'username');
    res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Get issues by user id
//works => get all issues of a specific user
// /api/issue/user/:id
issueRouter.get("/user/:id", expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), async (req, res, next) => {
  try {
    const issues = await Issue.find({ user: req.auth._id }).sort({ createdAt: -1 }).populate('user', 'username');
    res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});


// Add new Issue
//route => /api/issue
//works => adds a new issue
issueRouter.post("/",expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), async (req, res, next) => {
  try {
    req.body.user = req.auth._id;
    const newIssue = new Issue(req.body);
    const savedIssue = await newIssue.save();
    const populatedIssue = await savedIssue.populate('user', 'username');
    res.status(201).send(populatedIssue);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Delete Issue
//works => deletes an issue
//route => /api/issue/:issueId
issueRouter.delete("/:issueId",expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), async (req, res, next) => {
  try {
    const deletedIssue = await Issue.findOneAndDelete({ _id: req.params.issueId, user: req.auth._id }).populate('user', 'username');
    res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Update Issue
// route => /api/issue.:issueId
//works => edits and updates the issue
issueRouter.put("/:issueId",expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findOneAndUpdate({ _id: req.params.issueId, user: req.auth._id }, req.body, { new: true }).populate('user', 'username');
    res.status(201).send(updatedIssue);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// route => api/issues/like/:id
// @des     Like a issue
// @access  Private
issueRouter.put('/upvote/:id',expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    const userId = req.auth._id;
    const username = req.auth.username;
    console.log(username)

    if (!issue) {
      return res.status(404).json({ msg: 'Issue not found' });
    }

    // Check if the issue has already been liked by the user
    if (issue.likes.some(like => like.user.toString() === userId)) {
      return res.status(400).json({ msg: 'Issue already liked' });
    }

    issue.likes.push({ user: userId, username: username });
    await issue.save();

    res.json(issue.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// route =>   PUT api/issue/unlike/:id
// @des     Unlike an issue
// private access
issueRouter.put('/unlike/:id', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    const userId = (req.auth._id)

    // Check if the issue has already been liked
    if (
      issue.likes.filter((like) => like.user.toString() === userId)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'Issue has not yet been liked' });
    }

    // Get remove index
    const removeIndex = issue.likes
      .map((like) => like.user.toString())
      .indexOf(userId);

    issue.likes.splice(removeIndex, 1);

    await issue.save();

    res.json(issue.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = issueRouter;