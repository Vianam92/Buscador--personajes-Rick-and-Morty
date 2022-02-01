import "../styles/App.scss";
import { useState, useEffect } from "react";
import getApi from "../services/Api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    getApi().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  const handleSearch = (data) => {
    if (data.key === "name") {
      setSearchName(data.value);
    }
  };

  const filteredCharacter = data.filter((character) => {
    return character.name.toLowerCase().includes(searchName.toLowerCase());
  });

  const renderDetail = (props) => {
    const routeId = props.match.params.id;
    const foundCharacter = data.find(item => routeId === item.id);
    if (foundCharacter) {
      return <CharacterDetail data={foundCharacter}/>;
    } else {
      return <p>Personaje no encontrado</p>;
    }
  };

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Filters handleSearch={handleSearch} /> <CharacterList data={filteredCharacter} />
        </Route>
       <Route path="/character-detail/:id" component={renderDetail}>

       </Route>
       
      </Switch>
    </>
  );
}

export default App;
