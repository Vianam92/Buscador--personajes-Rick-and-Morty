import { Link } from "react-router-dom";
import "../styles/CharacterDetail.scss";

const CharacterDetail = ({ data }) => {
  return (
    <section className="section-detail">
      <h1 className="section-detail__title">Detalle del Personaje</h1>
      <img src={data.image} alt={data.name} className="section-detail__img" />
      <ul className="section-detail__list">
        <h2 className="section-detail__list--h2">{data.name}</h2>
        <li className="section-detail__list--li">Especie: {data.species === "Alien"?"Alienigena":"Humano"}</li>
        <li className="section-detail__list--li">Planeta: {data.planet}</li>
        <li className="section-detail__list--li">
          Status: {data.status==="Alive"?<i className="fas fa-heart icon"></i>:<i className="fas fa-skull-crossbones icon"></i>} 
        </li>
        <li className="section-detail__list--li">
          # Episodios: {data.episode}
        </li>
      </ul>
      <Link to="/" className="section-detail__link">
      <i className="fas fa-angle-left"></i> Volver Atrás
      </Link>
    </section>
  );
};

export default CharacterDetail;
