"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function WelcomeScreen({ setShowWelcome }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setShowWelcome(false), 1500);
    }, 7000);
    return () => clearTimeout(timeout);
  }, [setShowWelcome]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="h-screen w-full flex flex-col items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800"
        >
          {/* Animated Background Image */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 6, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/web.jpg')" }}
          ></motion.div>

          {/* Welcome Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center relative neon-text"
          >
            <Typewriter
              options={{
                strings: [
                  "Welcome to My Portfolio",
                  "Discover My Creative Universe",
                  "Bringing Ideas to Reality",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </motion.h1>

          {/* Skip Button */}
          <motion.button
            onClick={() => setShowWelcome(false)}
            className="mt-6 px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip Intro
          </motion.button>

          {/* Custom Styles */}
          <style jsx>{`
            .neon-text {
              text-shadow: 0 0 12px #ffffff, 0 0 24px #00ffff, 0 0 48px #ff00ff;
              animation: flicker 1.5s infinite alternate;
            }
            @keyframes flicker {
              0% { opacity: 1; text-shadow: 0 0 12px #ffffff, 0 0 24px #00ffff, 0 0 48px #ff00ff; }
              100% { opacity: 0.8; text-shadow: 0 0 10px #ffffff, 0 0 20px #00ffff, 0 0 40px #ff00ff; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
