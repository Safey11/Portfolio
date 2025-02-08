"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400"
        >
          MyPortfolio
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-base sm:text-lg text-gray-300">
          <Link to="about" smooth={true} duration={500} className="hover:text-yellow-400 transition cursor-pointer">About</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-yellow-400 transition cursor-pointer">Projects</Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-yellow-400 transition cursor-pointer">Skills</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-yellow-400 transition cursor-pointer">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 text-xl sm:text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-black/95 text-gray-300 text-center py-5 space-y-4"
        >
          <Link to="about" smooth={true} duration={500} className="block py-2 hover:text-yellow-400 transition cursor-pointer" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="projects" smooth={true} duration={500} className="block py-2 hover:text-yellow-400 transition cursor-pointer" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="skills" smooth={true} duration={500} className="block py-2 hover:text-yellow-400 transition cursor-pointer" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="contact" smooth={true} duration={500} className="block py-2 hover:text-yellow-400 transition cursor-pointer" onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </nav>
  );
}
