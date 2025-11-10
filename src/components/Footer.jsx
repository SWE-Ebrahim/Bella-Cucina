// File: d:/Freelancer Projects/FrontendProjects/Resturant Showcase Website/Frontend/src/components/Footer.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Main navigation items (without sub-items)
  const navItems = [
    { name: 'About', path: '#about-section' },
    { name: 'Menu', path: '#menu-section' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Contact', path: '#contact' }
  ];

  // Policy links
  const policyLinks = [
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  const currentYear = new Date().getFullYear();

  // Smooth scroll function
  const smoothScrollTo = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // Adjust for header height

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation clicks
  const handleNavClick = (e, path) => {
    e.preventDefault();
    
    // For internal anchors, use smooth scroll
    if (path.startsWith('#')) {
      smoothScrollTo(path);
    } 
    // For other links, use our custom navigation
    else {
      // Dispatch a custom event for navigation
      const navigateEvent = new CustomEvent('navigate', {
        detail: { path }
      });
      window.dispatchEvent(navigateEvent);
      
      // Scroll to top for page navigation
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-[#F5FFF5] text-[#2C3E50] py-16 px-6 sm:px-8 lg:px-12 border-t border-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text cursive-font">Bella Cucina</h2>
            </motion.div>
            <p className="text-[#2C3E50]/80 text-lg mb-6 leading-relaxed">
              Experience the finest culinary delights in an elegant atmosphere. 
              Our expert chefs prepare exquisite dishes using the freshest ingredients.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 cursive-font text-[#2E8B57]">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <a 
                    href={item.path} 
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="text-[#2C3E50]/80 hover:text-[#2E8B57] transition-colors duration-300 text-lg"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Links */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 cursive-font text-[#2E8B57]">Legal</h3>
            <ul className="space-y-3">
              {policyLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.path} 
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="text-[#2C3E50]/80 hover:text-[#2E8B57] transition-colors duration-300 text-lg"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 cursive-font text-[#2E8B57]">Contact Us</h3>
            <ul className="space-y-4 text-[#2C3E50]/80 text-lg">
              <li>
                <p>123 Culinary Street, Foodville, FC 10001</p>
              </li>
              <li>
                <p>Phone: +1 (555) 123-4567</p>
              </li>
              <li>
                <p>Email: hello@bellacucina.com</p>
              </li>
              <li>
                <p>Hours: Mon-Fri 11am-10pm, Sat-Sun 10am-11pm</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/30 mt-16 pt-10 text-center text-[#2C3E50]/60">
          <p className="text-lg">&copy; {currentYear} Bella Cucina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;