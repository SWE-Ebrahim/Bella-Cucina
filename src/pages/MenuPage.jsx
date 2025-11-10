import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Clock, Flame, Sparkles, Camera } from 'lucide-react';
import SpecialDishFullCard from '../components/SpecialDishFullCard';
import InnerHeader from '../components/InnerHeader';
import SpecialDishFullCard2 from '../components/SpecialDishFullCard2';
import MenuFooter from '../components/MenuFooter';
import OfferCard from '../components/OfferCard';

const MenuPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [specialDishSlide, setSpecialDishSlide] = useState(0);

  // Updated menu items with corrected images
  const menuItems = [
    // Breakfast
    {
      id: 1,
      name: 'Classic Pancakes',
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
      description: 'Fluffy buttermilk pancakes served with pure maple syrup and fresh berries',
      ingredients: 'Flour, eggs, buttermilk, butter, maple syrup, fresh berries',
      calories: '450',
      price: '$9.99',
      featured: true
    },
    {
      id: 2,
      name: 'Avocado Toast',
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800&q=80',
      description: 'Smashed avocado with heirloom tomatoes on artisan sourdough',
      ingredients: 'Avocado, sourdough bread, heirloom tomatoes, olive oil, lemon, red pepper flakes',
      calories: '320',
      price: '$11.99'
    },
    {
      id: 3,
      name: 'Eggs Benedict',
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80',
      description: 'Perfectly poached eggs on English muffin with hollandaise sauce',
      ingredients: 'Eggs, English muffin, Canadian bacon, hollandaise sauce, chives',
      calories: '580',
      price: '$13.99',
      featured: true
    },
    {
      id: 4,
      name: 'Greek Yogurt Bowl',
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
      description: 'Creamy Greek yogurt with honey, granola and seasonal fruits',
      ingredients: 'Greek yogurt, raw honey, house-made granola, seasonal fruits, almonds',
      calories: '290',
      price: '$8.99'
    },
    
    // Lunch
    {
      id: 5,
      name: 'Caprese Salad',
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=80',
      description: 'Fresh mozzarella, heirloom tomatoes, and basil with aged balsamic',
      ingredients: 'Buffalo mozzarella, heirloom tomatoes, fresh basil, aged balsamic, EVOO',
      calories: '320',
      price: '$12.99'
    },
    {
      id: 6,
      name: 'Margherita Pizza',
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
      description: 'Wood-fired pizza with San Marzano tomatoes, mozzarella, and fresh basil',
      ingredients: 'Pizza dough, San Marzano tomatoes, mozzarella di bufala, fresh basil, EVOO',
      calories: '750',
      price: '$16.99',
      featured: true
    },
    {
      id: 7,
      name: 'Caesar Salad',
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80',
      description: 'Crisp romaine with house-made Caesar dressing and parmesan',
      ingredients: 'Romaine lettuce, Caesar dressing, croutons, aged parmesan, lemon',
      calories: '420',
      price: '$14.99'
    },
    {
      id: 8,
      name: 'Truffle Pasta',
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
      description: 'Fresh fettuccine with truffle cream sauce and shaved parmesan',
      ingredients: 'Fresh fettuccine, black truffle, cream, aged parmesan, garlic, butter',
      calories: '680',
      price: '$19.99'
    },
    
    // Dinner
    {
      id: 9,
      name: 'Grilled Salmon',
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&q=80',
      description: 'Wild Atlantic salmon with lemon herb butter and seasonal vegetables',
      ingredients: 'Wild salmon, lemon, fresh herbs, butter, seasonal vegetables, capers',
      calories: '520',
      price: '$24.99',
      featured: true
    },
    {
      id: 10,
      name: 'Filet Mignon',
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80',
      description: 'Prime beef tenderloin with red wine reduction and truffle mashed potatoes',
      ingredients: 'USDA Prime beef tenderloin, red wine, beef demi-glace, truffle potatoes',
      calories: '780',
      price: '$34.99'
    },
    {
      id: 11,
      name: 'Seafood Risotto',
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1623962470629-ead26532ef44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470', // Fixed image
      description: 'Creamy Carnaroli rice with premium seafood and saffron',
      ingredients: 'Carnaroli rice, prawns, scallops, mussels, saffron, white wine, butter',
      calories: '620',
      price: '$26.99'
    },
    {
      id: 12,
      name: 'Chicken Parmesan',
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80',
      description: 'Breaded chicken breast with house marinara and melted mozzarella',
      ingredients: 'Chicken breast, panko breadcrumbs, marinara sauce, mozzarella, parmesan',
      calories: '720',
      price: '$21.99'
    },
    
    // Cold Drinks
    {
      id: 13,
      name: 'Fresh Lemonade',
      category: 'cold-drinks',
      image: 'https://images.unsplash.com/photo-1676159434854-2f7f860a18cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=681', // Fixed image
      description: 'Freshly squeezed lemons with mint and raw honey',
      ingredients: 'Fresh lemons, filtered water, raw honey, mint leaves, ice',
      calories: '120',
      price: '$5.99'
    },
    {
      id: 14,
      name: 'Berry Smoothie',
      category: 'cold-drinks',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=80',
      description: 'Mixed berries blended with Greek yogurt and honey',
      ingredients: 'Strawberries, blueberries, raspberries, Greek yogurt, honey, ice',
      calories: '180',
      price: '$6.99'
    },
    {
      id: 15,
      name: 'Iced Matcha Latte',
      category: 'cold-drinks',
      image: 'https://plus.unsplash.com/premium_photo-1663853490120-7bd0c24318f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687', // Fixed image
      description: 'Premium ceremonial grade matcha with oat milk',
      ingredients: 'Ceremonial matcha, oat milk, honey, ice',
      calories: '150',
      price: '$6.49'
    },
    
    // Hot Drinks
    {
      id: 16,
      name: 'Espresso',
      category: 'hot-drinks',
      image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=800&q=80',
      description: 'Rich, full-bodied Italian espresso from single-origin beans',
      ingredients: 'Single-origin espresso beans',
      calories: '5',
      price: '$3.99'
    },
    {
      id: 17,
      name: 'Cappuccino',
      category: 'hot-drinks',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80',
      description: 'Perfect balance of espresso with velvety steamed milk',
      ingredients: 'Espresso, whole milk, milk foam',
      calories: '120',
      price: '$4.99'
    },
    {
      id: 18,
      name: 'Chai Latte',
      category: 'hot-drinks',
      image: 'https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687', // Fixed image
      description: 'Aromatic blend of spiced tea with steamed milk',
      ingredients: 'Black tea, spices, steamed milk, honey',
      calories: '190',
      price: '$5.49'
    },
    
    // Special Dishes
    {
      id: 19,
      name: 'Truffle Ravioli',
      category: 'specials',
      image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=800&q=80',
      description: 'House-made ravioli with ricotta and spinach in black truffle sauce',
      ingredients: 'Fresh pasta, ricotta, spinach, black truffle, butter, sage, parmesan',
      calories: '580',
      price: '$22.99'
    },
    {
      id: 20,
      name: 'Wagyu Beef Burger',
      category: 'specials',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
      description: 'Premium Wagyu beef with aged cheddar and truffle aioli',
      ingredients: 'Wagyu beef, aged cheddar, truffle aioli, brioche bun, arugula',
      calories: '890',
      price: '$29.99'
    },
    
    // Desserts
    {
      id: 21,
      name: 'Tiramisu',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80',
      description: 'Classic Italian dessert with espresso-soaked ladyfingers',
      ingredients: 'Ladyfingers, espresso, mascarpone, eggs, sugar, cocoa powder',
      calories: '450',
      price: '$8.99'
    },
    {
      id: 22,
      name: 'Gelato',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
      description: 'Artisanal Italian gelato in rotating seasonal flavors',
      ingredients: 'Whole milk, cream, sugar, natural flavorings',
      calories: '220',
      price: '$6.99'
    },
    {
      id: 23,
      name: 'Chocolate Lava Cake',
      category: 'desserts',
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80',
      description: 'Warm chocolate cake with molten center and vanilla ice cream',
      ingredients: 'Belgian chocolate, butter, eggs, flour, vanilla ice cream',
      calories: '520',
      price: '$9.99'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'dinner', name: 'Dinner' },
    { id: 'cold-drinks', name: 'Cold Drinks' },
    { id: 'hot-drinks', name: 'Hot Drinks' },
    { id: 'specials', name: 'Specials' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const filteredMenuItems = filter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  const featuredItems = menuItems.filter(item => item.featured);

  // Reset current slide when filter changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [filter]);

  // Auto slide functionality for featured slider
  useEffect(() => {
    if (featuredItems.length <= 1) return;
    
    const interval = setInterval(() => {
      setSpecialDishSlide(prev => (prev + 1) % featuredItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredItems.length]);

  const openDetail = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeDetail = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  const navigateItem = (direction) => {
    if (!selectedItem) return;
    
    const currentIndex = filteredMenuItems.findIndex(item => item.id === selectedItem.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredMenuItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredMenuItems.length) % filteredMenuItems.length;
    }
    
    setSelectedItem(filteredMenuItems[newIndex]);
  };

  // Special dishes carousel component
  const SpecialDishesCarousel = () => {
    if (featuredItems.length === 0) return null;
    
    return (
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={specialDishSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2E8B57]/20 to-[#FF8C00]/20 mix-blend-multiply z-10"></div>
            <img 
              src={featuredItems[specialDishSlide]?.image} 
              alt={featuredItems[specialDishSlide]?.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 mb-2"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-xs uppercase tracking-wider">Chef's Special</span>
              </motion.div>
              <motion.h3 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white text-2xl md:text-3xl font-bold dancing-script"
              >
                {featuredItems[specialDishSlide]?.name}
              </motion.h3>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/90 text-sm md:text-base"
              >
                {featuredItems[specialDishSlide]?.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slider indicators */}
        <div className="absolute bottom-4 right-6 flex space-x-2 z-20">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setSpecialDishSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === specialDishSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to special dish ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
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
        
        .menu-item {
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          aspect-ratio: 1;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }
        
        .menu-item:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 15px 20px -5px rgba(46, 139, 87, 0.3);
        }
        
        .menu-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
        }
        
        .menu-item:hover .menu-overlay {
          opacity: 1;
        }
        
        .menu-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }
        
        .menu-item:hover img {
          transform: scale(1.05);
          filter: brightness(0.7) contrast(1.1);
        }
        
        .menu-item-name {
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          transform: translateY(10px);
          transition: transform 0.3s ease;
          opacity: 0;
        }
        
        .menu-item:hover .menu-item-name {
          transform: translateY(0);
          opacity: 1;
        }
        
        .detail-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        
        .detail-content {
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          position: relative;
          background: white;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .detail-image {
          width: 100%;
          height: 50vh;
          object-fit: cover;
        }
        
        .detail-button {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
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
        
        .detail-button:hover {
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
        
        .info-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, rgba(46, 139, 87, 0.1), rgba(255, 140, 0, 0.1));
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .detail-button {
            width: 2.5rem;
            height: 2.5rem;
          }
          
          .nav-button.prev {
            left: 0.5rem;
          }
          
          .nav-button.next {
            right: 0.5rem;
          }
          
          .detail-image {
            height: 40vh;
          }
        }
        
        .pulse-badge {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }
      `}</style>
      <div>
        <InnerHeader/>
        <SpecialDishFullCard/>
        <SpecialDishFullCard2/>
      </div>
      
      <section className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-orange-50 poppins pt-30">
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
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-semibold text-gray-600 poppins">Our Menu</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dancing-script gradient-text mb-4">
              Culinary Delights
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto poppins">
              Discover our handcrafted dishes made with passion and premium ingredients
            </p>
          </motion.div>

          {/* Special Dishes Carousel - independent of filtering */}
          <SpecialDishesCarousel />

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

          {/* Menu Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredMenuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="menu-item"
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
                  onClick={() => openDetail(item)}
                >
                  {item.featured && (
                    <div className="absolute top-3 right-3 z-10 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 pulse-badge">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80';
                    }}
                  />
                  <div className="menu-overlay">
                    <h3 className="text-white font-bold text-xl mb-1 poppins menu-item-name">
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredMenuItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg poppins">No items found in this category</p>
            </motion.div>
          )}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="detail-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetail}
            >
              <motion.div
                className="detail-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name}
                    className="detail-image"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {selectedItem.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Close Button */}
                <button
                  className="detail-button close-button"
                  onClick={closeDetail}
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                

                {/* Item Info */}
                <div className="p-6 md:p-8 max-h-[40vh] overflow-y-auto">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {selectedItem.name}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {selectedItem.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="info-badge">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-700">{selectedItem.calories} kcal</span>
                    </div>
                    <div className="info-badge">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Ready in 15-20 min</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-2xl mb-6">
                    <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                      <span>🌿</span>
                      Ingredients
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedItem.ingredients}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div>
          <OfferCard />
          <MenuFooter />
        </div>
      </section>
    </>
  );
};

export default MenuPage;