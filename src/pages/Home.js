import React from 'react';
import HeroSection from '../components/heroSection';
import ProjectsSection from '../components/projectsSection';
import AboutMeSection from '../components/aboutMeSection';

const Home = () =>{
    return (
      <div>
          <HeroSection />
          <ProjectsSection />
          <AboutMeSection />
      </div>
    );
  }
  
  export default Home;