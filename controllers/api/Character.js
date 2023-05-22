const DisneyChar = require("../../models/DisneyChar");

//create
const createDisneyChar = async (req, res) => {
  try {
    const { name, phrase, image } = req.body;

    const disneyChar = new DisneyChar({ name, phrase, image });
    await disneyChar.save();
    console.log(disneyChar);
    // const data = await DisneyChar.create({
    //   name: req.query.name,
    //   phrase: req.query.phrase,
    // });
    res.status(200).json({ message: "Created", data: disneyChar });
  } catch (err) {
    res.status(400).json({ error: "failed" });
  }
};

const getAllDisenyChars = async (req, res) => {
  try {
    const disneyChars = await DisneyChar.find();

    res.status(200).json({ disneyChars });
  } catch (err) {
    res.status(400).json({ err: "failed" });
  }
};
module.exports = {
  createDisneyChar,
  getAllDisenyChars,
};

// const Characters = require("../../models/Character");

// module.exports = {
//   create,
// };

// async function create(req, res) {
//   try {
//     // Add the user to the database
//     // then()
//     console.log(req.body);
//     const user = await Characters.create(req.body);
//     // token will be a string

//     res.status(200);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }
