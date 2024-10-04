"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay"
import ProjectScreen from "./ProjectScreen";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div
      id="Project"
      className="bg-zinc-950 bg-gradient-to-r from-[#48c9af90] to-black via-[#48c9af32] via-25%  border-b-[#48c9af60] border-b w-[100%] overflow-hidden xl:py-24 py-[8vh] h-[100vh] sm:h-auto xl:h-[105vh]"
    >
      <h2 className="text-[#48C9B0] relative z-30 text-center 2xl:text-xl lg:text-3xl md:text-xl text-sm mt-10 sm:mt-0 font-[400]">
        Explore
      </h2>
      <h1 className="relative text-[#48C9B0] z-30 text-center 2xl:text-5xl lg:text-6xl md:text-5xl text-3xl xl:mt-2 lg:mt-5 mt-1">
        Featured Projects
      </h1>
    
      <Carousel
      className="bg-transparent mt-20 xl:mx-0 sm:mx-9 mx-3" 
      plugins={[plugin.current]}
      
      >
        <CarouselContent className="xl:ml-20 ">
          <CarouselItem className=" xl:basis-1/2"><ProjectScreen i={"0"} /></CarouselItem>
          <CarouselItem className=" xl:basis-1/2"><ProjectScreen i={"1"} /></CarouselItem>
          <CarouselItem className=" xl:basis-1/2"><ProjectScreen i={"2"} /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
          
    </div>
  );
};

export default Projects;
