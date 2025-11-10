import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SpecialDishFullCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            className="relative overflow-hidden rounded-lg h-[200px] sm:h-[300px] md:h-[300px] lg:h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.img 
              src="https://www.eatingeurope.com/wp-content/uploads/2024/04/spaghetti-with-clams-1024x575.jpg" 
              alt="Spaghetti With Clams"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <motion.div 
              className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.122a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.122a1 1 0 00-1.175 0l-3.976 2.122c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.122c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg>
              Chef's Special
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="py-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm tracking-[0.1875rem] uppercase text-gray-500 font-sans mb-5"
            >
              Special Dish
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-normal mb-5 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Spaghetti With Clams
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-500 italic mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The Essence of Italian Coastal Cuisine
            </motion.p>
            
            <motion.div 
              className="w-20 h-0.5 bg-black my-5"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            ></motion.div>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.span 
                className="inline-block px-5 py-2 bg-gray-100 rounded-2xl text-sm mr-2.5 mb-2.5 cursor-pointer"
                whileHover={{ 
                  y: -5,
                  backgroundColor: "#f3f4f6",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Fresh Clams
              </motion.span>
              <motion.span 
                className="inline-block px-5 py-2 bg-gray-100 rounded-2xl text-sm mr-2.5 mb-2.5 cursor-pointer"
                whileHover={{ 
                  y: -5,
                  backgroundColor: "#f3f4f6",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Spaghetti
              </motion.span>
              <motion.span 
                className="inline-block px-5 py-2 bg-gray-100 rounded-2xl text-sm mr-2.5 mb-2.5 cursor-pointer"
                whileHover={{ 
                  y: -5,
                  backgroundColor: "#f3f4f6",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Garlic
              </motion.span>
              <motion.span 
                className="inline-block px-5 py-2 bg-gray-100 rounded-2xl text-sm mr-2.5 mb-2.5 cursor-pointer"
                whileHover={{ 
                  y: -5,
                  backgroundColor: "#f3f4f6",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                White Wine
              </motion.span>
              <motion.span 
                className="inline-block px-5 py-2 bg-gray-100 rounded-2xl text-sm mr-2.5 mb-2.5 cursor-pointer"
                whileHover={{ 
                  y: -5,
                  backgroundColor: "#f3f4f6",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Parsley
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.h2 
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                The Story
              </motion.h2>
              <motion.p 
                className="text-base md:text-lg leading-relaxed text-gray-700 text-justify"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Our Spaghetti with Clams is a celebration of Italy's coastal bounty. Fresh clams are carefully selected and purged to perfection, then gently steamed in a delicate sauce of white wine, garlic, and extra virgin olive oil. Tossed with al dente spaghetti and finished with a generous sprinkle of fresh parsley, this dish captures the essence of Mediterranean simplicity. Each bite delivers the briny sweetness of the sea, balanced by the subtle richness of garlic and the bright acidity of white wine - a true testament to Italian coastal cuisine.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDishFullCard;