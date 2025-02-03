"use client";
import { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-black">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 70, density: { enable: true, value_area: 800 } },
            shape: { type: "circle" },
            opacity: { value: 0.6, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1.5 },
            links: { enable: true, color: "#f3b52e", opacity: 0.3 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
        {/* Floating Avatar */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg flex items-center justify-center border-4 border-gray-800"
        >
          <span className="text-5xl md:text-6xl font-extrabold text-white">🚀</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-white bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text"
        >
          Hi, I'm Saif Muhammad Sharif
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-300"
        >
          A Passionate Full-Stack Developer 🚀
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="flex space-x-4"
        >
          <a
            href="#projects"
            className="relative group px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-md"
          >
            View Projects
            <FaArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="relative group px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg transition-all transform hover:bg-yellow-400 hover:text-black hover:scale-105 shadow-md"
          >
            Contact Me
          </a>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
          className="mt-10 max-w-3xl mx-auto p-6 bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-800 shadow-lg text-lg text-gray-300"
        >
          <p>
            I'm a full-stack developer specializing in modern web technologies like JavaScript, React, Node.js, and databases like MongoDB. I love crafting innovative solutions and building exceptional user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
