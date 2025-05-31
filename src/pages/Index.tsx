
import React from 'react';
import Header from '../components/Header';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Interests from '../components/Interests';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Interests />
      <Footer />
    </div>
  );
};

export default Index;
