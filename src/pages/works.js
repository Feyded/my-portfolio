import React from "react";
import work1 from "../assets/images/works/work1.png";
import work2 from "../assets/images/works/work2.png";
import work3 from "../assets/images/works/work3.png";
import work4 from "../assets/images/works/work4.png";
import work5 from "../assets/images/works/work5.png";
import work6 from "../assets/images/works/work6.png";
import work7 from "../assets/images/works/work7.png";
import work8 from "../assets/images/works/work8.png";
import work10 from "../assets/images/works/work10.png";
import "../assets/css/works.css";

export function Works() {
  return (
    <div id="works" className="work__section">
      <div className="container work__container">
        <h2>My Works</h2>
        <div className="work__grid">
          <a href="https://github.com/Feyded/Front-End-Challenges-Accomplished/tree/main/blog-preview-card-main" className="works">
            <img src={work1} alt="" />
          </a>
          <a href="https://github.com/Feyded/Front-End-Challenges-Accomplished/tree/main/four-card-feature-section-master" className="works">
            <img src={work2} alt="" />
          </a>
          <a href="https://github.com/Feyded/Front-End-Challenges-Accomplished/tree/main/results-summary-component-main" className="works">
            <img src={work3} alt="" />
          </a>
          <a href="https://github.com/Feyded" className="works">
            <img src={work4} alt="" />
          </a>
          <a href="https://github.com/Feyded/STI-simple-form" className="works">
            <img src={work5} alt="" />
          </a>
          <a href="https://github.com/Feyded/Practice---HTML-CSS-and-Javascript/tree/main/Interior%20design%20website" className="works">
            <img src={work6} alt="" />
          </a>
          <a href="https://github.com/Feyded/Practice---HTML-CSS-and-Javascript/tree/main/Login%20Form%20with%20UI" className="works">
            <img src={work7} alt="" />
          </a>       
          <a href="https://github.com/Feyded" className="works">
            <img src={work8} alt="" />
          </a>
          <a href="https://elyon-web.com/" className="works">
            <img src={work10} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
