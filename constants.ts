
import { Service, Review, WorkingHour, Language } from './types';

export const CLINIC_INFO = {
  name: "عيادة أسنان محفوظ",
  doctor: "د. محفوظ",
  phone: "+96896213999",
  whatsapp: "+96896213999",
  address: {
    AR: "عمان، صور، 23",
    EN: "Oman, Sur, 23"
  },
  googleMaps: "https://maps.app.goo.gl/ksdLkR3ZibRNExd56",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58726.7735247854!2d59.4939023!3d22.5663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e858718919f2f17%3A0xa59c40336294d306!2sSur!5e0!3m2!1sen!2som!4v1700000000000!5m2!1sen!2som"
};

export const TRANSLATIONS = {
  AR: {
    nav: { home: "الرئيسية", about: "من نحن", book: "حجز موعد" },
    hero: {
      badge: "مفتوح الآن",
      title1: "نصنع لك ابتسامة",
      title2: "تنبض بالحياة",
      desc: "عيادة الدكتور محفوظ توفر لك أحدث الحلول الرقمية لطب الأسنان، لتجربة علاجية فاخرة ومريحة تليق بك.",
      cta: "إحجز موعدك الآن",
      services: "خدماتنا",
      happyPatients: "+500 عميل سعيد"
    },
    services_sec: { badge: "خدماتنا المتميزة", title: "نعتني بكل تفاصيل ابتسامتك" },
    reviews_sec: { badge: "آراء عملائنا", title: "ماذا يقولون عن عيادتنا؟", basedOn: "بناءً على 150+ تقييم" },
    contact_sec: { badge: "احجز الآن", title: "خطوتك الأولى نحو ابتسامة مثالية", info: "معلومات التواصل" },
    form: {
      name: "الاسم الكامل",
      namePlaceholder: "أدخل اسمك هنا",
      phone: "رقم الهاتف",
      service: "نوع الخدمة",
      date: "التاريخ المفضل",
      time: "الوقت المفضل",
      message: "رسالة إضافية",
      submit: "تأكيد الحجز عبر واتساب",
      success: "تم استلام طلبك بنجاح!"
    },
    chatbot: {
      welcome: "مرحبا 👋 حياك الله في عيادة محفوظ لطب الأسنان 🦷 كيف نقدر نساعدك اليوم؟",
      book: "أحب أحجز موعد",
      prices: "أبغى أعرف الأسعار",
      location: "وين موقع العيادة؟",
      book_res: "يسعدنا خدمتك! يمكنك اختيار الموعد المناسب لك مباشرة عبر الضغط على الزر أدناه:",
      prices_res: "للحصول على قائمة الأسعار التفصيلية واستشارة أولية، يرجى التواصل مباشرة مع الطبيب عبر واتساب:",
      location_res: "موقعنا في سلطنة عمان، مدينة صور. يسعدنا تشريفك لنا، يمكنك اتباع الخريطة للوصول إلينا بسهولة:",
      cta_book: "احجز الآن",
      cta_wa: "تواصل مع الطبيب",
      cta_map: "موقع العيادة"
    }
  },
  EN: {
    nav: { home: "Home", about: "About Us", book: "Book Now" },
    hero: {
      badge: "Open Now",
      title1: "Crafting Smiles",
      title2: "Full of Life",
      desc: "Dr. Mahfoud Clinic provides the latest digital dental solutions for a luxurious and comfortable treatment experience that suits you.",
      cta: "Book Your Appointment",
      services: "Our Services",
      happyPatients: "+500 Happy Clients"
    },
    services_sec: { badge: "Premium Services", title: "We Care For Every Detail Of Your Smile" },
    reviews_sec: { badge: "Patient Reviews", title: "What Do They Say About Us?", basedOn: "Based on 150+ reviews" },
    contact_sec: { badge: "Book Now", title: "Your First Step To A Perfect Smile", info: "Contact Info" },
    form: {
      name: "Full Name",
      namePlaceholder: "Enter your name here",
      phone: "Phone Number",
      service: "Service Type",
      date: "Preferred Date",
      time: "Preferred Time",
      message: "Additional Message",
      submit: "Confirm via WhatsApp",
      success: "Your request has been received!"
    },
    chatbot: {
      welcome: "Hello 👋 Welcome to Dr. Mahfoud Dental Clinic 🦷 How can we help you today?",
      book: "I want to book an appointment",
      prices: "I want to know the prices",
      location: "Where is the clinic located?",
      book_res: "We are happy to serve you! You can choose your appointment directly by clicking below:",
      prices_res: "For detailed pricing and initial consultation, please contact the doctor directly via WhatsApp:",
      location_res: "We are located in Sur, Oman. We'd love to see you, follow the map for directions:",
      cta_book: "Book Now",
      cta_wa: "Contact Doctor",
      cta_map: "Clinic Location"
    }
  }
};

export const SERVICES: Record<Language, Service[]> = {
  AR: [
    { id: "blanchiment", title: "تبييض الأسنان", description: "تبييض احترافي للحصول على ابتسامة مشرقة.", image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "✨" },
    { id: "implants", title: "زراعة الأسنان", description: "استعادة الأسنان المفقودة بشكل دائم.", image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp", icon: "🦷" },
    { id: "orthodontie", title: "تقويم الأسنان", description: "تصحيح اصطفاف الأسنان للأطفال والكبار.", image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "📏" },
    { id: "soins", title: "علاج التسوس", description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان.", image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg", icon: "🛡️" },
    { id: "detartrage", title: "تنظيف الأسنان", description: "إزالة الجير والبلاك للحفاظ على صحة اللثة.", image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp", icon: "🧼" },
    { id: "extraction", title: "خلع الأسنان", description: "خلع آمن للأسنان المتضررة مع عناية خاصة.", image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg", icon: "🗜️" }
  ],
  EN: [
    { id: "blanchiment", title: "Teeth Whitening", description: "Professional whitening for a bright smile.", image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "✨" },
    { id: "implants", title: "Dental Implants", description: "Permanent restoration of missing teeth.", image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp", icon: "🦷" },
    { id: "orthodontie", title: "Orthodontics", description: "Correcting tooth alignment for all ages.", image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800", icon: "📏" },
    { id: "soins", title: "Caries Treatment", description: "Painless treatment for sensitive teeth.", image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg", icon: "🛡️" },
    { id: "detartrage", title: "Cleaning & Scaling", description: "Removing plaque for gum health.", image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp", icon: "🧼" },
    { id: "extraction", title: "Tooth Extraction", description: "Safe extraction with special post-care.", image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg", icon: "🗜️" }
  ]
};

export const REVIEWS: Record<Language, Review[]> = {
  AR: [
    { id: 1, author: "أحمد العبري", rating: 5, comment: "أفضل عيادة تعاملت معها، دقة في المواعيد ومهارة عالية.", time: "قبل أسبوع", avatar: "https://picsum.photos/id/64/100/100" },
    { id: 2, author: "فاطمة البلوشي", rating: 5, comment: "المكان نظيف جداً والأدوات حديثة. شعرت براحة تامة.", time: "قبل شهر", avatar: "https://picsum.photos/id/65/100/100" }
  ],
  EN: [
    { id: 1, author: "Ahmed Al-Abri", rating: 5, comment: "The best clinic I have dealt with, high precision and skill.", time: "1 week ago", avatar: "https://picsum.photos/id/64/100/100" },
    { id: 2, author: "Fatima Al-Balushi", rating: 5, comment: "Very clean place and modern tools. Felt completely comfortable.", time: "1 month ago", avatar: "https://picsum.photos/id/65/100/100" }
  ]
};

const commonHours = {
  morningOpen: "08:30",
  morningClose: "12:30",
  eveningOpen: "16:30",
  eveningClose: "21:00"
};

export const WORKING_HOURS: Record<Language, WorkingHour[]> = {
  AR: [
    { day: "الأحد", ...commonHours },
    { day: "الاثنين", ...commonHours },
    { day: "الثلاثاء", ...commonHours },
    { day: "الأربعاء", ...commonHours },
    { day: "الخميس", ...commonHours },
    { day: "السبت", ...commonHours },
    { day: "الجمعة", morningOpen: "", morningClose: "", eveningOpen: "", eveningClose: "", isClosed: true }
  ],
  EN: [
    { day: "Sunday", ...commonHours },
    { day: "Monday", ...commonHours },
    { day: "Tuesday", ...commonHours },
    { day: "Wednesday", ...commonHours },
    { day: "Thursday", ...commonHours },
    { day: "Saturday", ...commonHours },
    { day: "Friday", morningOpen: "", morningClose: "", eveningOpen: "", eveningClose: "", isClosed: true }
  ]
};
