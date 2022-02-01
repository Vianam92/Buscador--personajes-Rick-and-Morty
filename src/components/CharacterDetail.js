const CharacterDetail = ({data}) =>{
return (
    <section>
        <h1>Detalle del Personaje</h1>
          <img src={data.image} alt={data.name}/> 
          <h2>{data.name}</h2>
          <p>{data.species}</p>
          <p>{data.status}</p>
          <p>{data.episode.map(item=>{
              return <p>{item.length}</p>
          })}</p>
    </section>
 
)
};

export default CharacterDetail;