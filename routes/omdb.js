const router = require("express").Router();
const OmdbController = require("../controllers/omdb.js");
const authenticate = require("../middlewares/authenticate.js");

// router.use(authenticate);
router.post("/search", OmdbController.search);

module.exports = router;