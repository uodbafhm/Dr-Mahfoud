
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CLINIC_INFO, TRANSLATIONS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
  action?: {
    label: string;
    link: string;
    isExternal?: boolean;
  };
}

const AIChat: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].chatbot;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // إعادة ضبط المحادثة عند تغيير اللغة
  useEffect(() => {
    setMessages([
      { role: 'ai', text: t.welcome }
    ]);
    setShowQuickReplies(true);
  }, [language, t.welcome]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, showQuickReplies]);

  const quickReplies = [
    { id: 'book', text: t.book },
    { id: 'prices', text: t.prices },
    { id: 'location', text: t.location },
  ];

  const handleQuickReply = (reply: { id: string; text: string }) => {
    const userMsg: ChatMessage = { role: 'user', text: reply.text };
    setMessages(prev => [...prev, userMsg]);
    setShowQuickReplies(false);

    setTimeout(() => {
      let aiResponse: ChatMessage;

      switch (reply.id) {
        case 'book':
          aiResponse = {
            role: 'ai',
            text: t.book_res,
            action: { label: t.cta_book, link: '/contact', isExternal: false }
          };
          break;
        case 'prices':
          aiResponse = {
            role: 'ai',
            text: t.prices_res,
            action: { label: t.cta_wa, link: `https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}`, isExternal: true }
          };
          break;
        case 'location':
          aiResponse = {
            role: 'ai',
            text: t.location_res,
            action: { label: t.cta_map, link: CLINIC_INFO.googleMaps, isExternal: true }
          };
          break;
        default:
          aiResponse = { role: 'ai', text: language === 'AR' ? 'كيف أساعدك؟' : 'How can I help you?' };
      }

      setMessages(prev => [...prev, aiResponse]);
    }, 600);
  };

  return (
    <div className={`fixed bottom-8 ${language === 'AR' ? 'right-8' : 'left-8'} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="absolute bottom-20 glass rounded-[40px] shadow-2xl flex flex-col overflow-hidden border-white/50 w-[330px] sm:w-[360px] h-[480px]"
            style={{ [language === 'AR' ? 'right' : 'left']: 0 }}
          >
            <div className="p-5 bg-dental-600 text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-robot text-sm"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xs">{language === 'AR' ? 'مساعد محفوظ الذكي' : 'Mahfoud AI Assistant'}</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-[9px] uppercase font-bold text-dental-100">{language === 'AR' ? 'نشط الآن' : 'Active Now'}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-full">
                <i className="fas fa-times text-xs"></i>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 bg-gray-50/30 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? (language === 'AR' ? 'items-start' : 'items-end') : (language === 'AR' ? 'items-end' : 'items-start')}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-dental-600 text-white' 
                      : 'bg-white text-gray-700 border border-gray-100'
                    }`}
                  >
                    {m.text}
                  </motion.div>
                  {m.action && (
                    <div className="mt-3 w-[85%]">
                      {m.action.isExternal ? (
                        <a href={m.action.link} target="_blank" className="flex items-center justify-center gap-2 w-full py-2.5 bg-dental-600 text-white rounded-xl font-bold text-[11px] shadow-lg">
                          {m.action.label}
                        </a>
                      ) : (
                        <Link to={m.action.link} onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 w-full py-2.5 bg-dental-600 text-white rounded-xl font-bold text-[11px] shadow-lg">
                          {m.action.label}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-2">
                {showQuickReplies ? (
                  <div className="flex flex-col gap-2">
                    {quickReplies.map((reply) => (
                      <button key={reply.id} onClick={() => handleQuickReply(reply)} className="text-right px-4 py-2.5 bg-white border border-dental-100 text-dental-600 rounded-2xl text-[11px] font-bold hover:bg-dental-50 shadow-sm flex items-center justify-between">
                        <span>{reply.text}</span>
                        <i className={`fas ${language === 'AR' ? 'fa-chevron-left' : 'fa-chevron-right'} text-[9px]`}></i>
                      </button>
                    ))}
                  </div>
                ) : (
                  <button onClick={() => setShowQuickReplies(true)} className="w-full py-2 text-gray-400 text-[10px] font-bold hover:text-dental-600">
                    {language === 'AR' ? 'العودة للقائمة' : 'Back to Menu'}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-dental-600 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl relative">
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
      </button>
    </div>
  );
};

export default AIChat;
