import { useEffect, useState } from "react";
import GenreList from "../components/GenreList.jsx";
import { getAllGames, getGamesByGenre } from "../services/globalApi.js";
import Banner from "../components/Banner.jsx";
import TrendingGames from "../components/TrendingGames.jsx";
import GamesByGenre from "../components/GamesByGenre.jsx";

const Home = () => {
  const [gamesList, setGamesList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Action");
  const [gamesListByGenre, setGamesListByGenre] = useState([]);

  const getAllGamesList = () => {
    getAllGames.then((response) => {
      // console.log(response.data.results);
      setGamesList(response.data.results);
    });
  };

  const getGamesByGenresId = (genreId) => {
    getGamesByGenre(genreId).then((response) => {
      // console.log(response.data.results);
      setGamesListByGenre(response.data.results);
    });
  };

  useEffect(() => {
    getAllGamesList();
    getGamesByGenresId(4);
  }, [selectedGenre]);

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList
          getGamesByGenreId={(genreId) => getGamesByGenresId(genreId)}
          selectedGenreName={(genreName) => setSelectedGenre(genreName)}
        />
      </div>
      <div className="col-span-4 md:col-span-3 md:p-5">
        {gamesList.length && gamesListByGenre.length && (
          <>
            <Banner gameBanner={gamesList[0]} />
            <TrendingGames gamesList={gamesList} />
            <GamesByGenre
              gamesList={gamesListByGenre}
              genreName={selectedGenre}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
