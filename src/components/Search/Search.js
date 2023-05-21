import { useState } from "react";
import axios from "axios";

function Search({ setCharList }) {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.disneyapi.dev/character?name=${searchResponse}`
      );
      setCharList(response.data.data);
    } catch (err) {
      console.err("Error", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchResponse}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}> Search </button>
    </div>
  );
}
