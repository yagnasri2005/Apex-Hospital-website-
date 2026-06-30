import React, { useState } from 'react';
import { HeartPulse, Mail, Phone, MapPin, Clock, Send, ShieldCheck, CheckCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const quickLinks = [
    { label: 'About Our Hospital', value: 'about' },
    { label: 'Medical Departments', value: 'departments' },
    { label: 'Search Doctors', value: 'doctors' },
    { label: 'Specialized Services', value: 'services' },
    { label: 'Hospital Facilities', value: 'facilities' },
    { label: 'Health Packages', value: 'packages' },
  ];

  const assistanceLinks = [
    { label: 'Patient Testimonials', value: 'testimonials' },
    { label: 'Blog & Health Articles', value: 'blog' },
    { label: 'Contact & Location', value: 'contact' },
    { label: 'Online Booking Form', value: 'contact' }, // contact contains booking form
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-slate-800 pb-12 mb-12">
          
          {/* Col 1: About & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center text-white">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                ApexCare <span className="text-teal-400 font-normal">Hospital</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serving our community since 1994, ApexCare Hospital is committed to delivering world-class clinical expertise, advanced medical diagnostics, and warm, compassionate patient care.
            </p>
            <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-800 p-2.5 rounded-xl text-xs">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span className="text-slate-400">Joint Commission International Accredited</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.value)}
                    className="hover:text-teal-400 transition flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Assistance & Patient resources */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2">Patient Help</h4>
            <ul className="space-y-2.5 text-xs">
              {assistanceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.value)}
                    className="hover:text-teal-400 transition flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-teal-500 pl-2">Newsletter</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get seasonal health articles, immunization notices, and free community checkup schedules.
            </p>

            {isSubscribed ? (
              <div className="bg-slate-800/80 border border-teal-500/30 text-teal-400 p-3 rounded-xl flex items-center gap-2 text-xs">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Subscription confirmed! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex relative mt-2">
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 focus:border-teal-500 rounded-xl focus:outline-none text-xs text-slate-100 placeholder-slate-500 transition pr-10"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 p-1.5 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Middle row: Address & Contact stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-slate-800 pb-12 mb-12 text-xs text-slate-400">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-xs">ApexCare Campus</p>
              <p className="mt-1 leading-relaxed">100 Medical Plaza Blvd, Suite 200,<br />San Francisco, CA 94143</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-xs">Standard Consultation Hours</p>
              <p className="mt-1 leading-relaxed">Monday to Friday: 8:00 AM - 8:00 PM<br />Saturday: 9:00 AM - 4:00 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white text-xs">Inquiries & Desk Support</p>
              <p className="mt-1 font-semibold text-slate-200">+1 (555) 019-9000</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Non-emergency inquiries</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-red-950/30 border border-red-900/30 p-3.5 rounded-xl">
            <Phone className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-200 text-xs">Emergency Hotline 24/7</p>
              <p className="mt-1 font-extrabold text-red-400 text-sm leading-none">+1 (555) 019-9111</p>
              <p className="text-[10px] text-red-300 mt-1">Direct to ambulance dispatch</p>
            </div>
          </div>
        </div>

        {/* Lower footer copyright */}
        <div className="border-t border-slate-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-6">
          <div className="flex gap-6 uppercase tracking-wider text-[10px] font-bold">
            <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="#patient-rights" className="hover:text-white transition">Patient Rights</a>
            <a href="#hipaa" className="hover:text-white transition">HIPAA Compliance</a>
            <a href="#terms" className="hover:text-white transition">Terms of Use</a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-[10px] tracking-wide text-slate-400">© {new Date().getFullYear()} APEXCARE HOSPITAL. ALL RIGHTS RESERVED.</span>
            <div className="bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-800/30 text-teal-300 font-extrabold flex items-center gap-2 tracking-wide text-[10px] select-none">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              SYSTEMS ONLINE
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
