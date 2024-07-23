import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/footer';
import './App.css'
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:index" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
