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

  if (saveTrainee) {
    res.send(`Message Sent. Thank You! `);
  }
  res.end();
});

router.get("/candidates", (req, res) => {
  const candidates = [
    {
      traineeName: "Eesha",
      traineeID: "1",
      dateAdded: "2024-05-02",
    },
    {
      traineeName: "Ambikesh Pandey",
      traineeID: "2",
      dateAdded: "2024-05-19",
    },
    {
      traineeName: "Tryambak Pandey",
      traineeID: "3",
      dateAdded: "2024-05-29",
    },
    {
      traineeName: "Keshav",
      traineeID: "4",
      dateAdded: "2024-06-06",
    },
  ];
  res.send(candidates);
});

module.exports = router;
