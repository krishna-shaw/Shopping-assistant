import React, { useState, useEffect, createContext } from "react";
import NavBar from "./components/NavBar"; 
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ProductList from "./Components/ProductList";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme); 
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <NavBar className="container" />
        <MainContent />
        <ProductList/>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
