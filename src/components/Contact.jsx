import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, User, MessageSquare, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  // Background images for contact section
  const backgroundImages = [
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Preload next image to reduce latency
  useEffect(() => {
    const preloadImage = (index) => {
      const img = new Image();
      img.src = backgroundImages[index];
      img.onload = () => setIsImageLoaded(true);
    };

    preloadImage(currentImageIndex);
    
    // Rotate background images every 5 seconds for smoother experience
    const interval = setInterval(() => {
      setIsImageLoaded(false);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, backgroundImages.length]);

  // Social media icons data
  const socialMedia = [
    { name: 'instagram', icon: Instagram, url: '#' },
    { name: 'facebook', icon: Facebook, url: '#' },
    { name: 'twitter', icon: Twitter, url: '#' }
  ];

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20">
      {/* Background with gradient overlay and sliding images */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-r from-[#2E8B57]/20 to-[#FF8C00]/20 w-full h-full absolute z-10"></div>
        
        <AnimatePresence mode="sync">
          <motion.div 
            key={`${currentImageIndex}-${isImageLoaded}`}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isImageLoaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img 
              src={backgroundImages[currentImageIndex]} 
              alt="Restaurant ambiance" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        {/* Main Panel Container */}
        <div className="bg-[#F5FFF5]/90 backdrop-blur-sm border border-white/50 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-12"
          >
            <p className="text-lg md:text-xl text-[#2C3E50]/90 max-w-2xl mx-auto mb-4">
              We'd love to hear from you! Visit us or get in touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mt-2 cursive-font gradient-text">Contact Bella Cucina</h2>
          </motion.div>

          {/* Title and Description */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4 cursive-font">Get in Touch With Us</h2>
            <p className="text-base md:text-lg text-[#2C3E50]/80 max-w-3xl mx-auto px-4">
              Have questions or want to make a reservation? Reach out to us through any of these channels or send us a message directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-6 cursive-font gradient-text">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start group">
                  <div className="bg-[#2E8B57]/10 p-3 rounded-full mr-4 group-hover:bg-[#2E8B57] transition-colors duration-300 flex-shrink-0">
                    <MapPin className="text-[#2E8B57] h-6 w-6 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#2C3E50] mb-1">Location</h4>
                    <p className="text-[#2C3E50]/80">123 Culinary Street, Foodville, FC 10001</p>
                    <a 
                      href="https://www.google.com/maps" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#2E8B57] hover:underline inline-flex items-center mt-1 font-medium transition-colors duration-300"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start group">
                  <div className="bg-[#2E8B57]/10 p-3 rounded-full mr-4 group-hover:bg-[#2E8B57] transition-colors duration-300 flex-shrink-0">
                    <Phone className="text-[#2E8B57] h-6 w-6 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#2C3E50] mb-1">Phone</h4>
                    <p className="text-[#2C3E50]/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start group">
                  <div className="bg-[#2E8B57]/10 p-3 rounded-full mr-4 group-hover:bg-[#2E8B57] transition-colors duration-300 flex-shrink-0">
                    <Mail className="text-[#2E8B57] h-6 w-6 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#2C3E50] mb-1">Email</h4>
                    <p className="text-[#2C3E50]/80">hello@bellacucina.com</p>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-start group">
                  <div className="bg-[#2E8B57]/10 p-3 rounded-full mr-4 group-hover:bg-[#2E8B57] transition-colors duration-300 flex-shrink-0">
                    <Clock className="text-[#2E8B57] h-6 w-6 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#2C3E50] mb-1">Opening Hours</h4>
                    <p className="text-[#2C3E50]/80">Monday - Friday: 11am - 10pm</p>
                    <p className="text-[#2C3E50]/80">Saturday - Sunday: 10am - 11pm</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-10">
                <h4 className="font-bold text-lg text-[#2C3E50] mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        className="bg-white border-2 border-[#2E8B57] p-3 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-110 hover:bg-[#2E8B57] group shadow-md"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-6 h-6 text-[#2E8B57] group-hover:text-white transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-6 md:mb-8 cursive-font gradient-text">Send us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#2C3E50] font-medium mb-2 flex items-center">
                    <User className="w-5 h-5 mr-2 text-[#2E8B57]" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8B57] focus:border-transparent bg-white/80 transition-all duration-300 hover:border-[#2E8B57]"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#2C3E50] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8B57] focus:border-transparent bg-white/80 transition-all duration-300 hover:border-[#2E8B57]"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#2C3E50] font-medium mb-2 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-[#2E8B57]" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E8B57] focus:border-transparent bg-white/80 transition-all duration-300 hover:border-[#2E8B57]"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#2E8B57] to-[#FF8C00] hover:from-[#3CB371] hover:to-[#FFA500] text-white font-bold py-4 px-6 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
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
          className="h-8 w-8 md:h-10 md:w-10 text-white drop-shadow-lg"
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

export default Contact;