import { useState } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
import Error from "../layout/Error/Error";
import api from "../../utils/api";

import { personalDetails, firingDetails } from "../../schemas/traineeSchema";

function ViewReport() {
  const demoImgUrl =
    "https://im.rediff.com/news/2015/nov/23encounter01-1.JPG?w=670&h=900";

  const resetFormData = {
    _id: "",
    ...personalDetails,
  };

  const [formData, setFormData] = useState(resetFormData);
  const [searchTrainee, setSearchTrainee] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Check if at least one input is filled
    if (!formData.traineeName && !formData.traineeID) {
      setErrorMessage("Please fill at least one input");
      return;
    } else {
      const value = formData.traineeName
        ? { traineeName: formData.traineeName }
        : { traineeID: formData.traineeID };
      console.log(value);
      api
        .fetchTrainees(value)
        .then((data) => {
          const { _id, dateAdded, traineeID, traineeImg, traineeName } =
            data.data[0];

          setFormData({
            _id,
            dateAdded,
            traineeID,
            traineeImg: demoImgUrl,
            traineeName,
          });
          setImageSrc(demoImgUrl);
          setSearchTrainee(false);
          setErrorMessage("");
        })
        .catch((err) => {
          console.error("Error fetching suggestions:", err);
          setFormData({
            traineeID: "",
            traineeName: "",
          });
          setErrorMessage(
            "No matching data found! Please type correct name or ID."
          );
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value.toUpperCase(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // Handle form submission, e.g., send data to server
  };

  return (
    <div>
      <NavBar />
      <div className="formWrapper">
        <div className="form-container">
          <h2>Firing Report</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="traineeName">Trainee Name</label>
              <input
                type="text"
                id="traineeName"
                name="traineeName"
                value={formData.traineeName}
                onChange={handleChange}
              />
            </div>
            {searchTrainee && <h6 className="form-group or"> OR </h6>}

            <div className="form-group">
              <label htmlFor="traineeID">Trainee ID</label>
              <input
                type="text"
                id="traineeID"
                name="traineeID"
                value={formData.traineeID}
                onChange={handleChange}
              />
            </div>
            {errorMessage && <Error errorMessage={errorMessage} />}
            {searchTrainee && (
              <button onClick={(val) => handleSearch(val)}>Search</button>
            )}

            {!searchTrainee && (
              <div>
                <div className="form-group">
                  <label htmlFor="dateAdded">Date</label>
                  <input
                    type="date"
                    id="dateAdded"
                    name="dateAdded"
                    // value={formData.dateAdded}
                    // onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    // value={formData.position}
                    // onChange={handleChange}
                  />
                </div>
                <div className="target-lengths">
                  <div className="form-group target-size-option">
                    <label htmlFor="thirtyTwoCm">32CM</label>
                    <input
                      type="text"
                      id="32cm"
                      className="select-form"
                      name="32cm"
                      // value={formData.targetSize["32cm"]}
                      // onChange={handleChangeOptions}
                    />
                  </div>
                  <div className="form-group target-size-option">
                    <label htmlFor="fortyEightCm">48CM</label>
                    <input
                      type="text"
                      id="48cm"
                      className="select-form"
                      name="48cm"
                      // value={formData.targetSize["48cm"]}
                      // onChange={handleChangeOptions}
                    />
                  </div>
                  <div className="form-group target-size-option">
                    <label htmlFor="else">Else</label>
                    <input
                      type="text"
                      id="else"
                      className="select-form"
                      name="else"
                      // value={formData.targetSize.else}
                      // onChange={handleChangeOptions}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="totalScore">Total Score</label>
                  <input
                    type="text"
                    id="totalScore"
                    name="totalScore"
                    // value={formData.position}
                    // onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Target Image</label>
                  <img
                    className="selected-target-img"
                    src=""
                    alt="targetImage"
                  />
                </div>

                <div className="form-group">
                  <label>Overall trend(32Cm)</label>
                  <p>Graph Here</p>
                </div>

                <div className="form-group">
                  <label>Overall trend(48Cm)</label>
                  <p>Graph Here</p>
                </div>

                <button className="view-submit-button" type="submit">
                  Update
                </button>
              </div>
            )}
          </form>
          {/* {showSuccessMessage && (
            <div className="overlay">
              <p className="success-message">Details Updated Successfully!</p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default ViewReport;
