import { useState } from "react";
import "./styles/Pages.css";
import NavBar from "../layout/Nav/NavBar";
import Error from "../layout/Error/Error";
import api from "../../utils/api";
import Search from "../common/Search/Search";
import { SEARCH_NAME, SEARCH_ID, SET_FIELD } from "../../constants";
import { firingDetails } from "../../schemas/traineeSchema";
import Graph from "../common/Graph/Graph";

function ViewReport() {
  const demoImgUrl = "https://m.media-amazon.com/images/I/41lzQNjiebL._AC_.jpg";
  const [searchTrainee, setSearchTrainee] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const resetFormData = () => {
    setErrorMessage("");
    // setSearchTrainee(true);

    window.scrollTo({ top: 0 });
    return { _id: "", traineeName: "", traineeID: "", ...firingDetails };
  };

  const [formData, setFormData] = useState(resetFormData);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [imageSrc, setImageSrc] = useState("");
  const [firingApiData, setFiringApiData] = useState(null);

  const [select32, setSelect32] = useState(0);
  const [select48, setSelect48] = useState(0);
  const [selectElse, setSelectElse] = useState(0);

  const handleSearch = (data) => {
    // Check if at least one input is filled
    if (!data) {
      setErrorMessage("Please fill at least one input");
      return;
    } else {
      const { _id, traineeID, traineeName } = data;
      console.log(data);
      if (data.firingReports && data.firingReports.length > 0) {
        setFiringApiData(data.firingReports);
        console.log(data.firingReports.length);
        const len = data.firingReports.length;
        const { dateAdded, position, target, targetImg, targetSize } =
          data.firingReports[len - 1];
        setFormData({
          _id,
          traineeID,
          traineeName,
          dateAdded,
          position,
          target,
          targetImg,
          targetSize,
        });
      } else {
        setFormData({
          ...formData,
          _id,
          traineeID,
          traineeName,
        });
        setErrorMessage(
          `No Firing Details have been added for ${traineeName}.`
        );
      }
      setImageSrc(demoImgUrl);
      setSearchTrainee(false);
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
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value.toUpperCase() });

    // Remove this, once image blob store is added
    if (name === "targetPicture") {
      setImageSrc(demoImgUrl);
    }
    if (name === "dateAdded") {
      console.log(firingApiData);
      const dateSearchObj = firingApiData.find(
        (data) => data.dateAdded === value
      );
      if (dateSearchObj) {
        setFormData({
          ...formData,
          ...dateSearchObj,
        });
      } else {
        setErrorMessage(
          `No Firing Record found for ${formData.traineeName} on ${value}.`
        );
      }
    }
  };

  const handleSubmit = (e) => {
    // Handle form submission
    console.log(formData);
    api.updateTrainee(formData._id, SET_FIELD, formData).then((res) => {
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
      <div className="formWrapper viewReport">
        <div className="form-container">
          <h2>Firing Report</h2>
          <form onSubmit={handleSubmit}>
            {searchTrainee ? (
              <>
                <div className="form-group">
                  <label htmlFor="traineeName">Trainee Name</label>
                  <Search
                    onSelect={handleSearch}
                    toDisable={!searchTrainee}
                    searchType={SEARCH_NAME}
                  />
                </div>
                <h6 className="form-group or"> OR </h6>

                <div className="form-group">
                  <label htmlFor="traineeID">Trainee ID</label>
                  <Search
                    onSelect={handleSearch}
                    toDisable={!searchTrainee}
                    searchType={SEARCH_ID}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="traineeName">Trainee Name</label>
                  <input
                    type="text"
                    id="traineeName"
                    name="traineeName"
                    value={formData.traineeName}
                    onChange={handleChange}
                    disabled={!searchTrainee}
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
                    disabled={!searchTrainee}
                  />
                </div>
                {errorMessage ? (
                  <Error errorMessage={errorMessage} />
                ) : (
                  <>
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
                      <label htmlFor="position">Position</label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="target-lengths">
                      <div className="form-group target-size-option">
                        <label htmlFor="thirtyTwoCm">32CM</label>
                        <input
                          type="text"
                          id="32cm"
                          className="select-form"
                          name="32cm"
                          value={formData.targetSize["32cm"]}
                          onChange={handleChangeOptions}
                        />
                      </div>
                      <div className="form-group target-size-option">
                        <label htmlFor="fortyEightCm">48CM</label>
                        <input
                          type="text"
                          id="48cm"
                          className="select-form"
                          name="48cm"
                          value={formData.targetSize["48cm"]}
                          onChange={handleChangeOptions}
                        />
                      </div>
                      <div className="form-group target-size-option">
                        <label htmlFor="else">Else</label>
                        <input
                          type="text"
                          id="else"
                          className="select-form"
                          name="else"
                          value={formData.targetSize.else}
                          onChange={handleChangeOptions}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="totalScore">Total Score</label>
                      <input
                        type="text"
                        id="totalScore"
                        name="totalScore"
                        value={
                          formData.targetSize["32cm"] +
                          formData.targetSize["48cm"] +
                          formData.targetSize.else
                        }
                        onChange={handleChange}
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
                      {/* <label>Overall trend(32Cm)</label> */}
                      {firingApiData && (
                        <Graph
                          firingReport={firingApiData}
                          size={32}
                          title="Overall Trend(32Cm)"
                        />
                      )}
                    </div>
                    <div className="form-group">
                      {/* <label>Overall trend(48Cm)</label> */}
                      {firingApiData && (
                        <Graph
                          firingReport={firingApiData}
                          size={48}
                          title="Overall Trend(48Cm)"
                        />
                      )}
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
                  </>
                )}
              </>
            )}
            {errorMessage && (
              <button
                onClick={() => {
                  setSearchTrainee(!searchTrainee);
                  setFormData(resetFormData);
                }}
              >
                Search New
              </button>
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

export default ViewReport;
