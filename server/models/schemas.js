const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const targetSizeSchema = new Schema({
  "32cm": { type: Number },
  "48cm": { type: Number },
  else: { type: Number },
});

const firingReportSchema = new Schema({
  dateAdded: { type: String },
  position: { type: String },
  target: { type: Number },
  targetSize: { type: targetSizeSchema },
  targetImg: { type: String },
});

const traineeSchema = new Schema({
  traineeName: { type: String },
  traineeID: { type: String },
  dateAdded: { type: String },
  traineeImg: { type: String },
  firingReports: { type: [firingReportSchema] },
});

const Trainees = mongoose.model("Trainees", traineeSchema, "trainees");
const mySchemas = { trainees: Trainees };

module.exports = mySchemas;
