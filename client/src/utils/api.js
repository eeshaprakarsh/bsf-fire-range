import axios from "axios";
import API_ENDPOINTS from "../constants/apiEndpoints";
import BASE_URL from "../constants/baseUrl";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchTrainees = async (val) => {
  try {
    let response = await api.get(API_ENDPOINTS.FETCH_TRAINEE, {
      params: val,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(`Error Fetching ${error}`);
    throw error;
  }
};

export const addTrainee = async (data) => {
  try {
    let candidateAdded = await api.post(API_ENDPOINTS.ADD_TRAINEE, data);
    console.log(data);
    return candidateAdded;
  } catch (error) {
    console.log(`Error Fetching ${error}`);
    throw error;
  }
};

export const updateTrainee = async (id, updateType, update) => {
  const filter = { _id: id };
  console.log(updateType);
  try {
    // Make a PUT request to update the document
    const response = await api.put(API_ENDPOINTS.UPDATE_TRAINEE, {
      filter,
      updateType,
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
