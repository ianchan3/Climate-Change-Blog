const express = require("express");
const router = express.Router();
const articlesCtrl = require("../controllers/articles");

router.get("/", articlesCtrl.index);

module.exports = router;