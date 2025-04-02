'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 
          className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-xs font-semibold tracking-widest uppercase"
          data-aos="fade-up"
        >
          About Me
        </h2>
        
        <h3 
          className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white"
          data-aos="fade-up" data-aos-delay="200"
        >
          Web Developer & Digital Creator
        </h3>
        
        <p 
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          data-aos="fade-up" data-aos-delay="400"
        >
          I specialize in building interactive and user-friendly websites. My goal is to help businesses establish a strong online presence through modern and scalable web solutions.
        </p>
      </div>
      
      {/* Services Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="relative flex items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            data-aos="fade-up" data-aos-delay={index * 200}
          >
            <div className="h-14 w-14 rounded-md bg-indigo-600 flex items-center justify-center">
              <Image src={service.icon} width={32} height={32} alt={service.title} />
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive, modern, and scalable websites with cutting-edge technologies.',
    icon: 'https://www.svgrepo.com/show/503163/api-settings.svg'
  },
  {
    title: 'App Development',
    description: 'Building high-performance web and mobile applications tailored to your needs.',
    icon: 'https://www.svgrepo.com/show/503138/webpack.svg'
  },
  {
    title: 'Website & Application Building',
    description: 'Developing robust websites and applications for businesses and startups.',
    icon: 'https://www.svgrepo.com/show/511771/dashboard-671.svg'
  },
  {
    title: 'Software Development',
    description: 'Crafting scalable and secure software solutions for various industries.',
    icon: 'https://www.svgrepo.com/show/76267/free-commercial-label.svg'
  }
];
