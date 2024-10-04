import React from "react";
import Image from "next/image";
import Link from "next/link";
import hello from "./../../public/hello.png";
const HeroPage = () => {
  return (
    <div
      id="HeroPage"
      className=" bg-zinc-950 border-b-[#48c9af60] border-b w-[100%] h-[100vh] relative z-50 overflow-hidden px-[5vw] "
    >
      <div className="flex select-none xl:flex-row md:gap-10 lg:gap-32 xl:gap-0 mx-5 xl:mx-0 md:mx-10 flex-col mb-10">
        <div className="2xl:py-[32vh] lg:pt-[20vh] xl:w-[70%] md:pt-36 pt-[30vh] z-50">
          <h2 className="ml-1 text-md lg:text-2xl md:text-xl flex 2xl:mb-7 md:mb-3 mb-[2vh] 2xl:text-2xl">
            I'm <span className=" text-[#48C9B0] ml-3">Yash Kumar Singh </span>{" "}
            .
          </h2>
          <h1 className="text-5xl  xl:mb-10 md:mb-10 mb-[3vh] md:text-6xl lg:text-5xl xl:text-8xl 2xl:text-7xl">
            Full-Stack Developer
          </h1>
          <h2 className="text-md md:text-xl lg:text-xl xl:text-2xl lg:mb-20 xl:mb-14 md:mb-14 mb-[5vh] font-[400] 2xl:text-xl xl:w-[80%]">
            A student at ABV-IIITM Gwalior skilled in Web Development, dedicated
            to delivering polished full-stack solutions that fuse functionality
            with aesthetics, while also learning competitive programming and
            Data Structures & Algorithms (DSA) to consistently hone my
            problem-solving abilities and optimize code efficiency.
          </h2>
          <Link
            href="/yash's_resume.pdf"
            className="bg-[#48C9B0] hover:bg-[#1fb597] px-5 py-2 md:py-4 md:px-10  lg:px-20 lg:py-5 xl:px-12 xl:py-3 text-md lg:text-2xl xl:text-2xl font-[600] rounded-sm md:rounded-md lg:rounded-lg 2xl:rounded-lg"
          >
            Resume
          </Link>
        </div>
        <div className="z-50 xl:w-[40%]">
          <Image
            src="/main.png"
            className="xl:mt-[25vh] hidden md:block xl:w-[60vh] md:w-[60vw]  xl:mx-0 mx-auto mt-5 rounded-full p-2  bg-gradient-to-t from-[#d0faf2] via-[#48C9B0] via-10% "
            width="1000"
            height="1000"
          ></Image>
        </div>
      </div>
      <div className="xl:w-[80vw]  w-[120vw] h-[120vw] xl:h-[80vw] bg-gradient-radial from-[#48C9B0] opacity-30 backdrop-brightness-50 blur-2xl xl:left-[-20vw] xl:top-[-85vh] left-[-25vw] top-[-95vw]  md:left-[-10vw]  md:top-[-85vh] rounded-full  z-10 relative"></div>
    </div>
  );
};

export default HeroPage;
