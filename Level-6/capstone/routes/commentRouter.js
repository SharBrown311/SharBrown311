const express = require('express')
const commentRouter = express.Router()
const Comment = require("../models/comment.js")


//get all comments
//api/comments
commentRouter.get("/", async (req, res, next) => {
    try {
        const comment = await Comment.find()
        return res.status(200).send(comment)
    } catch (err) {
        res.status(500)
        return next(err)
    }
})

//post one comment
commentRouter.post("/", (req, res, next) => {
    console.log(req.body)
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
    return res.status(201).send(savedComment)
    })
})

//delete one 
commentRouter.delete("/:commentId", async (req, res, next) => {
    try {
        const deletedComment = await Comment.findOneAndDelete({_id:req.params.commentId})
        if(!deletedComment){
            res.status(404)
        }
        res.status(200).send(`${deletedComment.name}'s ${deletedComment.comment} comment was deleted.`)
    } catch (err) {
        res.status(500);
        return next(err);
    }
})


module.exports = commentRouter