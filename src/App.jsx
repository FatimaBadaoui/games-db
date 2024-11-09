import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme == "dark" ? "bg-bgDark" : null}`}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
