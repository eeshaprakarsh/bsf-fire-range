const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const traineeSchema = new Schema({
  traineeName: { type: String },
  traineeID: { type: String },
  dateAdded: { type: Date, default: Date.now },
  traineeImg: { type: String },
});

const Trainees = mongoose.model("Trainees", traineeSchema, "trainees");
const mySchemas = { trainees: Trainees };

module.exports = mySchemas;
