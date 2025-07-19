import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        <Experience/>
        <Education />
        <Skills />
        <Projects />
        <Certifications/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
