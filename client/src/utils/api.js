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
    let response = await api.get("/trainees", { params: val });
    console.log(response);
    return response;
  } catch (error) {
    console.log(`Error Fetching ${error}`);
    throw error;
  }
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

export const updateTrainee = async (id, update) => {
  const filter = { _id: id };
  try {
    // Make a PUT request to update the document
    const response = await axios.put("/updateTrainee", {
      filter,
      update,
    });
    console.log(response.data.message);
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

export default {
  fetchTrainees,
  addTrainee,
  updateTrainee,
};
