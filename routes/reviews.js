const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/articles/:id/reviews", reviewsCtrl.create);
router.delete("/reviews/:id", reviewsCtrl.delete);
router.get("/articles/:id/reviews/edit", reviewsCtrl.edit);
router.put("/articles/:id/reviews/:id", reviewsCtrl.update);

module.exports = router;