"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#121212] to-black text-white py-12">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-6">
        
        {/* Motivational Quote */}
        <motion.h2
          className="text-xl sm:text-2xl font-semibold italic text-gray-300 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          "Dream big, code harder, and make it happen." 🚀
        </motion.h2>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 text-2xl transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="mailto:your-email@example.com"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Let's Build Something Amazing! 🚀
        </motion.a>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Saif. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Social Links Data
const socialLinks = [
  { href: "https://github.com/Safey11", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/saif-muhammad-87810b278", icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:safeysafo@gmail.com", icon: FaEnvelope, label: "Email" },
];
