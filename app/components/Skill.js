"use client";
import React, { useState } from "react";
import Skillscard from "./Skillscard";
import HtmlI from "./../../public/html.png";
import Css from "./../../public/css.png";
import Tailwind from "./../../public/tailwind-css.svg";
import reactI from "./../../public/react-2.svg";
import nextI from "./../../public/nexti.svg";
import javaS from "./../../public/javascript.svg";
import typescript from "./../../public/typescript.svg";
import nodeI from "./../../public/nodejs-icon.svg";
import expressI from "./../../public/express.webp";
import mongodbI from "./../../public/mongodb.svg";
import mysqlI from "./../../public/mysql.svg";
import PostgressI from "./../../public/postgresql.svg";
import zodI from "./../../public/zod.svg";
import vite from "./../../public/vite.webp";
import io from "./../../public/logo-dark.svg";
import docker from "./../../public/docker.webp";

const Skill = () => {
  const [skill, setSkill] = useState([
    {
      title: "React",
      des: "React is an open-source JavaScript library for building user interfaces, known for its declarative and component-based approach, facilitating the development of scalable and efficient web applications.",
      Image: reactI,
    },
    {
      title: "Next Js",
      des: "Next.js is an open-source React framework that simplifies and accelerates the development of modern web applications through features like server-side rendering and automatic code splitting.",
      Image: nextI,
    },
    {
      title: "Vite",
      des: "Vite is a modern build tool that provides a fast development experience with instant module reloading and optimized builds. It uses native ES modules and leverages modern browser capabilities to deliver rapid performance and efficient development workflows. ",
      Image: vite,
    },
    {
      title: "TypeScript",
      des: "TypeScript is a statically typed superset of JavaScript that adds optional static typing, enabling better tooling, enhanced code quality, and improved maintainability for large-scale JavaScript applications.",
      Image: typescript,
    },
    {
      title: "Java Script",
      des: "JavaScript is a versatile, high-level programming language primarily used for web development, enabling dynamic, interactive, and client-side scripting within web browsers. ",
      Image: javaS,
    },
    {
      title: "Html",
      des: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. ",
      Image: HtmlI,
    },
    {
      title: "CSS",
      des: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and formatting of HTML or XML documents on the web. ",
      Image: Css,
    },
    {
      title: "Tailwind CSS",
      des: "Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed, low-level utility classes, enabling rapid and efficient styling of HTML elements. ",
      Image: Tailwind,
    },
  ]);
  const [bskill, setBSkill] = useState([
    {
      title: "Node Js",
      des: "Node.js is an open-source, server-side JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It enables the development of scalable and high-performance network applications, using an event-driven, non-blocking I/O model.",
      Image: nodeI,
    },
    {
      title: "Express",
      des: "Express.js is a minimal and flexible Node.js web application framework that simplifies the creation of robust and scalable web applications. ",
      Image: expressI,
    },
    {
      title: "MongoDB",
      des: "MongoDB is a scalable, open-source NoSQL database system that stores data in flexible, JSON-like documents.",
      Image: mongodbI,
    },
    {
      title: "MySQL",
      des: "MySQL is an open-source relational database management system widely employed for data storage and retrieval in various applications. ",
      Image: mysqlI,
    },
    {
      title: "PostgeSQL",
      des: "PostgreSQL is a feature-rich open-source relational database management system, emphasizing extensibility and SQL compliance for robust data storage and retrieval. ",
      Image: PostgressI,
    },
    {
      title: "Docker",
      des: "Docker is a platform for developing, shipping, and running applications in isolated containers. It ensures consistent environments across various stages of development and deployment by encapsulating applications and their dependencies.",
      Image: docker,
    },
    {
      title: "Socket.IO",
      des: "Socket.IO is a library that facilitates real-time, bidirectional communication between clients and servers. It enables features like live chat and notifications by using WebSockets and fallback technologies for seamless connectivity.",
      Image: io,
    },
    {
      title: "ZOD",
      des: "As of my last update in January 2022, ZOD is not widely recognized as an acronym or term; additional context is needed for a specific explanation.",
      Image: zodI,
    },
  ]);
  return (
    <div
      id="Skill"
      className="bg-zinc-950 border-b-[#48c9af60] border-b w-[100%] 2xl:py-20 xl:py-28 sm:py-32 py-10"
    >
      <h2 className=" text-[#48C9B0] md:mx-10 2xl:px-20 2xl:mt-2 sm:mt-5 mt-0  2xl:text-xl xl:text-xl mx-5 md:text-2xl sm:text-xl text-sm  font-[400]">
        Explore My
      </h2>
      <h1 className=" text-[#48C9B0] md:mx-10 2xl:px-20 2xl:text-5xl xl:text-6xl md:text-6xl mx-5 sm:text-6xl text-4xl 2xl:mt-2 sm:mt-5 mt-0">
        SKILLS
      </h1>
      <h2 className=" 2xl:px-20 md:mx-10 2xl:text-3xl xl:text-4xl  md:text-6xl sm:text-4xl mx-5 text-2xl mt-5">
        Frontend Development
      </h2>

      <div className="mx-3 md:mx-10 grid 2xl:mt-5 xl:mt-12 md:mt-16 2xl:text-xl xl:text-xl md:text-3xl sm:text-2xl text-sm mt-5 mb-5 2xl:mb-5 xl:grid-cols-4  justify-items-center md:grid-cols-2 grid-cols-1 2xl:gap-x-5 2xl:gap-y-1 2xl:px-20 xl:gap-y-8 md:gap-y-12  gap-y-1">
        {skill.map(function (skill) {
          return (
            <Skillscard
              title={skill.title}
              des={skill.des}
              Image={skill.Image}
            />
          );
        })}
      </div>
      <div className="h-[1px] md:my-10 xl:mb-10 mb-5 bg-[#48C9B0] opacity-80 rounded-md w-[90vw] mx-[5vw]"></div>
      <h2 className="mx-5 md:mx-10 2xl:px-20 2xl:text-3xl xl:text-4xl  md:text-6xl sm:text-4xl text-2xl">
        Backend Development
      </h2>
      <div className="mx-3 md:mx-10 grid 2xl:mt-5 xl:mt-12 md:mt-16 2xl:text-xl xl:text-xl md:text-3xl sm:text-2xl text-sm mt-5 mb-5 xl:grid-cols-4  justify-items-center md:grid-cols-2 grid-cols-1 2xl:gap-x-10 2xl:gap-y-1 2xl:px-20 xl:gap-y-8 md:gap-y-12  gap-y-1">
        {bskill.map(function (bskill) {
          return (
            <Skillscard
              title={bskill.title}
              des={bskill.des}
              Image={bskill.Image}
            />
          );
        })}
      </div>
      {/* <div className="flex 2xl:gap-12 md:gap-14 gap-10 flex-col justify-center mx-5 sm:mx-14 md:mx-24 2xl:mx-20 2xl:mt-10 xl:mt-12 md:mt-24 sm:mt-14 mt-5">
        <div className="border bg-zinc-900 border-[#48c9af60] rounded-md py-5">
          <h2 className="text-center 2xl:text-4xl xl:text-4xl  md:text-6xl sm:text-4xl text-2xl mt-5">
            Frontend Development
          </h2>
          <div className="mx-3 grid 2xl:mt-5 xl:mt-12 md:mt-16 2xl:text-xl xl:text-xl md:text-3xl sm:text-2xl text-sm mt-5 mb-5 xl:grid-cols-2  justify-items-center md:grid-cols-1 grid-cols-1 2xl:gap-x-10 2xl:gap-y-1 2xl:px-20 xl:gap-y-8 md:gap-y-12  gap-y-1">
            {skill.map(function (skill) {
              return (
                <Skillscard
                  title={skill.title}
                  des={skill.des}
                  Image={skill.Image}
                />
              );
            })}
          </div>
        </div>
        <div className="border bg-zinc-900 border-[#48c9af60] rounded-md py-5">
          <h2 className="text-center 2xl:text-4xl xl:text-4xl  md:text-6xl sm:text-4xl text-2xl mt-5">
            Backend Development
          </h2>
          <div className="mx-3 grid 2xl:mt-5 xl:mt-12 md:mt-16 2xl:text-xl xl:text-xl md:text-3xl sm:text-2xl text-sm mt-5 mb-5 xl:grid-cols-2  justify-items-center md:grid-cols-1 grid-cols-1 2xl:gap-x-10 2xl:gap-y-1 2xl:px-20 xl:gap-y-8 md:gap-y-12  gap-y-1">
            {bskill.map(function (bskill) {
              return (
                <Skillscard
                  title={bskill.title}
                  des={bskill.des}
                  Image={bskill.Image}
                />
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Skill;
