const router = require('express').Router();
const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const authRoutes = require('./auth');
const auth = require('../middlewares/auth');

router.use('/users', auth, usersRoutes);
router.use('/movies', auth, moviesRoutes);
router.use(authRoutes);

module.exports = router;
