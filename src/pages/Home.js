import React from 'react';
import HeroSection from '../components/heroSection';
import ProjectsSection from '../components/projectsSection';
import ControlSection from '../components/controlSection';
import JournalSection from '../components/journalSection';
import AboutMeSection from '../components/aboutMeSection';

const Home = () =>{
    return (
      <div>
        <HeroSection />
        <ControlSection />
        <JournalSection />
        <ProjectsSection />
        <AboutMeSection />
      </div>
    );
  }
  
  export default Home;