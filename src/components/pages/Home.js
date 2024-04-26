import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./styles/Home.css"; // Optional: Custom CSS for additional styling
import { NavLink } from "react-router-dom";

import {
  UserAddOutlined,
  FolderViewOutlined,
  EditOutlined,
  FundViewOutlined,
} from "@ant-design/icons";

const Home = () => {
  return (
    <div className="cardContainer">
      <NavLink to="/bsf-fire-range/createCandidate" className="links">
        <div className="card bgBlue">
          <div className="card-body">
            <h6 className="card-title">Add Candidate</h6>
            <p className="card-text">Enter the details to add a candidate.</p>
            <UserAddOutlined />
          </div>
        </div>
      </NavLink>
      <NavLink to="/bsf-fire-range/viewEditDetails" className="links">
        <div className="card bgLightBlue">
          <div className="card-body">
            <h6 className="card-title">View/Edit Details</h6>
            <p className="card-text">
              Access and manage candidate information.
            </p>
            <FolderViewOutlined />
          </div>
        </div>
      </NavLink>
      <NavLink to="/bsf-fire-range/recordReport" className="links">
        <div className="card bgLightRed">
          <div className="card-body">
            <h6 className="card-title">Record Report</h6>
            <p className="card-text">Enter details of shooting.</p>
            <EditOutlined />
          </div>
        </div>
      </NavLink>
      <NavLink to="/bsf-fire-range/viewReport" className="links">
        <div className="card bgRed">
          <div className="card-body">
            <h6 className="card-title">View Report</h6>
            <p className="card-text">Insights on shooting.</p>
            <FundViewOutlined />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
