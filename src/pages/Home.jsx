import { useEffect, useState } from "react";
import GenreList from "../components/GenreList.jsx";
import { getAllGames } from "../services/globalApi.js";
import Banner from "../components/Banner.jsx";

const Home = () => {
  const [gamesList, setGamesList] = useState([]);

  const getAllGamesList = () => {
    getAllGames.then((response) => {
      // console.log(response.data.results);
      setGamesList(response.data.results);
    });
  };

  useEffect(() => {
    getAllGamesList();
  }, []);

  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className="col-span-4 md:col-span-3">
        {gamesList.length && <Banner gameBanner={gamesList[0]} />}
      </div>
    </div>
  );
};

export default Home;
