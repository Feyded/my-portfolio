import React from "react";
import "../assets/css/about.css";
import cssImage from "../assets/images/about/css.png";
import htmlImage from "../assets/images/about/html.png";
import javascriptImage from "../assets/images/about/javascript.png";
import nodeJSImage from "../assets/images/about/nodejs.png";
import phpImage from "../assets/images/about/php.png";
import reactJSImage from "../assets/images/about/reactjs.png";
import boostrapImage from "../assets/images/about/bootstrap.png";
import githubImage from "../assets/images/about/github.png";

export function About() {
  return (
    <div className="about__section" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div>
          <div className="school__grid">
            <div className="school">
              <i className="material-icons">school</i>
              <div>
                <h3>St. Dominic Academy of Caloocan City</h3>
                <p>
                  Elementary <span className="school__date">2006-2013</span>
                </p>
              </div>
            </div>
            <div className="school">
              <i className="material-icons">school</i>
              <div>
                <h3>St. Joseph College of Novaliches</h3>
                <p>
                  Highschool <span className="school__date">2013-2017</span>
                </p>
              </div>
            </div>
            <div className="school">
              <i className="material-icons">school</i>
              <div>
                <h3>AMA University</h3>
                <p>
                  Senior Highschool (STEM)
                  <span className="school__date"> 2017-2019</span>
                </p>
              </div>
            </div>
            <div className="school">
              <i className="material-icons">school</i>
              <div>
                <h3>STI College of Novaliches</h3>
                <p>
                  College (BSIT) <span className="school__date">2019-2024</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills__grid">
          <div className="card html-color">
            <img src={htmlImage} alt="html_Image" />
          </div>
          <div className="card css-color">
            <img src={cssImage} alt="css_Image" />
          </div>
          <div className="card javascript-color">
            <img src={javascriptImage} alt="javascript_Image" />
          </div>
          <div className="card reactjs-color">
            <img src={reactJSImage} alt="reactjs_Image" />
          </div>
          <div className="card nodejs-color">
            <img src={nodeJSImage} alt="nodejs_Image" />
          </div>
          <div className="card php-color">
            <img src={phpImage} alt="php_Image" />
          </div>
          <div className="card bootstrap-color">
            <img src={boostrapImage} alt="bootstrap_Image" />
          </div>
          <div className="card github-color">
            <img src={githubImage} alt="github_image" />
          </div>
        </div>
      </div>
    </div>
  );
}
