export default function CharacterList({ character }) {
  //Destructured
  return (
    <div key={character?._id} className="text-container">
      <p className="words">{character?.name}</p>
      <p className="words">{character?.phrase}</p>
      <p className="words">{character?.enemies}</p>
      <p className="words">{character?.film}</p>
    </div>
  );
}
