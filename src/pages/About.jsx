import React from "react";
import CV from "../assets/CV.pdf";

const About = () => {
  return (
    <div className="flex flex-col xl:flex-row mt-32 font-custom w-full">
      {/* TOP/LEFT: IMAGE */}
      <div
        className={`flex items-center justify-center bg-red p-20 xl:w-[50%]`}
      >
        <img src="/theperksofbeing2.jpg" alt="" />
      </div>

      {/* BOTTOM/RIGTH: TEXT */}
      <div className="flex flex-col px-10 items-center justify-center xl:w-[50%] ">
        <h1 className="text-4xl my-10 sm:text-6xl xl:text-7xl ">
          ME<span className="text-red">.</span>{" "}
        </h1>

        <div className="md:px-12">
          <p>
            My name is <span style={{ color: "#8c0000" }}>Shukri Mohamed</span>,
            I have a full stack web development bootcamp certificate from the
            <span style={{ color: "#8c0000" }}>
              {" "}
              University of Birmingham{" "}
            </span>{" "}
            as well as some experience working in customer service. And up until
            quite recently I was a part time
            <span style={{ color: "#8c0000" }}>
              {" "}
              Volunteer Junior Developer
            </span>{" "}
            where I worked on developing components and pages for a real life
            business and an in house project. I also completed my{" "}
            <span style={{ color: "#8c0000" }}>A-levels</span> in 2022 in
            Biology, Sociology and Business.{" "}
          </p>{" "}
          <br />
          <p>
            The six-month-long web development bootcamp I completed gave me the
            chance to work with Javascript, HTML, CSS, React and more. I also
            learned how to create my own RESTful APIs and set up my own
            databases for back-end development. I even had the opportunity to collaborate on group
            projects, which gave me the opportunity to experience coding in a
            team setting.
          </p>
          <br />
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
