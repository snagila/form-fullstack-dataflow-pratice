import axios from "axios";

const API_URL = "http://localhost:8000/api/addform";

// POST | CREATE
export const createTask = (formData) => {
  // send POST request to api

  const response = axios
    .post(API_URL, formData)
    .then((res) => res.data)
    .catch((error) => console.log(error.message));

  // this response is the promise given to the user for async program
  return response;
};
