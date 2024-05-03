import { useState, useEffect } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
import api from "../../utils/api";

// import { Input, AutoComplete } from "antd";
// import "antd/dist/antd.css";
// const { Option } = AutoComplete;

function ViewEditDetails() {
  const [formData, setFormData] = useState({
    traineeName: "",
    traineeID: "",
    dateAdded: "",
  });

  const [searchTrainee, setSearchTrainee] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    api.fetchCandidate().then((data) => console.log(data));
  }, []);

  // const handleSearch = async (value) => {
  //   try {
  //     // Fetch suggestions from your API
  //     const response = await fetch(`YOUR_API_URL?q=${value}`);
  //     const data = await response.json();
  //     setOptions(data);
  //   } catch (error) {
  //     console.error("Error fetching suggestions:", error);
  //   }
  // };

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

    // Show success message
    setShowSuccessMessage(true);

    // Set timer to hide the success message after 2 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1000);
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
                required
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
                required
              />
            </div>
            {searchTrainee && (
              <button onClick={() => setSearchTrainee(false)}>Search</button>
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
                    required
                  />
                </div>
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
