import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import logoRam4 from "../assets/logoRam5.png";

function NavBar() {
  const [navColour, setNavColour] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        setNavColour(true);
      } else {
        setNavColour(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    navColour
      ? "bg-[#0d0d1f]/80 backdrop-blur-md shadow-lg"
      : "bg-[#0d0d1f]/20"
  }`}
>
  <div className="container mx-auto flex items-center justify-between px-8 py-4">
    {/* Logo */}
    <Link to="/" className="flex items-center">
      <img src={logoRam4} alt="logo" className="h-14 w-auto rounded-full" />
    </Link>

    {/* Mobile toggle button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden flex flex-col gap-1"
    >
      <span className="w-6 h-0.5 bg-white"></span>
      <span className="w-6 h-0.5 bg-white"></span>
      <span className="w-6 h-0.5 bg-white"></span>
    </button>

    {/* Nav Links */}
    {/* Nav Links */}
<div
  className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static left-0 top-full w-full md:w-auto bg-[#0d0d1f]/95 md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
    isOpen ? "flex" : "hidden"
  }`}
>
  <Link
    to="/"
    onClick={() => setIsOpen(false)}
    className="px-6 py-3 md:px-5 md:py-2 flex items-center gap-2 text-lg md:text-xl text-white hover:text-purple-400 font-medium transition"
  >
    <AiOutlineHome /> Home
  </Link>
  <Link
    to="/about"
    onClick={() => setIsOpen(false)}
    className="px-6 py-3 md:px-5 md:py-2 flex items-center gap-2 text-lg md:text-xl text-white hover:text-purple-400 font-medium transition"
  >
    <AiOutlineUser /> About
  </Link>
  <Link
    to="/project"
    onClick={() => setIsOpen(false)}
    className="px-6 py-3 md:px-5 md:py-2 flex items-center gap-2 text-lg md:text-xl text-white hover:text-purple-400 font-medium transition"
  >
    <AiOutlineFundProjectionScreen /> Projects
  </Link>
  <Link
    to="/resume"
    onClick={() => setIsOpen(false)}
    className="px-6 py-3 md:px-5 md:py-2 flex items-center gap-2 text-lg md:text-xl text-white hover:text-purple-400 font-medium transition"
  >
    <CgFileDocument /> Resume
  </Link>

  {/* GitHub Button */}
  <a
    href="https://github.com/student-CSE-Ram/Portfolio"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 md:px-5 md:py-2 flex items-center gap-2 text-lg md:text-xl text-white bg-purple-700 rounded-md hover:bg-purple-600 transition font-medium"
  >
    <CgGitFork /> <AiFillStar />
  </a>
</div>

  </div>
</nav>

  );
}

export default NavBar;
