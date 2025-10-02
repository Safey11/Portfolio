'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { FaLaptopCode, FaMobileAlt, FaRocket, FaShieldAlt } from 'react-icons/fa';

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Circle Image */}
        <div className="flex justify-center lg:justify-start" data-aos="zoom-in">
          <div className="relative w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center 
                          bg-gradient-to-tr from-indigo-500 via-pink-500 to-purple-500 
                          rounded-full border-4 border-gray-800 shadow-2xl overflow-hidden">
            <Image 
              src="/safey.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right: About Content */}
        <div className="text-center lg:text-left space-y-6" data-aos="fade-left">
          <h2 className="text-sm font-semibold tracking-widest uppercase 
                         bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Who Am I?
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold leading-snug">
            A Developer who <span className="text-indigo-400">builds ideas</span> into reality
          </h3>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I’m not just a coder – I’m a <span className="text-pink-400 font-semibold">problem solver</span>.  
            From building smooth web apps to crafting engaging mobile experiences, 
            my journey is about <span className="text-indigo-400 font-semibold">creating value</span> that inspires and connects.  
          </p>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
            {highlights.map((h, i) => (
              <div 
                key={i} 
                className="flex items-center space-x-4 p-5 rounded-xl 
                           bg-gray-800/60 backdrop-blur-lg border border-gray-700 
                           hover:border-indigo-500 hover:scale-105 transition-transform duration-300 shadow-md"
                data-aos="fade-up" data-aos-delay={i * 200}
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-lg 
                                bg-gradient-to-tr from-indigo-500 to-pink-500 text-white text-2xl">
                  {h.icon}
                </div>
                <span className="font-medium text-lg">{h.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div 
        className="relative mt-20 max-w-3xl mx-auto text-center text-lg md:text-xl italic text-gray-300 px-4"
        data-aos="fade-up" data-aos-delay="800"
      >
        “Code is not just about syntax – it’s about creating 
        <span className="text-indigo-400"> experiences </span> that people remember.”
      </div>
    </section>
  );
}

const highlights = [
  { title: '⚡ Web Development', icon: <FaLaptopCode /> },
  { title: '📱 App Development', icon: <FaMobileAlt /> },
  { title: '🚀 Scalable Solutions', icon: <FaRocket /> },
  { title: '🛡️ Secure Software', icon: <FaShieldAlt /> },
];
