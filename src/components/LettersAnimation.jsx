import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const LettersAnimation = ({ text, className = "" }) => {
  const splittedText = text.split("");

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={cn(
            "text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]",
            className
          )}
        >
          {current == " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
};

export default LettersAnimation;
