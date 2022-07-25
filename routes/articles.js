const express = require("express");
const router = express.Router();
const articlesCtrl = require("../controllers/articles");
const isLoggedIn = require("../config/auth");

router.get("/", articlesCtrl.index);
router.get("/new", isLoggedIn, articlesCtrl.new);
// router.get("/:id", articlesCtrl.show);


module.exports = router;