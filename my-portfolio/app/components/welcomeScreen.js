"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Typewriter from "typewriter-effect";

export default function WelcomeScreen({ setShowWelcome }) {
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setShowWelcome(false), 1000);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [setShowWelcome]);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={async (engine) => await loadSlim(engine)}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: ["#0099ff", "#ffffff", "#00ff99"] },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1.5, outModes: "out" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 120, duration: 0.4 } },
          },
        }}
        className="absolute inset-0"
      />

      {/* Quantum Distortion Portal Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: [1, 1.1, 1] }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className={`absolute w-[600px] h-[600px] bg-blue-500 blur-[120px] opacity-50 rounded-full mix-blend-overlay ${
          hovered ? "animate-warp" : "animate-pulse"
        }`}
      />

      {/* Logo with Soft Zoom & Rotation Effect */}
      <motion.img
        src="/welcomeLogoV2.png"
        alt="Welcome Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`w-48 sm:w-64 md:w-72 lg:w-80 mb-6 transform ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        whileHover={{
          rotate: [0, 1, -1, 1, -1, 0],
          scale: 1.05,
        }}
      />

      {/* Welcome Text with Animated Portal Effect */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center relative ripple-effect"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="neon-text">
          <Typewriter
            options={{
              strings: ["Welcome to My Portfolio", "Crafting Digital Excellence"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </span>
      </motion.h1>

    

      {/* Neon Glow & Ripple Hover Effect Styles */}
      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #0099ff,
            0 0 30px #0099ff, 0 0 40px #00ff99, 0 0 50px #00ff99;
        }
        .ripple-effect {
          position: relative;
        }
        .ripple-effect:hover::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 300px;
          height: 300px;
          background: rgba(0, 153, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: ripple 1.5s infinite;
        }
        @keyframes ripple {
          from {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          to {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes warp {
          0% {
            transform: scale(1);
            filter: hue-rotate(0deg);
          }
          50% {
            transform: scale(1.2);
            filter: hue-rotate(90deg);
          }
          100% {
            transform: scale(1);
            filter: hue-rotate(0deg);
          }
        }
        .animate-warp {
          animation: warp 2s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}
