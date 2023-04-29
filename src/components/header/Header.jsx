import "./header.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import {BsFillMoonFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
const Header = () => {
  const [darkTheme, setDarkTheme] = useState("false");
  const handleTheme = () => {
    setDarkTheme(!darkTheme);

    let mainContainer = document.querySelector(".main-container");
    mainContainer.classList.toggle("dark");
  };
  return (
    <>
      <header className="header">
        <h1>Where in the world?</h1>
        {darkTheme ? (
          <div className="theme-light hidden" onClick={handleTheme}>
            <i className="fa-solid fa-moon"></i>
            <BsFillMoonFill />
            <p>Dark Theme</p>
          </div>
        ) : (
          <div className="theme-dark" onClick={handleTheme}>
            <i className="fa-solid fa-sun"></i>
            <BsFillSunFill />
            <p>Light Theme</p>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
