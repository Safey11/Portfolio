"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = {
  "consultancy-website": {
    title: "Consultancy Website",
    description:
      "A professional consultancy website built with Next.js and Tailwind CSS.",
    image: "/web.jpg",
    details: "Features expert consultancy services with a modern UI.",
    link: "https://grbuu.com/",
  },
  "solar-website": {
    title: "Solar Website",
    description:
      "A solar energy company website designed for optimal user experience.",
    image: "/solar.jpg",
    details: "Promotes renewable energy solutions with interactive features.",
    link: "https://isafey.tech/",
  },
  "movie-website": {
    title: "Movie Website",
    description:
      "A feature-rich movie streaming platform with search and filter options.",
    image: "/movie.jpg",
    details: "Built with Next.js, Firebase, and Tailwind CSS.",
    link: "https://66132acd26d115170e07c9ca--eloquent-malabi-f5de87.netlify.app/",
  },
  "business": {
    title: "Software house website",
    description: "A sleek clock application using React and Tailwind CSS.",
    image: "/BS.jpg",
    details: "Displays time with a beautiful UI.",
    link: "https://smit-v3-giiy.vercel.app/",
  },
};


export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects[slug];
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!project)
    return (
      <div className="text-white text-center py-20 text-xl sm:text-2xl font-semibold">
        Project not found
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12">
      {/* Go Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 md:top-6 md:left-6 bg-gray-800 hover:bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-lg shadow-md transition duration-300 text-sm sm:text-base"
        data-aos="fade-right"
      >
        ⬅ Go Back
      </button>

      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 sm:mb-6 text-center"
        data-aos="fade-down"
      >
        {project.title}
      </h1>

      {/* Image */}
      <div
        className="w-full max-w-[95%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] overflow-hidden rounded-xl shadow-2xl"
        data-aos="zoom-in"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Description */}
      <p
        className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl text-center leading-relaxed px-4"
        data-aos="fade-up"
      >
        {project.description}
      </p>

      {/* Details */}
      <p
        className="mt-3 sm:mt-4 text-gray-400 bg-gray-900 bg-opacity-30 px-3 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md border border-gray-700 max-w-2xl text-center text-sm sm:text-base"
        data-aos="fade-up"
      >
        {project.details}
      </p>

      {/* View Project Button */}
      {/* View Project Button */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 sm:mt-6 bg-blue-600 hover:bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg text-sm sm:text-base md:text-lg font-medium transition duration-300"
        data-aos="fade-up"
      >
        🚀 View Project
      </a>

    </div>
  );
}
