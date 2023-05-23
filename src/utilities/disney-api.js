import axios from "axios";
//Defining base_url
const BASE_URL = "https://api.disneyapi.dev";

//exporting asynchronous function to search for param of name
export const searchCharacters = async (searchResponse) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/character?name=${searchResponse}`
    );
    return response?.data?.data;
  } catch (err) {
    console.err("Error", err);
    throw err;
  }
};
