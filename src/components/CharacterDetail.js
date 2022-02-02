import { Link } from "react-router-dom";

const CharacterDetail = ({ data }) => {
  return (
    <section>
        <Link to="/">Volver Atrás</Link>
      <h1>Detalle del Personaje</h1>
      <img src={data.image} alt={data.name} />
      <ul>
        <h2>{data.name}</h2>
        <li>{data.species}</li>
        <li>{data.planet}</li>
        <li>{data.status}</li>
        <li>{data.episode}</li>
      </ul>
    </section>
  );
};

export default CharacterDetail;
