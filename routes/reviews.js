const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/articles/:id/reviews", reviewsCtrl.create);
router.delete("/reviews/:id", reviewsCtrl.delete);
router.get("/edits/:id", reviewsCtrl.edit);
router.put("/edits/:id", reviewsCtrl.update);


module.exports = router;