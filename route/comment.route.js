const express = require("express");
const router = express.Router();
const postController = require("./../controller/post.controller");

router.post("/", postController.create);
router.put("/", postController.update);
router.delete("/", postController.delete);

module.exports = router;