const BASE_URL = "/api/Character";

export default function addCharacter(name, phrase, film, enemies) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      phrase: phrase,
      film: film,
      enemies: enemies,
    }),
  });
}

// export default function addCharacter(name, phrase) {
//   return addCharacter(`${BASE_URL}`, "POST", {
//     name: name,
//     phrase: phrase,
//     // image: image,
//   });
// }
