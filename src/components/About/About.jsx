import React from "react";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";


function About() {
  return (
    <section id="about" className="relative w-full bg-gray-900 text-white pt-24">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <Particle />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          {/* Left Column */}
          <div className="md:w-7/12 text-center md:text-left space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              Know Who <span className="text-purple-500">I'M</span>
            </h1>

            {/* About Text Outside Card */}
            <p className="text-lg md:text-xl leading-relaxed">
              Hello Everyone, <span className="text-purple-500 font-semibold">Ramchandra Pandey</span> from{" "}
              <span className="text-purple-500 font-semibold">Gorakhpur U.P.</span>
              <br />
              I am currently doing internship at ACS Tech Consulting.
              <br />
              I have completed diploma in computer science.
              <br />
              <br />
              Apart from coding, some other activities that I love to do:
            </p>

            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl">
              <li>Playing Cricket</li>
              <li>Reading Books</li>
              <li>Travelling</li>
            </ul>

            <p className="text-purple-300 italic mt-4">
              "Run behind the knowledge, not the success. Success will come to you if you have good knowledge and you use it at the right time!"
            </p>
          </div>

          {/* Right Column - Bigger Image */}
          <div className="md:w-5/12 flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="/about.png"
              alt="about"
              className="w-80 md:w-[450px] max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Skillset Section */}
        <h1 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-center">
          Professional <span className="text-purple-500">Skillset</span>
        </h1>
        <Techstack size={80} />

        {/* Tools Section */}
        <h1 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-center">
          <span className="text-purple-500">Tools</span> I use
        </h1>
        <Toolstack size={80} />
      </div>
    </section>
  );
}

export default About;
