import React from "react";
import CV from "../assets/CV.pdf"

const About = () => {
  return (
    <div className="flex flex-col xl:flex-row mt-32 font-custom w-full">
      {/* TOP/LEFT: IMAGE */}
      <div className={`flex items-center justify-center bg-red p-20 xl:w-[50%]`}>
        <img src="/theperksofbeing2.jpg" alt="" />
      </div>

      {/* BOTTOM/RIGTH: TEXT */}
      <div className="flex flex-col px-10 items-center justify-center xl:w-[50%] ">
        <h1 className="text-4xl my-10 sm:text-6xl xl:text-7xl ">
          ME<span className="text-red">.</span>{" "}
        </h1>

        <div className="md:px-12">
          <p>
            I am a{" "}
            <span style={{ color: "#8c0000" }}>Volunteer Junior Developer</span>{" "}
            at Thomas King, with an extensive technical skillset in both
            front-end and back-end development.
          </p>{" "}
          <br />
          <p>
            I have a certificate from the{" "}
            <span style={{ color: "#8c0000" }}> University of Birmingham </span>
            for completing a six-month-long web development bootcamp. This
            course gave me hands-on experience working on a multitude of
            projects of varying sizes and complexity. I also had the opportunity
            to collaborate on group projects, which gave me the opportunity to
            experience coding in a team setting. I have created sites that rely
            solely on front-end frameworks and technologies like{" "}
            <span style={{ color: "#8c0000" }}>React, Handlebars</span>, etc.,
            as well as sites that utilize
            <span style={{ color: "#8c0000" }}> SQL and NoSQL </span> databases.
          </p>
          <br />
          <p>
            Prior to completing this bootcamp, I didn't have much experience
            with coding. I completed my A-levels in the summer of 2022 and
            decided to take a <span style={{ color: "#8c0000" }}>gap year</span>{" "}
            before attending university the following year to study{" "}
            <span style={{ color: "#8c0000" }}>
              {" "}
              Dental Hygiene and Therapy
            </span>{" "}
            at the University of Birmingham. While on my gap year, my mother
            convinced me to pick up a new skill to spend my off-time more
            productively. This is when I came across the world of coding and web
            development. I came to enjoy coding so much that I made the tough
            decision to withdraw from university just before i was due to start.
            I realized that{" "}
            <span style={{ color: "#8c0000" }}>
              dentistry was not the path for me;
            </span>{" "}
            instead, my true interest was in coding and web development.
          </p>
        </div>
        <button className="bg-red text-beige px-12 py-3 mt-14 rounded-lg hover:bg-black">
        <a href={CV} download="CV">
              Download CV
            </a>
          
        </button>
      </div>
    </div>
  );
};

export default About;
