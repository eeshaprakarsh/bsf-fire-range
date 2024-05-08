import { useState } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
import traineeSchema from "../../schemas/traineeSchema";

function ViewReport() {
  // const [formData, setFormData] = useState({
  //   traineeName: traineeSchema.properties.traineeName.default,
  //   firingReports: traineeSchema.properties.firingReports.default,
  // });

  // const handleSearch = (e) => {
  //   e.preventDefault();

  //   // Check if the trainee name is typed
  //   if (!formData.traineeName) {
  //     setErrorMessage("Please type trainee name to search.");
  //     return;
  //   } else {
  //     const value = formData.traineeName;
  //     console.log(value);
  //     api
  //       .fetchTrainees(value)
  //       .then((data) => {
  //         const { _id, traineeName } = data.data[0];

  //         setFormData({
  //           _id,
  //           traineeName,
  //         });
  //         setSearchTrainee(false);
  //         setErrorMessage("");
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching suggestions:", err);
  //         setFormData({
  //           traineeID: "",
  //           traineeName: "",
  //         });
  //         setErrorMessage(
  //           "No matching data found! Please type correct name or ID."
  //         );
  //       });
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission, e.g., send data to server
  //   console.log(formData);
  // };

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
