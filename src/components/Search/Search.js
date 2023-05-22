import React, { useState } from "react";
import { searchCharacters } from "../../utilities/disney-api";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchCharacters(searchQuery);

      //   const data = await results.json();
      console.log(data);
      setSearchResults(data);
    } catch (err) {
      console.error("Error searching characters:", err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {typeof searchResults === "object" && (
          <div>
            <h1 key={searchResults.name}>{searchResults.name}</h1>

            <img src={searchResults.imageUrl} />
          </div>
        )}
        {searchResults?.map?.((character) => (
          <div>
            <h1 key={character.name}>{character.name}</h1>
            <img src={character.imageUrl} />
          </div>
        ))}
      </ul>
    </div>
  );
}
