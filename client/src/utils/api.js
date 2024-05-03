import axios from "axios";

const BASE_URL = "http://localhost:4000";
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchCandidate = async () => {
  try {
    let response = await api.get("/candidates");
    // console.log(response);
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

export default {
  fetchCandidate,
  addTrainee,
};
