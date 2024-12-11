const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

// Seed Route using POST for seeding data
router.post("/seed", async (req, res) => {
  try {
    // Seed Users
    const users = [
      {
        username: "john_doe",
        email: "john@example.com",
        password: "password123", // We could hash passwords, but we're skipping it for seeding
      },
      {
        username: "jane_smith",
        email: "jane@example.com",
        password: "password123",
      },
      {
        username: "alice_walker",
        email: "alice@example.com",
        password: "password123",
      },
      {
        username: "bob_brown",
        email: "bob@example.com",
        password: "password123",
      },
      {
        username: "charlie_jones",
        email: "charlie@example.com",
        password: "password123",
      },
    ];

    // Inserts Users in the database
    const createdUsers = await User.insertMany(users);
    console.log("Users inserted:", createdUsers);

    // Create Posts for the Users
    const posts = createdUsers.map((user) => ({
      title: `Post by ${user.username}`,
      content: "This is a sample post content.",
      author: user._id, // Reference to user._id
      comments: [], // Start with empty comments array
    }));

    // Insert Posts in the database
    const createdPosts = await Post.insertMany(posts);
    console.log("Posts inserted:", createdPosts);

    // Create Comments for the Posts
    const comments = createdPosts.map((post, index) => ({
      content: `This is a comment on post: ${post.title}`,
      author: createdUsers[index % createdUsers.length]._id, // Rotate through users for comments
      post: post._id, // Reference to the post._id
    }));

    // Insert Comments in the database
    const createdComments = await Comment.insertMany(comments);
    console.log("Comments inserted:", createdComments);

    // Link comments to the posts
    for (let i = 0; i < createdPosts.length; i++) {
      createdPosts[i].comments.push(createdComments[i]._id);
      await createdPosts[i].save(); // Update posts with associated comments
    }

    // Return success response if seeded correctly (that's the idea)
    res.status(200).json({ message: "Database seeded successfully!" });
  } catch (error) {
    console.error("Error seeding database:", error);
    res.status(500).json({ message: "Error seeding database", error });
  }
});

module.exports = router;

// seed.route.js

// const express = require("express");
// const router = express.Router();
// const User = require("../models/user.model");
// const Post = require("../models/post.model");
// const Comment = require("../models/comment.model");

// router.post("/seed", async (req, res) => {
//   try {
//     const users = [
//       {
//         username: "john_doe",
//         email: "john@example.com",
//         password: "password123",
//       },
//       {
//         username: "jane_smith",
//         email: "jane@example.com",
//         password: "password123",
//       },
//     ];

//     const createdUsers = await User.insertMany(users);

//     const posts = createdUsers.map((user) => ({
//       title: `Post by ${user.username}`,
//       content: "This is a random post content.",
//       author: user._id,
//     }));

//     const createdPosts = await Post.insertMany(posts);

//     const comments = createdPosts.map((post, index) => ({
//       content: `Comment on ${post.title}`,
//       author: createdUsers[index % createdUsers.length]._id,
//       post: post._id,
//     }));

//     await Comment.insertMany(comments);

//     res.status(200).json({ message: "Database seeded successfully!" });
//   } catch (error) {
//     console.error("Error seeding the  database:", error);
//     res.status(500).json({ message: "Error seeding the database", error });
//   }
// });

// module.exports = router;
