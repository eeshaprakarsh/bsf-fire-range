import { useState, useEffect } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
import api from "../../utils/api";

// import { Input, AutoComplete } from "antd";
// import "antd/dist/antd.css";
// const { Option } = AutoComplete;

function ViewEditDetails() {
  const demoImgUrl =
    "https://lh3.googleusercontent.com/pw/AP1GczNgJ1QesqXXROo13nRmKQeNDlq8NfTv2dZNSakg4nAjYHwQENsTWgaw24P-XEQa04DadI2388mUfp9-XApCBwOLSsMZ-_F7pMLc1gNddaDX3_KtqV7wPcWfqY6fjpFYzUOlrwu-kE-tuh4nnJDgcRIIiQ=w806-h1430-s-no-gm?authuser=0";

  const [formData, setFormData] = useState({
    traineeName: "",
    traineeID: "",
    dateAdded: "",
  });

  // const [traineeNameSearch, setTraineeNameSearch] = useState("");
  // const [traineeIdSearch, setTraineeIdSearch] = useState("");
  const [searchTrainee, setSearchTrainee] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [options, setOptions] = useState([]);

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
          console.log(data.data[0]);
          const { dateAdded, traineeID, traineeImg, traineeName } =
            data.data[0];

          setFormData({
            dateAdded: new Date(dateAdded),
            traineeID,
            traineeImg: demoImgUrl,
            traineeName,
          });
          setImageSrc(demoImgUrl);
          setSearchTrainee(false);
          setErrorMessage("");
        })
        .catch((err) => console.error("Error fetching suggestions:", err));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission, e.g., send data to server
    console.log(formData);

    // // Show success message
    // setShowSuccessMessage(true);

    // // Set timer to hide the success message after 2 seconds
    // setTimeout(() => {
    //   setShowSuccessMessage(false);
    // }, 1000);
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
              {/* <AutoComplete
                style={{ width: 200 }}
                onSearch={handleSearch}
                placeholder="Search for names"
              >
                {options.map((option) => (
                  <Option key={option.id} value={option.name}>
                    {option.name}
                  </Option>
                ))}
              </AutoComplete> */}
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
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
                    required
                  />
                </div>
                <button type="submit">Submit</button>
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
