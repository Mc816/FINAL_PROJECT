import CharacterForm from "../../components/CharacterForm/CharacterForm";

export default function CharacterPage() {
  return (
    <>
      <div>
        <h1>Your Disney Application</h1>
        {/* 
        <ul>
          {pokemons.map((pokie, x) => {
            //X is the index of the array
            return (
              <li>
                <a href={`/pokemon/${pokie._id}`}>
                  {pokie.name[0].toUpperCase() + pokie.name.slice(1)}
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
      <CharacterForm />
    </>
  );
}
