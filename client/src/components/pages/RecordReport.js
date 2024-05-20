import { useState } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
import {
  personalDetails,
  firingDetails,
  recordOptions,
} from "../../schemas/traineeSchema";
import Error from "../layout/Error/Error";
import api from "../../utils/api";
import Search from "../common/Search/Search";
import UPDATE_TYPES from "../../constants/updateTypes";
import { SEARCH_NAME } from "../../constants";

function RecordReport() {
  const demoImgUrl = "https://m.media-amazon.com/images/I/41lzQNjiebL._AC_.jpg";
  const resetFormData = {
    _id: "",
    traineeName: personalDetails.traineeName,
    traineeID: personalDetails.traineeID,
    ...firingDetails,
  };

  const { position, target, targetSize } = recordOptions;
  const [formData, setFormData] = useState(resetFormData);

  const [searchTrainee, setSearchTrainee] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [select32, setSelect32] = useState(0);
  const [select48, setSelect48] = useState(0);
  const [selectElse, setSelectElse] = useState(0);

  const selectOption = <option>Select an Option</option>;
  const selectOPtionTargetSize = <option>0</option>;

  const handleSearch = (data) => {
    // Further actions with the selected item
    console.log("Selected Item:", data);
    if (data) {
      const { _id, traineeName, traineeID } = data;
      console.log(_id, traineeName);
      setFormData({
        ...formData,
        _id,
        traineeName,
        traineeID,
      });
      setSearchTrainee(false);
      setErrorMessage("");
    } else {
      setFormData(resetFormData);
      setErrorMessage(
        `No trainee details were found with the name '${formData.traineeName}'. Please navigate to the Home page and create a new Trainee profile.`
      );
    }
  };

  const handleChangeOptions = (e) => {
    e.preventDefault();

    const { value } = e.target.options[e.target.selectedIndex];
    const { name } = e.target;

    name === "32cm" || name === "48cm" || name === "else"
      ? setFormData({
          ...formData,
          targetSize: { ...formData.targetSize, [name]: Number(value) },
        })
      : setFormData({ ...formData, [name]: value });

    switch (name) {
      case "32cm":
        setSelect32(parseInt(value));
        break;
      case "48cm":
        setSelect48(parseInt(value));
        break;
      case "else":
        setSelectElse(parseInt(value));
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value.toUpperCase() });

    // Remove this, once image blob store is added
    if (name === "targetPicture") {
      setImageSrc(demoImgUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission, e.g., send data to server

    if (formData.traineeName) {
      const { traineeID, position, target, targetSize, dateAdded, targetImg } =
        formData;
      const dataToPush = {
        traineeID,
        position,
        target,
        targetSize,
        dateAdded,
        targetImg,
      };
      console.log(dataToPush);
      api
        .updateTrainee(formData._id, UPDATE_TYPES.PUSH_TO_ARRAY, dataToPush)
        .then((res) => {
          console.log(res);
          // Show success message
          setShowSuccessMessage(true);
          // Set timer to hide the success message after 1 second
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 1000);
        });
    }
  };

  return (
    <div>
      <NavBar />
      <div className="formWrapper">
        <div className="form-container">
          <h2>Record Report</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="traineeName">Trainee Name</label>
              <Search
                onSelect={handleSearch}
                toDisable={!searchTrainee}
                searchType={SEARCH_NAME}
              />
            </div>
            <Error errorMessage={errorMessage} />
            {!searchTrainee && (
              <div>
                <div className="form-group">
                  <label htmlFor="traineeID">Trainee ID</label>
                  <input
                    type="text"
                    id="traineeID"
                    name="traineeID"
                    value={formData.traineeID}
                    disabled
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
                <div className="form-group">
                  <label htmlFor="position">Select Position</label>
                  <select
                    className="select-form"
                    name="position"
                    value={formData.position}
                    onChange={handleChangeOptions}
                  >
                    {selectOption}
                    {position.map((elem, i) => {
                      return <option key={i}>{elem}</option>;
                    })}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="target">Select Target</label>
                  <select
                    className="select-form"
                    name="target"
                    value={formData.target}
                    onChange={handleChangeOptions}
                  >
                    {selectOption}
                    {target.map((elem, i) => {
                      return <option key={i}>{elem}</option>;
                    })}
                  </select>
                </div>

                <div className="target-lengths">
                  <div className="form-group target-size-option">
                    <label htmlFor="thirtyTwoCm">32CM</label>
                    <select
                      className="select-form"
                      name="32cm"
                      value={formData.targetSize["32cm"]}
                      onChange={handleChangeOptions}
                    >
                      {selectOPtionTargetSize}
                      {targetSize.map((elem, i) => {
                        return (
                          <option
                            key={i}
                            disabled={select48 + selectElse + elem > 5}
                          >
                            {elem}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group target-size-option">
                    <label htmlFor="fortyEightCm">48CM</label>
                    <select
                      className="select-form"
                      name="48cm"
                      value={formData.targetSize["48cm"]}
                      onChange={handleChangeOptions}
                    >
                      {selectOPtionTargetSize}
                      {targetSize.map((elem, i) => {
                        return (
                          <option
                            key={i}
                            disabled={select32 + selectElse + elem > 5}
                          >
                            {elem}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group target-size-option">
                    <label htmlFor="else">Else</label>
                    <select
                      className="select-form"
                      name="else"
                      value={formData.targetSize.else}
                      onChange={handleChangeOptions}
                    >
                      {selectOPtionTargetSize}
                      {targetSize.map((elem, i) => {
                        return (
                          <option
                            key={i}
                            disabled={select32 + select48 + elem > 5}
                          >
                            {elem}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                {imageSrc && (
                  <div className="form-group">
                    <label>Selected Target Picture</label>
                    <img
                      className="selected-target-img"
                      src={imageSrc}
                      alt="Selected"
                    />
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="targetPicture">Target Picture</label>
                  <input
                    type="file"
                    id="targetPicture"
                    name="targetPicture"
                    value={formData.targetImg}
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
