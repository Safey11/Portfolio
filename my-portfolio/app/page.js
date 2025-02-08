import React from 'react'
import Hero from './components/hero'
import AboutSection from './components/aboutSection'
import ProjectsSection from './components/projectsSection'
import SkillsSection from './components/skillsSection'
import ContactSection from './components/ContactSection'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}

export default page