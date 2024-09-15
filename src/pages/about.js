import "../assets/css/about.css";
import cssImage from "../assets/images/about/css.png";
import htmlImage from "../assets/images/about/html.png";
import javascriptImage from "../assets/images/about/javascript.png";
import nodeJSImage from "../assets/images/about/nodejs.png";
import typescript from "../assets/images/about/typescript.png";
import reactJSImage from "../assets/images/about/reactjs.png";
import tailwind from "../assets/images/about/tailwind.png";
import githubImage from "../assets/images/about/github.png";
import vuejs from "../assets/images/about/vuejs.png";
import nextjs from "../assets/images/about/nextjs.png";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa6";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill, RiVuejsLine  } from "react-icons/ri";
import { SiRedux, SiVercel, SiFramer, SiPrisma } from "react-icons/si";

// export function About() {
//   return (
//     <div className="about__section" id="about">
//       {/* <div className="container">
//         <h2 className="font-bold">About Me</h2>
//         <div>
//           <div className="school__grid">
//             <div className="school">
//               <i className="material-icons">school</i>
//               <div>
//                 <h3 className="font-semibold">St. Dominic Academy of Caloocan City</h3>
//                 <p>
//                   Elementary <span className="school__date">2006-2013</span>
//                 </p>
//               </div>
//             </div>
//             <div className="school">
//               <i className="material-icons">school</i>
//               <div>
//                 <h3 className="font-semibold">St. Joseph College of Novaliches</h3>
//                 <p>
//                   Highschool <span className="school__date">2013-2017</span>
//                 </p>
//               </div>
//             </div>
//             <div className="school">
//               <i className="material-icons">school</i>
//               <div>
//                 <h3 className="font-semibold">AMA University</h3>
//                 <p>
//                   Senior Highschool (STEM)
//                   <span className="school__date"> 2017-2019</span>
//                 </p>
//               </div>
//             </div>
//             <div className="school">
//               <i className="material-icons">school</i>
//               <div>
//                 <h3 className="font-semibold">STI College of Novaliches</h3>
//                 <p>
//                   College (BSIT) <span className="school__date">2019-2024</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       <section className="">
//         <div className="py-12 bg-transparent">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="lg:text-center">
//               <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
//                 About Me
//               </h2>
//               <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
//                 Passionate Developer and Tech Enthusiast
//               </p>
//               <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
//                 I specialize in creating high-quality, performance-driven web
//                 solutions. With expertise in both frontend and backend
//                 development, I love bringing ideas to life with clean and
//                 efficient code.
//               </p>
//             </div>

//             <div className="mt-10">
//               <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//                 <div className="relative">
//                   <dt>
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
//                       <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
//                     </div>
//                     <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
//                       API Expertise
//                     </p>
//                   </dt>
//                   <dd className="mt-2 ml-16 text-base text-gray-500">
//                     Experienced in building and integrating RESTful APIs to
//                     deliver seamless user experiences and efficient backend
//                     operations.
//                   </dd>
//                 </div>
//                 <div className="relative">
//                   <dt>
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
//                       <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
//                     </div>
//                     <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
//                       Frontend Development
//                     </p>
//                   </dt>
//                   <dd className="mt-2 ml-16 text-base text-gray-500">
//                     Proficient in modern frontend frameworks like React,
//                     Next.js, and Vue.js, I create intuitive, responsive, and
//                     engaging user interfaces.
//                   </dd>
//                 </div>
//                 <div className="relative">
//                   <dt>
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
//                       <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
//                     </div>
//                     <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
//                       Fullstack Skills
//                     </p>
//                   </dt>
//                   <dd className="mt-2 ml-16 text-base text-gray-500">
//                     From designing databases to deploying applications, I ensure
//                     that every part of the system works efficiently and scales
//                     effortlessly.
//                   </dd>
//                 </div>
//                 <div className="relative">
//                   <dt>
//                     <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
//                       <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
//                     </div>
//                     <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
//                       Problem Solver
//                     </p>
//                   </dt>
//                   <dd className="mt-2 ml-16 text-base text-gray-500">
//                     I enjoy tackling challenges, optimizing code, and developing
//                     innovative solutions to meet project needs and exceed
//                     expectations.
//                   </dd>
//                 </div>
//               </dl>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="max-w-3xl mx-auto px-5 mt-28">
//         <div className="flex flex-col justify-center">
//           <div className="text-center">
//             <h2 className="font-semibold text-3xl">My Skills</h2>

//             <p className="max-w-7xl mx-auto mt-2 text-gray-500">
//               I have honed my skills through hands-on experience, continuous
//               learning, and tackling real-world projects. From backend
//               development to crafting seamless user interfaces, I bring
//               versatility and dedication to every task.
//             </p>
//           </div>

//           <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
//             <div className="text-gray-400 ">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="120"
//                 height="60"
//                 fill-rule="evenodd"
//               >
//                 <g
//                   transform="matrix(.06928 0 0 .06928 7.367398 13.505331)"
//                   fill="none"
//                 >
//                   <circle
//                     r="50.167"
//                     cy="237.628"
//                     cx="269.529"
//                     fill="#00d8ff"
//                   ></circle>
//                   <g stroke="#00d8ff" stroke-width="24">
//                     <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z"></path>
//                     <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z"></path>
//                     <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z"></path>
//                   </g>
//                 </g>
//                 <path
//                   d="M64.62 38.848l-4.26-6.436c2.153-.19 4.093-1.75 4.093-4.6 0-2.9-2.058-4.756-4.945-4.756h-6.34v15.78h1.964v-6.27h3.147l4.022 6.27zm-5.347-7.997h-4.14v-6.033h4.14c1.87 0 3.147 1.23 3.147 3.005s-1.278 3.03-3.147 3.03zm12.658 8.28c1.87 0 3.407-.615 4.543-1.75l-.852-1.16c-.9.923-2.224 1.443-3.525 1.443-2.46 0-3.975-1.798-4.117-3.95h9.25v-.45c0-3.43-2.035-6.128-5.49-6.128-3.265 0-5.63 2.674-5.63 5.986 0 3.573 2.437 6 5.82 6zm3.55-6.72h-7.5c.095-1.75 1.3-3.81 3.738-3.81 2.603 0 3.738 2.106 3.762 3.81zm13.534 6.436v-7.855c0-2.768-2.01-3.857-4.424-3.857-1.87 0-3.336.615-4.566 1.893l.828 1.23c1.017-1.088 2.13-1.585 3.502-1.585 1.656 0 2.887.875 2.887 2.413v2.058c-.923-1.065-2.224-1.562-3.786-1.562-1.94 0-4 1.207-4 3.762 0 2.484 2.058 3.786 4 3.786 1.538 0 2.84-.544 3.786-1.585v1.3zm-4.92-.994c-1.656 0-2.816-1.04-2.816-2.484 0-1.467 1.16-2.508 2.816-2.508 1.254 0 2.46.473 3.147 1.42v2.153c-.686.946-1.893 1.42-3.147 1.42zm13.5 1.278c2.082 0 3.312-.852 4.188-1.987l-1.183-1.088c-.757 1.017-1.727 1.49-2.9 1.49-2.437 0-3.95-1.893-3.95-4.424s1.514-4.4 3.95-4.4c1.183 0 2.153.45 2.9 1.49l1.183-1.088c-.875-1.136-2.106-1.987-4.188-1.987-3.407 0-5.702 2.603-5.702 5.986 0 3.407 2.295 6 5.702 6zm9.56 0c1.04 0 1.68-.308 2.13-.733l-.52-1.325c-.237.26-.7.473-1.207.473-.78 0-1.16-.615-1.16-1.467v-7.098h2.32V27.42h-2.32v-3.123h-1.775v3.123h-1.893v1.562h1.893v7.477c0 1.704.852 2.674 2.532 2.674z"
//                   fill="#00d8ff"
//                 ></path>
//               </svg>
//             </div>

//             <div className="text-gray-400 ">
//               <svg
//                 width="82"
//                 height="40"
//                 viewBox="0 0 148 90"
//                 className="text-black "
//               >
//                 <path
//                   d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
//                   fill="currentColor"
//                   fill-rule="nonzero"
//                 ></path>
//               </svg>
//             </div>

//             <div className="text-gray-400 ">
//               <svg viewBox="0 0 248 31" className="w-auto h-5 text-slate-900 ">
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
//                   fill="#38bdf8"
//                 ></path>
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
//                   fill="currentColor"
//                 ></path>
//               </svg>
//             </div>

//             <div className="text-gray-400 ">
//               <svg
//                 viewBox="0 0 105 22"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="1em"
//                 className="text-[#f03e2f]"
//               >
//                 <title>Sanity</title>
//                 <path
//                   opacity="0.7"
//                   d="M78.1793 7.99261V21.0028H73.9031V10.2138L78.1793 7.99261Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   opacity="0.7"
//                   d="M20.9511 21.33L30.944 16.1051L29.7121 12.9141L23.1332 15.9821L20.9511 21.33Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   opacity="0.5"
//                   d="M73.9031 10.2027L84.7443 4.65477L82.9126 1.5571L73.9031 5.95997V10.2027Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   opacity="0.7"
//                   d="M43.3705 6.96233V21.0028H39.2927V1.00714L43.3705 6.96233Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   opacity="0.5"
//                   d="M27.1299 6.18617L20.9511 21.33L17.7731 18.5943L25.1353 1.00714L27.1299 6.18617Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   d="M25.1353 1.00714H29.3477L37.1386 21.0028H32.8269L25.1353 1.00714Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   d="M44.0012 1.00714L52.9824 14.6682V21.0028L39.2927 1.00714H44.0012Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   d="M64.9183 1.00714H60.6739V21.0063H64.9183V1.00714Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   d="M73.9031 4.65474H67.37V1.00714H82.5867L84.7443 4.65474H78.1793H73.9031Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   opacity="0.5"
//                   d="M97.2754 13.4153V21.0028H93.0629V13.4153"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   d="M93.0629 13.4152L100.191 1.00714H104.666L97.2754 13.4152H93.0629Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   opacity="0.7"
//                   d="M93.063 13.4152L85.7363 1.00714H90.3456L95.3092 9.51008L93.063 13.4152Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   d="M1.96126 3.31479C1.96126 6.09921 3.71145 7.75595 7.21536 8.62956L10.9283 9.47533C14.2444 10.2236 16.2639 12.0822 16.2639 15.1103C16.2897 16.4295 15.8531 17.7173 15.0274 18.7579C15.0274 15.7368 13.4367 14.1044 9.59972 13.1229L5.95409 12.3085C3.03475 11.6541 0.781478 10.1262 0.781478 6.83709C0.766123 5.56693 1.18116 4.32781 1.96126 3.31479"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   opacity="0.7"
//                   d="M52.9824 13.6415V1.00714H57.0602V21.0028H52.9824V13.6415Z"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   opacity="0.7"
//                   d="M12.7458 14.3689C14.3294 15.3643 15.0238 16.7565 15.0238 18.7544C13.713 20.4041 11.4101 21.33 8.70333 21.33C4.14718 21.33 0.958577 19.1268 0.25 15.2982H4.62547C5.18878 17.0559 6.68034 17.8703 8.67144 17.8703C11.1019 17.8703 12.7174 16.5964 12.7493 14.3619"
//                   fill="currentColor"
//                 ></path>
//                 <path
//                   opacity="0.7"
//                   d="M4.23567 7.44267C3.5125 7.02045 2.9192 6.41375 2.51873 5.68697C2.11827 4.96019 1.92558 4.14045 1.96113 3.31476C3.22594 1.67891 5.42608 0.679993 8.10804 0.679993C12.7492 0.679993 15.4347 3.08852 16.0972 6.47856H11.8883C11.4242 5.14203 10.2621 4.10136 8.14347 4.10136C5.87957 4.10136 4.33487 5.39611 4.24629 7.44267"
//                   fill="currentColor"
//                 ></path>
//               </svg>
//             </div>

//             <div className="text-gray-400 ">
//               <svg
//                 width="100"
//                 height="64"
//                 viewBox="0 0 284 65"
//                 fill="currentColor"
//                 className="text-black "
//               >
//                 <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="container">
//         <h2 className="font-bold">My Skills</h2>
//         <div className="skills__grid">
//           <div className="card html-color">
//             <img src={htmlImage} alt="html_Image" />
//           </div>
//           <div className="card css-color">
//             <img src={cssImage} alt="css_Image" />
//           </div>
//           <div className="card javascript-color">
//             <img src={javascriptImage} alt="javascript_Image" />
//           </div>
//           <div className="card reactjs-color">
//             <img src={reactJSImage} alt="reactjs_Image" />
//           </div>
//           <div className="card nodejs-color">
//             <img src={nodeJSImage} alt="nodejs_Image" />
//           </div>
//           <div className="card typescript-color">
//             <img src={typescript} alt="typescript_Image" />
//           </div>
//           <div className="card tailwind-color">
//             <img src={tailwind} alt="tailwind_Image" />
//           </div>
//           <div className="card github-color">
//             <img src={githubImage} alt="github_image" />
//           </div>
//           <div className="card vuejs-color">
//             <img src={vuejs} alt="vuejs" />
//           </div>
//           <div className="card nextjs-color">
//             <img src={nextjs} alt="nextjs" />
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }


export const About = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <SocialsSecondBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h2 className="mb-12 text-4xl font-medium leading-tight ">
      Welcome<span className="animate-ping">! </span>
      <span className="text-zinc-400">
        I love building cool websites using this tech stacks.
      </span>
    </h2>    
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-sky-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <RiReactjsFill />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-900 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <RiNextjsFill />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-purple-600 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiRedux className="text-white"/>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-slate-900 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <RiTailwindCssFill className="text-sky-400" />
      </a>
    </Block>
  </>
);
const SocialsSecondBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-black md:col-span-3 md:h-36"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiVercel />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-emerald-400 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <RiVuejsLine />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gray-900 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiFramer className="text-white"/>
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-slate-900 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiPrisma />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);



const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <h2 className="font-bold text-center mb-10">My Skills</h2>

  );
};

