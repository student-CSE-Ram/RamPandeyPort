import React from "react";
import homeLogo from "../../assets/home-bg.jpg"; // background
import homemain from "../../assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section
      className="relative min-h-screen w-full text-white"
      style={{
        backgroundImage: `url(${homeLogo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      {/* Content */}
      <div className="container mx-auto px-16 py-24 relative z-10 max-w-6xl">
        <div
          className="grid md:grid-cols-2 items-center"
          style={{ columnGap: "10%" }}
        >
          {/* Left Side - Intro */}
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 flex items-center">
              Hi There! <span className="ml-2 animate-wave">👋🏻</span>
            </h1>

            <h1 className="text-4xl md:text-5xl font-semibold mb-8">
              I'M <strong className="text-purple-400">RAMCHANDRA PANDEY</strong>
            </h1>

            <div className="mt-8 text-2xl md:text-3xl">
              <Type />
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center md:justify-end">
            <img
              src={homemain}
              alt="Illustration"
              className="max-h-[30rem] md:max-h-[35rem] w-full"
            />
          </div>
        </div>
      </div>

      {/* Home2 Section - stacked below Home1 */}
      <div className="mt-32 relative z-10">
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
