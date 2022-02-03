import "../styles/Form.scss";

const FilterPlanet = (props) => {
  const handleSearch = (eve) => {
    props.handleSearch({
      key: "species",
      value: eve.target.value,
    });
  };
  return (
    <>
    <label htmlFor="species" className="container__form--label">Busca por especie:</label>
    <select id="species" name="species" onChange={handleSearch} value={props.searchSpecies} className="container__form--select">
        <option value="All" className="options">Todos</option>
        <option value="Alien" className="options">Alienígena</option>
        <option value="Human" className="options">Humano</option>
    </select>
    </>
  );
};

export default FilterPlanet;