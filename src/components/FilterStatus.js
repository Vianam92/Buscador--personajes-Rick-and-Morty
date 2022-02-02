const FilterStatus = (props) => {
  console.log(props);
  const handleSearch = (eve) => {
    props.handleSearch({
      key: "status",
      value: eve.target.value,
    });
  };
  return (
    <>
      <label htmlFor="unknown">Desconocido</label>
      <input
        type="checkbox"
        name="unknown"
        id="unknown"
        value="unknown"
        onChange={handleSearch}
        checked={props.data.status === props.searchStatus}
      />

      <label htmlFor="Dead">Muerto</label>
      <input
        type="checkbox"
        name="Dead"
        id="Dead"
        value="Dead"
        onChange={handleSearch}
        checked={props.data.status === props.searchStatus}
      />
      <label htmlFor="Alive">Vivo</label>
      <input
        type="checkbox"
        name="Alive"
        id="Alive"
        value="Alive"
        onChange={handleSearch}
        checked={props.data.status === props.searchStatus}
      />
    </>
  );
};

export default FilterStatus;
