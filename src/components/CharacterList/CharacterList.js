const CharacterList = ({ character }) => {
  //   console.log(character);
  return (
    <div>
      <div key={character?._id}>
        <p>{character?.name}</p>
        <p>{character?.phrase}</p>
      </div>
    </div>
  );
};

export default CharacterList;
