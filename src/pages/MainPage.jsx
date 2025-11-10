import React from 'react';
import MainHeader from '../components/MainHeader';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-[#F5FFF5]">
      <MainHeader />
      <Hero />
      <About/>
      <Menu/>
      <Gallery/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default MainPage;