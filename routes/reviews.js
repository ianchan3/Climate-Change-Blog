const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/articles/:id/reviews", reviewsCtrl.create);
// router.delete("/articles/:id", reviewsCtrl.delete);

module.exports = router;