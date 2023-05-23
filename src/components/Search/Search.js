import React, { useState } from "react";
import { searchCharacters } from "../../utilities/disney-api";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchedClicked, setSearchedClicked] = useState(false);
  const handleSearch = async () => {
    try {
      const data = await searchCharacters(searchQuery);

      //   const data = await results.json();
      console.log(data);
      setSearchResults(data);
      setSearchedClicked(true);
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
        {searchedClicked && searchResults.length === 0 ? (
          <p>{`Opps there is nothing to display :(, try another search`}</p>
        ) : (
          searchResults?.map?.((character) => (
            <div>
              <h1 key={character.name}>{character.name}</h1>
              <img src={character.imageUrl} />
            </div>
          ))
        )}
      </ul>
    </div>
  );
}

// {
//   typeof searchResults === "object" && (
//     <div>
//       <h1 key={searchResults.name}>{searchResults.name}</h1>

//       <img src={searchResults.imageUrl} />
//     </div>
//   );
// }
