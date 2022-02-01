const FilterName = (props) =>{
    const handleSearch = (eve) =>{
        props.handleSearch({
            key:"name",
            value:eve.target.value,
        })
    }
return(
    <>
      <label htmlFor="character">Busca por Personaje</label>
      <input type={props.inputType} placeholder="Ej: Hermione" name={props.name} id={props.name} value={props.searchName} onChange={handleSearch}/>
    </>
)
};

// Estas son las default props
FilterName.defaultProps = {
    inputType: 'text',
    name:"character"
  };
  
export default FilterName;