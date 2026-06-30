import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import MyBookings from '../components/MyBookings';
import { FAQS } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronDown, CheckCircle, Send, HelpCircle, Calendar, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  preselectedDoctorId?: string;
  onClearPreselectedDoctor?: () => void;
}

export default function Contact({ preselectedDoctorId, onClearPreselectedDoctor }: ContactProps) {
  // Tabs: 'book' | 'my-bookings'
  const [activeTab, setActiveTab] = useState<'book' | 'my-bookings'>(preselectedDoctorId ? 'book' : 'book');
  
  // FAQ expanded state
  const [expandedFaqIdx, setExpandedFaqIdx] = useState<number | null>(0);

  // Message Form State
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgContent, setMsgContent] = useState('');
  const [msgSuccess, setMsgSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgName.trim() || !msgEmail.trim() || !msgContent.trim()) return;

    setIsSending(true);
    setTimeout(() => {
      setMsgSuccess(true);
      setMsgName('');
      setMsgEmail('');
      setMsgContent('');
      setIsSending(false);
      setTimeout(() => setMsgSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-16">
      
      {/* Title */}
      <section className="text-center max-w-2xl mx-auto space-y-2 mt-4">
        <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Connect with Us
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Patient Care & Consultations Desk
        </h1>
        <p className="text-slate-500 text-sm">
          Book immediate doctor visits, monitor scheduled checklists, or submit general clinic inquiries to our administrators.
        </p>
      </section>

      {/* Appointment and Consultation Center */}
      <section className="space-y-6">
        {/* Toggle Selector */}
        <div className="flex justify-center">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1 shadow-inner border border-slate-200/50">
            <button
              onClick={() => {
                setActiveTab('book');
                if (onClearPreselectedDoctor) onClearPreselectedDoctor();
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'book'
                  ? 'bg-white text-teal-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" /> Book Consultation
            </button>
            <button
              onClick={() => {
                setActiveTab('my-bookings');
                if (onClearPreselectedDoctor) onClearPreselectedDoctor();
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'my-bookings'
                  ? 'bg-white text-teal-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" /> My Reservations
            </button>
          </div>
        </div>

        {/* Tab contents */}
        <div className="transition-all duration-300">
          <AnimatePresence mode="wait">
            {activeTab === 'book' ? (
              <motion.div
                key="book-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <BookingForm
                  preselectedDoctorId={preselectedDoctorId}
                  onViewBookings={() => setActiveTab('my-bookings')}
                />
              </motion.div>
            ) : (
              <motion.div
                key="bookings-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <MyBookings onBackToBooking={() => setActiveTab('book')} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Grid: Map, General Inquiry, & FAQ */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Coordinates & custom map & Enquiry Form */}
        <div className="lg:col-span-6 space-y-10">
          
          {/* Custom Stylized Vector Map */}
          <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <MapPin className="text-teal-600 w-4 h-4" /> ApexCare Campus Location
            </h3>

            {/* Simulated Clean vector map widget */}
            <div className="relative h-60 bg-teal-50/50 border border-teal-100 rounded-2xl overflow-hidden flex flex-col justify-between p-4">
              {/* grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#99f6e4_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>
              
              {/* Draw some road vectors */}
              <div className="absolute left-0 right-0 top-1/2 h-8 bg-white/70 -translate-y-1/2 flex items-center justify-center border-y border-teal-100/40">
                <span className="text-[9px] font-black tracking-widest text-teal-600 font-mono select-none uppercase">MEDICAL PLAZA BLVD</span>
              </div>
              <div className="absolute top-0 bottom-0 left-1/3 w-8 bg-white/70 flex items-center justify-center border-x border-teal-100/40">
                <span className="text-[9px] font-black tracking-widest text-teal-600 font-mono select-none uppercase rotate-90 whitespace-nowrap">Gate 2 Access</span>
              </div>

              {/* Pin node of ApexCare */}
              <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-center z-10 space-y-1">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white animate-bounce">
                  <HeartPulse className="w-4 h-4 animate-pulse" />
                </div>
                <div className="bg-slate-900/90 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap border border-slate-800">
                  ApexCare Campus (Gate 1 Main)
                </div>
              </div>

              {/* Transit coordinate note lower left */}
              <div className="absolute bottom-3 left-3 bg-white/95 border border-slate-100 rounded-lg p-2 shadow-xs text-[10px] space-y-0.5">
                <p className="font-bold text-slate-700">Subway/Muni Station</p>
                <p className="text-slate-500 leading-none">Medical Center (Line 4) • 2 min walk</p>
              </div>

              {/* Coordinates upper right */}
              <div className="absolute top-3 right-3 text-right font-mono text-[9px] font-bold text-slate-400">
                Lat: 37.7631° N<br />Lon: 122.4430° W
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
              We are located directly adjacent to the San Francisco General Medical reserves. Parking vouchers are fully validated for patients under treatment.
            </p>
          </div>

          {/* General Inquiry Message Form */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">Send a Non-Medical Message</h3>
              <p className="text-xs text-slate-500 mt-1">If you have general billing questions or need employment files, message our admin desks.</p>
            </div>

            {msgSuccess ? (
              <div className="bg-teal-50 border border-teal-100 text-teal-800 p-4 rounded-xl flex items-start gap-3 text-xs">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Inquiry Transmitted Successfully!</p>
                  <p className="text-slate-500 mt-1">Our administrative coordinator will review your ticket and reach out within 24 business hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">My Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={msgName}
                      onChange={(e) => setMsgName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 rounded-xl focus:outline-none text-xs text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">My Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={msgEmail}
                      onChange={(e) => setMsgEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 rounded-xl focus:outline-none text-xs text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">My Message / Inquiry details</label>
                  <textarea
                    required
                    placeholder="Enter your general query or feedback..."
                    value={msgContent}
                    onChange={(e) => setMsgContent(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 rounded-xl focus:outline-none text-xs text-slate-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3 rounded-xl text-xs font-bold text-white transition flex items-center justify-center gap-1.5 shadow-md ${
                    isSending
                      ? 'bg-teal-400 cursor-wait'
                      : 'bg-slate-900 hover:bg-slate-950 hover:shadow-lg'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSending ? 'Sending Message...' : 'Transmit Message'}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Right Column: FAQs Accordion List */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 mb-2 border-b border-slate-100 pb-3">
            <HelpCircle className="w-5 h-5 text-teal-600" />
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isExpanded = expandedFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs transition"
                >
                  <button
                    onClick={() => setExpandedFaqIdx(isExpanded ? null : idx)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition gap-4"
                  >
                    <span className="text-xs font-bold text-slate-800">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition ${isExpanded ? 'rotate-180 text-teal-600' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-slate-50 text-xs text-slate-500 leading-relaxed font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick Metrics Call Card */}
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            <h4 className="text-sm font-bold tracking-tight mb-2">Need Direct Desk Assistance?</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              If your inquiry is time-sensitive or involves physical documentation, contact our core clinical desks for support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
                <Phone className="w-4 h-4 text-teal-300 shrink-0" />
                <div>
                  <p className="text-[10px] text-teal-200">Phone Helpdesk</p>
                  <p>+1 (555) 019-9000</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
                <Mail className="w-4 h-4 text-teal-300 shrink-0" />
                <div>
                  <p className="text-[10px] text-teal-200">Email Address</p>
                  <p>support@apexcare.org</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
