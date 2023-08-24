export default async function serviceFetch(url){
    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
  };