//example: POST ONE ITEM / MOVIE


movieRouter.post("/" , (req, res) => {
  const newMovie = req.body
  newMovie._id = uuid()
  movies.push(newMovie)
  res.send(`Successfully added ${newMovie.title} to the database` )
})