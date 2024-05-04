const express = require("express");
const router = express.Router();

const schemas = require("../models/schemas");

router.post("/addTrainee", async (req, res) => {
  console.log(req.body);
  const { traineeName, traineeID, dateAdded, traineeImg } = req.body;
  const traineeData = {
    traineeName: traineeName,
    traineeID: traineeID,
    dateAdded: dateAdded,
    traineeImg: traineeImg,
  };

  const newTrainee = new schemas.trainees(traineeData);
  const saveTrainee = await newTrainee.save();

  saveTrainee
    ? res.send(`Message Sent. Thank You! `)
    : res.send(`Failed to send message.`);

  res.end();
});

router.get("/trainees", async (req, res) => {
  try {
    const trainees = schemas.trainees;
    const param = req.query;
    const data = await trainees.find(param).exec();
    // console.log(JSON.stringify(data));
    res.send(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;