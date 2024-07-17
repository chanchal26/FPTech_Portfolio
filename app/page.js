import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Project from './components/Project';
import Blog from './components/Blog';

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Services />
      <Team />
      <Project />
      <Blog />
      <Contact />
    </>
  );
};

export default page;