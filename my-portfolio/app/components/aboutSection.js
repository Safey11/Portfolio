'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start" data-aos="zoom-in">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-purple-500 p-[6px] animate-spin-slow"></div>
            <div className="relative rounded-full overflow-hidden w-64 h-64 border-4 border-gray-800">
              <Image
                src="/me.png" // Replace with your portrait
                alt="Profile"
                width={400}
                height={400}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Right: Story */}
        <div className="text-center lg:text-left" data-aos="fade-left">
          <h2 className="text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            Who Am I?
          </h2>
          <h3 className="mt-4 text-4xl font-extrabold leading-snug">
            A Developer who <span className="text-indigo-400">builds ideas</span> into reality
          </h3>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            I’m not just a coder – I’m a <span className="text-pink-400 font-semibold">problem solver</span>.  
            From building smooth web apps to crafting engaging mobile experiences, 
            my journey is about <span className="text-indigo-400 font-semibold">creating value</span> that inspires and connects.  
          </p>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <div 
                key={i} 
                className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-gray-700 hover:border-indigo-500 transition"
                data-aos="fade-up" data-aos-delay={i * 200}
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500">
                  <Image src={h.icon} width={24} height={24} alt={h.title} />
                </div>
                <span className="font-medium">{h.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div 
        className="relative mt-20 max-w-3xl mx-auto text-center text-xl italic text-gray-300"
        data-aos="fade-up" data-aos-delay="800"
      >
        “Code is not just about syntax – it’s about creating 
        <span className="text-indigo-400"> experiences </span> that people remember.”
      </div>
    </section>
  );
}

const highlights = [
  {
    title: '⚡ Web Development',
    icon: 'https://www.svgrepo.com/show/503163/api-settings.svg',
  },
  {
    title: '📱 App Development',
    icon: 'https://www.svgrepo.com/show/503138/webpack.svg',
  },
  {
    title: '🚀 Scalable Solutions',
    icon: 'https://www.svgrepo.com/show/511771/dashboard-671.svg',
  },
  {
    title: '🛡️ Secure Software',
    icon: 'https://www.svgrepo.com/show/76267/free-commercial-label.svg',
  },
];
