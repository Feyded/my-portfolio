import React from "react";
import "../assets/css/certificates.css";
import Certificate1 from "../assets/images/certificates/certificate1.png";
import Certificate2 from "../assets/images/certificates/certificate2.png";
import Certificate3 from "../assets/images/certificates/certificate3.png";
import Certificate4 from "../assets/images/certificates/certificate4.png";
import Certificate5 from "../assets/images/certificates/certificate5.png";
import Certificate6 from "../assets/images/certificates/certificate6.png";

export function Certificate() {
  return (
    <div className="pt-12 pb-8 text-center bg-zinc-900">
      <div className="container">
        <h2 className="font-bold">My Certificates</h2>
        <div className="certificate__grid">
          <div className="certificate__card">
            <img src={Certificate1} alt="" />
          </div>
          <div className="certificate__card">
            <img src={Certificate2} alt="" />
          </div>
          <div className="certificate__card">
            <img src={Certificate3} alt="" />
          </div>
          <div className="certificate__card">
            <img src={Certificate4} alt="" />
          </div>
          <div className="certificate__card">
            <img src={Certificate5} alt="" />
          </div>
          <div className="certificate__card">
            <img src={Certificate6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
