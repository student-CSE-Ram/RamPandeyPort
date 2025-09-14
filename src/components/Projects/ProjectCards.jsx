import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  return (
    <div className="relative w-full max-w-md bg-gray-900 rounded-xl overflow-hidden flex flex-col
                    shadow-[0_4px_8px_rgba(128,0,128,0.5),0_-2px_4px_rgba(128,0,128,0.2)]
                    transition-all duration-300 hover:scale-105
                    hover:shadow-[0_8px_30px_rgba(128,0,128,0.7),0_-4px_8px_rgba(128,0,128,0.3)]">

      {/* Image with padding */}
      <div className="w-full h-64 p-4">
        <img 
          src={imgPath} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-2xl font-bold mb-3 text-white">{title}</h2>
        <p className="text-gray-300 flex-1 mb-4 text-justify">{description}</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-md shadow-md hover:shadow-purple-400 transition"
          >
            <BsGithub /> {isBlog ? "Blog" : "GitHub"}
          </a>

          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-md shadow-md hover:shadow-purple-400 transition"
            >
              <CgWebsite /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
