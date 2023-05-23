import addCharacter from "../../utilities/character-api";
import { useState } from "react";
import CharacterList from "../CharacterList/CharacterList";

export default function CharacterForm() {
  const [name, setName] = useState("");
  const [phrase, setPhrase] = useState("");
  const [film, setFilm] = useState("");
  const [enemies, setEnemies] = useState("");
  const [charData, setCharData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addCharacter(name, phrase, enemies, film);
      const data = await response.json();
      // console.log(data, "hiiiii");
      setCharData(data.data);
      setName("");
      setPhrase("");
      setEnemies("");
      setFilm("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Phrase</label>
          <input
            type="text"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
        </div>
        <div>
          <label>Film</label>
          <input
            type="text"
            value={film}
            onChange={(e) => setFilm(e.target.value)}
          />
        </div>
        <div>
          <label>enemies</label>
          <input
            type="text"
            value={enemies}
            onChange={(e) => setEnemies(e.target.value)}
          />
        </div>

        <button type="submit">Add A Character</button>
      </form>
      <CharacterList character={charData} />
    </div>
  );
}
