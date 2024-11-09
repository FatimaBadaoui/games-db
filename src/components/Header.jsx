import { useContext } from "react";
import logo from "./../assets/images/logo.png";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="logo" width={100} />
      <div className="flex p-2 w-full items-center bg-slate-200 mx-5 rounded-full">
        <HiMagnifyingGlass />
        <input
          type="search"
          name="search"
          className="bg-transparent outline-none px-2"
          placeholder="Search Animes"
        />
      </div>
      <div className="cursor-pointer">
        {theme == "light" ? (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full"
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
