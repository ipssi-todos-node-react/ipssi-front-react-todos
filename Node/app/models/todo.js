const mongoose = require("mongoose");

/* IMPORTS */

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: { type: String, required: true }
  // active: Boolean,
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: Date
});

module.exports = mongoose.model("Todos", TodoSchema);
