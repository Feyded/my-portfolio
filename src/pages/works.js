import React from "react";
import newWork1 from "../assets/images/works/newWork1.png";
import newWork2 from "../assets/images/works/newWork2.png";
import newWork3 from "../assets/images/works/newWork3.png";
import newWork4 from "../assets/images/works/newWork4.png";
import newWork5 from "../assets/images/works/newWork5.png";
import "../assets/css/works.css";
import { ArrowRight } from "lucide-react";

const works = [
  {
    imageUrl: newWork1,
    techstack: ["React", "Nextjs", "Tailwindcss", "Redux", "Redux Toolkit"],
    buttonLabel: "View Demo",
    buttonUrl: "https://myprojects-three.vercel.app/dashboard-roi",
  },
  {
    imageUrl: newWork2,
    techstack: [
      "React",
      "Nextjs",
      "Tailwindcss",
      "Redux",
      "RTK Query",
      "Prisma",
      "PostgreSQL",
      "Express",
    ],
    buttonLabel: "View Repository",
    buttonUrl: "https://github.com/Feyded/inventory-management",
  },
  {
    imageUrl: newWork3,
    techstack: ["React", "Nextjs", "Tailwindcss", "Framer Motion"],
    buttonLabel: "View Demo",
    buttonUrl: "https://mock-design.vercel.app/",
  },
  {
    imageUrl: newWork4,
    techstack: [
      "React",
      "Vite",
      "Tanstack Query",
      "Redux",
      "ShadCN",
      "Framer Motion",
    ],
    buttonLabel: "View Demo",
    buttonUrl: "https://react-vite-ecommerce-beryl.vercel.app",
  },
  {
    imageUrl: newWork4,
    techstack: [
      "React",
      "Vite",
      "Tanstack Query",
      "Redux",
      "ShadCN",
      "Framer Motion",
    ],
    buttonLabel: "View Demo",
    buttonUrl: "https://react-vite-ecommerce-beryl.vercel.app",
  },
  {
    imageUrl: newWork5,
    techstack: [
      "React",
      "Vite",
      "Tailwindcss",
    ],
    buttonLabel: "View Demo",
    buttonUrl: "https://bookmark-manager-figma.vercel.app",
  },
];

export function Works() {
  return (
    <div id="works" className="work__section">
      <div className="max-w-2xl xl:max-w-4xl mx-auto">
        <div className="mx-3">
          <h2 className="font-bold">My Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
            {/* CARDS */}
            {works.map((work) => (
              <div
                key={work.imageUrl}
                className="hover:shadow-2xl w-full hover:shadow-orange-500 max-w-sm h-full flex flex-col mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow "
              >
                <img
                  className="rounded-t-lg w-full h-40"
                  src={work.imageUrl}
                  alt=""
                />
                <div className="flex flex-col p-5 flex-grow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Tech Stack:
                  </h5>
                  <div className="grid sm:grid-cols-2">
                    {work.techstack.map((tech) => (
                      <p key={tech} className="text-gray-700">
                        - {tech}
                      </p>
                    ))}
                  </div>
                  <br />
                  <a
                    href={work.buttonUrl}
                    className="group inline-flex justify-center mt-auto items-center px-3 gap-1 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  >
                    {work.buttonLabel}
                    <ArrowRight
                      className="animate-bounceX group-hover:animate-none"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
