const express = require("express");
const router = express.Router();
const charactersCtrl = require("../../controllers/api/Character");
// require the authorization middleware function
// const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/users
router.post("/", charactersCtrl.create);

// router.get("/new");

// // POST /api/users/login
// router.post("/login", usersCtrl.login);

// // GET /api/users/check-token and Insert ensureLoggedIn on all routes that need protecting
// router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
