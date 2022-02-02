const FilterPlanet = (props) => {
  const handleSearch = (eve) => {
    props.handleSearch({
      key: "species",
      value: eve.target.value,
    });
  };
  return (
    <>
    <label htmlFor="species">Busca por especie:</label>
    <select id="species" name="species" onChange={handleSearch} value={props.searchSpecies}>
        <option value="All">All</option>
        <option value="Alien">Alien</option>
        <option value="Human">Humano</option>
    </select>
    </>
  );
};

export default FilterPlanet;