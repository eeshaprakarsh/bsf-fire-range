import React from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import LoginForm from "./components/forms/LoginForm/LoginForm";
import Home from "./components/pages/Home";
import CreateCandidate from "./components/pages/CreateCandidate";
import ViewEditDetails from "./components/pages/ViewEditDetails";
import RecordReport from "./components/pages/RecordReport";
import ViewReport from "./components/pages/ViewReport";
function App() {
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
        <Route path="/" element={<LoginForm />} />
        <Route path="/homePage" element={<Home />} />
        <Route path="/createCandidate" element={<CreateCandidate />} />
        <Route path="/viewEditDetails" element={<ViewEditDetails />} />
        <Route path="/recordReport" element={<RecordReport />} />
        <Route path="/viewReport" element={<ViewReport />} />
      </Routes>
    </div>
  );
}

export default App;
