const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { createMovieValidator, deleteMovieValidator } = require('../middlewares/validators');

router.get('/', getMovies);
router.post('/', createMovieValidator, createMovie);
router.delete('/:movieId', deleteMovieValidator, deleteMovie);

module.exports = router;
