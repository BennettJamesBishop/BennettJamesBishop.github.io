import React from 'react';
import './App.css';
import Header from './components/header';
import HeroSection from './components/heroSection';
import ProjectsSection from './components/projectsSection';
import AboutMeSection from './components/aboutMeSection';
import Footer from './components/footer';
function App() {
  return (
    <div>
        <Header />
        <HeroSection />
        <ProjectsSection />
        <AboutMeSection />
        <Footer />
    </div>
  );
}

export default App;
