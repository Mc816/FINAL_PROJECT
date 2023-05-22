import { useEffect, useState } from "react";
import axios from "axios";
// import DisneyCharDetails from "../DisneyCharDetails";

export default function DisneyCharList() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "https://api.disneyapi.dev/character?name=Mickey%20Mouse"
        );
        // "https://api.disneyapi.dev/character");
        setCharList(response.data.data);
      } catch (err) {
        console.err("Error", err);
      }
    };

    fetch();
  }, []);

  return (
    <div>
      <h1>hi</h1>
      <ul>
        {/* {charList?.map?.((list) => (
          <div>
            <li>{list.name}</li>
            <img src={list.image} />
          </div>
        ))} */}
      </ul>
    </div>
  );
}

{
  /* <DisneyCharDetails /> */
}
