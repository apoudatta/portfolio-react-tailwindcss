import React from 'react';
import Navber from './Components/Navbar/Navber';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';

const App = props => {
  return (
    <div>
      <Navber />
      <Hero />
      <About />
      <Services />
      <MyWork />
    </div>
  );
};

export default App;