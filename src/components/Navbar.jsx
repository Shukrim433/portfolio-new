import React, { useState } from "react";
import { Link } from "react-router-dom";
import BarsIcon from "../assets/BarsIcon";
import CrossIcon from "../assets/CrossIcon";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className={`flex w-full shadow-md z-50 bg-beige  justify-between py-8 font-custom fixed top-0 left-0 px-[9vw] ${
        menuOpen ? "h-[100vh]" : ""
      }`}
    >
      <h1
        className="text-red cursor-pointer text-[20px]"
        onClick={() => {
          scrollTo(0,0)
          setMenuOpen(false)
        }}
      >
        <Link to="/">SM</Link>
      </h1>

      {/* NAV LINKS */}
      <ul
        className={`md:flex gap-8 text-center ${
          menuOpen ? "mt-[25vh]" : "hidden"
        } `}
        onClick={() => {
          scrollTo(0, 0);
          setMenuOpen(false);
        }}
      >
        <li className="cursor-pointer p-4 hover:text-neutral-600">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="cursor-pointer p-4 hover:text-neutral-600">
          <Link to="/about">About</Link>
        </li>
        <li className="cursor-pointer p-4 hover:text-neutral-600">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/* MENU BARS */}
      <div
        className={`md:hidden ${menuOpen ? "hidden" : "flex"} cursor-pointer`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <BarsIcon></BarsIcon>
      </div>
      {/* CROSS ICON */}
      <div
        className={`md:hidden ${menuOpen ? "flex" : "hidden"} cursor-pointer`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <CrossIcon></CrossIcon>
      </div>
    </div>
  );
};

export default Navbar;
