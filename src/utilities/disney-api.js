import axios from "axios";
// import { search } from "../../routes/api/Character";

const BASE_URL = "/api/DisneyChar";

export const searchCharacters = async (searchResponse, phrase) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/?name=${searchResponse}&phrase=${phrase}`
    );
    return response?.data?.data;
  } catch (err) {
    console.err("Error", err);
    throw err;
  }
};

export const searchCharacters2 = async (searchResponse) => {
  try {
    const response = await axios.get(`${BASE_URL}/?name=${searchResponse}`);
    return response.data;
  } catch (err) {
    console.err("Error", err);
    throw err;
  }
};
