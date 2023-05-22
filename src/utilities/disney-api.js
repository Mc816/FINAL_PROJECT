// import axios from "axios";
// import { search } from "../../routes/api/Character";

// const BASE_URL = "/api/DisneyChar";

import axios from "axios";
// import { search } from "../../routes/api/Character";

const BASE_URL = "https://api.disneyapi.dev";

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
