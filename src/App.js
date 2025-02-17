import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css'
function App() {
  return ( 
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:index" element={<Projects />} />
        </Routes>
        <ScrollToTop />
        <Footer />
    </>
  );
};

export default App;
