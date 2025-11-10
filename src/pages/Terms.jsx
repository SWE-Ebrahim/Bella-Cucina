import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Clock, Mail, Phone, MapPin } from 'lucide-react';
import InnerHeader from '../components/InnerHeader';

const Terms = () => {
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

  const termsData = [
    {
      id: 1,
      title: "Acceptance of Terms",
      description: "By accessing or using the Bella Cucina website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.",
      icon: <FileText className="w-6 h-6 text-[#2E8B57]" />
    },
    {
      id: 2,
      title: "Use of Services",
      description: "Our services are provided for your personal and non-commercial use. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of our services without express written permission.",
      icon: <Shield className="w-6 h-6 text-[#2E8B57]" />
    },
    {
      id: 3,
      title: "Intellectual Property",
      description: "All content, trademarks, and other intellectual property rights in and to the website and its services are owned by Bella Cucina or its licensors. You may not use any of our intellectual property without prior written consent.",
      icon: <Shield className="w-6 h-6 text-[#2E8B57]" />
    },
    {
      id: 4,
      title: "Limitation of Liability",
      description: "Bella Cucina shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services or inability to use our services.",
      icon: <Shield className="w-6 h-6 text-[#2E8B57]" />
    },
    {
      id: 5,
      title: "Changes to Terms",
      description: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of the modified terms.",
      icon: <Clock className="w-6 h-6 text-[#2E8B57]" />
    },
    {
      id: 6,
      title: "Contact Information",
      description: "If you have any questions about these Terms and Conditions, please contact us using the information provided below.",
      icon: <Mail className="w-6 h-6 text-[#2E8B57]" />,
      contact: true
    }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-[#2E8B57]" />,
      text: "123 Culinary Street, Foodville, FC 10001"
    },
    {
      icon: <Phone className="w-5 h-5 text-[#2E8B57]" />,
      text: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="w-5 h-5 text-[#2E8B57]" />,
      text: "legal@bellacucina.com"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5FFF5] pt-40 pb-16">
      <div className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out"
           style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
        <InnerHeader />
      </div>
      
      <div className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4 md:mb-6 gradient-text cursive-font">
            Terms and Conditions
          </h1>
          <p className="text-base md:text-lg text-[#2C3E50]/80 max-w-3xl mx-auto px-4">
            Please read these terms and conditions carefully before using our services.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl p-6 md:p-8 mb-8 md:mb-12"
          >
            <p className="text-[#2C3E50]/80 mb-6">
              Welcome to Bella Cucina. These terms and conditions outline the rules and regulations for the use of our website and services. 
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Bella Cucina if you do not agree to all of the terms stated here.
            </p>
            
            <div className="border-l-4 border-[#2E8B57] pl-6 py-1">
              <p className="text-[#2C3E50] italic">
                "These terms were last updated on: <span className="font-semibold">January 1, 2024</span>"
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {termsData.map((term, index) => (
              <motion.div
                key={term.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-[#2E8B57]/10 p-3 rounded-full mr-4 flex-shrink-0">
                    {term.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#2C3E50]">{term.id}. {term.title}</h2>
                </div>
                
                <p className="text-[#2C3E50]/80 mb-4 flex-grow">
                  {term.description}
                </p>
                
                {term.contact && (
                  <div className="mt-auto pt-4">
                    <h3 className="text-lg font-semibold text-[#2C3E50] mb-3">Contact Us:</h3>
                    <div className="space-y-3">
                      {contactInfo.map((contact, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="mr-3">
                            {contact.icon}
                          </div>
                          <p className="text-[#2C3E50]/80">{contact.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 md:mt-12 text-center"
          >
            <p className="text-[#2C3E50]/60 text-sm">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Terms;