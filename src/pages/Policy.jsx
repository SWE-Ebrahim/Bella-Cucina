import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Cookie, User, Mail, Phone, MapPin } from 'lucide-react';
import InnerHeader from '../components/InnerHeader';

const Policy = () => {
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

  const policyData = [
    {
      id: 1,
      title: "Information We Collect",
      description: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and postal address.",
      icon: <Database className="w-6 h-6 text-[#FF8C00]" />
    },
    {
      id: 2,
      title: "How We Use Information",
      description: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations. This includes personalizing your experience and sending you relevant updates.",
      icon: <User className="w-6 h-6 text-[#FF8C00]" />
    },
    {
      id: 3,
      title: "Information Sharing",
      description: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business.",
      icon: <Shield className="w-6 h-6 text-[#FF8C00]" />
    },
    {
      id: 4,
      title: "Data Security",
      description: "We implement a variety of security measures to maintain the safety of your personal information. All supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology.",
      icon: <Lock className="w-6 h-6 text-[#FF8C00]" />
    },
    {
      id: 5,
      title: "Cookies and Tracking",
      description: "We use cookies and similar tracking technologies to track activity on our site and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
      icon: <Cookie className="w-6 h-6 text-[#FF8C00]" />
    },
    {
      id: 6,
      title: "Contact Information",
      description: "If you have any questions about this Privacy Policy, please contact us using the information provided below.",
      icon: <Mail className="w-6 h-6 text-[#FF8C00]" />,
      contact: true
    }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-[#FF8C00]" />,
      text: "123 Culinary Street, Foodville, FC 10001"
    },
    {
      icon: <Phone className="w-5 h-5 text-[#FF8C00]" />,
      text: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="w-5 h-5 text-[#FF8C00]" />,
      text: "privacy@bellacucina.com"
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
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-[#2C3E50]/80 max-w-3xl mx-auto px-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
              Bella Cucina is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. 
              Please read this policy carefully to understand our practices regarding your personal data.
            </p>
            
            <div className="border-l-4 border-[#FF8C00] pl-6 py-1">
              <p className="text-[#2C3E50] italic">
                "This policy was last updated on: <span className="font-semibold">January 1, 2024</span>"
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {policyData.map((policy, index) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-[#FF8C00]/10 p-3 rounded-full mr-4 flex-shrink-0">
                    {policy.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#2C3E50]">{policy.id}. {policy.title}</h2>
                </div>
                
                <p className="text-[#2C3E50]/80 mb-4 flex-grow">
                  {policy.description}
                </p>
                
                {policy.contact && (
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
              By using our services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Policy;