import React from 'react';
import Navber from './Components/Navber';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = props => {
  return (
    <div>
      <Navber />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;