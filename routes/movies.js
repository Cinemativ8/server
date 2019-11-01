const router = require("express").Router();
const MovieController = require("../controllers/movies.js");
const authenticate = require("../middlewares/authenticate.js");

// router.use(authenticate);
router.get("/trending", MovieController.trending);
router.get("/popular", MovieController.popular);
router.get("/most-played", MovieController.mostplayed);
router.get("/boxoffice", MovieController.boxoffice);
router.get("/detail/:id", MovieController.detail);
router.get("/stats/:id", MovieController.stats);
router.get("/rating/:id", MovieController.rating);
router.get("/related/:id", MovieController.related);
router.post("/search", MovieController.search);

module.exports = router;