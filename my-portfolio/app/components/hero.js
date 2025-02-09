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

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 sm:px-8 pt-20 overflow-hidden bg-black">
      {/* Background Gradient with Animated Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient blur-xl"></div>

      {/* 3D Particles Effect */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 120, density: { enable: true, area: 800 } },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: 4, random: true },
            move: { enable: true, speed: 2 },
            links: { enable: true, color: "#facc15", opacity: 0.6 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "bubble" } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center space-y-6 sm:space-y-8"
      >
        {/* Floating 3D Avatar */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-40 h-40 sm:w-48 sm:h-48 bg-yellow-500 shadow-2xl rounded-full flex items-center justify-center border-4 border-gray-700 transform hover:rotate-12"
        >
          <span className="text-6xl sm:text-7xl font-extrabold text-white">🚀</span>
        </motion.div>

        {/* Greeting & Animated Name */}
        <h2 className="text-xl sm:text-2xl font-medium text-gray-300 drop-shadow-lg">
          {greeting}
        </h2>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-xl tracking-wide">
          <Typewriter
            options={{
              strings: [
                "Hey, I'm Saif Muhammad",
                "A Full-Stack Developer 🚀",
                "I Build Amazing Web Experiences",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* Live Clock with Neon Glow */}
        <div className="text-yellow-400 font-bold text-lg sm:text-xl bg-gray-900 px-6 py-3 rounded-lg shadow-lg border border-yellow-500 animate-pulse">
          {time.toLocaleTimeString()}
        </div>

        {/* CTA Buttons with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-yellow-400 text-black font-bold rounded-lg transition-transform transform hover:scale-110 hover:bg-orange-500 shadow-xl flex items-center gap-2"
          >
            View Projects <FaArrowRight className="text-lg" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg transition-transform transform hover:bg-yellow-400 hover:text-black hover:scale-110 shadow-xl"
          >
            Contact Me
          </a>
        </motion.div>

      {/* Social Media Icons with Hover Animations */}
<div className="flex space-x-6 mt-6">
{[
  { Icon: FaGithub, link: "https://github.com/Safey11" },
  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/safey-safo-87810b278" },
  { Icon: FaTwitter, link: "https://twitter.com/your-twitter-username" },
].map(({ Icon, link }, index) => (
  <motion.a
    key={index}
    whileHover={{ scale: 1.3, rotate: 10 }}
    className="text-gray-300 hover:text-yellow-400 text-3xl cursor-pointer"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon />
  </motion.a>
))}
</div>

      </motion.div>
    </section>
  );
}
