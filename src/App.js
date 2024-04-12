import React from "react";
import "./App.css";
import CreateComponent from "./components/CreateCandidate/CreateCandidate";
import ViewEditDetails from "./components/ViewEditDetails/ViewEditDetails";
import RecordReport from "./components/RecordReport/RecordReport";
import ViewReport from "./components/ViewReport/ViewReport";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className="navContainer">
        <div className="navLeft">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/00/BSF_Logo.svg"
            alt="BSF Logo"
            className="bsfLogo"
          />
          <h2>BSF Firing Assesment</h2>
        </div>

        <div className="navRight">
          <li>
            <NavLink
              to="/bsf-fire-range"
              activeClassName="active"
              className="links"
            >
              Add Candidate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/viewEditDetails"
              activeClassName="active"
              className="links"
            >
              View/Edit Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recordReport"
              activeClassName="active"
              className="links"
            >
              Record Report
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/viewReport"
              activeClassName="active"
              className="links"
            >
              View Report
            </NavLink>
          </li>
        </div>
      </div>
      <Routes>
        <Route path="/bsf-fire-range" element={<CreateComponent />} />
        <Route path="/viewEditDetails" element={<ViewEditDetails />} />
        <Route path="/recordReport" element={<RecordReport />} />
        <Route path="/viewReport" element={<ViewReport />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
