import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="text-xl md:text-2xl font-semibold text-purple-400">
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Freelancer",
            "MERN Stack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
