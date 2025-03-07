import React from 'react'
import Hero from './components/hero'
import AboutSection from './components/aboutSection'
import ProjectsSection from './components/projectsSection'
import SkillsSection from './components/skillsSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'
import Footer from './components/footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page