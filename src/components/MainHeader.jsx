import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { 
      name: 'About', 
      path: '#about-section',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Chefs', path: '#our-chefs' },
        { name: 'Our Story', path: '#our-story' }
      ]
    },
    { name: 'Menu', path: '#menu-section' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Contact', path: '#contact' }
  ];


  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

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
        // Close any open menus/dropdowns when header hides
        setIsMenuOpen(false);
        setIsAboutDropdownOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsAboutDropdownOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const handleOutsideClick = (event) => {
    // Close menu if click is outside the header and menu is open
    const header = document.querySelector('header');
    if (isMenuOpen && header && !header.contains(event.target)) {
      closeMenu();
    }
  };

  // Add outside click listener
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Enhanced smooth scroll function - NO OFFSET for full screen sections
  const smoothScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close menu on mobile after navigation
      if (window.innerWidth < 1024) {
        setTimeout(() => {
          closeMenu();
        }, 300);
      }
    } else {
      closeMenu();
    }
  };

  // Toggle dropdowns in mobile view
  const toggleMobileDropdown = (dropdownType) => {
    if (dropdownType === 'about') {
      setIsAboutDropdownOpen(!isAboutDropdownOpen);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4">
      <div className="container mx-auto px-4">
        <motion.div 
          className="w-full bg-white/85 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl"
          initial={{ y: -100 }}
          animate={{ y: isVisible ? 0 : -100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-center justify-between h-20 md:h-24 px-6 md:px-8">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo('#hero-section');
                }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text cursive-font no-underline"
              >
                Bella Cucina
              </button>
            </motion.div>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden text-[#2C3E50] focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </motion.svg>
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="flex items-center"
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          smoothScrollTo(item.path);
                        }}
                        className="text-[#2C3E50] hover:text-[#2E8B57] font-bold transition-colors relative group no-underline py-4 px-5 text-xl"
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#2E8B57] transition-all duration-300 group-hover:w-full"></span>
                      </button>
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 ml-2 text-[#2C3E50]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ rotate: isAboutDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                      
                      {/* About Dropdown Menu */}
                      <AnimatePresence>
                        {isAboutDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/60 overflow-hidden"
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <button
                                key={dropdownItem.name}
                                onClick={(e) => {
                                  e.preventDefault();
                                  smoothScrollTo(dropdownItem.path);
                                }}
                                className="block w-full text-left px-6 py-4 text-[#2C3E50] hover:bg-white/60 hover:text-[#2E8B57] transition-colors no-underline text-lg font-medium"
                              >
                                {dropdownItem.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          smoothScrollTo(item.path);
                        }}
                        className="text-[#2C3E50] hover:text-[#2E8B57] font-bold transition-colors relative group no-underline py-4 px-5 text-xl"
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#2E8B57] transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </motion.div>
                  )}
                </div>
              ))}
              
            </nav>
          </div>
          
          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/60 mt-2 mx-4 z-40"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="py-4 px-6">
                  {navItems.map((item) => (
                    <div key={item.name} className="mb-2">
                      {item.hasDropdown ? (
                        <div>
                          <button
                            className="flex justify-between items-center w-full py-3 text-left text-[#2C3E50] hover:text-[#2E8B57] font-bold text-xl"
                            onClick={() => toggleMobileDropdown('about')}
                          >
                            <span>{item.name}</span>
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              animate={{ rotate: isAboutDropdownOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                          </button>
                          
                          <AnimatePresence>
                            {isAboutDropdownOpen && (
                              <motion.div
                                className="ml-4 mt-2 space-y-2 overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {item.dropdownItems.map((dropdownItem) => (
                                  <button
                                    key={dropdownItem.name}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      smoothScrollTo(dropdownItem.path);
                                    }}
                                    className="block w-full text-left py-2 text-[#2C3E50] hover:text-[#2E8B57] text-lg"
                                  >
                                    {dropdownItem.name}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo(item.path);
                          }}
                          className="block w-full text-left py-3 text-[#2C3E50] hover:text-[#2E8B57] font-bold text-xl"
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}
                  
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
};

export default MainHeader;