import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./styles/Home.css"; // Optional: Custom CSS for additional styling
import { NavLink } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import {
  UserAddOutlined,
  FolderViewOutlined,
  EditOutlined,
  FundViewOutlined,
} from "@ant-design/icons";

const Home = () => {
  const [isLoadingTwitter, setIsLoadingTwitter] = useState(true);
  // const handleLoading = () => {
  //   setIsLoadingTwitter(false);
  // };
  return (
    <div>
      <div className="cardContainer">
        <NavLink to="/createCandidate" className="links">
          <div className="card bgBlue">
            <div className="card-body">
              <h6 className="card-title">Add Candidate</h6>
              <p className="card-text">Enter the details to add a candidate.</p>
              <UserAddOutlined className="home-icons" />
            </div>
          </div>
        </NavLink>
        <NavLink to="/viewEditDetails" className="links">
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
        <NavLink to="/recordReport" className="links">
          <div className="card bgLightRed">
            <div className="card-body">
              <h6 className="card-title">Record Report</h6>
              <p className="card-text">Enter details of shooting.</p>
              <EditOutlined />
            </div>
          </div>
        </NavLink>
        <NavLink to="/viewReport" className="links">
          <div className="card bgRed">
            <div className="card-body">
              <h6 className="card-title">Show Report</h6>
              <p className="card-text">Insights on shooting.</p>
              <FundViewOutlined />
            </div>
          </div>
        </NavLink>
      </div>

      <div className="tweet-container">
        {isLoadingTwitter ? (
          <div className="loading-twitter"></div>
        ) : (
          <h2>BSF India Tweets</h2>
        )}

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BSF_India"
          options={{ height: 400 }}
          onLoad={() => setIsLoadingTwitter(false)}
        />
      </div>
    </div>
  );
};

export default Home;
