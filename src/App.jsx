import { useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme == "dark" ? "bg-[#121212]" : null}`}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
