import "../styles/Reset.scss";
import "../styles/App.scss";
import { useState, useEffect } from "react";
import getApi from "../services/Api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import Filters from "./Filters";
import { Route, Switch } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("All");
  const [searchStatus, setSearchStatus] = useState("All");

  useEffect(() => {
    getApi().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  const handleSearch = (data) => {
    if (data.key === "name") {
      setSearchName(data.value);
    } else if (data.key === "species") {
      setSearchSpecies(data.value);
    } else if (data.key === "status") {
      setSearchStatus(data.value);
    }
  };

  const filteredCharacter = data
    .filter((character) => {
      return character.name.toLowerCase().includes(searchName.toLowerCase());
    })
    .filter((character) => {
      return searchSpecies === "All"
        ? character.species
        : character.species === searchSpecies;
    })
    .filter((character) => {
      return searchStatus !== "All"
        ? character.status === searchStatus
        : character.status;
    })
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

  const renderDetail = (props) => {
    const routeId = props.match.params.id;
    const foundCharacter = data.find((item) => parseInt(routeId) === item.id);
    if (foundCharacter) {
      return (
        <CharacterDetail
          data={foundCharacter}
        />
      );
    } else {
      return <p className="notFound">Personaje no encontrado</p>;
    }
  };

  return (
    <>
      <Header />
      <main className="container"> 
            <Filters
              handleSearch={handleSearch}
              data={filteredCharacter}
              searchName={searchName}
              searchSpecies={searchSpecies}
              searchStatus={searchStatus}
            />
            <CharacterList
              data={filteredCharacter}
            />
          <Switch>
          <Route path="/character-detail/:id" component={renderDetail}></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
