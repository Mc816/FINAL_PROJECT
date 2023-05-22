const express = require("express");
const axios = require("axios");
const DisneyChar = require("../../models/DisneyChar");
const disneyCharCtrl = require("../../controllers/api/DisneyCharController");

const router = express.Router();

router.post(`/`, disneyCharCtrl.fetchDisneyChar);

router.get(`/`, disneyCharCtrl.fetchDisneyChar2);
module.exports = router;
