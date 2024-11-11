import axios from "axios";

const key = "18d8dc115d954615a6fe8522598e8a97";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api/",
});


const getGenresList = axiosCreate.get(`/genres?key=${key}`);

export { getGenresList };