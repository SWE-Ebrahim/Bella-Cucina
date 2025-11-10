import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MenuSectionImage from '../assets/images/MenuSection.jpeg';

const Menu = () => {
  // Background images for menu section
 const backgroundImages = [
  MenuSectionImage,
  'https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Enhanced smooth scroll function with proper offset calculation
  const smoothScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Calculate header height dynamically to account for responsive changes
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation to menu page
  const navigateToMenuPage = (e) => {
    e.preventDefault();
    // Scroll to top immediately without animation
    window.scrollTo({ top: 0 });
    // Dispatch a custom event for navigation
    const navigateEvent = new CustomEvent('navigate', {
      detail: { path: '/menu' }
    });
    window.dispatchEvent(navigateEvent);
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
    <section id="menu-section" className="relative min-h-screen flex items-center justify-center pt-16 pb-24 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background with gradient overlay and sliding images */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-r from-[#2E8B57]/30 to-[#FF8C00]/30 w-full h-full absolute z-10"></div>
        
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
      
      {/* Content overlay */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with improved typography */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 cursive-font tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-[#2E8B57] via-[#3CB371] to-[#FF8C00] bg-clip-text text-transparent">
              Our Menu
            </span>
          </motion.h1>
          
          {/* Enhanced description with better content */}
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl text-[#2C3E50] mb-8 md:mb-10 font-medium leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Authentic Italian Flavors Crafted with Passion
          </motion.p>
          
          {/* Detailed description */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-[#2C3E50]/90 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Discover our carefully curated selection of traditional Italian dishes, each crafted with the finest ingredients and authentic recipes that capture the essence of Italy.
          </motion.p>
          
          {/* Call to action buttons with enhanced design */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            <motion.button 
              onClick={navigateToMenuPage}
              className="inline-block bg-[#2E8B57] hover:bg-[#3CB371] text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 text-xl md:text-2xl no-underline text-center shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Menu
            </motion.button>
            <motion.button 
              onClick={navigateToMenuPage}
              className="inline-block bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 text-xl md:text-2xl no-underline text-center shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Today's Specials
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 md:h-12 md:w-12 text-[#2E8B57] drop-shadow-lg"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          whileHover={{ scale: 1.3, rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
      
      {/* Additional decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-10 w-20 h-20 bg-[#FF8C00]/20 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 left-10 w-16 h-16 bg-[#2E8B57]/20 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          ease: "easeInOut"
        }}
      ></motion.div>
    </section>
  );
};

export default Menu;