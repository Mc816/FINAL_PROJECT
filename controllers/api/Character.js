const Characters = require("../../models/Character");

module.exports = {
  create,
};

async function create(req, res) {
  try {
    // Add the user to the database
    // then()
    console.log(req.body);
    const user = await Characters.create(req.body);
    // token will be a string

    res.status(200);
  } catch (err) {
    res.status(400).json(err);
  }
}
