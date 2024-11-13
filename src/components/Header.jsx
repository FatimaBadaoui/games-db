import { useContext, useEffect, useState } from "react";
import logo from "./../assets/images/logo.png";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { getAllGames } from "../services/globalApi.js";
import { ModalContext } from "../context/ModalContext.jsx";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setIsOpen, setModalContent } = useContext(ModalContext);
  const [allGames, setAllGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Get games from API
    getAllGames.then(async (res) => {
      setAllGames(await res.data.results);
    });
  }, []);

  const handleSearch = () => {
    // Filter games based on search query
    const searchedGames = allGames.find((game) => {
      return game.name.toLowerCase().includes(search.toLowerCase());
    });
    // Set filtered games to context and open Modal
    setModalContent(searchedGames);
    setIsOpen(true);
  };

  return (
    <div className="flex items-center p-3">
      <img
        src={logo}
        alt="logo"
        width={100}
        className="rounded-full object-cover"
      />
      <div className="flex p-2 w-full items-center bg-cloud mx-5 rounded-full">
        <HiMagnifyingGlass />
        <input
          type="search"
          name="search"
          className="bg-transparent outline-none w-full px-2"
          placeholder="Search Game"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>
      <div className="cursor-pointer">
        {theme == "light" ? (
          <HiSun
            className="text-[35px] bg-cloud text-black p-1 rounded-full"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
