import { useEffect, useState } from "react";
import GenreList from "../components/GenreList.jsx";
import { getGamesByGenre } from "../services/globalApi.js";
import Banner from "../components/Banner.jsx";
import GamesByGenre from "../components/GamesByGenre.jsx";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("Action");
  const [gamesListByGenre, setGamesListByGenre] = useState([]);
  const [genreId, setGenreId] = useState(4);
  const [page, setPage] = useState(1);

  console.log(page);

  const getGamesByGenresId = (genreId, pageNumber) => {
    getGamesByGenre(genreId, pageNumber).then((response) => {
      console.log(genreId, pageNumber);
      setGenreId(genreId);
      setGamesListByGenre(response.data.results);
    });
  };

  useEffect(() => {
    getGamesByGenresId(4, 1);
  }, []);

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList
          getGamesByGenreId={(genreId) => getGamesByGenresId(genreId, 1)}
          selectedGenreName={(genreName) => setSelectedGenre(genreName)}
        />
      </div>
      {gamesListByGenre.length && (
        <div className="col-span-4 md:col-span-3 md:p-5">
          <>
            <Banner
              gameBanner={gamesListByGenre[0]}
              genreName={selectedGenre}
            />
            <GamesByGenre gamesList={gamesListByGenre} />
          </>

          <div className="w-full py-10 relative">
            {page > 1 && (
              <button
                type="button"
                className="w-[100px] bg-lightPink hover:bg-darkPink text-white font-bold py-2 px-4 rounded-xl absolute left-0"
                onClick={() => {
                  setPage(page - 1);
                  getGamesByGenresId(genreId, page - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Previous
              </button>
            )}
            <button
              type="button"
              className="w-[100px] bg-lightBlue hover:bg-darkBlue text-white font-bold py-2 px-4 rounded-xl absolute right-0"
              onClick={() => {
                setPage(page + 1);
                getGamesByGenresId(genreId, page + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
