import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SpecialDishFullCard2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-green-50 py-24 md:py-0"
    >
      <div className="container mx-auto px-6 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <motion.img 
                src="https://www.yummymummykitchen.com/wp-content/uploads/2022/04/pasta-alla-norma-04.jpg" 
                alt="Pasta alla Norma"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2 }}
                whileHover={{ scale: 1.03 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="py-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-gray-800 mb-8 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Pasta alla Norma
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-600 italic mb-14 leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              A Celebration of Sicilian Flavors
            </motion.p>
            
            <motion.div 
              className="w-40 h-1.5 bg-gradient-to-r from-orange-400 to-green-500 my-12"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
            ></motion.div>
            
            <motion.div 
              className="mt-14"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-10"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                The Story
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed text-gray-700"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.6, duration: 1.0 }}
              >
                Named after the iconic opera "Norma" by Vincenzo Bellini, this beloved Sicilian pasta dish captures the essence of the island's culinary heritage. Born in Catania during the 19th century, Pasta alla Norma combines the region's most treasured ingredients: sun-ripened tomatoes, creamy ricotta, fragrant basil, and the prized eggplant of Sicily. Each element represents the fertile volcanic soil and Mediterranean climate that make this dish a true expression of Sicilian terroir.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDishFullCard2;