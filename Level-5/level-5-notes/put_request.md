//example: UPDATE / PUT =  ONE ITEM / MOVIE



movieRouter.put("./:movieId", (req, res) => {
  const movieId = req.params.movieId
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  const updatedMovie = Object.assign(movies[movieIndex], req.body)
  res.send(updatedMovie)
})