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
import Blogs from './components/Blogs';

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
        <Blogs/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;