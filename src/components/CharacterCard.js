import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const translate = (char) => {
    if (char.species === "Human" && char.gender === "Male") {
      return "Humano";
    } else if (char.species === "Human" && char.gender === "Female") {
      return "Humana";
    }else if (char.species === 'Alien') {
      return 'Alienigena';
  }
};

  return (
    <>
      <img
        src={character.image}
        alt={character.name}
        title={character.name}
        className="section__list--img"
      />
      <h2 className="section__list--h2">{character.name}</h2>
      <p className="section__list--text">{translate(character)}</p>
      <Link
        to={`/character-detail/${character.id}`}
        className="section__list--link"
      >
        More Info
      </Link>
    </>
  );
};
export default CharacterCard;
