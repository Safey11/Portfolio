"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = {
  "ecommerce-website": {
    title: "E-Commerce Website",
    description:
      "A full-fledged e-commerce platform built with React, Next.js, and Firebase for authentication and database management.",
    image: "/web.jpg",
    details:
      "Features: User authentication, payment integration, product listings, and a user-friendly dashboard.",
    link: "https://iadnan.me/",
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description:
      "A beautifully designed personal portfolio created with Next.js and Tailwind CSS.",
    image: "/test.png",
    details:
      "Includes smooth animations, interactive sections, and a fully responsive modern design.",
    link: "https://isafey.tech/",
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
      <div className="text-white text-center py-20 text-2xl font-semibold">
        Project not found
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Go Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
        data-aos="fade-right"
      >
        ⬅ Go Back
      </button>

      {/* Title */}
      <h1
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-6"
        data-aos="fade-down"
      >
        {project.title}
      </h1>

      {/* Image */}
      <div className="overflow-hidden rounded-xl shadow-2xl" data-aos="zoom-in">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="rounded-lg"
        />
      </div>

      {/* Description */}
      <p
        className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl text-center leading-relaxed"
        data-aos="fade-up"
      >
        {project.description}
      </p>

      {/* Details */}
      <p
        className="mt-4 text-gray-400 bg-gray-900 bg-opacity-30 px-6 py-4 rounded-lg shadow-md border border-gray-700 max-w-2xl text-center"
        data-aos="fade-up"
      >
        {project.details}
      </p>

      {/* View Project Button (Scrolls to Section) */}
      <a
        href={project.link}
        className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-medium transition duration-300"
        data-aos="fade-up"
      >
        🚀 View Project
      </a>
    </div>
  );
}
