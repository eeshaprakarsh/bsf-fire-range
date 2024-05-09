import { useState, useEffect } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
import api from "../../utils/api";
import UPDATE_TYPES from "../../constants/updateTypes";
import Error from "../layout/Error/Error";
import { personalDetails, firingDetails } from "../../schemas/traineeSchema";

function ViewEditDetails() {
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

    // Handle form submission, e.g., send data to server
    console.log(formData);
    api
      .updateTrainee(formData._id, UPDATE_TYPES.SET_FIELD, formData)
      .then((res) => {
        console.log(res);
        // Show success message
        setShowSuccessMessage(true);
        // Set timer to hide the success message after 1 second
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 1000);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="formWrapper">
        <div className="form-container">
          <h2>View/Edit Details</h2>
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
                    value={formData.dateAdded}
                    onChange={handleChange}
                    // required
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
                  <label htmlFor="dateAdded">Trainee Picture</label>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    // value={formData.img}
                    // onChange={handleChange}
                  />
                </div>

                <button className="view-submit-button" type="submit">
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTrainee(!searchTrainee);
                    setFormData(resetFormData);
                  }}
                >
                  Search New
                </button>
              </div>
            )}
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
}

export default ViewEditDetails;
