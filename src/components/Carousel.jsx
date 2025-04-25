import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaNodeJs, FaFigma } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";

const cards = [
  {
    skill: "React",
    icon: <FaReact />,
  },
  {
    skill: "JavaScript",
    icon: <RiJavascriptFill />,
  },
  {
    skill: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    skill: "HTML",
    icon: <IoLogoHtml5 />,
  },
  {
    skill: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
  },
  {
    skill: "Figma",
    icon: <FaFigma />,
  },
  {
    skill: "SQL",
    icon: <TbSql />,
  },
  {
    skill: "PostgreSQL",
    icon: <BiLogoPostgresql />,
  },
  {
    skill: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    skill: "Express JS",
    icon: <SiExpress />,
  },
  {
    skill: "Node JS",
    icon: <FaNodeJs />,
  },
];

const Carousel = () => {
    const [loaded, setLoaded] = useState(false)
  // dynamically set the drag limit on the x axis by finding the total width of all the cards in the slider
  const [carouselWidth, setCarouselWidth] = useState();
  const refCard = useRef(null);

  const updateCarourselWidth = () => {
    // if statement to...
    if (refCard.current) {
      setCarouselWidth(refCard.current.clientWidth * 9);
    }
  };

  useEffect(() => {
    // mimics the "DOMContentLoaded" event which doesnt apply in react bcuz react components already mount after the DOM is ready
    setLoaded(true)
    // gets the full width initially on mount
    updateCarourselWidth();

    // get the full width whenever the window resizes
    window.addEventListener("resize", updateCarourselWidth);

    // this function...
    return () => {
      window.removeEventListener("resize", updateCarourselWidth);
    };
  }, []);



  return (
    <div className={`carousel ${loaded ? "page-loaded": ""} relative px-8 bg-neutral-800 overflow-hidden bg-[url("./assets/Atonement3.jpeg")] bg-contain bg-no-repeat w-full h-0 pt-[54.11%] mt-[7vh] lg:mt-[30vh] rounded-[28px]  sm:rounded-[60px]`}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: -carouselWidth,
          right: 30,
        }}
        className="flex gap-3 absolute bottom-3 sm:bottom-16 lg:bottom-7 2xl:bottom-54  items-center cursor-grab active:cursor-grabbing"
      >
        {/* CARDS */}
        <>
          {cards.map((card, index) => (
            <div
              className="shrink-0 text-center text-beige items-center 2xl:mb-20"
              key={index}
              ref={refCard}
            >
              <div className=" text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl rounded-lg bg-red px-10 py-[50%] sm:px-14  lg:px-24">
                {card.icon}
              </div>
              <p>{card.skill}</p>
            </div>
          ))}
        </>
      </motion.div>
    </div>
  );
};

export default Carousel;
