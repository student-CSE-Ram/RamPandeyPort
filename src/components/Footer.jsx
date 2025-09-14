import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d1f] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left - Portfolio Text */}
        <div className="text-center md:text-left">
          <h3 className="text-sm md:text-base font-medium">
            A Portfolio of Ramchandra Pandey
          </h3>
        </div>

        {/* Middle - Contact Info */}
        <div className="text-center flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <div className="flex items-center gap-1">
            <AiOutlinePhone />
            <span className="text-sm md:text-base">+91 9792541956</span>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineMail />
            <span className="text-sm md:text-base">rampc45.07@gmail.com</span>
          </div>
          <div className="text-sm md:text-base">
            © {year} Rp.
          </div>
        </div>

        {/* Right - Social Links */}
        <div className="flex space-x-4 text-lg">
          <a
            href="https://github.com/student-CSE-Ram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
