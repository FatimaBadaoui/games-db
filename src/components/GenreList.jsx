import axios from "axios";
import { useEffect, useState } from "react";

const GenreList = () => {
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    // Get genres from API
    const response = await axios.get(
      "https://www.mmobomb.com/api1/games"
    );
    console.log(response.data);
    setGenres(response.data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-whitish">Genre</h2>
      {genres && genres.map((genre) => <p key={genre.id}>{genre.id}</p>)}
    </div>
  );
};

export default GenreList;
