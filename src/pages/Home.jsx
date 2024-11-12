import { useEffect, useState } from "react";
import GenreList from "../components/GenreList.jsx";
import { getGamesByGenre } from "../services/globalApi.js";
import Banner from "../components/Banner.jsx";
import GamesByGenre from "../components/GamesByGenre.jsx";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("Action");
  const [gamesListByGenre, setGamesListByGenre] = useState([]);

  const getGamesByGenresId = (genreId) => {
    getGamesByGenre(genreId).then((response) => {
      // console.log(response.data.results);
      setGamesListByGenre(response.data.results);
    });
  };

  useEffect(() => {
    getGamesByGenresId(4);
  }, []);

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList
          getGamesByGenreId={(genreId) => getGamesByGenresId(genreId)}
          selectedGenreName={(genreName) => setSelectedGenre(genreName)}
        />
      </div>
      <div className="col-span-4 md:col-span-3 md:p-5">
        {gamesListByGenre.length && (
          <>
            <Banner
              gameBanner={gamesListByGenre[0]}
              genreName={selectedGenre}
            />
            <GamesByGenre gamesList={gamesListByGenre} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
