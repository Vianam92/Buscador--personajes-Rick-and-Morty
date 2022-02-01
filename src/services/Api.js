const getApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const result = data.results.map((item) => {
        return { 
            id: item.id,
            gender:item.gender,
            image:item.image,
            name:item.name,
            species:item.species,
            status:item.status,
            episode:item.episode
        };
      });
      return result;
    });
};

export default getApi;
