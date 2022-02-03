import "../styles/Form.scss";

const FilterStatus = (props) => {
  console.log(props)
  const handleSearch = (eve) => {
    props.handleSearch({
      key: "status",
      value: eve.target.value,
    });
  };
  /*const mapStatus = () =>{ 
  const getStatus = props.data.map(eachStatus => eachStatus.status);
  const uniqueStatus = new Set(getStatus);
  const uniqueStatusArray = [...uniqueStatus];
  return uniqueStatusArray;
  };*/
  return (
    <>
      <h3 className="container__form--estado">Estado:</h3>
      <label htmlFor="All" className="container__form--status">Todos 
      <i className="fas fa-boxes"></i></label>
      <input
      className="container__form--checked"
        type="radio"
        name="All"
        id="All"
        value="All"
        onChange={handleSearch}
        checked={props.searchStatus === "All"}
      />
      <label htmlFor="unknown" className="container__form--status">Desconocido 
      <i className="fa fa-question icon"></i></label>
      <input
      className="container__form--checked"
        type="radio"
        name="unknown"
        id="unknown"
        value="unknown"
        onChange={handleSearch}
        checked={props.searchStatus === "unknown"}
      />

      <label htmlFor="Dead" className="container__form--status">Muerta <i className="fas fa-skull-crossbones icon"></i></label>
      <input
      className="container__form--checked"
        type="radio"
        name="Dead"
        id="Dead"
        value="Dead"
        onChange={handleSearch}
        checked={props.searchStatus === "Dead"}
      />
      <label htmlFor="Alive" className="container__form--status">Viva <i className="fas fa-heart icon"></i></label>
      <input
      className="container__form--checked"
        type="radio"
        name="Alive"
        id="Alive"
        value="Alive"
        onChange={handleSearch}
        checked={props.searchStatus === "Alive"}
      />
    </>
  );
};

export default FilterStatus;
