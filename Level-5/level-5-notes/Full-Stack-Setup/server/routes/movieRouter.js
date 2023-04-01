const express = require("express")
const movieRouter = express.Router()
// const { v4: uuidv4 } = require('uuid');
const Movie = require("../models/movie.js");

//GET ALL MOVIES
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(movies)
    })
})


//GET ONE MOVIE
movieRouter.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId
  const foundMovie = Movie.find(movie => movie._id === movieId)
  if(!foundMovie){
    const error = new Error(`The item with ${movieId} was not found, please try again. `)
    res.status(500)
    return next(error)
  }
})
module.exports = movieRouter