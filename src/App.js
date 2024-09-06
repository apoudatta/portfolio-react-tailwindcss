import React from 'react';
import Navber from './Components/Navbar/Navber';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';

const App = props => {
  return (
    <div>
      <Navber />
      <Hero />
      <About />
    </div>
  );
};

export default App;