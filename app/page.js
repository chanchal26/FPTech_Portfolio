import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
    </>
  );
};

export default page;