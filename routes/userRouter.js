const router = require("express").Router();
const UserController = require('../controllers/userController');

router.post('/', UserController.register);
router.get('/', UserController.login);

module.exports = router;