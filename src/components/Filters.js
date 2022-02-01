import FilterName from "./FilterName";

const Filters =(props) =>{
return (
    <form action="" onSubmit={eve=> eve.preventDefault()}>
        <FilterName handleSearch={props.handleSearch}/>

    </form>
)
};

export default Filters;