import FilterName from "./FilterName";
import FilterPlanet from "./FilterPlanet";
import FilterStatus from "./FilterStatus";

const Filters =(props) =>{
return (
    <form action="" onSubmit={eve=> eve.preventDefault()}>
        <FilterName handleSearch={props.handleSearch} searchName={props.searchName} />
        <FilterPlanet data={props.data} handleSearch={props.handleSearch} searchSpecies={props.searchSpecies}/>
        <FilterStatus data={props.data} handleSearch={props.handleSearch} searchStatus={props.searchStatus}/>
    </form>
)
};

export default Filters;