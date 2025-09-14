import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiPostgresql } from "react-icons/si";
;

function Techstack() {
  const techs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 w-full pb-12">
      {techs.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl shadow-lg 
                     hover:bg-purple-600 hover:scale-105 transition-transform duration-300 cursor-pointer"
          title={tech.name}
        >
          <div className="text-6xl text-white">{tech.icon}</div>
          <span className="mt-3 text-lg font-medium text-white">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
