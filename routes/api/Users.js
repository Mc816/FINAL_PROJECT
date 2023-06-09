const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/Users");
// require the authorization middleware function
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/users
router.post("/", usersCtrl.create);

// POST /api/users/login
router.post("/login", usersCtrl.login);

// GET /api/users/check-token and Insert ensureLoggedIn on all routes that need protecting
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
