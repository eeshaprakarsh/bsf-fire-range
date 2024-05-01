import { useState } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
function RecordReport() {
  const [formData, setFormData] = useState({
    traineeName: [],
    position: "",
    target: "",
    dateAdded: "",

    thirtyTwoCm: "",
    fortyEightCm: "",
    else: "",
  });

  const [searchTrainee, setSearchTrainee] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
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
          <h2>Record Report</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="traineeName">Select Trainee</label>
              <select className="select-form" value="" onChange={handleChange}>
                <option value="">Select an option</option>
                <option value={formData.traineeName[0]}>Option 1</option>
                <option value={formData.traineeName[2]}>Option 2</option>
                <option value={formData.traineeName[3]}>Option 3</option>
              </select>
            </div>
            {searchTrainee && (
              <button onClick={() => setSearchTrainee(false)}>Search</button>
            )}

            {!searchTrainee && (
              <div>
                <div className="form-group">
                  <label htmlFor="position">Select Position</label>
                  <select
                    className="select-form"
                    value=""
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value={formData.traineeName[0]}>Option 1</option>
                    <option value={formData.traineeName[2]}>Option 2</option>
                    <option value={formData.traineeName[3]}>Option 3</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="target">Select Target</label>
                  <select
                    className="select-form"
                    value=""
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value={formData.traineeName[0]}>Option 1</option>
                    <option value={formData.traineeName[2]}>Option 2</option>
                    <option value={formData.traineeName[3]}>Option 3</option>
                  </select>
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
                <div className="target-lengths">
                  <div className="form-group">
                    <label htmlFor="thirtyTwoCm">32CM</label>
                    <select
                      className="select-form margin-select"
                      value=""
                      onChange={handleChange}
                    >
                      <option value="">0</option>
                      <option value={formData.thirtyTwoCm[0]}>1</option>
                      <option value={formData.thirtyTwoCm[2]}>2</option>
                      <option value={formData.thirtyTwoCm[3]}>3</option>
                      <option value={formData.thirtyTwoCm[3]}>4</option>
                      <option value={formData.thirtyTwoCm[3]}>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="fortyEightCm">48CM</label>
                    <select
                      className="select-form margin-select"
                      value=""
                      onChange={handleChange}
                    >
                      <option value="">0</option>
                      <option value={formData.thirtyTwoCm[0]}>1</option>
                      <option value={formData.thirtyTwoCm[2]}>2</option>
                      <option value={formData.thirtyTwoCm[3]}>3</option>
                      <option value={formData.thirtyTwoCm[3]}>4</option>
                      <option value={formData.thirtyTwoCm[3]}>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="else">Else</label>
                    <select
                      className="select-form margin-select"
                      value=""
                      onChange={handleChange}
                    >
                      <option value="">0</option>
                      <option value={formData.thirtyTwoCm[0]}>1</option>
                      <option value={formData.thirtyTwoCm[2]}>2</option>
                      <option value={formData.thirtyTwoCm[3]}>3</option>
                      <option value={formData.thirtyTwoCm[3]}>4</option>
                      <option value={formData.thirtyTwoCm[3]}>5</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="targetPicture">Target Picture</label>
                  <input
                    type="file"
                    id="targetPicture"
                    name="targetPicture"
                    // value={formData.img}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Submit</button>
              </div>
            )}
          </form>
          {showSuccessMessage && (
            <div className="overlay">
              <p className="success-message">Record Recorded Successfully!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecordReport;
