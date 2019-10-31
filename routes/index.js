const router = require("express").Router();
const UserController = require('../controllers/userController');
const googleVerify = require('../middlewares/googleVerify');
const userRouter = require('./userRouter')

router.post('/google-signin', googleVerify, UserController.googleLogin);
router.get('/cinemas', UserController.getNearbyCinemas);

router.use('/users', userRouter);

module.exports = router;