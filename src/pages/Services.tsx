import { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { ShieldCheck, HeartPulse, Activity, Sparkles, ChevronDown, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Services() {
  const [expandedSrvId, setExpandedSrvId] = useState<string | null>('emergency-care');

  const otherServices = [
    { name: 'Maternity Care & luxury Birthing', desc: 'Sleek luxury birth chambers with round-the-clock anesthesiologists and expert midwives.', icon: 'Sparkles' },
    { name: 'Advanced Pediatric Ward', desc: 'Colorful child-friendly examination beds and specialized pediatric pulmonology scanners.', icon: 'HeartPulse' },
    { name: 'Cardiology Diagnostics & Cath Labs', desc: 'Advanced dynamic pressure scanning, angiography, and surgical bypass installations.', icon: 'Activity' },
    { name: 'Orthopedic Robotic Surgeries', desc: 'Robotic knee replacements and automated alignment monitors to improve post-surgical mobility.', icon: 'ShieldCheck' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-16">
      
      {/* Title block */}
      <section className="text-center max-w-2xl mx-auto space-y-2 mt-4">
        <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Hospital Capabilities
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Comprehensive Medical & Emergency Services
        </h1>
        <p className="text-slate-500 text-sm">
          ApexCare provides comprehensive, round-the-clock clinical services including high-level trauma surgeries, automated diagnostics, and physical therapy.
        </p>
      </section>

      {/* Featured Capabilities - Accordion Details */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Accordions */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-2 border-b border-slate-100 pb-2">Core Clinical Departments</h2>
          {SERVICES.map((srv) => {
            const isExpanded = expandedSrvId === srv.id;
            return (
              <div
                key={srv.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs transition"
              >
                <button
                  onClick={() => setExpandedSrvId(isExpanded ? null : srv.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">{srv.name}</h3>
                      <p className="text-[11px] text-slate-400 font-medium">{srv.description.slice(0, 50)}...</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition ${isExpanded ? 'rotate-180 text-teal-600' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-slate-50 space-y-4">
                        <p className="text-xs text-slate-500 leading-relaxed pt-2">
                          {srv.description}
                        </p>
                        
                        <div className="space-y-2">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Included clinical divisions:</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {srv.details.map((detail, index) => (
                              <div key={index} className="flex items-center gap-2 text-xs text-slate-700">
                                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                                <span className="font-semibold">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Grid right */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 space-y-6">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2">Support & Auxiliary Operations</h3>
            <div className="space-y-4">
              {otherServices.map((o, idx) => (
                <div key={idx} className="flex gap-3 items-start bg-white p-3.5 border border-slate-100 rounded-xl shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
                    {o.icon === 'Sparkles' && <Sparkles className="w-4 h-4" />}
                    {o.icon === 'HeartPulse' && <HeartPulse className="w-4 h-4" />}
                    {o.icon === 'Activity' && <Activity className="w-4 h-4" />}
                    {o.icon === 'ShieldCheck' && <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-slate-800">{o.name}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Disclosures banner */}
      <section className="bg-teal-50 border border-teal-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl text-center md:text-left">
          <h4 className="text-sm font-bold text-slate-950">Patient Safety is Our Core Promise</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            All procedural services undergo double-verify checklists compliant with Joint Commission International regulations. If you require emergency diagnostics or have surgery concerns, speak with our clinical advocacy desk.
          </p>
        </div>
        <a
          href="tel:+15550199000"
          className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs rounded-xl shrink-0 transition shadow-sm"
        >
          Speak with Patient Advocacy
        </a>
      </section>

    </div>
  );
}
