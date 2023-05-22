import React, { useState } from "react";
import { searchCharacters2 } from "../../utilities/disney-api";

export default function Search2() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchCharacters2(searchQuery);

      //   const data = await results.json();
      console.log(data, "hiiiii");
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

            {/* <img src={searchResults.imageUrl} /> */}
          </div>
        )}
        {searchResults?.map?.((character) => (
          <div>
            <h1 key={character.name}>{character.name}</h1>
            <h1 key={character.phrase}>{character.phrase}</h1>
            {/* <img src={character.imageUrl} /> */}
          </div>
        ))}
      </ul>
    </div>
  );
}
