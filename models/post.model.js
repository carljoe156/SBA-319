// This our model schema for our Post
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"], // Ensure title is provided
      minlength: [3, "Title must be at least 3 characters long"], // Minimum length for title
      maxlength: [200, "Title cannot be longer than 200 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"], // Ensure content is provided
      minlength: [10, "Content must be at least 10 characters long"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
