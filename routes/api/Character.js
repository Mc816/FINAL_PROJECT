const express = require("express");
const router = express.Router();
const characterController = require("../../controllers/api/Character");

router.post("/", characterController.createDisneyChar);

router.get("/", characterController.getAllDisenyChars);
module.exports = router;
