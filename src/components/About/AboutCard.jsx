import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-xl mx-auto">
      <blockquote className="space-y-4">
        <p className="text-justify text-white">
          Hello Everyone,{" "}
          <span className="text-purple-500 font-semibold">Ramchandra Pandey</span>{" "}
          from <span className="text-purple-500 font-semibold">Gorakhpur U.P.</span>
          <br />
          I am currently doing internship at ACS Tech Consulting.
          <br />
          I have completed diploma in computer science.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>

        <ul className="list-none space-y-2 text-white">
          <li className="flex items-center gap-2">
            <ImPointRight className="text-purple-500" /> Playing Cricket
          </li>
          <li className="flex items-center gap-2">
            <ImPointRight className="text-purple-500" /> Reading Books
          </li>
          <li className="flex items-center gap-2">
            <ImPointRight className="text-purple-500" /> Travelling
          </li>
        </ul>

        <p className="text-purple-300 italic">
          "Run behind the knowledge, not the success. Success will come to you if you have good knowledge and you use it at the right time!"
        </p>

        <footer className="text-white font-semibold">— Ramchandra</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
