import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Portfolio />
      <Experience />
      <Contact />
      
    </div>
  );
}

export default App;
