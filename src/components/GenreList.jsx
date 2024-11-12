/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getGenresList } from "../services/globalApi.js";

const GenreList = ({ getGamesByGenreId, selectedGenreName }) => {
  const [genres, setGenres] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getGenres = async () => {
    // Get genres from API
    getGenresList.then((response) => {
      // console.log(response.data.results);
      setGenres(response.data.results);
    });
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold mb-3 dark:text-whitish">Genre</h2>
      {genres &&
        genres.map((genre, index) => (
          <div
            key={genre.id}
            onClick={() => {
              setActiveIndex(index);
              getGamesByGenreId(genre.id);
              selectedGenreName(genre.name);
            }}
            className={`flex items-center gap-2 mb-2 cursor-pointer p-2 rounded-lg hover:bg-[#ff367c7b] ${
              activeIndex === index ? "bg-lightPink" : ""
            }`}
          >
            <img
              src={genre.image_background}
              alt={genre.slug}
              className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300
                ${activeIndex === index ? "scale-105" : ""}`}
            />
            <h3
              className={`dark:text-whitish text-[18px] group-hover:font-bold transition-all ease-out duration-300
                ${activeIndex === index ? "font-bold" : ""}`}
            >
              {genre.name}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default GenreList;
