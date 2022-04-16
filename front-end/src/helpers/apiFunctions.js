import axios from "axios";

export const searchApi = (searchTerm, setSearch) => {
  const resObj = {};
  axios.get(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${searchTerm}"&limit=2`)
    .then((response) => {
      response.data.results.forEach(result => {
        resObj[result.id] = result.openfda.brand_name
      })
      setSearch(resObj);
    })
    .catch(() => { console.log("ERRROOOOORRR!") });
}

