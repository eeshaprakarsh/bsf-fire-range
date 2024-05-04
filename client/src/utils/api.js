import axios from "axios";

const BASE_URL = "http://localhost:4000";
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define your query parameters
const queryParams = {
  param1: "value1",
  param2: "value2",
};

export const fetchTrainees = async (val) => {
  try {
    // Define your query parameters
    // const queryParams = {
    //   param1: val,
    // };
    let response = await api.get("/trainees", { params: val });
    console.log(response);
    return response;
  } catch (error) {
    console.log(`Error Fetching ${error}`);
    throw error;
  }

  // try {
  // Fetch from API
  //   const response = await fetch(`YOUR_API_URL?q=${value}`);
  //   const data = await response.json();
  //   setOptions(data);
  // } catch (error) {
  //   console.error("Error fetching suggestions:", error);
  // }
};

export const addTrainee = async (data) => {
  try {
    let candidateAdded = await api.post("/addTrainee", data);
    console.log(data);
    return candidateAdded;
  } catch (error) {
    console.log(`Error Fetching ${error}`);
    throw error;
  }
};

export default {
  fetchTrainees,
  addTrainee,
};
