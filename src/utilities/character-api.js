const BASE_URL = "/api/Character";

export default function addCharacter(name, phrase) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      phrase: phrase,
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
