const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./services/movieDb');
const movieCtrl = require('./controllers/movies');
var messages = [];
// db.addMovie(movieObj)
// db.getMovies(queryObj)
// db.getMovie(movieId)
// db.upvoteMovies(movieId)
// db.updateMovie(movieId, updatedMovie)

app.use(bodyParser.json());

// Write endpoint where we get movies
app.get('/api/movies', movieCtrl.getMovies)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies/vote/:id', movieCtrl.vote)
app.put('/api/movies/:id', movieCtrl.update)

app.listen(3000, function(){
  console.log("Listening on port 3000")
})
