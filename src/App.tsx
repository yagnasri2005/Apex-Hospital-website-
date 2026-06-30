import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Facilities from './pages/Facilities';
import Packages from './pages/Packages';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Types
import { Package } from './types';

// Icons & Animation
import { MessageSquare, ArrowUp, X, Phone, HeartPulse, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Navigation & Page State
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [selectedDeptId, setSelectedDeptId] = useState<string>('');
  const [selectedArticleId, setSelectedArticleId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Accessibility State (Stored in localStorage for persistence!)
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>(() => {
    return (localStorage.getItem('apexcare_font_size') as any) || 'normal';
  });
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return localStorage.getItem('apexcare_high_contrast') === 'true';
  });

  // Floating Widgets State
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [showWhatsAppChat, setShowWhatsAppChat] = useState<boolean>(false);
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(() => {
    return localStorage.getItem('apexcare_cookie_dismissed') !== 'true';
  });

  // WhatsApp Chat Messages State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Hello! I am your ApexCare Patient Assistant. How can we help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  // Persist Accessibility Choices
  useEffect(() => {
    localStorage.setItem('apexcare_font_size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('apexcare_high_contrast', String(highContrast));
  }, [highContrast]);

  // Handle Scroll to Top Display
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDoctorForBooking = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
  };

  const handleSelectDepartment = (deptId: string) => {
    setSelectedDeptId(deptId);
  };

  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
  };

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  const handleNavigateToDoctorsWithFilter = (deptId: string) => {
    setSelectedDeptId(deptId);
    handleNavigate('doctors');
  };

  const handleBookPackage = (pkg: Package) => {
    // Save chosen package description into preselected details
    // We can simulate preselecting doctor based on dept or setting symptom
    setSelectedDoctorId(''); // no doctor preselected, just general
    // We can set symptom context
  };

  const dismissCookieConsent = () => {
    localStorage.setItem('apexcare_cookie_dismissed', 'true');
    setShowCookieConsent(false);
  };

  // WhatsApp Assistant Automated Responses
  const triggerChatOption = (option: string, replyText: string) => {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { sender: 'user' as const, text: option, time: timeNow };
    
    setChatMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const botMsg = { sender: 'bot' as const, text: replyText, time: timeNow };
      setChatMessages(prev => [...prev, botMsg]);
    }, 700);
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            onNavigate={handleNavigate}
            onSelectDoctor={(id) => {
              handleSelectDoctorForBooking(id);
              handleNavigate('doctors'); // open doctor biography
            }}
            onSelectDepartment={(id) => {
              handleSelectDepartment(id);
              handleNavigate('departments'); // open department detail
            }}
            onSelectArticle={(id) => {
              handleSelectArticle(id);
              handleNavigate('blog'); // open blog details
            }}
          />
        );
      case 'about':
        return <About />;
      case 'departments':
        return (
          <Departments
            selectedDeptId={selectedDeptId}
            onSelectDepartment={handleSelectDepartment}
            onNavigateToDoctorsWithFilter={(deptId) => {
              setSelectedDeptId(deptId);
              handleNavigate('doctors');
            }}
            onNavigateToBooking={(deptId) => {
              if (deptId) setSelectedDeptId(deptId);
              setSelectedDoctorId('');
              handleNavigate('contact');
            }}
          />
        );
      case 'doctors':
        return (
          <Doctors
            initialFilterDeptId={selectedDeptId}
            initialSearchQuery={searchQuery}
            onSelectDoctorForBooking={handleSelectDoctorForBooking}
            onNavigateToBooking={() => handleNavigate('contact')}
          />
        );
      case 'services':
        return <Services />;
      case 'facilities':
        return <Facilities />;
      case 'packages':
        return (
          <Packages
            onBookPackage={handleBookPackage}
            onNavigateToBooking={() => handleNavigate('contact')}
          />
        );
      case 'testimonials':
        return <Testimonials />;
      case 'blog':
        return (
          <Blog
            selectedArticleId={selectedArticleId}
            onSelectArticle={handleSelectArticle}
          />
        );
      case 'contact':
        return (
          <Contact
            preselectedDoctorId={selectedDoctorId}
            onClearPreselectedDoctor={() => setSelectedDoctorId('')}
          />
        );
      default:
        return <Home onNavigate={handleNavigate} onSelectDoctor={handleSelectDoctorForBooking} onSelectDepartment={handleSelectDepartment} onSelectArticle={handleSelectArticle} />;
    }
  };

  // Dynamic CSS Style for Font Resizing
  const getFontSizeStyle = () => {
    if (fontSize === 'large') return { fontSize: '18px' };
    if (fontSize === 'extra-large') return { fontSize: '20px' };
    return { fontSize: '16px' }; // base HTML 16px
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        highContrast
          ? 'bg-zinc-950 text-white'
          : 'bg-slate-50 text-slate-900'
      }`}
      style={getFontSizeStyle()}
    >
      
      {/* 1. Header / Sticky Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSelectDepartment={handleSelectDepartment}
        onSearchQuery={handleSearchQuery}
        fontSize={fontSize}
        setFontSize={setFontSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />

      {/* 2. Main content rendering with motion animation */}
      <main className="flex-grow pt-6 md:pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Helpers Tray */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        
        {/* Scroll To Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`p-3 rounded-full text-white shadow-xl hover:-translate-y-0.5 transition ${
                highContrast ? 'bg-yellow-500 text-black border border-yellow-400' : 'bg-teal-600 hover:bg-teal-700'
              }`}
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Bubble */}
        <button
          onClick={() => setShowWhatsAppChat(!showWhatsAppChat)}
          className={`p-4 rounded-full text-white shadow-xl hover:scale-105 transition flex items-center justify-center relative group ${
            highContrast ? 'bg-black text-yellow-400 border-2 border-yellow-400' : 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-100'
          }`}
          title="Connect with patient assistant"
        >
          <span className="absolute -left-36 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none hidden sm:block">
            ApexCare Desk Online
          </span>
          <MessageSquare className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* WhatsApp Expanded Chat Window */}
        <AnimatePresence>
          {showWhatsAppChat && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-80 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden text-slate-800 flex flex-col h-96"
            >
              {/* Header */}
              <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                    <HeartPulse className="w-5 h-5 text-emerald-100" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-none">ApexCare Assistant</h4>
                    <span className="text-[9px] text-emerald-100 font-semibold flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                      Online & ready
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setShowWhatsAppChat(false)}
                  className="text-emerald-100 hover:text-white transition p-1 rounded-md"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Chat Message Box */}
              <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-slate-50 text-[11px] font-medium max-h-[220px]">
                {chatMessages.map((msg, mIdx) => (
                  <div
                    key={mIdx}
                    className={`flex flex-col max-w-[80%] ${
                      msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl leading-normal ${
                        msg.sender === 'user'
                          ? 'bg-emerald-600 text-white rounded-tr-none'
                          : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none shadow-xs'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[8px] text-slate-400 mt-0.5 px-1 font-semibold">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Prompt Suggestions */}
              <div className="p-3 border-t border-slate-100 bg-white space-y-1.5">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest pl-1">Suggested inquiries:</p>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() =>
                      triggerChatOption(
                        'I want to book an appointment',
                        'Splendid choice! You can schedule consultations in real-time by navigating to our "Contact" tab, choosing a doctor, and securing an available slot instantly.'
                      )
                    }
                    className="w-full text-left px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 rounded-lg text-[10px] font-bold transition border border-slate-100"
                  >
                    📅 How do I schedule an appointment?
                  </button>
                  <button
                    onClick={() =>
                      triggerChatOption(
                        'What is your Emergency Phone number?',
                        'Our dedicated 24/7 Level 1 Trauma Ambulance Dispatch operates direct lines at +1 (555) 019-9111.'
                      )
                    }
                    className="w-full text-left px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 rounded-lg text-[10px] font-bold transition border border-slate-100"
                  >
                    🚨 What is your emergency hotline?
                  </button>
                  <button
                    onClick={() =>
                      triggerChatOption(
                        'Which insurance plans do you accept?',
                        'We partner with Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, and Kaiser Permanente. We suggest coordinating referrals with your carrier!'
                      )
                    }
                    className="w-full text-left px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 text-slate-600 rounded-lg text-[10px] font-bold transition border border-slate-100"
                  >
                    💳 Do you accept health insurance?
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cookie Consent Banner */}
      <AnimatePresence>
        {showCookieConsent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-6 right-6 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 bg-slate-900 border border-slate-800 text-white p-4 rounded-2xl shadow-2xl z-50 flex flex-col sm:flex-row items-center gap-4 max-w-xl text-xs"
          >
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold text-white flex items-center gap-1.5 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-teal-400"></span> Proactive Privacy Compliance
              </p>
              <p className="text-slate-400 leading-normal">
                ApexCare systems use secure, high-integrity local cookies to manage your booked appointments list and persist accessibility settings safely on this browser.
              </p>
            </div>
            <div className="flex gap-2 shrink-0 w-full sm:w-auto justify-end">
              <button
                onClick={dismissCookieConsent}
                className="w-full sm:w-auto px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-extrabold rounded-xl transition shadow-md"
              >
                Accept All Cookies
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
