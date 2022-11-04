import React from "react";
import './App.css';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import OurService from './Components/OurService';
import WhyUs from './Components/WhyUs';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import Faq from './Components/Faq';

function App() {
  return (
    <>
    <Navigation />
    <Hero />
    <OurService />
    <WhyUs />
    <Testimonial />
    <Faq />
    <Footer />
    </>
  );
}

export default App;
