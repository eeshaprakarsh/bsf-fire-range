import { useState } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
function ViewReport() {
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
        <p className="form-container ">
          Firing Graphs and detailed Insights will be shown here
        </p>
      </div>
    </div>
  );
}

export default ViewReport;
