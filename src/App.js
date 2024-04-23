import React, { useState } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./components/Home/Home";
import CreateCandidate from "./components/CreateCandidate/CreateCandidate";
import ViewEditDetails from "./components/ViewEditDetails/ViewEditDetails";
import RecordReport from "./components/RecordReport/RecordReport";
import ViewReport from "./components/ViewReport/ViewReport";
function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="mainContainer">
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/00/BSF_Logo.svg"
          alt="BSF Logo"
          className="bsfLogo"
        />
        <h2>BSF Firing Assesment</h2>
      </div>
      <Routes>
        <Route path="/bsf-fire-range" element={<Home />} />
        <Route
          path="/bsf-fire-range/createCandidate"
          element={<CreateCandidate />}
        />
        <Route
          path="/bsf-fire-range/viewEditDetails"
          element={<ViewEditDetails />}
        />
        <Route path="/bsf-fire-range/recordReport" element={<RecordReport />} />
        <Route path="/bsf-fire-range/viewReport" element={<ViewReport />} />
      </Routes>
    </div>
  );
}

export default App;
