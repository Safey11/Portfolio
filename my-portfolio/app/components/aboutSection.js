"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Smooth animation
      once: true, // Only animate once
    });
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:py-32 md:px-12 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1f1f1f] text-white text-center overflow-hidden"
    >
      {/* Floating Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_10%,_rgba(0,0,0,0)_90%)] pointer-events-none"></div>

      <h2
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-10 bg-gradient-to-r from-[#FF6B6B] via-[#FFA07A] to-[#FFD700] text-transparent bg-clip-text tracking-wide"
        data-aos="fade-down"
      >
        About Me
      </h2>

      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div
          className="relative bg-[#1e1e1e]/60 backdrop-blur-2xl border border-[#ffffff0f] p-6 sm:p-12 rounded-3xl shadow-xl"
          data-aos="fade-up"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_10%,_rgba(0,0,0,0)_85%)] pointer-events-none"></div>

          <p
            className="text-lg sm:text-xl text-[#eaeaea] leading-relaxed tracking-wide"
            data-aos="fade-right"
          >
            I'm a passionate{" "}
            <span className="text-[#FF6B6B] font-semibold">Full-Stack Developer</span>,
            specializing in{" "}
            <span className="text-[#FFA07A] font-semibold">React.js, Next.js, and Node.js</span>.
            I craft <strong>fast, scalable, and interactive</strong> solutions that blend performance with sleek UI/UX.
          </p>

          <p
            className="text-md sm:text-lg text-[#d0d0d0] mt-6 sm:mt-8"
            data-aos="fade-left"
          >
            My focus is on building <strong>cutting-edge web experiences</strong> with
            <strong> modern aesthetics</strong>, ensuring seamless interactions and intuitive navigation.
            I love innovating with the latest technologies to create immersive digital environments.
          </p>
        </div>
      </div>
    </section>
  );
}
