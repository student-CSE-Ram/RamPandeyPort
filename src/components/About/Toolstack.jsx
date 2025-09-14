import React from "react";
import { VscVscode } from "react-icons/vsc";
import { SiPostman, SiGithub, SiVercel } from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center w-full pb-12">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-32 h-32 bg-gray-800 rounded-xl shadow-lg 
                     hover:bg-purple-600 hover:scale-110 transition-transform duration-300 cursor-pointer"
          title={tool.name}
        >
          <div className="text-5xl text-white">{tool.icon}</div>
          <span className="mt-2 text-sm text-white">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
