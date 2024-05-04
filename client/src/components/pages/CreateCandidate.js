import React, { useEffect, useState } from "react";
import "./styles/Pages.css"; // Import your custom CSS file for styling
import NavBar from "../layout/Nav/NavBar";
// import GeneralForm from "../../forms/GeneralForm/GeneralForm";
import api from "../../utils/api";

const CreateCandidate = () => {
  const [formData, setFormData] = useState({
    traineeName: "",
    traineeID: "",
    dateAdded: Date.now(),
    traineeImg: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const demoImgUrl =
    "https://lh3.googleusercontent.com/pw/AP1GczNgJ1QesqXXROo13nRmKQeNDlq8NfTv2dZNSakg4nAjYHwQENsTWgaw24P-XEQa04DadI2388mUfp9-XApCBwOLSsMZ-_F7pMLc1gNddaDX3_KtqV7wPcWfqY6fjpFYzUOlrwu-kE-tuh4nnJDgcRIIiQ=w806-h1430-s-no-gm?authuser=0";

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "traineeImg") {
      setImageSrc(demoImgUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission
    api.addTrainee(formData).then((res) => {
      if (res.status === 200) {
        // Show success message
        setShowSuccessMessage(true);

        // Set timer to hide the success message after 2 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
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
                value={formData.traineeImg}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
          {showSuccessMessage && (
            <div className="overlay">
              <p className="success-message">Details Updated Successfully!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCandidate;
