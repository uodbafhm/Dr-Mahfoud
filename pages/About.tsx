
import React from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO, WORKING_HOURS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-col gap-24">
      
      {/* Bio Section */}
      <section className="grid lg:grid-cols-2 gap-16 items-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
            <img 
              src="https://i.postimg.cc/MpkmHs6z/pexels-pavel-danilyuk-6812553.jpg" 
              className="w-full h-full object-cover" 
              alt="Dr. Mahfoud" 
            />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-dental-600 rounded-full flex items-center justify-center text-white text-center z-20 shadow-xl p-4">
            <p className="text-xs font-bold leading-tight">
              {language === 'AR' ? 'خبرة أكثر من 15 عاماً' : '15+ Years Experience'}
            </p>
          </div>
          <div className="absolute inset-0 bg-dental-100 rounded-full blur-[80px] -z-10 opacity-60"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: language === 'AR' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <span className="text-dental-600 font-bold tracking-widest text-sm uppercase">
              {language === 'AR' ? 'نبذة عن الدكتور' : 'About the Doctor'}
            </span>
            <h2 className="text-5xl font-black text-gray-900">{language === 'AR' ? 'د. محفوظ' : 'Dr. Mahfoud'}</h2>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed font-bold">
            {language === 'AR' 
              ? '"نحن نؤمن بأن الابتسامة هي أجمل لغة في العالم، ومهمتنا هي جعلها مثالية لك."' 
              : '"We believe that a smile is the most beautiful language in the world, and our mission is to make it perfect for you."'}
          </p>
          <div className="space-y-6 text-gray-600 text-lg">
            <p>
              {language === 'AR' 
                ? 'خريج كبار كليات طب الأسنان في المنطقة، تخصص الدكتور محفوظ في طب الأسنان التجميلي والترميمي مع شغف كبير بدمج التكنولوجيا في العلاج.' 
                : 'A graduate of leading dental schools in the region, Dr. Mahfoud specializes in cosmetic and restorative dentistry with a passion for integrating technology into treatment.'}
            </p>
            <p>
              {language === 'AR'
                ? 'يسعى دائماً لتوفير بيئة هادئة ومطمئنة للمرضى، خاصة أولئك الذين يعانون من فوبيا عيادات الأسنان، باستخدام أحدث تقنيات التخدير الرقمي والعلاجات الليزرية.'
                : 'He always strives to provide a calm and reassuring environment for patients, especially those who suffer from dental phobia, using the latest digital anesthesia techniques and laser treatments.'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-black text-dental-600">99%</p>
              <p className="text-sm font-bold text-gray-500">{language === 'AR' ? 'رضا المرضى' : 'Patient Satisfaction'}</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-3xl font-black text-dental-600">+10k</p>
              <p className="text-sm font-bold text-gray-500">{language === 'AR' ? 'عملية ناجحة' : 'Successful Cases'}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Working Hours */}
      <section className="bg-dental-900 rounded-[60px] p-12 lg:p-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-dental-800 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-black">{language === 'AR' ? 'ساعات العمل' : 'Working Hours'}</h2>
            <p className="text-dental-300 text-lg max-w-md">
              {language === 'AR' 
                ? 'نحن هنا لخدمتك طوال الأسبوع لضمان راحتك وصحة أسنانك في الوقت الذي يناسبك.'
                : 'We are here to serve you throughout the week to ensure your comfort and dental health at your convenience.'}
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-dental-800 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p className="text-xs text-dental-400 font-bold uppercase">{language === 'AR' ? 'اتصل بنا' : 'Call Us'}</p>
                  <p className="text-xl font-bold" dir="ltr">{CLINIC_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-dental-800 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs text-dental-400 font-bold uppercase">WhatsApp</p>
                  <p className="text-xl font-bold" dir="ltr">{CLINIC_INFO.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <div className="flex flex-col gap-4">
              {WORKING_HOURS[language].map((day) => (
                <div key={day.day} className="flex flex-col sm:flex-row justify-between sm:items-center py-4 border-b border-white/10 last:border-0 gap-2">
                  <span className="font-bold text-lg">{day.day}</span>
                  <div className="flex flex-col items-end gap-1">
                    {day.isClosed ? (
                      <span className="px-4 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-bold">
                        {language === 'AR' ? 'مغلق' : 'Closed'}
                      </span>
                    ) : (
                      <div className="flex flex-col items-end gap-0.5">
                        <span className="font-bold text-dental-300 tracking-wider text-sm">
                          {day.morningOpen} - {day.morningClose}
                        </span>
                        <span className="font-bold text-dental-300 tracking-wider text-sm">
                          {day.eveningOpen} - {day.eveningClose}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
