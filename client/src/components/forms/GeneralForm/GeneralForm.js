import React, { useState } from "react";
import "./GeneralForm.css";
function GeneralForm({ name }) {
  const [formData, setFormData] = useState({
    traineeName: "",
    traineeGrp: "",
    traineeID: "",
    dateAdded: Date.now(),
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
      <div className="formWrapper">
        <div className="form-container">
          <h2>{name}</h2>
          <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
          </form>
        </div>{" "}
      </div>
    </div>
  );
}

export default GeneralForm;
