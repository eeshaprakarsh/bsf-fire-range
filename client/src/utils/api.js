import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchCandidate = async () => {
  try {
    let response = await api.get("/users");
    // console.log(response);
    return response;
  } catch (error) {
    console.log(`Error Fetching ${error}`);
    throw error;
  }
};

export const addCandidate = async (data) => {
  try {
    let candidateAdded = await api.post("/posts", data);
    return candidateAdded;
  } catch (error) {
    console.log(`Error Fetching ${error}`);
    throw error;
  }
};

export default {
  fetchCandidate,
  addCandidate,
};
