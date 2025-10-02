"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser"; // ✅ Correct import

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const titleRef = useRef(null);

useEffect(() => {
  const hasAnimated = sessionStorage.getItem("contact-animated");

  if (!hasAnimated) {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 80%" },
      }
    );

    // ✅ Mark animation as played
    sessionStorage.setItem("contact-animated", "true");
  }

  // ✅ Initialize EmailJS once
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
}, []);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("❌ Please fill in all fields.");
      return;
    }

    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // ✅ Correct variable
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // ✅ Correct variable
        formRef.current, // ✅ Form reference
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // ✅ Correct public key
      );

      if (response.status === 200) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        gsap.to(buttonRef.current, {
          scale: 1.1,
          duration: 0.3,
          ease: "power1.out",
          yoyo: true,
          repeat: 1,
        });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("❌ Failed to send message. Please try again.");
    }

    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-[#121212] text-white text-center">
      <h2
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10 bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text"
      >
        Contact Me
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-[#1a1a1a] p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 mb-3 sm:mb-4 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 mb-3 sm:mb-4 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 sm:p-3 mb-3 sm:mb-4 bg-gray-900 text-white rounded-md focus:ring-2 focus:ring-blue-500"
          rows="4"
        ></textarea>
        <button
          ref={buttonRef}
          className="w-full py-2 sm:py-3 bg-blue-500 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
        {status && <p className="mt-3 sm:mt-4 text-sm text-green-400">{status}</p>}
      </form>
    </section>
  );
}
