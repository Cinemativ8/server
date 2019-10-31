const router = require("express").Router();
const movieRouter = require("./movies.js");
const UserController = require('../controllers/userController');
const googleVerify = require('../middlewares/googleVerify');

router.use('/movies', movieRouter);
router.post('/google-signin', googleVerify, UserController.googleLogin);

module.exports = router;