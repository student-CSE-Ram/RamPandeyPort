import React from "react";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section id="about" className="bg-[#0d0d1f] text-white py-16">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Text */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-6">
              LET ME <span className="text-purple-400"> INTRODUCE </span> MYSELF
            </h1>
            <p className="leading-relaxed text-lg">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br /><br />
              I am fluent in classics like{" "}
              <span className="text-purple-400 font-semibold">
                C++, JavaScript and Go.
              </span>
              <br /><br />
              My field of interest is building{" "}
              <span className="text-purple-400 font-semibold">
                Web Technologies and Products
              </span>{" "}
              and also in areas related to{" "}
              <span className="text-purple-400 font-semibold">Blockchain.</span>
              <br /><br />
              Whenever possible, I also apply my passion for developing
              products with <span className="text-purple-400">Node.js</span> and{" "}
              <span className="text-purple-400">
                Modern JavaScript Libraries and Frameworks
              </span>{" "}
              like <span className="text-purple-400">React.js</span> and{" "}
              <span className="text-purple-400">Next.js</span>.
            </p>
          </div>

          {/* Avatar */}
          <div className="flex justify-center">
            <Tilt>
              {/* use public/avtar3.png */}
              <img
                src="/avtar3.png"
                alt="avatar"
                className="w-72 rounded-full md:w-80"
              />
            </Tilt>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-16">
          <h1 className="text-3xl font-bold">FIND ME ON</h1>
          <p className="mt-2 text-lg">
            Feel free to{" "}
            <span className="text-purple-400">connect</span> with me
          </p>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/student-CSE-Ram"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-400 hover:text-purple-400 transition"
            >
              <AiFillGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-400 hover:text-purple-400 transition"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/ramchandra-pandey-06b141357/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-400 hover:text-purple-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/ram45.07.18/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-400 hover:text-purple-400 transition"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2;
