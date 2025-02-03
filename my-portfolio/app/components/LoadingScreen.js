"use client";
import { useState, useEffect } from "react";
import WelcomeScreen from "../components/welcomeScreen";
import { motion } from "framer-motion";

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowWelcome(false), 2000); // Hide welcome after 2s
    setTimeout(() => setLoading(false), 3500); // Hide loader after 3.5s
  }, []);

  if (showWelcome) return <WelcomeScreen />;

  if (loading)
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#121212] text-white">
        <motion.div
          className="w-16 h-16 border-4 border-[#f3b52e] border-t-transparent rounded-full animate-spin shadow-lg shadow-[#f3b52e]/50"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <p className="mt-4 text-lg font-semibold text-gray-300 tracking-wider">
          Loading, please wait...
        </p>
      </div>
    );

  return children;
}
