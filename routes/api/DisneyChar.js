const express = require("express");
// const axios = require("axios");
// const DisneyChar = require("../../models/DisneyChar");
const disneyCharCtrl = require("../../controllers/api/DisneyCharController");

const router = express.Router();

router.get(`/`, disneyCharCtrl.searchCharacters);

module.exports = router;
