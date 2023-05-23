const DisneyChar = require("../../models/DisneyChar");

//create
const createDisneyChar = async (req, res) => {
  try {
    const { name, phrase, film, enemies } = req.body;

    const disneyChar = new DisneyChar({ name, phrase, film, enemies });
    await disneyChar.save();
    //Saving the object using the save method
    console.log(disneyChar);

    res.status(200).json({ message: "Created", data: disneyChar });
  } catch (err) {
    res.status(400).json({ error: "failed" });
  }
};

//Retriving the char from the database/mongodb
const getAllDisenyChars = async (req, res) => {
  try {
    const disneyChars = await DisneyChar.find({});

    res.status(200).json({ disneyChars });
  } catch (err) {
    res.status(400).json({ err: "failed" });
  }
};
module.exports = {
  createDisneyChar,
  getAllDisenyChars,
};
