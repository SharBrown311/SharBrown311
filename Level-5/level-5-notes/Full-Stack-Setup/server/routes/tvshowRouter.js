const express = require("express")
const tvshowRouter = express.Router()
// const { v4: uuidv4 } = require('uuid');
const Show = require("../models/show.js")
//GET ALL MOVIES
tvshowRouter.get("/", (req, res, next) => {
    Show.find((err, shows) =>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(shows)
    })
})


//GET ONE MOVIE
tvshowRouter.get("/:tvshowId", (req, res, next) => {
  const tvshowId = req.params.tvshowId
  const foundTvshow = Show.find(show => show._id === tvshowId)
  if(!foundTvshow){
    const error = new Error(`The item with ${tvshowId} was not found, please try again. `)
    res.status(500)
    return next(error)
  }
})

module.exports = tvshowRouter