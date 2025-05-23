import React from "react";
import Carousel from "../components/Carousel";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <div className="flex flex-col gap-8 py-10 font-custom mt-32  px-[3vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <h1 className="text-6xl sm:text-8xl lg:text-9xl">
        PORTFOLIO<span className="text-red">.</span>
      </h1>
      <div className="flex justify-between">
        <p className="text-xl sm:text-2xl lg:text-4xl">Shukri Mohamed</p>
        <p className="text-xl sm:text-2xl lg:text-4xl">Web Developer</p>
      </div>
      <Carousel />
      <div className="flex items-center justify-center mt-14">
        <span className=" w-[100vw] h-[1px] bg-black"></span>
      </div>
      <Timeline />
    </div>
  );
};

export default Home;
