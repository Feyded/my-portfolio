import React from "react";
import personImage from "../assets/images/home/person.png";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import "../assets/css/home.css";
import { useEffect, useState } from "react";

export function Home() {
  const downloadResume = () => {
    Swal.fire({
      title: "Message me!",
      text: "For inquiries, kindly reach me at dean.zaballero@gmail.com or Fb Dean Zaballero ",
      icon: "info",
      iconColor: "#ffb703",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="hero">
      <div className="container home__section d-flex">
        <div className="hero__text">
          <div>
            <h1 className="font-bold space-y-1 text-6xl md:text-7xl">
              Hi, I'm <FlipLink href="#">Dean </FlipLink>
              <FlipLink href="#">Zaballero </FlipLink>
            </h1>
            <p className="position text-2xl sm:text-3xl font-bold">Fullstack Developer</p>
          </div>
          <div>
            <p className="shortInfo">
              I have developed strong critical and analytical thinking skills
              through hands-on projects and solving real-world problems. I’m
              eager to further enhance my technical expertise and contribute
              meaningfully in any environment.
            </p>
          </div>
          <div className="heroButtons d-flex">
            <a
              className="hireMeBtn"
              href="https://www.facebook.com/deanandrew.zaballero/"
            >
              Message Me
            </a>
            <button
              className="downloadCVBtn"
              href="#"
              onClick={() => downloadResume()}
            >
              Download CV
              <i className="small material-icons">cloud_download</i>
            </button>
          </div>
        </div>
        <div className="hero__image">
          <motion.div
            initial={{ transform: "translateZ(8px) translateY(02px)" }}
            animate={{ transform: "translateZ(32px) translateY(-8px)" }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
            style={{ position: "relative" }}
          >
            <img className="personImage" src={personImage} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const DURATION = 0.5; // Set your animation duration
const STAGGER = 0.1; // Stagger time between letters
const INTERVAL = 2000; // Interval time in milliseconds

const FlipLink = ({ children, href }) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTriggerAnimation((prev) => !prev);
    }, INTERVAL);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <motion.a
      href={href}
      className="relative block overflow-hidden whitespace-nowrap font-black uppercase "
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            animate={triggerAnimation ? "hovered" : "initial"}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            animate={triggerAnimation ? "hovered" : "initial"}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
