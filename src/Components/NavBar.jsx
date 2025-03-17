import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle_mode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // ✅ Get Icons Dynamically from the Web
  const toggle_light = "https://img.icons8.com/ios-filled/30/sun.png";
  const toggle_dark = "https://img.icons8.com/ios-filled/30/crescent-moon.png";
  const search_icon = "https://img.icons8.com/ios-filled/24/search.png";

  // ✅ Handle Search Input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // 🔹 Pass search term to parent
  };

  return (
    <div className={`navbar ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <h1>Succor</h1>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>My Account</li>
      </ul>

      <div className='search-box'>
        <input 
          type="text" 
          placeholder='Search' 
          value={searchTerm} 
          onChange={handleSearch} 
        />
        <img src={search_icon} alt="Search Icon" />
      </div>

      <img 
        src={theme === 'light' ? toggle_light : toggle_dark} 
        alt="Toggle Theme" 
        className='toggle-icon' 
        onClick={toggle_mode} 
      />
    </div>
  );
}

export default NavBar;
