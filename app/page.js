import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Services />
      <Team />
      <Contact />
    </>
  );
};

export default page;