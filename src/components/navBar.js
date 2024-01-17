import React from "react";
import "../assets/css/navBar.css";
import stiLogo from "../assets/images/navbar/sti-logo.png";

export function NavBar() {
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
      <a href="https://www.facebook.com/novaliches.sti.edu">
        <img className="logo" src={stiLogo} alt="stiLogo" />
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="/">Certifications</a>
        </li>
      </ul>
    </div>
  );
}
