
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../constants';

const StatusBadge: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 5 = Friday, etc.
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMinutes = hour * 60 + minutes;
      
      // Friday is closed
      if (day === 5) {
        setIsOpen(false);
        return;
      }

      // Check morning shift: 8:30 - 12:30
      const morningStart = 8 * 60 + 30;
      const morningEnd = 12 * 60 + 30;

      // Check evening shift: 16:30 - 21:00
      const eveningStart = 16 * 60 + 30;
      const eveningEnd = 21 * 60 + 0;

      const isMorning = currentTimeInMinutes >= morningStart && currentTimeInMinutes < morningEnd;
      const isEvening = currentTimeInMinutes >= eveningStart && currentTimeInMinutes < eveningEnd;

      setIsOpen(isMorning || isEvening);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${
      isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
    }`}>
      <span className={`w-2 h-2 rounded-full animate-pulse ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
      {isOpen ? (language === 'AR' ? 'مفتوح الآن' : 'Open Now') : (language === 'AR' ? 'مغلق حالياً' : 'Closed Now')}
    </div>
  );
};

export default StatusBadge;
