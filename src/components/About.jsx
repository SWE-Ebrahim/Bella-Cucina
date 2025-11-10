import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import images at the top
import restaurantJourneyImg from '../assets/images/restaurentJourney.png';
import aboutImg from '../assets/images/About.jpeg';
import chef1Img from '../assets/images/chef1.jpeg';
import chef2Img from '../assets/images/chef2.png';
import chef3Img from '../assets/images/chef3.jpeg';

const About = () => {
  const chefs = [
    { 
      id: 1, 
      image: chef1Img, 
      name: 'Giovanni Rossi', 
      specialty: 'Pasta & Risotto',
      description: 'With over 15 years of experience in authentic Italian cooking, Chef Giovanni brings passion and creativity to every dish prepared.'
    },
    { 
      id: 2, 
      image: chef2Img, 
      name: 'Marco Bianchi', 
      specialty: 'Seafood & Grills',
      description: 'With over 15 years of experience in authentic Italian cooking, Chef Marco brings passion and creativity to every dish prepared.'
    },
    { 
      id: 3, 
      image: chef3Img, 
      name: 'Sofia Romano', 
      specialty: 'Desserts & Pastry',
      description: 'With over 15 years of experience in authentic Italian cooking, Chef Sofia brings passion and creativity to every dish prepared.'
    }
  ];

  const [activeChef, setActiveChef] = useState(0);
  const [activeStory, setActiveStory] = useState(0);

  // Auto-rotate chefs for added dynamism
  useEffect(() => {
    const chefInterval = setInterval(() => {
      setActiveChef(prev => (prev + 1) % chefs.length);
    }, 5000);
    
    return () => clearInterval(chefInterval);
  }, [chefs.length]);

  // Auto-rotate story highlights
  useEffect(() => {
    const storyInterval = setInterval(() => {
      setActiveStory(prev => (prev + 1) % 2);
    }, 4000);
    
    return () => clearInterval(storyInterval);
  }, []);

  return (
    <section id="about-section" className="min-h-screen flex items-center py-20 md:py-28 bg-[#F5FFF5]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 cursive-font gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About us
          </motion.h2>
          <motion.p 
            className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover the passion and tradition behind Bella Cucina
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500">
              <div className="bg-gradient-to-r from-[#2E8B57]/20 to-[#FF8C00]/20 w-full h-full absolute inset-0 z-10"></div>
              <img 
                src={restaurantJourneyImg} 
                alt="Bella Cucina restaurant terrace with ocean view at sunset" 
                className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/70 to-transparent z-20"></div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]"
              animate={{ 
                textShadow: activeStory === 0 
                  ? ["0px 0px 0px rgba(46,139,87,0)", "0px 0px 8px rgba(46,139,87,0.3)", "0px 0px 0px rgba(46,139,87,0)"]
                  : ["0px 0px 0px rgba(255,140,0,0)", "0px 0px 8px rgba(255,140,0,0.3)", "0px 0px 0px rgba(255,140,0,0)"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Authentic Italian Cuisine Since 1995
            </motion.h3>
            <motion.p 
              className="text-lg text-[#2C3E50]/90 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeStory}
            >
              {activeStory === 0 
                ? "Founded with a passion for genuine Italian flavors, Bella Cucina has been serving the community for over two decades. Our journey began in a small kitchen with traditional family recipes passed down through generations of Italian artisans."
                : "We source the finest ingredients locally and import select specialties from Italy to ensure every dish maintains the authentic taste our guests have come to love. Our chefs combine time-honored techniques with modern innovation to create memorable dining experiences."}
            </motion.p>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.div 
                className="flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#2E8B57]/10 flex items-center justify-center mr-3 group-hover:bg-[#2E8B57] transition-colors duration-300">
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-[#2E8B57] group-hover:text-white transition-colors duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                </div>
                <span className="text-[#2C3E50] font-medium">Fresh Ingredients</span>
              </motion.div>
              <motion.div 
                className="flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#2E8B57]/10 flex items-center justify-center mr-3 group-hover:bg-[#2E8B57] transition-colors duration-300">
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-[#2E8B57] group-hover:text-white transition-colors duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                </div>
                <span className="text-[#2C3E50] font-medium">Traditional Recipes</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div id="our-chefs" className="mt-28">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 cursive-font gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Chefs
            </motion.h2>
            <motion.p 
              className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Meet the culinary artists behind your favorite dishes
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.id}
                className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/60 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="relative">
                  <div className="bg-gradient-to-r from-[#2E8B57]/20 to-[#FF8C00]/20 w-full h-full absolute inset-0 z-10"></div>
                  <motion.img 
                    src={chef.image} 
                    alt={`Chef ${chef.name}`}
                    className="w-full h-64 object-cover"
                    animate={{ 
                      scale: activeChef === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <motion.h3 
                    className="text-2xl font-bold text-[#2C3E50] mb-2"
                    animate={{ 
                      color: activeChef === index ? "#2E8B57" : "#2C3E50"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {chef.name}
                  </motion.h3>
                  <motion.p 
                    className="text-[#2E8B57] font-medium mb-3"
                    animate={{ 
                      // Fixed: Using numeric values for fontWeight
                      fontWeight: activeChef === index ? 700 : 500
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Specialty: {chef.specialty}
                  </motion.p>
                  <p className="text-[#2C3E50]/80">
                    {chef.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div id="our-story" className="mt-28">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 cursive-font gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </motion.h2>
            <motion.p 
              className="text-xl text-[#2C3E50]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A journey through tradition, passion, and culinary excellence
            </motion.p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50]"
                animate={{ 
                  textShadow: activeStory === 0 
                    ? ["0px 0px 0px rgba(46,139,87,0)", "0px 0px 8px rgba(46,139,87,0.3)", "0px 0px 0px rgba(46,139,87,0)"]
                    : ["0px 0px 0px rgba(255,140,0,0)", "0px 0px 8px rgba(255,140,0,0.3)", "0px 0px 0px rgba(255,140,0,0)"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                From Humble Beginnings to Culinary Excellence
              </motion.h3>
              <motion.p 
                className="text-lg text-[#2C3E50]/90 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={`story-${activeStory}`}
              >
                {activeStory === 0 
                  ? "Bella Cucina was born from a love of authentic Italian cuisine and a desire to share that passion with our community. What started as a small family restaurant has grown into a beloved local institution."
                  : "Our founder, Maria Rossi, brought her grandmother's recipes from Tuscany and combined them with locally sourced ingredients to create dishes that honor tradition while embracing innovation. Today, we continue that legacy with the same commitment to quality and authenticity."}
              </motion.p>
              <div className="flex flex-wrap gap-4 mt-8">
                <motion.div 
                  className="flex items-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#2E8B57]/10 flex items-center justify-center mr-3 group-hover:bg-[#2E8B57] transition-colors duration-300">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-[#2E8B57] group-hover:text-white transition-colors duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  </div>
                  <span className="text-[#2C3E50] font-medium">Family Recipes</span>
                </motion.div>
                <motion.div 
                  className="flex items-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#2E8B57]/10 flex items-center justify-center mr-3 group-hover:bg-[#2E8B57] transition-colors duration-300">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-[#2E8B57] group-hover:text-white transition-colors duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  </div>
                  <span className="text-[#2C3E50] font-medium">Local Sourcing</span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500">
                <div className="bg-gradient-to-r from-[#2E8B57]/20 to-[#FF8C00]/20 w-full h-full absolute inset-0 z-10"></div>
                <img 
                  src={aboutImg} 
                  alt="Bella Cucina story"
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/70 to-transparent z-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;