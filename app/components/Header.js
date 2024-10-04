'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import './Header.css';
import logo from './../../public/logo.png'
import Hamburger from "./Hamburger";
function Header() {
  const navlinks = [
    {
      title: "Home",
      url: "/",
      isActive: true,
    },
  ];
  return (
    <>
    
      <div className="Header border-b fixed z-[60] bg-opacity-80   border-b-[#48c9af60] flex bg-zinc-950 justify-between px-[5vw] py-[2vh] w-[100%]">        
        <Link href={'/'} className="flex gap-1">
          <Image src={logo} className=" xl:w-10 xl:h-8 lg:w-14 lg:h-11 md:w-10 md:h-8 w-8 h-7 "></Image>
          <h2 className="text-[#48C9B0] xl:text-2xl lg:text-3xl md:text-2xl text-lg font-[600] my-auto"> WhyKash</h2>
        </Link>
        <div className="headerButton hover:cursor-pointer hidden md:flex xl:gap-20  lg:gap-12 md:gap-14 justify-end xl:w-[40vw] sm:w-[40vw] items-center text-white">
          <Link href="/#HeroPage">
            <h1 className=" xl:text-xl lg:text-3xl md:text-xl first-line: hover:text-[#48C9B0]">
              Home
            </h1>
          </Link>
          <Link href="/#Skill">
            <h1 className="xl:text-xl lg:text-3xl md:text-xl first-line: hover:text-[#48C9B0]">
            Skill
            </h1>
          </Link>
          <Link href="/#Project">
            <h1 className="xl:text-xl lg:text-3xl md:text-xl first-line: hover:text-[#48C9B0]">
              Project
            </h1>
          </Link>
          <Link href="/#Contact">
            <h1 className="xl:text-xl lg:text-3xl md:text-xl first-line: hover:text-[#48C9B0]">
              Contact
            </h1>
          </Link>
          
        </div>
        <div className="md:hidden">
          <Hamburger/>
          </div>
      </div>
    </>
  );
}

export default Header;
