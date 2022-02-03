import "../styles/Form.scss";

const FilterName = (props) => {
  const handleSearch = (eve) => {
    props.handleSearch({
      key: "name",
      value: eve.target.value,
    });
  };
  return (
    <>
      <label htmlFor="character" className="container__form--label">Busca por Personaje</label>
      <input
      className="container__form--input"
        type={props.inputType}
        placeholder="Ej: Morty"
        name={props.name}
        id={props.name}
        value={props.searchName}
        onChange={handleSearch}
      />
    </>
  );
};

// Estas son las default props
FilterName.defaultProps = {
  inputType: "text",
  name: "character",
};

export default FilterName;
