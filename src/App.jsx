/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import About from './Components/About';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Features />
      <About />
      <Contact />
    </div>
  );
};

export default App;
