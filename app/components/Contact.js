"use client";
import Link from "next/link";
import Linkedin from "./../../public/Linkedin1.png";
import github from "./../../public/github.png";
import React from "react";
import Image from "next/image";
import { useState } from "react";
function Contact() {
  let initialState = {
    preson: "",
    emailName: "",
    message: "",
  };
  const [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    
    if (data.preson === "" || data.emailName === "" || data.message === "") {
      alert("Please fill out all the fields.");
    } else {
      alert("Message sent successfully!");
      setData(initialState); 
    }
  };
  let handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  return (
    <div
      id="Contact"
      className=" w-[100%] 2xl:pt-20 xl:pt-20 pt-12 bg-zinc-950"
    >
      <h1 className="text-center 2xl:text-5xl xl:text-6xl lg:text-7xl md:text-5xl text-4xl my-5">
        Let's Chat
      </h1>
      <h2 className="text-center 2xl:text-lg xl:text-xl lg:text-3xl md:text-xl font-[400]">
        itsyash9211@gmail.com
      </h2>
      <div className="flex flex-col xl:flex-row 2xl:mx-28 xl:mx-14 mx-auto items-center justify-center xl:my-20 my-10 2xl:gap-20 xl:gap-16 gap-10">
        <div className=" bg-zinc-800 2xl:px-10 xl:lg:px-10 lg:px-16 px-5 2xl:w-[50vw] xl:w-[45vw] w-[80vw] 2xl:py-12 xl:py-16 lg:py-20 py-10 rounded-lg border-[#48C9B0] border">
          <h1 className=" 2xl:text-3xl xl:text-4xl lg:text-5xl md:text-2xl text-xl">
            Yash Kumar Singh
          </h1>
          <h3 className=" 2xl:text-lg xl:text-2xl lg:text-3xl md:text-lg font-[400] xl:mt-2 lg:mt-5 mt-1">
            Graduation Year - 2026
          </h3>
          <h3 className="xl:text-lg lg:text-3xl md:text-lg font-[400] xl:mt-5 lg:mt-5 mt-1">
            I'm a sophomore at{" "}
            <span className="font-[600] text-[#48C9B0]">IIIT Gwalior</span>{" "}
            pursuing BTech in Information Technology. I have my expertise in web
            development, especially with the{" "}
            <span className="font-[600] text-[#48C9B0]"> MERN stack</span>.
          </h3>
          <h3 className="xl:text-lg lg:text-3xl md:text-lg font-[400] xl:mt-3 lg:mt-5 mt-1">
            I'm always ready to have new experiences, meet new people and work
            in the latest fast paced environments.
          </h3>
          <div className="xl:mt-5 lg:mt-10 mt-3 flex 2xl:gap-5 lg:gap-8 gap-5">
            <Link
              href={"https://www.linkedin.com/in/yash-kumar-singh-46a476257/"}
            >
              <Image
                src={Linkedin}
                className="2xl:w-10 2xl:h-10 xl:w-12 xl:h-12 lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8 cursor-pointer"
              ></Image>
            </Link>

            <Link href={"https://github.com/WhyKash01"}>
              <Image
                src={github}
                className="2xl:w-10 2xl:h-10 xl:w-12 xl:h-12 lg:w-14 lg:h-14 md:w-10 md:h-10 h-8 w-8 cursor-pointer "
              ></Image>
            </Link>
          </div>
        </div>
        <div className=" xl:w-[50vw] grid grid-cols-1 justify-items-center w-[80vw] bg-zinc-800 2xl:py-12 lg:py-20 py-10 px-auto border border-[#48C9B0] rounded-lg shadow-lg shadow-black/50 ">
          <h1 className=" md:text-4xl lg:text-6xl 2xl:text-4xl xl:text-5xl text-3xl 2xl:mb-10 lg:mb-12 md:mb-8 mb-5 ">
            Let's get in touch
          </h1>

          <form action="" className=" 2xl:w-[35vw]">
            <div className="xl:w-[35vw] w-[70vw] flex flex-col xl:flex-row xl:mb-[1vw] mb-3 md:mb-5  lg:mb-[1vw] justify-between">
              <input
                onChange={handleChange}
                type="text"
                value={data.preson}
                name="preson"
                placeholder="Name"
                className="lg:pl-[2vw] pl-5 placeholder:text-[#48C9B0] md:mb-5 2xl:text-sm xl:text-xl lg:text-3xl md:text-xl text-sm lg:py-[1.5vh] md:py-4 py-[1vh] text-white rounded-sm lg:rounded-md bg-zinc-950 xl:w-[17vw] 2xl:mb-0 lg:mb-[2vw] mb-3  "
              />
              <input
                onChange={handleChange}
                type="email"
                value={data.emailName}
                name="emailName"
                className="lg:pl-[2vw] pl-5 placeholder:text-[#48C9B0] 2xl:text-sm xl:text-xl lg:text-3xl md:text-xl text-sm lg:py-[1.5vh] py-[1vh] md:py-4 text-white rounded-sm lg:rounded-md bg-zinc-950 xl:w-[17vw] 2xl:mb-0 lg:mb-[2vw]"
                placeholder="Email"
                id=""
              />
            </div>
            <div className="">
              <input
                name="message"
                value={data.message}
                onChange={handleChange}
                type="text"
                className=" xl:w-[35vw] xl:text-sm w-[70vw] lg:pl-[2vw] text-sm pl-5 placeholder:text-[#48C9B0] lg:text-3xl lg:pt-3 xl:pb-16 lg:pb-20 md:pt-4 md:pb-14 pb-10 md:text-xl pt-[1vh] text-white rounded-sm xl:rounded-md bg-zinc-950 lg:mb-0"
                placeholder="Any message"
              />
            </div>
          </form>
          <button
            type="submit"
            onClick={handleSubmit}
            className=" bg-[#48C9B0] md:text-xl hover:bg-[#1fb597] xl:rounded-md rounded-sm 2xl:text-lg xl:text-2xl lg:text-3xl text-white lg:py-[1vh] md:py-3 py-[1vw] shadow-black shadow-sm xl:w-[13vw] lg:w-[25vw] w-[35vw] xl:mt-[2vw] lg:mt-10 mt-5 xl:items-center"
          >
            Send
          </button>
        </div>
      </div>
      <div className=" text-xs text-[#48C9B0] sm:text-sm md:text-lg lg:text-xl font-[400] border-t-[#48c9af60] text-center py-4 border-t mx-5 lg:mx-10 ">
        © Copyright 2023. Made by{" "}
        <Link
          href={"/"}
          className="text-white lg:underline-offset-2 underline-offset-1 hover: underline"
        >
          Yash Kumar Singh
        </Link>
      </div>
    </div>
  );
}

export default Contact;
