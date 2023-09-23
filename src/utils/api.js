import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN ="167ada40dd79db4580d9034b9994b6fe"

// const headers = {
//   Authorization: "bearer" + TMDB_TOKEN,
// };

export const fetchDataFromApi = async (url, params) => {
  try {
    const data = await fetch(BASE_URL + url +"?api_key="+TMDB_TOKEN);
    return await data.json();
    
  } catch (err) {
    console.log(err);
    return err;
  }
};
