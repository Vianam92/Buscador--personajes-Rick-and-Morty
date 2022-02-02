import {Link} from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <>
      <img src={character.image} alt={character.name} title={character.name} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
      <Link to={`/character-detail/${character.id}`}>More Info</Link>
    </>
  );
};
export default CharacterCard;
