const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: { type: String, required: true },
  phrase: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("Character", characterSchema);
