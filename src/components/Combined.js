import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton/WhatsAppButton';
// import Map from './Map';
import HeroSection from './HeroSection';
// import Map from './Map';
const Combined = () => {
  return (
    <div>
      <Header />
      <WhatsAppButton />
      <HeroSection/>
      {/* <Map/> */}
      <Footer />
    </div>
  );
};

export default Combined;
