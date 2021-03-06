const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  name: { type: String, required: true },
  highscore: { type: Number, required: true },
  date: {type: Date, default: Date.now }
})

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score