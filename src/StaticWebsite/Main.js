import React from 'react';
import Contact from './Contact';
import Footer from './Footer';
import InfoBox from './InfoBox';
import Landingpage from './Landingpage';
import Navbar from './Navbar';
import Cards from './Cards';

function Main() {
  return (
    <>
        <Navbar />
        <br />
        <Landingpage />
        <Cards />
        <InfoBox />
        <Contact />
        <Footer />

    </>
  )
}

export default Main