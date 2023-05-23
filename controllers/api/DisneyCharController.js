const axios = require("axios");

const BASE_URL = "/api/DisneyChar";
//function to search for characters name
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
