module.exports = {
  getMovies:function(req, res){
    res.status(200).send(db.getMovies(req.query))
  },
  addMovie:function(req, res){
    req.body // this is the new movie;
    // Check that req.body is good
    if (req.body.name && req.body.year){
      db.addMovie(req.body);
      var movies = db.getMovies();
      res.send(movies[movies.length-1])
    }else{
      res.status(400).send('Must supply name');
    }
  },
  vote:function (req, res){
    db.upvoteMovie(req.params.id);
    var movie = db.getMovie(req.params.id)
    res.send(`Your vote for ${movie.name} has been cast.
      It has ${movie.votes} votes`);
  },
  update:function(req, res){
    db.updateMovie(req.params.id, req.body)
    res.send(db.getMovie(req.params.id));
  }

}
