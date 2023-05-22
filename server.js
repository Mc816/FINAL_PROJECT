// Always require and configure near the top
require("dotenv").config();
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require("./config/database");

const port = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.json());
//Servers job is to send data or information
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
//We know who is logged in now
app.use(require("./config/checkToken"));
app.use(express.urlencoded({ extended: false }));
app.use(`/api/users`, require("./routes/api/Users"));

app.use(`/api/character`, require("./routes/api/Character"));

app.use("/api/DisneyChar", require("./routes/api/DisneyChar"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
