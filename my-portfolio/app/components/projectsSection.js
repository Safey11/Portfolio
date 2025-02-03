"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import AOS from "aos";
import { useRouter } from "next/navigation";
import "aos/dist/aos.css";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A modern e-commerce platform with React, Next.js & Firebase.",
    image: "/web.jpg",
    slug: "ecommerce-website",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    image: "/test.png",
    slug: "portfolio-website",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto px-4 md:px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-[#1e1e1e] p-4 md:p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-70 border border-gray-700 transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl cursor-pointer"
            onClick={() => router.push(`/projects/${project.slug}`)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg transition-transform duration-500 hover:scale-110"
                style={{ width: "100%", height: "auto" }}
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
  );
}
