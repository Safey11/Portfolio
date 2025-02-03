"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#1a1a1a] text-white text-center overflow-hidden"
    >
      {/* Floating Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_0%,_rgba(0,0,0,0)_80%)] pointer-events-none"></div>

      <h2
        className="text-5xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-[#FF6B6B] via-[#FFA07A] to-[#FFD700] text-transparent bg-clip-text"
        data-aos="fade-down" // AOS animation
      >
        About Me
      </h2>

      <div className="max-w-4xl mx-auto">
        <div
          className="relative bg-[#1e1e1e]/50 backdrop-blur-xl border border-[#ffffff0d] p-10 rounded-2xl shadow-xl"
          data-aos="fade-up" // AOS animation
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_80%)] pointer-events-none"></div>

          <p
            className="text-lg text-[#eaeaea] leading-relaxed"
            data-aos="fade-right" // AOS animation
          >
            I'm a passionate <span className="text-[#FF6B6B] font-semibold">Full-Stack Developer</span>,
            specializing in <span className="text-[#FFA07A] font-semibold">React.js, Next.js, and Node.js</span>.
            I craft <strong>fast, scalable, and interactive</strong> solutions that blend performance with sleek UI/UX.
          </p>
          <p
            className="text-lg text-[#c0c0c0] mt-6"
            data-aos="fade-left" // AOS animation
          >
            My focus is on building <strong>cutting-edge web experiences</strong> with <strong>modern aesthetics</strong>
            while ensuring seamless interactions and intuitive navigation.
          </p>
        </div>
      </div>
    </section>
  );
}