const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const disneyCharSchema = new Schema({
  name: { type: String, required: true },
  phrase: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("DisneyChar", disneyCharSchema);
