//
//   console.log(character, "bob");

// const CharacterList = (props) => {
const CharacterList = ({ character }) => {
  return (
    <div key={character?._id}>
      <p>{character?.name}</p>
      <p>{character?.phrase}</p>
      <p>{character?.enemies}</p>
      <p>{character?.film}</p>
    </div>
  );
};

export default CharacterList;

{
  /* <div key={character?._id}>
        <p>{character?.name}</p>
        <p>{character?.phrase}</p>
        <p>{character?.enemies}</p>
        <p>{character?.film}</p>
</div>*/
}

// <div>
//   {props.character &&
//     props.character.map((char) => (
//       <div key={char._id}>
//         <p>{char.name}</p>
//         <p>{char.phrase}</p>
//         <p>{char.film}</p>
//         <p>{char.enemies}</p>
//       </div>
//     ))}
// </div>
