import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Create mini slider for featured images
  const renderMiniSlider = () => {
    // Make sure we have images to display
    if (!filteredImages || filteredImages.length === 0) return null;
    
    // Use minimum of 4 or total images to avoid accessing undefined images
    const displayedImages = filteredImages.slice(0, Math.min(4, filteredImages.length));
    
    // Don't show slider if there are no images
    if (displayedImages.length === 0) return null;
    
    // Only show slider controls if we have more than one image
    const showControls = displayedImages.length > 1;
    
    return (
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-2xl">
        {displayedImages.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img 
                src={displayedImages[currentSlide % displayedImages.length]?.src} 
                alt={displayedImages[currentSlide % displayedImages.length]?.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold dancing-script">
                  {displayedImages[currentSlide % displayedImages.length]?.title || 'Untitled'}
                </h3>
                <p className="text-white/90 text-lg">
                  {displayedImages[currentSlide % displayedImages.length]?.description || 'No description'}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        
        {/* Slider indicators - only show if more than one image */}
        {showControls && (
          <div className="absolute bottom-4 right-6 flex space-x-2">
            {displayedImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === (currentSlide % displayedImages.length) ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Reset current slide when filter changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [filter]);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      category: 'food',
      title: 'Gourmet Burger',
      description: 'Handcrafted with premium ingredients'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
      category: 'food',
      title: 'Margherita Pizza',
      description: 'Wood-fired perfection'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
      category: 'ambiance',
      title: 'Elegant Dining',
      description: 'Romantic atmosphere'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      category: 'food',
      title: 'Fresh Salad',
      description: 'Garden-fresh ingredients'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1551218372-a8789b81b253?w=800&q=80',
      category: 'food',
      title: 'Pasta Delight',
      description: 'Traditional Italian recipes'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      category: 'ambiance',
      title: 'Restaurant Interior',
      description: 'Modern & cozy design'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
      category: 'food',
      title: 'Chocolate Dessert',
      description: 'Decadent sweet treats'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
      category: 'food',
      title: 'Grilled Steak',
      description: 'Premium cuts perfectly cooked'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80',
      category: 'drinks',
      title: 'Signature Cocktails',
      description: 'Expertly crafted drinks'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80',
      category: 'ambiance',
      title: 'Chef at Work',
      description: 'Culinary excellence'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
      category: 'food',
      title: 'Breakfast Bowl',
      description: 'Healthy morning options'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      category: 'ambiance',
      title: 'Outdoor Seating',
      description: 'Al fresco dining experience'
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food' },
    { id: 'ambiance', name: 'Ambiance' },
    { id: 'drinks', name: 'Drinks' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  // Auto slide functionality - only run if we have more than one image
  useEffect(() => {
    // Clear any existing interval
    const maxIndex = Math.min(filteredImages.length, 4);
    
    // Only auto-slide if we have more than one image
    if (maxIndex <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % maxIndex);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [filteredImages.length]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Dancing+Script:wght@600;700&display=swap');
        
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .dancing-script {
          font-family: 'Dancing Script', cursive;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #2E8B57 0%, #FF8C00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px 0 rgba(46, 139, 87, 0.12);
        }
        
        .filter-button {
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        
        .filter-button::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #2E8B57, #FF8C00);
          transform: translateX(-50%);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }
        
        .filter-button.active::before {
          width: 100%;
        }
        
        .filter-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .filter-button:not(.active)::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s;
        }
        
        .filter-button:not(.active):hover::after {
          left: 100%;
        }
        
        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          aspect-ratio: 1;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .gallery-item:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 15px 20px -5px rgba(46, 139, 87, 0.3);
        }
        
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Floating animation for gallery items */
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        .floating:nth-child(2n) {
          animation-delay: 0.5s;
        }
        
        .floating:nth-child(3n) {
          animation-delay: 1s;
        }
        
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .gallery-item:hover img {
          transform: scale(1.15);
        }
        
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(46, 139, 87, 0.9), rgba(255, 140, 0, 0.7));
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
        }
        
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        
        .lightbox-content {
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
        }
        
        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .lightbox-button {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: white;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .lightbox-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .close-button {
          top: 1rem;
          right: 1rem;
        }
        
        .nav-button {
          top: 50%;
          transform: translateY(-50%);
        }
        
        .nav-button.prev {
          left: 1rem;
        }
        
        .nav-button.next {
          right: 1rem;
        }
        
        @media (max-width: 768px) {
          .lightbox-button {
            width: 2.5rem;
            height: 2.5rem;
          }
          
          .nav-button.prev {
            left: 0.5rem;
          }
          
          .nav-button.next {
            right: 0.5rem;
          }
        }
      `}</style>

      <section id="gallery" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 glass-card rounded-full"
            >
              <Camera className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold text-gray-600 poppins">Our Gallery</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dancing-script gradient-text mb-4">
              Visual Feast
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto poppins">
              Explore the art of culinary excellence through our lens
            </p>
          </motion.div>

          {/* Mini Slider */}
          {filteredImages.length > 0 && renderMiniSlider()}

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`filter-button px-6 md:px-8 py-3 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all poppins ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-green-600 to-orange-500 text-white shadow-lg active'
                    : 'glass-card text-gray-700 hover:shadow-lg'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="gallery-item floating"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.05,
                    layout: { duration: 0.4 }
                  }}
                  whileHover={{ y: -8 }}
                  onClick={() => openLightbox(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <motion.h3 
                      className="text-white font-bold text-xl mb-1 poppins"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {image.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/90 text-sm poppins"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {image.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg poppins">No images found in this category</p>
            </motion.div>
          )}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="lightbox-image"
                />
                
                {/* Close Button */}
                <button
                  className="lightbox-button close-button"
                  onClick={closeLightbox}
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {/* Navigation Buttons */}
                <button
                  className="lightbox-button nav-button prev"
                  onClick={() => navigateImage('prev')}
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  className="lightbox-button nav-button next"
                  onClick={() => navigateImage('next')}
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image Info */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-white font-bold text-2xl mb-2 poppins">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/80 poppins">
                    {selectedImage.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Gallery;