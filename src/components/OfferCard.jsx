// File: d:/Freelancer Projects/FrontendProjects/Resturant Showcase Website/Frontend/src/components/OfferCard.jsx

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const OfferCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Sample offers data
  const offers = [
    {
      id: 1,
      title: "Happy Hour",
      description: "Enjoy 50% off selected wines and cocktails every weekday from 4pm to 6pm",
      period: "Monday - Friday, 4:00 PM - 6:00 PM"
    },
    {
      id: 2,
      title: "Family Feast",
      description: "Order any large pizza and get a free garlic bread and soft drinks for the family",
      period: "All Day, Every Day"
    },
    {
      id: 3,
      title: "Weekend Brunch",
      description: "Special brunch menu with bottomless mimosas and live acoustic music",
      period: "Saturday & Sunday, 10:00 AM - 2:00 PM"
    },
    {
      id: 4,
      title: "Date Night Special",
      description: "Romantic dinner for two with a bottle of premium wine and dessert",
      period: "Every Evening"
    }
  ];

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Pasta Making Workshop",
      description: "Learn to make authentic Italian pasta from our head chef",
      date: "Every Saturday, 2:00 PM"
    },
    {
      id: 2,
      title: "Wine Tasting Evening",
      description: "Experience premium Italian wines paired with artisanal cheeses",
      date: "First Friday of each month, 7:00 PM"
    },
    {
      id: 3,
      title: "Live Music Night",
      description: "Enjoy traditional Italian music with our special menu",
      date: "Every Thursday, 8:00 PM"
    },
    {
      id: 4,
      title: "Seasonal Festival",
      description: "Celebrating the harvest with special dishes and local wines",
      date: "Throughout the year"
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay to make background subtle */}
      <div className="absolute inset-0 bg-white opacity-90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 dancing-script gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Special Offers & Events
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover our exclusive promotions and upcoming events at Bella Cucina
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Offers Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 dancing-script gradient-text text-left">
              Current Offers
            </h2>
            
            <div className="space-y-6">
              {offers.map((offer, index) => (
                <motion.div
                  key={offer.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-3">{offer.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-orange-100 text-gray-800 rounded-full text-sm font-medium">
                      {offer.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 dancing-script gradient-text text-left">
              Upcoming Events
            </h2>
            
            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-3">{event.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-green-100 text-gray-800 rounded-full text-sm font-medium">
                      {event.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-xl text-gray-700 mb-8">
            Visit us to experience these special offers and events
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferCard;