
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC_INFO, TRANSLATIONS, SERVICES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].form;
  const sec = TRANSLATIONS[language].contact_sec;
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[language][0].title,
    date: '',
    time: '',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // إعداد رسالة الواتساب بالتنسيق الجديد المطلوب
    const whatsappNumber = CLINIC_INFO.whatsapp.replace('+', '');
    
    const text = language === 'AR' 
      ? `مرحباً عيادة الدكتور محفوظ، أود حجز موعد جديد:

👤 *المريض* : ${formData.name}
📞 *الهاتف* : ${formData.phone}
🏥 *الخدمة* : ${formData.service}
📅 *التاريخ* : ${formData.date}
🕒 *الوقت* : ${formData.time}
💬 *رسالة* : ${formData.message || 'لا يوجد'}

_يرجى تأكيد الحجز فوراً_`
      : `Hello Dr. Mahfoud Clinic, I would like to book a new appointment:

👤 *Patient* : ${formData.name}
📞 *Phone* : ${formData.phone}
🏥 *Service* : ${formData.service}
📅 *Date* : ${formData.date}
🕒 *Time* : ${formData.time}
💬 *Message* : ${formData.message || 'N/A'}

_Please confirm the booking immediately_`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormState('success');
    }, 400);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <div className="text-center py-16 flex flex-col gap-4">
        <span className="text-dental-600 font-bold tracking-widest text-sm uppercase">{sec.badge}</span>
        <h2 className="text-5xl font-black text-gray-900">{sec.title}</h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="glass p-8 rounded-[40px] flex flex-col gap-8 shadow-xl border-white">
            <h3 className="text-2xl font-black text-gray-900">{sec.info}</h3>
            <div className="flex flex-col gap-6">
              <a href={`tel:${CLINIC_INFO.phone}`} className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-dental-100 text-dental-600 rounded-2xl flex items-center justify-center text-xl transition-transform group-hover:rotate-12">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">{language === 'AR' ? 'اتصل بنا' : 'Call Us'}</p>
                  <p className="text-lg font-black text-gray-900" dir="ltr">{CLINIC_INFO.phone}</p>
                </div>
              </a>
              <a href={`https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}`} className="flex items-center gap-5 group" target="_blank" rel="noreferrer">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:rotate-12">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">WhatsApp</p>
                  <p className="text-lg font-black text-gray-900" dir="ltr">{CLINIC_INFO.whatsapp}</p>
                </div>
              </a>
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-xl transition-transform group-hover:rotate-12">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">{language === 'AR' ? 'الموقع' : 'Location'}</p>
                  <p className="text-lg font-black text-gray-900 leading-snug">{CLINIC_INFO.address[language]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-2xl border border-gray-100 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {formState !== 'success' ? (
                <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }} onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700 px-1">{t.name}</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.namePlaceholder} 
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-dental-300 transition-all" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700 px-1">{t.phone}</label>
                      <input 
                        required 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+968xxxxxx" 
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-dental-300 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700 px-1">{t.service}</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-dental-300 transition-all appearance-none cursor-pointer"
                      >
                        {SERVICES[language].map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-700 px-1">{t.date}</label>
                      <input 
                        required 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-dental-300 transition-all cursor-pointer" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700 px-1">{t.time}</label>
                    <input 
                      required 
                      type="time" 
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-dental-300 transition-all cursor-pointer" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700 px-1">{t.message}</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3} 
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-dental-300 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === 'submitting'} 
                    type="submit" 
                    className="w-full py-5 bg-dental-600 text-white rounded-3xl font-black text-xl shadow-2xl transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-3 hover:bg-dental-700"
                  >
                    {formState === 'submitting' ? (
                      <><i className="fas fa-circle-notch animate-spin"></i> جارِ التحويل...</>
                    ) : (
                      <>{t.submit} <i className="fab fa-whatsapp text-2xl ml-2"></i></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-20 text-center gap-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-5xl shadow-inner animate-bounce">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900">{t.success}</h3>
                  <p className="text-gray-500 max-w-xs">{language === 'AR' ? 'تم فتح واتساب لإرسال تفاصيل حجزك للطبيب.' : 'WhatsApp opened to send your booking details to the doctor.'}</p>
                  <button onClick={() => setFormState('idle')} className="mt-4 px-10 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold transition-all">
                    {language === 'AR' ? 'حجز موعد آخر' : 'Book Another'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
