"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WelcomeScreen({ setShowWelcome }) {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState("");
  const welcomeMessage = "Welcome to my Portfolio";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => {
        if (index < welcomeMessage.length) {
          return welcomeMessage.slice(0, index + 1);
        }
        clearInterval(interval);
        return prev;
      });
      index++;
    }, 100);

    const timeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setShowWelcome(false), 500); // Match fade-out duration
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [setShowWelcome]);

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 blur-3xl opacity-50"
      ></motion.div>

      {/* Welcome Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text text-center ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className={`mt-4 text-lg md:text-2xl text-gray-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        Get ready for an amazing interactive experience.
      </motion.p>
    </div>
  );
}
    