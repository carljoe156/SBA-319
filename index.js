const express = require("express");
const app = express();
const connectToDb = require("./db/conn");
const dotenv = require("dotenv");
dotenv.config();
const postRoute = require("./routes/post.route");
const commentRoute = require("./routes/comment.route");
const userRoute = require("./routes/user.route");
const seedRoute = require("./routes/seed.route");
const bodyParser = require("body-parser");
// Import DB connection to connect it to MongoDB)
const db = require("./db/conn");
// const mongoose = require("mongoose");

// Our Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Our Custom middleware to log requests
app.use((req, res, next) => {
  console.log("Middleware: I run for all routes");
  next();
});

app.use((req, res, next) => {
  const time = new Date();
  console.log(
    `-----
            ${time.toLocaleDateString()}: Received a ${req.method} request to ${
      req.url
    }.`
  );

  if (req.body && Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

// Our Routes...
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/users", userRoute);
// app.use("/api/seed", seedRoute);
app.use("/api", seedRoute); //temp

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Our Server is listening on http://localhost:${PORT}`);
});
