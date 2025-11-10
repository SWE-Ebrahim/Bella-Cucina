// File: d:/Freelancer Projects/FrontendProjects/Resturant Showcase Website/Frontend/src/components/InnerHeader.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const InnerHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll events to show/hide header based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or when at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down and past a certain threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleBackClick = () => {
    // Navigate to the main page using window.location
    window.location.href = '/';
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    // Scroll to top when logo is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 md:py-3 transition-transform duration-300 ease-in-out"
            style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
      <div className="container mx-auto px-3">
        <motion.div 
          className="w-full bg-white/85 backdrop-blur-xl border border-white/40 rounded-xl md:rounded-2xl shadow-xl"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
            {/* Back Button */}
            <motion.button
              onClick={handleBackClick}
              className="flex items-center text-[#2C3E50] hover:text-[#2E8B57] transition-colors duration-300"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="h-5 w-5 mr-1.5 md:mr-2 md:h-6 md:w-6" />
              <span className="font-medium text-sm md:text-base">Back</span>
            </motion.button>

            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button 
                onClick={handleLogoClick}
                className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text cursive-font no-underline"
              >
                Bella Cucina
              </button>
            </motion.div>

            {/* Empty div for spacing balance */}
            <div className="w-12 md:w-16"></div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default InnerHeader;