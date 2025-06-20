import React from 'react';
import NavbarComponent from './components/Navbar/NavbarComponent';
import HeroSection from './components/HeroSection/HeroSection';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Education from './components/Education/Education';
import ContactFooter from './components/ContactFooter/ContactFooter';
import './assets/css/global.css';

function App() {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Education/>
      <ContactFooter/>
    </>
  );
}

export default App;
