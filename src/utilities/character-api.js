const BASE_URL = "/api/Character";

//Function taking in four paramater from /api/Character
export default function addCharacter(name, phrase, film, enemies) {
  //Post method to indicate a POST request
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, //Stringifying to turn into a string
    body: JSON.stringify({
      name: name,
      phrase: phrase,
      film: film,
      enemies: enemies,
    }),
    //Information sent to the body
  });
}
