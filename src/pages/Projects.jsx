import React from "react";
import projects from "../assets/projects.json";
import RightArrow from "../assets/RightArrow";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 py-10 font-custom mt-32  px-[3vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex items-center justify-between">
        <h1 className="flex gap-2 text-6xl md:text-8xl">
          PROJECTS<p className="text-red">.</p>
        </h1>
        <Link to="https://github.com/Shukrim433?tab=repositories">
          <p className="flex gap-2 text-lg text-black pr-2 items-center justify-end cursor-pointer hover:text-red">
            See more <RightArrow />{" "}
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div
            className={`project-container relative overflow-hidden  bg-contain bg-no-repeat w-full h-0 pt-[54.11%] cursor-pointer hover:translate-y-[-10px] transition-all duration-100 rounded-xl`}
            style={{ backgroundImage: `url(${project.src})` }}
            key={index}
          >
            <div className="overlay-div flex flex-col absolute justify-center items-center text-center w-full h-full top-0 right-[-100%] bg-[#000000d4] backdrop-blur-sm text-beige ">
              <p className="text-3xl mb-6">{project.name}</p>
              <p className="hover:underline mb-1">
                <a href={project.link}>project link</a>
              </p>
              <p className="hover:underline">
                <a href={project.repo}>project repo</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
