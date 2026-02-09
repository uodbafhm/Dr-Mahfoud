
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const content = TRANSLATIONS[language].nav;

  const navLinks = [
    { name: content.home, path: '/' },
    { name: content.about, path: '/about' },
    { name: content.book, path: '/contact' },
  ];

  const languages: { code: Language; name: string }[] = [
    { code: 'AR', name: 'العربية' },
    { code: 'EN', name: 'English' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 py-4 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between glass rounded-3xl px-4 sm:px-8 py-3 transition-all duration-500 ${scrolled ? 'shadow-2xl border-white/40' : 'shadow-sm border-white/20'}`}>
          
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-dental-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-lg">
              <i className="fas fa-tooth text-white text-lg"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black text-gray-900 leading-none">{language === 'AR' ? 'محفوظ' : 'Mahfoud'}</span>
              <span className="text-[9px] sm:text-[10px] text-dental-600 font-bold uppercase tracking-widest">DENTAL CLINIC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-bold transition-all duration-300 hover:text-dental-600 ${
                  location.pathname === link.path ? 'text-dental-600 scale-105' : 'text-gray-500'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div layoutId="navUnderline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dental-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher - Desktop & Tablet */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-50/50 hover:bg-white transition-all rounded-full text-xs font-bold text-gray-700 border border-gray-100"
              >
                <i className="fas fa-globe text-dental-500"></i>
                {language === 'AR' ? 'العربية' : 'English'}
              </button>
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className={`absolute top-full mt-2 ${language === 'AR' ? 'left-0' : 'right-0'} min-w-[140px] glass shadow-2xl rounded-2xl p-2 z-50`}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className="w-full text-right px-4 py-2.5 text-xs hover:bg-dental-50 transition-colors rounded-xl flex items-center justify-between"
                      >
                        <span className={language === lang.code ? 'text-dental-600 font-bold' : 'text-gray-600'}>
                          {lang.name}
                        </span>
                        {language === lang.code && <i className="fas fa-check text-[10px] text-dental-600"></i>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Book Button */}
            <Link to="/contact" className="hidden lg:block px-6 py-2.5 bg-dental-600 text-white rounded-full font-bold text-sm shadow-lg hover:bg-dental-700 transition-colors">
              {content.book}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="flex md:hidden w-10 h-10 items-center justify-center bg-dental-50 text-dental-600 rounded-xl transition-all active:scale-90"
            >
              <i className="fas fa-bars-staggered text-lg"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: language === 'AR' ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: language === 'AR' ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 bottom-0 ${language === 'AR' ? 'right-0' : 'left-0'} w-[80%] max-w-sm bg-white z-[70] shadow-2xl p-8 flex flex-col gap-10`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-dental-600 rounded-lg flex items-center justify-center">
                    <i className="fas fa-tooth text-white text-sm"></i>
                  </div>
                  <span className="font-black text-gray-900">{language === 'AR' ? 'محفوظ' : 'Mahfoud'}</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="flex flex-col gap-6">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{language === 'AR' ? 'التنقل' : 'Navigation'}</p>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-2xl font-black transition-colors ${
                      location.pathname === link.path ? 'text-dental-600' : 'text-gray-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{language === 'AR' ? 'اللغة' : 'Language'}</p>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                          language === lang.code 
                          ? 'bg-dental-600 border-dental-600 text-white shadow-lg' 
                          : 'bg-white border-gray-200 text-gray-600'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Link to="/contact" className="w-full py-4 bg-dental-600 text-white rounded-2xl font-bold text-center shadow-xl">
                  {content.book}
                </Link>
                
                <div className="flex justify-center gap-6 text-gray-400 pt-4">
                  <a href={`https://wa.me/${TRANSLATIONS[language].chatbot.book_res}`} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp text-xl"></i></a>
                  <a href={`tel:${TRANSLATIONS[language].chatbot.book_res}`}><i className="fas fa-phone-alt text-lg"></i></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
