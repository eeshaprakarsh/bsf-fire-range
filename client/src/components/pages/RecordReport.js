import { useState } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
function RecordReport() {
  const [formData, setFormData] = useState({
    traineeName: [],
    traineeGrp: [],
    targetNo: "",
    dateAdded: "",
    twelveCm: "",
    twentyFourCm: "",
    fortyEightCm: "",
    etc: "",
  });

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
          <h2>Record Report</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="traineeGrp">Select Trainee Group</label>
              <select value="" onChange={handleChange} required>
                <option value="">Select an option</option>
                <option value={formData.traineeGrp[0]}>Option 1</option>
                <option value={formData.traineeGrp[2]}>Option 2</option>
                <option value={formData.traineeGrp[3]}>Option 3</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="traineeName">Select Trainee</label>
              <select value="" onChange={handleChange} required>
                <option value="">Select an option</option>
                <option value={formData.traineeName[0]}>Option 1</option>
                <option value={formData.traineeName[2]}>Option 2</option>
                <option value={formData.traineeName[3]}>Option 3</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="targetNo">Target Number</label>
              <input
                type="text"
                id="targetNo"
                name="targetNo"
                value={formData.targetNo}
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
              <label htmlFor="twelveCm">12CM</label>
              <input
                type="text"
                id="twelveCm"
                name="twelveCm"
                value={formData.twelveCm}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="twentyFourCm">24CM</label>
              <input
                type="text"
                id="twentyFourCm"
                name="twentyFourCm"
                value={formData.twentyFourCm}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fortyEightCm">48CM</label>
              <input
                type="text"
                id="fortyEightCm"
                name="twelfortyEightCmveCm"
                value={formData.fortyEightCm}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="etc">Etc</label>
              <input
                type="text"
                id="etc"
                name="etc"
                value={formData.etc}
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
}

export default RecordReport;
