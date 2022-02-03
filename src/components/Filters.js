import FilterName from "./FilterName";
import FilterPlanet from "./FilterPlanet";
import FilterStatus from "./FilterStatus";
import "../styles/App.scss";
import "../styles/Form.scss";

const Filters =(props) =>{
return (
    <form action="" onSubmit={eve=> eve.preventDefault()} className="container__form">
        <FilterName handleSearch={props.handleSearch} searchName={props.searchName} />
        <FilterPlanet handleSearch={props.handleSearch} searchSpecies={props.searchSpecies}/>
        <FilterStatus data={props.data} handleSearch={props.handleSearch} searchStatus={props.searchStatus}/>
    </form>
)
};

export default Filters;