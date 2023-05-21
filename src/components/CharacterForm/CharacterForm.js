import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function CharacterForm() {
  return (
    <div>
      <h1> Create a Disney Character</h1>
      <form action="/characters" method="POST">
        Create Your Character: <input type="text" name="name" />
        Phrase: <input type="text" name="phrase" />
        <input type="submit" value="Create a Character" />
      </form>
    </div>
  );
}
