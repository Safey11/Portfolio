"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hour = time.getHours();
    if (hour < 12) setGreeting("Good Morning ☀️");
    else if (hour < 18) setGreeting("Good Afternoon 🌤️");
    else setGreeting("Good Evening 🌙");
  }, [time]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-black overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 300, density: { enable: true, area: 1000 } },
            shape: { type: "circle" },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: "none" },
            opacity: { value: 0.7, random: true },
            color: { value: ["#00ffff", "#ff00ff", "#ffcc00"] },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center space-y-6"
      >
        {/* 3D Energy Sphere */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            boxShadow: [
              "0px 0px 20px rgba(0, 255, 255, 0.5)",
              "0px 0px 40px rgba(0, 255, 255, 0.9)",
              "0px 0px 20px rgba(0, 255, 255, 0.5)"
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-48 h-48 bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0px_0px_40px_#00ffff] rounded-full flex items-center justify-center border-4 border-gray-500 backdrop-blur-md"
        >
          <div className="absolute w-52 h-52 bg-white rounded-full opacity-30 blur-3xl animate-pulse"></div>
          <span className="text-6xl font-extrabold text-white drop-shadow-xl animate-spin-slow">
            🌌
          </span>
        </motion.div>

        {/* Greeting */}
        <h2 className="text-3xl text-gray-200 drop-shadow-lg font-semibold">{greeting}</h2>

        {/* Animated Typewriter Text */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 drop-shadow-2xl">
          <Typewriter
            options={{
              strings: [
                "Welcome to My Universe 🚀",
                "I Build Immersive Experiences",
                "Let's Create the Future Together",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* Dynamic Time Display */}
        <div className="text-cyan-300 text-xl bg-gray-900 px-6 py-3 rounded-xl border border-cyan-500 shadow-md animate-pulse backdrop-blur-lg">
          {time.toLocaleTimeString()}
        </div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex space-x-6 mt-4"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all"
            whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
            whileTap={{ scale: 0.9 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-blue-500 text-blue-500 font-bold rounded-lg shadow-lg transition-all"
            whileHover={{ scale: 1.1, backgroundColor: "#2563EB", color: "#ffffff" }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Media Links with Hover Effects */}
        <div className="flex space-x-6 mt-6">
          {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.3, rotate: 5, color: "#00ffff" }}
              className="text-gray-400 hover:text-blue-400 text-3xl cursor-pointer transition-all"
              href="#"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
