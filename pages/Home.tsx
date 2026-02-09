
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, REVIEWS, CLINIC_INFO, TRANSLATIONS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import StatusBadge from '../components/StatusBadge';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: language === 'AR' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <StatusBadge />
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
              {t.hero.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-600 to-teal-400">
                {t.hero.title2}
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              {t.hero.desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-10 py-4 bg-dental-600 text-white rounded-3xl font-bold text-lg shadow-2xl shadow-dental-200 hover:bg-dental-700 transition-all hover:-translate-y-1">
                {t.hero.cta}
              </Link>
              <a href="#services" className="px-10 py-4 glass text-gray-900 rounded-3xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                {t.hero.services}
              </a>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex -space-x-4 space-x-reverse">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/id/${i + 20}/64/64`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="patient" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex gap-1 text-yellow-400 text-xs">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="font-bold text-gray-900">{t.hero.happyPatients}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[80px] z-10 shadow-3xl bg-gray-100">
              <img src="https://i.postimg.cc/Y2RVsDcm/pexels-pavel-danilyuk-6812564.jpg" className="w-full h-full object-cover object-top" alt="Clinic" />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-dental-100 rounded-full blur-xl opacity-70 animate-pulse" />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`absolute ${language === 'AR' ? '-right-6' : '-left-6'} top-1/4 z-20 glass p-5 rounded-3xl shadow-xl flex items-center gap-4`}
            >
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <i className="fas fa-check-circle text-2xl"></i>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{language === 'AR' ? 'التقنيات' : 'TECH'}</p>
                <p className="text-lg font-black text-gray-900">{language === 'AR' ? 'أحدث الأجهزة' : 'Modern Tools'}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 w-full scroll-mt-32">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <span className="px-4 py-1.5 bg-dental-50 text-dental-600 rounded-full text-xs font-bold uppercase tracking-[0.2em]">{t.services_sec.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">{t.services_sec.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES[language].map((s, idx) => (
            <ServiceCard key={s.id} service={s} index={idx} />
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-dental-600 font-bold tracking-widest text-sm uppercase">{t.reviews_sec.badge}</span>
              <h2 className="text-4xl font-black text-gray-900">{t.reviews_sec.title}</h2>
              <div className="flex items-center gap-4 py-4 border-y border-gray-200">
                <div className="text-4xl font-black text-gray-900">4.9</div>
                <div className="flex flex-col">
                  <div className="flex gap-1 text-yellow-400">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="text-gray-500 text-sm">{t.reviews_sec.basedOn}</span>
                </div>
              </div>
              <a href={CLINIC_INFO.googleMaps} target="_blank" className="text-dental-600 font-bold hover:underline flex items-center gap-2" rel="noreferrer">
                {language === 'AR' ? 'عرض كل التقييمات' : 'View All Reviews'} <i className="fas fa-external-link-alt text-xs"></i>
              </a>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {REVIEWS[language].map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col gap-6"
                >
                  <div className="flex items-center gap-4">
                    <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-gray-900">{review.author}</h4>
                      <p className="text-xs text-gray-400">{review.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-yellow-400 text-xs">
                    {[...Array(review.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{review.comment}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <h2 className="text-4xl font-black text-gray-900">{language === 'AR' ? 'تفضل بزيارتنا' : 'Visit Us'}</h2>
          <p className="text-gray-500">{language === 'AR' ? 'موقعنا الجديد، يسهل الوصول إليه' : 'Our new location, easy to reach'}</p>
        </div>
        <div className="h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl relative">
          <iframe src={CLINIC_INFO.googleMapsEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Clinic Location" />
          <div className={`absolute top-8 ${language === 'AR' ? 'right-8' : 'left-8'} glass p-6 rounded-3xl shadow-xl max-w-xs md:block hidden`}>
            <h4 className="font-bold text-gray-900 mb-2">{language === 'AR' ? 'عيادة محفوظ للأسنان' : 'Mahfoud Dental Clinic'}</h4>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{CLINIC_INFO.address[language]}</p>
            <a href={CLINIC_INFO.googleMaps} target="_blank" className="block w-full text-center py-2 bg-dental-600 text-white rounded-xl text-sm font-bold" rel="noreferrer">
              {language === 'AR' ? 'إفتح في الخرائط' : 'Open in Maps'}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
