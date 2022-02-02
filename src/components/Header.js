import Filters from "./Filters";

const Header = (props) => {
  return (
    <header className="header">
      <Filters
        handleSearch={props.handleSearch}
        data={props.data}
        searchName={props.searchName}
        searchSpecies={props.searchSpecies}
        searchStatus={props.searchStatus}
      />
    </header>
  );
};

export default Header;
