//localhost:5000/api/seed
// /routes/seedRoute.js
const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");
const Comment = require("../models/comment.model");

// Define the seed route (e.g., /api/seed)
// router.get("/seed", seedData);

router.get("/seed", async (req, res) => {
  try {
    // Our Sample Users
    const users = [
      {
        username: "nick_doe",
        email: "nick.doe@example.com",
        password: "password123",
      },
      {
        username: "carla_smith",
        email: "carla.smith@example.com",
        password: "securepassword456",
      },
      {
        username: "logan_jones",
        email: "logan.jones@example.com",
        password: "mypassword789",
      },
      {
        username: "michael_brown",
        email: "michael.brown@example.com",
        password: "strongpassword101",
      },
      {
        username: "susan_williams",
        email: "susan.williams@example.com",
        password: "mypassword202",
      },
      {
        username: "alex_taylor",
        email: "alex.taylor@example.com",
        password: "alexsecure123",
      },
      {
        username: "emma_johnson",
        email: "emma.johnson@example.com",
        password: "emma12345",
      },
      {
        username: "david_miller",
        email: "david.miller@example.com",
        password: "passwordabc987",
      },
      {
        username: "sophia_davis",
        email: "sophia.davis@example.com",
        password: "sophia@987",
      },
      {
        username: "olivia_moore",
        email: "olivia.moore@example.com",
        password: "olivia!2345",
      },
      {
        username: "ethan_anderson",
        email: "ethan.anderson@example.com",
        password: "ethanpass1234",
      },
      {
        username: "lucas_thomas",
        email: "lucas.thomas@example.com",
        password: "lucaspwd567",
      },
      {
        username: "mason_jackson",
        email: "mason.jackson@example.com",
        password: "maspwd8765",
      },
    ];

    // Inserts Our Users into DB
    const insertedUsers = await User.insertMany(users);

    // Our Sample Posts that are linked to users
    const posts = [
      {
        title: "The Importance of Clean Code in Software Engineering",
        content:
          "Clean code is crucial for maintaining readability, scalability, and ease of maintenance in software projects.",
        author: insertedUsers[0]._id,
      },
      {
        title: "Best Practices for Writing Scalable Web Applications",
        content: "Scalability is key for large web applications.",
        author: insertedUsers[1]._id,
      },
      {
        title: "Introduction to Microservices Architecture",
        content:
          "Microservices is an architectural style that structures an application as a collection of loosely coupled services.",
        author: insertedUsers[2]._id,
      },
      {
        title: "Understanding the Agile Development Methodology",
        content:
          "Agile is a methodology that allows for flexibility in the development process.",
        author: insertedUsers[3]._id,
      },
      {
        title: "Optimizing Database Queries for Speed and Efficiency",
        content:
          "Efficient database queries are crucial for scaling and improving the performance of your application.",
        author: insertedUsers[4]._id,
      },
      {
        title: "Securing Your Web Applications with HTTPS",
        content:
          "HTTPS is a secure protocol used for encrypting data between the client and server.",
        author: insertedUsers[5]._id,
      },
      {
        title: "Building RESTful APIs with Node.js",
        content:
          "RESTful APIs are designed to work efficiently with HTTP and enable communication between different applications.",
        author: insertedUsers[6]._id,
      },
      {
        title: "Cloud Computing: Benefits and Challenges",
        content:
          "Cloud computing allows for on-demand access to computing resources over the internet.",
        author: insertedUsers[7]._id,
      },
      {
        title: "Effective Debugging Techniques for JavaScript",
        content:
          "Debugging is a vital skill for identifying and fixing errors in your code.",
        author: insertedUsers[8]._id,
      },
      {
        title: "The Future of AI and Machine Learning",
        content:
          "AI and Machine Learning are transforming industries and opening up new possibilities.",
        author: insertedUsers[9]._id,
      },
      {
        title: "Building Scalable Front-End Applications with React",
        content:
          "React.js is a popular JavaScript library for building scalable front-end web applications.",
        author: insertedUsers[10]._id,
      },
      {
        title: "The Role of Data Science in Modern Software Development",
        content:
          "Data science is revolutionizing the way we build software by leveraging data to make better decisions.",
        author: insertedUsers[11]._id,
      },
    ];

    // Inserts Our Posts into DB
    const insertedPosts = await Post.insertMany(posts);

    // Our Sample Comments that are linked to posts and users
    const comments = [
      {
        content: "Great post! Very insightful.",
        post: insertedPosts[0]._id,
        author: insertedUsers[0]._id,
      },
      {
        content: "I learned a lot from this, thanks for sharing.",
        post: insertedPosts[1]._id,
        author: insertedUsers[1]._id,
      },
      {
        content:
          "Interesting perspective. I'll try implementing some of these techniques.",
        post: insertedPosts[2]._id,
        author: insertedUsers[2]._id,
      },
      {
        content: "Nice explanation of Agile! Very helpful.",
        post: insertedPosts[3]._id,
        author: insertedUsers[3]._id,
      },
      {
        content: "I'll definitely try these database optimizations. Thanks!",
        post: insertedPosts[4]._id,
        author: insertedUsers[4]._id,
      },
      {
        content: "Good to know! HTTPS should be a priority for all web apps.",
        post: insertedPosts[5]._id,
        author: insertedUsers[5]._id,
      },
      {
        content: "Awesome tutorial on RESTful APIs. Great work!",
        post: insertedPosts[6]._id,
        author: insertedUsers[6]._id,
      },
      {
        content: "Cloud computing is the future! This post explains it well.",
        post: insertedPosts[7]._id,
        author: insertedUsers[7]._id,
      },
      {
        content:
          "Debugging JavaScript can be tricky, but these tips are great!",
        post: insertedPosts[8]._id,
        author: insertedUsers[8]._id,
      },
      {
        content:
          "Machine learning is truly amazing! Looking forward to more posts on this.",
        post: insertedPosts[9]._id,
        author: insertedUsers[9]._id,
      },
      {
        content:
          "React is the best for building scalable front-end apps. Great insights!",
        post: insertedPosts[10]._id,
        author: insertedUsers[10]._id,
      },
      {
        content: "This was a great read! Data science is changing everything.",
        post: insertedPosts[11]._id,
        author: insertedUsers[11]._id,
      },
    ];

    // To handle Insert Comments into DB
    const insertedComments = await Comment.insertMany(comments);

    // To handle Update Posts with the inserted comment references
    await Promise.all(
      insertedPosts.map(async (post) => {
        post.comments = insertedComments
          .filter((comment) => comment.post.toString() === post._id.toString())
          .map((comment) => comment._id);
        await post.save();
      })
    );

    res
      .status(200)
      .json({ message: "Users, Posts, and Comments seeded successfully!" });
  } catch (err) {
    console.error("Error seeding data:", err);
    res.status(400).json({ error: "Error seeding data" });
  }
});

module.exports = router;
