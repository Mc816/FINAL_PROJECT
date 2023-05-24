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
  film: {
    type: String,
  },
  enemies: { type: String },
});

module.exports = mongoose.model("DisneyChar", disneyCharSchema);
