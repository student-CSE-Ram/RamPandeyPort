import React from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.5 },
            size: { value: 2 },
            links: { enable: true, color: "#ffffff", opacity: 0.3 },
            move: { enable: true, speed: 1 },
          },
        }}
      />
    </div>
  );
}

export default Particle;
