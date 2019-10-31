const router = require("express").Router();
const YoutubeController = require("../controllers/youtube.js");
const authenticate = require("../middlewares/authenticate.js");

// router.use(authenticate);
router.get("/search", YoutubeController.search);

module.exports = router;