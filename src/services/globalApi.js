import axios from "axios";

const key = import.meta.env.VITE_KEY;

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

const getGenresList = axiosCreate.get(`/genres?key=${key}`);

const getAllGames = axiosCreate.get(`/games?key=${key}`);

const getGamesByGenre = (genreId) =>
  axiosCreate.get(`/games?key=${key}&genres=${genreId}`);

export { getGenresList, getAllGames, getGamesByGenre };
