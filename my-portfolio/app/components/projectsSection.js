"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import AOS from "aos";
import { useRouter } from "next/navigation";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Consultancy Website 🚀",
    description:
      "A professional consultancy website built with Next.js and Tailwind CSS.",
    image: "/web.jpg",
    slug: "consultancy-website",
  },
    {
    title: "Expense Tracker 💸",
    description:
      "A smart web app to track and manage daily expenses effortlessly with clear insights.",
    image: "/EXP.jpg",
    slug: "Expense-Tracker", // ← fix here
  },
  {
    title: "Solar Website ☀️",
    description:
      "A solar energy company website designed for optimal user experience.",
    image: "/solar.jpg",
    slug: "solar-website",
  },
  {
    title: "Movie Website 🎬",
    description:
      "A movie streaming platform with advanced filtering and search features.",
    image: "/movie.jpg",
    slug: "movie-website",
  },
  {
    title: "Software House Website 👨‍💼",
    description:
      "A sleek and functional software house website with modern UI/UX.",
    image: "/BS.jpg",
    slug: "business",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const router = useRouter();
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Cursor glow only for desktop
    if (window.innerWidth > 768) {
      const cursor = document.getElementById("custom-cursor");
      window.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    }
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        id="custom-cursor"
        className="hidden md:block fixed w-10 h-10 rounded-full border border-teal-400/50 bg-teal-400/20 pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ease-in-out"
      ></div>

      <section
        id="projects"
        ref={sectionRef}
        className="relative py-16 md:py-24 bg-[#0a0a0a] text-white overflow-hidden"
      >
        {/* Floating Gradient Blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-ping"></div>

        {/* Title */}
        <h2
          className="relative text-5xl md:text-6xl font-extrabold mb-16 text-center tracking-tight 
          bg-gradient-to-r from-teal-400 via-sky-500 to-blue-500 bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br 
              from-gray-900/60 to-gray-800/60 border border-gray-700 hover:border-teal-400 transition-all duration-500 hover:shadow-teal-500/30"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay (Desktop Hover) */}
                <div className="absolute inset-0 hidden md:flex bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <button
                    onClick={() => router.push(`/projects/${project.slug}`)}
                    className="mt-4 px-5 py-2 bg-gradient-to-r from-teal-500 to-sky-500 text-black font-semibold rounded-lg shadow hover:scale-105 transition"
                  >
                    View Project →
                  </button>
                </div>
              </div>

              {/* Mobile Content */}
              <div className="md:hidden p-5 bg-gray-900">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {expanded === index && (
                  <p className="mt-2 text-gray-400">{project.description}</p>
                )}
                <button
                  onClick={() =>
                    expanded === index
                      ? router.push(`/projects/${project.slug}`)
                      : setExpanded(index)
                  }
                  className="mt-4 w-full px-5 py-2 bg-gradient-to-r from-teal-500 to-sky-500 text-black font-semibold rounded-lg shadow hover:scale-105 transition"
                >
                  {expanded === index ? "Go to Project →" : "View Project"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
