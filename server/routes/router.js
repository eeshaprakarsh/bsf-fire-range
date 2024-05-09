const express = require("express");
const router = express.Router();
const UPDATE_TYPES = require("../constants/updateTypes");

const schemas = require("../models/schemas");

router.post("/addTrainee", async (req, res) => {
  console.log(req);
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
  console.log(req);
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

// Update route
router.put("/updateTrainee", async (req, res) => {
  console.log(req.body);
  try {
    const trainees = schemas.trainees;
    const { filter, updateType, update } = req.body;

    let result;
    switch (updateType) {
      case UPDATE_TYPES.SET_FIELD:
        result = await trainees.updateMany(filter, { $set: update });
        break;
      case UPDATE_TYPES.PUSH_TO_ARRAY:
        result = await trainees.updateMany(filter, {
          $push: { firingReports: update },
        });
        break;
      default:
        return res.status(400).json({ message: "Invalid update type" });
    }

    if (!result) {
      return res.status(404).json({ message: "Trainee not found" });
    }

    res.send(result);
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
