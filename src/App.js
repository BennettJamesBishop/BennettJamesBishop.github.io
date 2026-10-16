import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Journal from './pages/Journal';
import SafetyUpdate from './pages/SafetyUpdate';
import ResearchProposal from './pages/ResearchProposal';
import Projects from './pages/Projects';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return ( 
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research/contextual-discontinuity" element={<ResearchProposal />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/updates/october-2026" element={<SafetyUpdate />} />
          <Route path="/updates/september-2026" element={<Navigate to="/updates/october-2026" replace />} />
          <Route path="/projects/:slug" element={<Projects />} />
        </Routes>
        <ScrollToTop />
        <Footer />
    </>
  );
};

export default App;
