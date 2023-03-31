//example: GET BY CATEGORY / GENRE


movieRouter.get("/search/genre", (req, res) => {
  const genre = req.query.genre
  const filteredMovies = movies.filter(movie => movie.genre === genre)
  res.send(filteredMovies)
})