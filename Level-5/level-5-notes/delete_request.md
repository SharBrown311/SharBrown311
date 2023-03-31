example: 



//DELETE ONE ITEM / MOVIE
  movieRouter.delete("/:movieId", (req, res)=>{
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie")
})