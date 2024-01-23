import React, { useState } from "react";
import "../assets/css/navBar.css";
import stiLogo from "../assets/images/navbar/sti-logo.png";

export function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const hamburgerMenu = () => {
    setIsActive(!isActive);
  };

  const darkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="navBar">
      <div className="email">
        <i className="small material-icons">email</i>
        <a
          className="text__email"
          href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDnGdSJzZPkkDlmHzpRDdPnHRmZjlQMqJgNqFlvLNFbzVGxlwPSmPbQWppRVhrcTnMCZmNL"
        >
          dean.zaballero@gmail.com
        </a>
      </div>
      <a
        className="logo__Container"
        href="https://www.facebook.com/novaliches.sti.edu"
      >
        <img className="logo" src={stiLogo} alt="stiLogo" />
      </a>
      <ul className={`navList ${isActive ? "active" : "inactive"}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#certificate">Certifications</a>
        </li>
        <li className="darkModeBtn">
          <input type="checkbox" id="toggle" />
          <label
            className="toggle"
            onClick={() => darkModeToggle()}
            for="toggle"
          >
            <i className="bx bxs-sun"></i>
            <i className="bx bx-moon"></i>
            <span className="ball"></span>
          </label>
        </li>
      </ul>
      <input
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        className="menu"
        onClick={() => hamburgerMenu()}
      ></input>
    </div>
  );
}
