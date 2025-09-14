import React, { useEffect, useState } from "react";
import logoRam from "../assets/logoRam2.png"
function Pre({ load }) {
  const stars = Array.from({ length: 100 });
  const [dots, setDots] = useState(0);

  useEffect(() => {
    if (!load) return;
    
    const interval = setInterval(() => {
      setDots(prev => (prev + 1) % 4);
    }, 500);
    
    return () => clearInterval(interval);
  }, [load]);

  // Inline styles for the animations
  const styles = `
    @keyframes starMove {
      0% { 
        transform: translate(-50%, -50%) translate(0, 0) scale(0.3); 
        opacity: 0; 
      }
      10% { 
        opacity: 1; 
      }
      90% { 
        opacity: 1; 
      }
      100% { 
        transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(1.2); 
        opacity: 0; 
      }
    }
    
    @keyframes soft-pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.9; }
    }
    
    @keyframes progress {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    .animate-star {
      animation: starMove 1.2s linear forwards;
    }
    
    .animate-soft-pulse {
      animation: soft-pulse 2s ease-in-out infinite;
    }
    
    .animate-progress {
      animation: progress 2s ease-in-out infinite;
    }
    
    .bg-grid-pattern {
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
    }
  `;

  return (
    <div
      className={`preloader fixed inset-0 flex flex-col items-center justify-center bg-black transition-all duration-1000 ${
        load ? "opacity-100 z-50" : "opacity-0 -z-10"
      }`}
    >
      <style>{styles}</style>
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-900 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue-900 rounded-full blur-[80px] opacity-30 animate-ping"></div>
      </div>

      {/* Fast moving stars */}
      {stars.map((_, i) => {
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;
        const size = Math.random() * 3 + 1;
        const delay = Math.random() * 0.5;
        
        return (
          <div
            key={i}
            className="rounded-full absolute animate-star"
            style={{
              top: "50%",
              left: "50%",
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: i % 3 === 0 ? '#8B5CF6' : i % 3 === 1 ? '#60A5FA' : '#A78BFA',
              animationDelay: `${delay}s`,
              "--tx": `${tx}vw`,
              "--ty": `${ty}vh`,
            }}
          ></div>
        );
      })}

      {/* Glowing logo container */}
      <div className="relative z-10 mb-8">
        <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className={`relative h-32 w-32 md:h-40 md:w-40 transform transition-all duration-1000 ${
            load ? "scale-100 animate-soft-pulse" : "scale-150 rotate-12"
          }`}
        >
          {/* Replace this div with your actual logo image */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white text-4xl font-bold bg-gradient-to-br from-purple-500 to-blue-400 p-5 rounded-full">
              {/* Replace this section with your logo */}
<img 
  src={logoRam} 
  alt="Ram Logo" 
  className="w-full h-full rounded-full object-contain"
/>
            </div>
          </div>
        </div>
      </div>

      {/* Loading text with dynamic dots */}
      <div className="relative z-10 flex items-center gap-1 text-white text-lg md:text-xl font-light">
        <span className="tracking-wider">Loading</span>
        <span className="w-4 text-center">{'.'.repeat(dots)}</span>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 w-48 md:w-64 h-1 bg-gray-800 rounded-full mt-6 overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-full animate-progress"></div>
      </div>

      {/* Subtle grid pattern in background */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
    </div>
  );
}

export default Pre;