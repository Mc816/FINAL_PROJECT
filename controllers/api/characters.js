const Characters = require("../../models/Character");

module.exports = {
  find,
};

async function create(req, res) {
  try {
    // Add the user to the database
    // then()
    const user = await Characters.create(req.body);
    // token will be a string

    res.render("CharacterPage");
  } catch (err) {
    res.status(400).json(err);
  }
}
