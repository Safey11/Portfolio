"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import AOS from "aos";
import { useRouter } from "next/navigation";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Consultancy Website 🚀",
    description: "A professional consultancy website built with Next.js and Tailwind CSS.",
    image: "/web.jpg",
    slug: "consultancy-website",
  },
  {
    title: "Solar Website ☀️",
    description: "A solar energy company website designed for optimal user experience.",
    image: "/solar.jpg",
    slug: "solar-website",
  },
  {
    title: "Movie Website 🎬",
    description: "A movie streaming platform with advanced filtering and search features.",
    image: "/movie.jpg",
    slug: "movie-website", // Updated slug
  },
  {
    title: "Software house website 👨‍💼",
    description: "A sleek and functional clock application using React and Tailwind CSS.",
    image: "/BS.jpg",
    slug: "business", // Consistent slug
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1000,
      once: true,
    });

    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }

    // Custom Cursor Handling
    const cursor = document.getElementById("custom-cursor");
    let cursorX = 0;
    let cursorY = 0;

    const updateCursorPosition = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursor.style.left = `${cursorX - 15}px`;
      cursor.style.top = `${cursorY - 15}px`;
    };

    const addCursorEffect = () => {
      const cursorElements = document.querySelectorAll('.cursor-effect');

      cursorElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          cursor.classList.add('scale-150', 'opacity-100');
        });

        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('scale-150', 'opacity-100');
        });
      });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    addCursorEffect();

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <>
      <div
        id="custom-cursor"
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-sky-500 pointer-events-none transition-all ease-in-out duration-300 opacity-70 z-50 transform -translate-x-1/2 -translate-y-1/2"
      ></div>

      <section
    id="projects"
        ref={sectionRef}
        className="py-12 md:py-20 bg-[#121212] text-white text-center"
      >
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-8 md:mb-12 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text"
          data-aos="fade-down"
        >
          My Projects
        </h2>

        <div  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto px-4 md:px-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#1e1e1e] p-4 md:p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-70 border border-gray-700 cursor-pointer cursor-effect"
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  width={500}
                  height={300}
                  layout="responsive"
                  className="rounded-lg"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mt-4 md:mt-6">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2 md:mt-3 text-sm md:text-base">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
