import React, { useState, useEffect } from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import Terms from './pages/Terms';
import Policy from './pages/Policy';
import MenuPage from './pages/MenuPage';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [routeParams, setRouteParams] = useState({});

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      handleRouteChange(path);
    };

    window.addEventListener('popstate', handlePopState);
    // Handle initial route
    handleRouteChange(window.location.pathname);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Handle route changes
  const handleRouteChange = (path) => {
    // Remove trailing slash if present
    if (path.endsWith('/') && path.length > 1) {
      path = path.slice(0, -1);
    }

    switch (path) {
      case '/':
      case '':
        setCurrentPage('main');
        break;
      case '/terms':
        setCurrentPage('terms');
        break;
      case '/privacy':
        setCurrentPage('policy');
        break;
      case '/menu':
        setCurrentPage('menu');
        break;
      default:
        // For any unknown routes, show main page
        setCurrentPage('main');
        break;
    }
  };

  // Navigate to a specific page
  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    handleRouteChange(path);
  };

  // Handle navigation from links
  useEffect(() => {
    const handleNavigation = (e) => {
      if (e.detail && e.detail.path) {
        e.preventDefault();
        navigateTo(e.detail.path);
      }
    };

    window.addEventListener('navigate', handleNavigation);
    return () => {
      window.removeEventListener('navigate', handleNavigation);
    };
  }, []);

  return (
    <div>
      {currentPage === 'main' && <MainPage />}
      {currentPage === 'terms' && <Terms />}
      {currentPage === 'policy' && <Policy />}
      {currentPage === 'menu' && <MenuPage />}
    </div>
  );
};

export default App;