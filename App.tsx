
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundDecoration from './components/BackgroundDecoration';
import AIChat from './components/AIChat';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <div className="relative min-h-screen font-sans selection:bg-dental-200 selection:text-dental-900 overflow-x-hidden">
          <AnimatePresence>
            {!isLoaded && (
              <motion.div
                key="loader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
              >
                <div className="w-24 h-24 mb-6 relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 border-4 border-dental-100 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute inset-0 border-t-4 border-dental-600 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="fas fa-tooth text-dental-600 text-3xl"></i>
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 tracking-wider">عيادة محفوظ</h1>
              </motion.div>
            )}
          </AnimatePresence>

          {isLoaded && (
            <>
              <BackgroundDecoration />
              <Navbar />
              <main className="relative pt-20">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
              <AIChat />
            </>
          )}
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
