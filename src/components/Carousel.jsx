import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { FaReact, FaCss3Alt, FaNodeJs, FaFigma } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb, SiExpress } from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import useMeasure from "react-use-measure";

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
  const [loaded, setLoaded] = useState(false);
  let [ref, { width }] = useMeasure();
  const FAST_DURATION = 25;
  const SLOW_DURATION = 150;

  let [duration, setDuration] = useState(FAST_DURATION);

  const xTranslation = useMotionValue(0);

  // issue: onHover the carousel speed changes to slow - but it also restart from the beginning bcuz the "duration" variable is being reset, which triggeres the useEffect and resets all the animate values
  // solution:
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    // divide bt 2 bcuz its itterating through 2 copies of the cards array
    let finalPosition = -width / 2;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        duration: duration,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  useEffect(() => {
    // mimics the "DOMContentLoaded" event which doesnt apply in react bcuz react components already mount after the DOM is ready
    setLoaded(true);
  }, []);

  return (
    <div
      className={`carousel ${
        loaded ? "page-loaded" : ""
      } relative px-8 bg-neutral-800 overflow-hidden bg-[url("./assets/Atonement3.jpeg")] bg-contain bg-no-repeat w-full h-0 pt-[54.11%] mt-[7vh] lg:mt-[10vh] xl:mt-[25vh] rounded-[28px]  sm:rounded-[60px]`}
    >
      <motion.div
        className="flex gap-3 absolute bottom-3 sm:bottom-16 lg:bottom-7 2xl:bottom-54  items-center cursor-grab"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {/* CARDS */}
        {[...cards, ...cards].map((card, index) => (
          <div
            className="shrink-0 text-center text-beige items-center 2xl:mb-20"
            key={index}
          >
            <div className=" text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl rounded-lg bg-red px-10 py-[50%] sm:px-14  lg:px-24">
              {card.icon}
            </div>
            <p>{card.skill}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
