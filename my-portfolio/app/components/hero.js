"use client";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 sm:px-8 pt-20 overflow-hidden bg-black">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2 },
            links: { enable: true, color: "#f39c12", opacity: 0.4 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "bubble" } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-8">
        {/* Floating 3D Avatar */}
        <motion.div
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-700"
        >
          <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white">🚀</span>
        </motion.div>

        {/* Typing Animation */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-lg">
          <Typewriter
            options={{
              strings: [
                "Hey, I'm Saif Muhammad Sharif",
                "A Full-Stack Developer",
                "Building Impactful Web Experiences",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-lg sm:max-w-2xl"
        >
          Passionate about JavaScript, React & Node.js | Creating Seamless Digital Experiences 🚀
        </motion.p>

        {/* Live Clock */}
        <div className="text-yellow-400 font-bold text-lg sm:text-xl bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
          {time.toLocaleTimeString()}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <a
            href="#projects"
            className="px-5 py-3 sm:px-7 sm:py-4 bg-yellow-400 text-black font-bold rounded-lg transition-all transform hover:scale-110 hover:bg-orange-500 shadow-lg text-base sm:text-lg flex items-center gap-2"
          >
            View Projects <FaArrowRight className="text-lg" />
          </a>
          <a
            href="#contact"
            className="px-5 py-3 sm:px-7 sm:py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg transition-all transform hover:bg-yellow-400 hover:text-black hover:scale-110 shadow-lg text-base sm:text-lg"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <div className="flex space-x-5 mt-5">
          <a href="https://github.com/yourusername" target="_blank" className="text-gray-300 hover:text-yellow-400 text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-gray-300 hover:text-yellow-400 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" className="text-gray-300 hover:text-yellow-400 text-2xl">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
