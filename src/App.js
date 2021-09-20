import React from 'react'
import Footer from './footer/Footer';
import Home from './home/Home';
import NavSec from './home/NavSec';
import Registration from './registration/Registration';
import Services from './services/Services';

function App() {
  return (
    <>
      <NavSec />
      <Home />
      <Services />
      <Registration />
      <Footer />
    </>
  );
}

export default App;
