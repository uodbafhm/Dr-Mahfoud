
import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO, TRANSLATIONS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-dental-600 rounded-xl flex items-center justify-center">
                <i className="fas fa-tooth text-white text-lg"></i>
              </div>
              <span className="text-2xl font-black text-gray-900">{language === 'AR' ? 'عيادة محفوظ' : 'Mahfoud Clinic'}</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed text-lg">
              {language === 'AR' 
                ? 'نلتزم بتقديم أعلى مستويات الجودة في رعاية الأسنان لنمنحك ابتسامة تثق بها.' 
                : 'We are committed to providing the highest quality dental care to give you a smile you can trust.'}
            </p>
            <div className="flex gap-4">
              <a href={`https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}`} target="_blank" className="w-12 h-12 bg-gray-50 hover:bg-dental-600 hover:text-white transition-all duration-300 rounded-2xl flex items-center justify-center text-gray-400" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href={CLINIC_INFO.googleMaps} target="_blank" className="w-12 h-12 bg-gray-50 hover:bg-dental-600 hover:text-white transition-all duration-300 rounded-2xl flex items-center justify-center text-gray-400" rel="noreferrer">
                <i className="fas fa-map-marker-alt"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-black text-gray-900">{language === 'AR' ? 'روابط سريعة' : 'Quick Links'}</h4>
            <div className="flex flex-col gap-4 text-gray-500 font-bold">
              <Link to="/" className="hover:text-dental-600 transition-colors">{t.nav.home}</Link>
              <Link to="/about" className="hover:text-dental-600 transition-colors">{t.nav.about}</Link>
              <Link to="/contact" className="hover:text-dental-600 transition-colors">{t.nav.book}</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-black text-gray-900">{language === 'AR' ? 'تواصل معنا' : 'Contact Us'}</h4>
            <div className="flex flex-col gap-4 text-gray-500 font-bold">
              <p className="flex items-center gap-3"><i className="fas fa-phone-alt text-dental-600"></i> <span dir="ltr">{CLINIC_INFO.phone}</span></p>
              <p className="flex items-center gap-3"><i className="fab fa-whatsapp text-dental-600 text-lg"></i> <span dir="ltr">{CLINIC_INFO.whatsapp}</span></p>
              <p className="flex items-start gap-3"><i className="fas fa-map-marker-alt text-dental-600 mt-1"></i> {CLINIC_INFO.address[language]}</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-gray-400">
          <p>© {new Date().getFullYear()} {language === 'AR' ? 'عيادة محفوظ للأسنان. جميع الحقوق محفوظة.' : 'Mahfoud Dental Clinic. All Rights Reserved.'}</p>
          <div className="flex gap-8">
            <p>{language === 'AR' ? 'تم التصميم بكل حب ❤️' : 'Designed with love ❤️'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
