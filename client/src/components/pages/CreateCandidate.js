import React, { useEffect, useState } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
import api from "../../utils/api";
import { personalDetails } from "../../schemas/traineeSchema";

const CreateCandidate = () => {
  const [formData, setFormData] = useState(personalDetails);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const demoImgUrl =
    "https://im.rediff.com/news/2015/nov/23encounter01-1.JPG?w=670&h=900";

  useEffect(() => {
    // console.log(traineeSchema);
  }, []);

  // Handle form input field change
  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value.toUpperCase(),
    }));

    // Remove this, once image blob store is added
    if (name === "traineeImg") {
      setImageSrc(demoImgUrl);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    api.addTrainee(formData).then((res) => {
      if (res.status === 200) {
        // Show success message
        setShowSuccessMessage(true);

        // Set timer to hide the success message after 1 second
        setTimeout(() => {
          setShowSuccessMessage(false);
          setFormData(personalDetails);
        }, 1000);
      }
    });
  };
  return (
    <div>
      <NavBar />
      <div className="formWrapper">
        <div className="form-container">
          <h2>Create New Candidate</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="traineeName">Trainee Name</label>
              <input
                type="text"
                id="traineeName"
                name="traineeName"
                value={formData.traineeName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="traineeID">Trainee ID</label>
              <input
                type="text"
                id="traineeID"
                name="traineeID"
                value={formData.traineeID}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateAdded">Date</label>
              <input
                type="date"
                id="dateAdded"
                name="dateAdded"
                value={formData.dateAdded}
                onChange={handleChange}
                required
              />
            </div>

            {imageSrc && (
              <div className="form-group">
                <label>Selected Trainee Image</label>
                <img
                  className="selected-trainee-img"
                  src={imageSrc}
                  alt="Selected"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="traineeImg">Trainee Picture</label>
              <input
                type="file"
                id="traineeImg"
                name="traineeImg"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
          {showSuccessMessage && (
            <div className="overlay">
              <p className="success-message">
                New Trainee Profile Created Successfully!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCandidate;
