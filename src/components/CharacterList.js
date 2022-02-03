import CharacterCard from "./CharacterCard"
import "../styles/CharacterList.scss";

const CharacterList = ({data , translate}) =>{
    const paintCharacter = data.map(character =>{
        return(
            <li key={character.id} id={character.id} className="section__list">
                <CharacterCard character={character}/>
            </li>
        )
    })
return(
        <ul className="section">
           {paintCharacter} 
        </ul>
)
};

export default CharacterList;