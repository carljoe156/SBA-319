// Our Comment Routes
const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");

router.get("/", commentController.getComments);
router.get("/:id", commentController.getCommentById);
router.post("/", commentController.addComment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;
