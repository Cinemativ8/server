const router = require("express").Router();
const movieRouter = require("./movies.js");
const youtubeRouter = require("./youtube.js");
const omdbRouter = require("./omdb.js");
const UserController = require('../controllers/userController');
const googleVerify = require('../middlewares/googleVerify');
const userRouter = require('./userRouter')

router.use('/movies', movieRouter);
router.use('/youtube', youtubeRouter);
router.use('/omdb', omdbRouter);
router.post('/google-signin', googleVerify, UserController.googleLogin);
router.get('/cinemas', UserController.getNearbyCinemas);

router.use('/users', userRouter);

module.exports = router;