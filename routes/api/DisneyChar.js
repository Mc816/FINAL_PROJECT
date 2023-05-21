const express = require("express");
const axios = require("axios");
const DisneyChar = require("../../models/DisneyChar");

const router = express.Router();

router.get(`/fetch-disneyChar`, async (req, res) => {
  try {
    const response = await axios.get("https://api.disneyapi.dev/character");
    const disneyCharData = response.data.data;

    const disneyChars = await DisneyChar.create(disneyCharData);
    res.status(200).json({ message: "Fetch Successful" });
  } catch (err) {
    console.error(error);
    res.status(400).json({ message: "Fetch Error" });
  }
});

module.exports = router;
