import React from "react";
import personImage from "../assets/images/home/person.png";
import "../assets/css/home.css";

export function Home() {
  return (
    <div className="hero">
      <div className="container home__section d-flex">
        <div className="hero__text">
          <div>
            <h1>
              Hi, I'm <span>Dean Zaballero</span>
            </h1>
            <p className="position">Fullstack Developer</p>
          </div>
          <div>
            <p className="shortInfo">
              I'm a student from STI College of Novaliches and will graduate
              this year 2024. I'm excited to develop my critical and analytical
              thinking by solving problems and applying my skills in real world.
            </p>
          </div>
          <div className="heroButtons d-flex">
            <a
              className="hireMeBtn"
              href="https://www.facebook.com/deanandrew.zaballero/"
            >
              Message Me
            </a>
            <a className="downloadCVBtn" href="/">
              Download CV
              <i className="small material-icons">cloud_download</i>
            </a>
          </div>
        </div>
        <div className="hero__image">
          <img className="personImage" src={personImage} alt="" />
        </div>
      </div>
    </div>
  );
}
