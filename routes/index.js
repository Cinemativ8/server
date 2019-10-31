const router = require("express").Router();
const UserController = require('../controllers/userController');
const googleVerify = require('../middlewares/googleVerify');

router.post('/google-signin', googleVerify, UserController.googleLogin);

module.exports = router;