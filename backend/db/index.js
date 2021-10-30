const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskScheme = new Schema({
  text: String,
  date: String,
  sum: Number,
});

module.exports = Task = mongoose.model("cases", taskScheme);
