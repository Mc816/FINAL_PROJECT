// import axios from "axios";
const axios = require("axios");

// import { search } from "../../routes/api/Character";

const BASE_URL = "/api/DisneyChar";

const searchCharacters = async (searchResponse) => {
  try {
    const response = await axios.get(`${BASE_URL}/?name=${searchResponse}`);
    return response?.data?.data;
  } catch (err) {
    console.err("Error", err);
    throw err;
  }
};

module.exports = {
  searchCharacters,
};
