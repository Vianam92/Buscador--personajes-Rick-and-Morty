import CharacterCard from "./CharacterCard"

const CharacterList = ({data}) =>{
    const paintCharacter = data.map(character =>{
        return(
            <li key={character.id} id={character.id}>
                <CharacterCard character={character}/>
            </li>
        )
    })
return(
    <section>
        <ul>
           {paintCharacter} 
        </ul>
    </section>
)
};

export default CharacterList;