"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Typewriter from "typewriter-effect";

export default function WelcomeScreen({ setShowWelcome }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setShowWelcome(false), 1200);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [setShowWelcome]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      className="h-screen w-full bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={async (engine) => await loadSlim(engine)}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 200, density: { enable: true, area: 900 } },
            color: { value: ["#00ffcc", "#ffffff", "#ff6600"] },
            shape: { type: "circle" },
            opacity: { value: 0.8, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 5, outModes: "out" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "bubble" } },
            modes: { bubble: { size: 12, distance: 220 } },
          },
        }}
        className="absolute inset-0"
      />

      {/* VR Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-40"></div>

      {/* Welcome Text with Glitch and Holographic Effects */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center relative holographic-text glitch"
      >
        <span>
          <Typewriter
            options={{
              strings: ["Welcome To My Portfolio..."],
              autoStart: true,
              loop: true,
              delay: 40,
            }}
          />
        </span>
      </motion.h1>

      {/* Custom Styles for Glitch, Neon & VR Effects */}
      <style jsx>{`
        .holographic-text {
          text-shadow: 0 0 12px #ffffff, 0 0 24px #00ffcc, 0 0 48px #ff6600;
          filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.8));
        }
        .glitch {
          animation: glitch 1.2s infinite alternate;
        }
        @keyframes glitch {
          0% { transform: skewX(0deg); }
          25% { transform: skewX(-8deg); }
          50% { transform: skewX(8deg); }
          75% { transform: skewX(-8deg); }
          100% { transform: skewX(0deg); }
        }
        .grid-bg {
          background: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: moveGrid 5s linear infinite;
        }
        @keyframes moveGrid {
          from { background-position: 0 0; }
          to { background-position: 50px 50px; }
        }
      `}</style>
    </motion.div>
  );
}
