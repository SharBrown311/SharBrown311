Get ONE: 
    movieRouter.get('/:movieId', (req, res) =>{
      const movieId = req.params.movieId
      const foundMovie = movies.find(movie => movie._id === movieId)
      res.send(foundMovie)
    })


Get by Genre or group: 
    movieRouter.get("/search/genre", (req, res)=>{
      console.log(req)
    })