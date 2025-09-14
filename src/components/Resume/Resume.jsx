import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdfFile from "../../assets/Ram2k25.pdf";

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white pt-24">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <Particle />
      </div>

      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        {/* Download Button Top */}
        <a
          href={pdfFile}
          download="Ram_Resume.pdf" // This makes it download instantly
          className="mb-8 flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-md transition"
        >
          <AiOutlineDownload /> Download CV
        </a>

        {/* PDF Viewer */}
        <div className="w-full flex justify-center mb-8">
          <iframe
            src={pdfFile}
            title="Resume"
            width={width > 786 ? "800px" : "100%"}
            height={width > 786 ? "1000px" : "600px"}
            className="shadow-lg rounded-md border border-gray-700"
          ></iframe>
        </div>

        {/* Download Button Bottom */}
        <a
          href={pdfFile}
          download="Ram_Resume.pdf" // Instant download here too
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-md transition"
        >
          <AiOutlineDownload /> Download CV
        </a>
      </div>
    </section>
  );
}

export default Resume;
