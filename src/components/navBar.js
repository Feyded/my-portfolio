import React, { useState } from "react";
import "../assets/css/navBar.css";
import stiLogo from "../assets/images/navbar/sti-logo.png";

export function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const hamburgerMenu = () => {
    setIsActive(!isActive);
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
          <a href="https://feyded.github.io/my-portfolio/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#certificate">Certifications</a>
        </li>
      </ul>
      <input type="checkbox" role="button" aria-label="Display the menu" className="menu" onClick={()=> hamburgerMenu()}></input>
    </div>
  );
}
