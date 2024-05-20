import React, { useState, useEffect } from "react";
import api from "../../../utils/api";
import "./Search.css";
import Error from "../../layout/Error/Error";

function Search({ onSelect, toDisable, searchType }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      setErrorMessage("");
      setSearchResults([]);
    }
  }, [searchQuery]);
  const handleSearch = () => {
    api
      .fetchTrainees({ [searchType]: searchQuery })
      .then((data) => {
        if (data && data.data && data.data.length) {
          // console.log(data.data);
          setSearchResults(data.data);
          setErrorMessage("Please select a Trainee from the list.");
        } else {
          console.log("No Data");
          setErrorMessage("No matching data found! Please type correct name.");
        }
      })
      .catch((err) => {
        console.error("Error fetching suggestions:", err);
        setErrorMessage("No matching data found! Please type correct name.");
      });
  };

  const handleSelectItem = (item) => {
    onSelect(item);
    setSearchResults([]);
    setErrorMessage("");
  };

  return (
    <div className="search-container">
      <input
        type="text"
        // placeholder="Type here..."
        value={searchQuery.toUpperCase()}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={(e) => {
          handleSearch();
        }}
        disabled={toDisable}
      />

      <ul className="search-results">
        {searchResults &&
          searchResults.map((result, i) => (
            <li key={i} onClick={() => handleSelectItem(result)}>
              {result.traineeName}
            </li>
          ))}
      </ul>
      <Error errorMessage={errorMessage} />
      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  );
}

export default Search;
