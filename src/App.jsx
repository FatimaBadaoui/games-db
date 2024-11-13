import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";
import ModalProvider from "./context/ModalContext.jsx";
import GameModal from "./pages/GameModal.jsx";

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
      <ModalProvider>
        <div className={`${theme} ${theme == "dark" ? "bg-bgDark" : null}`}>
          <Header />
          <Home />
          <GameModal />
        </div>
      </ModalProvider>
    </ThemeContext.Provider>
  );
}

export default App;
