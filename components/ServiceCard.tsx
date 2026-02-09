
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Service } from '../types';
import { CLINIC_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const { language } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.05, 1]);

  const whatsappNumber = CLINIC_INFO.whatsapp.replace('+', '');
  const message = encodeURIComponent(`مرحباً عيادة محفوظ، أود الاستفسار عن خدمة ${service.title}`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      onClick={handleClick}
      className="group relative h-[420px] overflow-hidden rounded-[32px] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
    >
      <div className="absolute inset-0 overflow-hidden bg-gray-50">
        <motion.img style={{ y, scale }} src={service.image} alt={service.title} className="w-full h-[115%] object-cover object-center transition-all duration-700 group-hover:brightness-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
      </div>

      <div className="absolute top-6 left-6 w-10 h-10 bg-white/10 backdrop-blur-md text-white rounded-xl flex items-center justify-center shadow-lg border border-white/20 transform transition-all duration-500 group-hover:bg-green-500 group-hover:scale-110 z-20">
        <i className="fab fa-whatsapp text-base"></i>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col gap-3 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-xl shadow-lg border border-white/10">
            {service.icon}
          </div>
          <h3 className="text-xl font-black text-white drop-shadow-md">{service.title}</h3>
        </div>
        
        <div className="overflow-hidden">
          <p className="text-white/90 text-xs font-medium leading-relaxed translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {service.description}
          </p>
        </div>

        <div className="mt-2 w-full py-3 bg-white text-dental-900 rounded-xl font-black text-[12px] transition-all hover:bg-dental-50 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 flex items-center justify-center gap-2 shadow-xl">
          {language === 'AR' ? 'احجز موعدك الآن' : 'Book Your Appointment'} <i className="fab fa-whatsapp text-base text-green-500 ml-2"></i>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
