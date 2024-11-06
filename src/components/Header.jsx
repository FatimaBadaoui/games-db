import { useState } from "react";
import logo from "./../assets/images/logo.png";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";

const Header = () => {
  const [toggle, setToggle] = useState(false);

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
      <div
        className="cursor-pointer"
        onClick={() => setToggle((prevToggle) => !prevToggle)}
      >
        {toggle ? (
          <HiSun className="text-[35px] bg-slate-200 text-black p-1 rounded-full" />
        ) : (
          <HiMoon className="text-[35px] bg-slate-200 text-black p-1 rounded-full" />
        )}
      </div>
    </div>
  );
};

export default Header;
