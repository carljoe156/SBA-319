const Comment = require("../models/comment.model");

// Gets all comments for our Blog database
const getComments = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const comments = await Comment.find({})
      .populate("author")
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Gets comment by ID for our Blog database
const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate("author");
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new comment for our user for our Blog database
const addComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a comment from our Blog database
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getComments,
  getCommentById,
  addComment,
  deleteComment,
};
