const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/blogs/:id/reviews", reviewsCtrl.create);
router.delete("/reviews/:id", reviewsCtrl.delete);
router.get("/blogs/:id/reviews/edit", reviewsCtrl.edit);
router.put("/blogs/:id/reviews/:id", reviewsCtrl.update);

module.exports = router;