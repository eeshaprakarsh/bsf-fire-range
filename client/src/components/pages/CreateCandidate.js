import React, { useEffect, useState } from "react";
import "./styles/Pages.css"; // Import your custom CSS file for styling
import NavBar from "../layout/Nav/NavBar";
// import GeneralForm from "../../forms/GeneralForm/GeneralForm";
import api from "../../utils/api";

const CreateCandidate = () => {
  const [formData, setFormData] = useState({
    traineeName: "",
    traineeGrp: "",
    traineeID: "",
    dateAdded: "",
  });

  useEffect(() => {
    api.fetchCandidate().then((res) => console.log(res));
  }, []);

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
              <label htmlFor="traineeGrp">Trainee Group</label>
              <input
                type="text"
                id="traineeGrp"
                name="traineeGrp"
                value={formData.traineeGrp}
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
            <div className="form-group">
              <label htmlFor="dateAdded">Image</label>
              <input
                type="file"
                id="img"
                name="img"
                // value={formData.img}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>{" "}
      </div>
    </div>
  );
};

export default CreateCandidate;
