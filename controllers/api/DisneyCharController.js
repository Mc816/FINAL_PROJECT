const axios = require("axios");
const DisneyChar = require("../../models/DisneyChar");
const { search } = require("../../routes/api/Character");

exports.fetchDisneyChar = async (req, res) => {
  try {
    const data = await DisneyChar.create({
      name: req.query.name,
      phrase: req.query.phrase,
    });
    //API code:
    // const response = await axios.get(
    //   `https://api.disneyapi.dev/character/?name=${req.params.name}`
    // );
    // const disneyCharData = response.data.data;

    // const disneyChars = await DisneyChar.create(disneyCharData);
    // res.status(200).send({ message: "Fetch Successful", data: disneyCharData });

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Fetch Error" });
  }
};

exports.fetchDisneyChar2 = async (req, res) => {
  try {
    const data = await DisneyChar.find({
      name: req.query.name,
    });
    if (data.length != 0) {
      res.status(200).json(data);
    } else {
      const response = await axios.get(
        `https://api.disneyapi.dev/character/?name=${req.params.name}`
      );
      const disneyCharData = response.data.data;
      res.status(200).send({
        message: "Fetch Successful",
        data: disneyCharData,
      });
    }
    //API code:
    // const response = await axios.get(
    //   `https://api.disneyapi.dev/character/?name=${req.params.name}`
    // );
    // const disneyCharData = response.data.data;

    // const disneyChars = await DisneyChar.create(disneyCharData);
    // res.status(200).send({ message: "Fetch Successful", data: disneyCharData });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Fetch Error" });
  }
};
