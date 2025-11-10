// File: d:/Freelancer Projects/FrontendProjects/Resturant Showcase Website/Frontend/src/components/Hero.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  // Curated high-quality Italian restaurant images with proper aspect ratios
  const backgroundImages = [
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' // Replaced broken image
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Enhanced smooth scroll function with proper offset calculation - SAME AS MAIN HEADER
  const smoothScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Preload next image to reduce latency
  useEffect(() => {
    const preloadImage = (index) => {
      const img = new Image();
      img.src = backgroundImages[index];
      img.onload = () => setIsImageLoaded(true);
    };

    preloadImage(currentImageIndex);
    
    // Rotate background images every 4 seconds for smoother experience
    const interval = setInterval(() => {
      setIsImageLoaded(false);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex, backgroundImages.length]);

  return (
    <section id="hero-section" className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay and sliding images */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-r from-[#2E8B57]/20 to-[#FF8C00]/20 w-full h-full absolute z-10"></div>
        
        <AnimatePresence mode="sync">
          <motion.div 
            key={`${currentImageIndex}-${isImageLoaded}`}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              opacity: isImageLoaded ? 0.3 : 0
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isImageLoaded ? 0.3 : 0, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 cursive-font"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#2E8B57] to-[#FF8C00] bg-clip-text text-transparent">
              Bella Cucina
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl text-[#2C3E50] mb-6 md:mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Authentic Italian Cuisine
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-[#2C3E50]/90 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the rich flavors of Italy with our handcrafted dishes made from 
            locally sourced ingredients and traditional recipes passed down through generations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#menu-section');
              }}
              className="bg-[#2E8B57] hover:bg-[#3CB371] text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 text-xl md:text-2xl shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Menu
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('#contact');
              }}
              className="bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 text-xl md:text-2xl shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Us
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 md:h-10 md:w-10 text-[#2E8B57]" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          whileHover={{ scale: 1.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default Hero;