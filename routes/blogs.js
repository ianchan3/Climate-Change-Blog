const express = require("express");
const router = express.Router();
const blogsCtrl = require("../controllers/blogs");
const isLoggedIn = require("../config/auth");

router.get("/", blogsCtrl.index);
router.get("/new", isLoggedIn, blogsCtrl.new);
router.get("/:id", blogsCtrl.show);
router.post("/", isLoggedIn, blogsCtrl.create);



module.exports = router;