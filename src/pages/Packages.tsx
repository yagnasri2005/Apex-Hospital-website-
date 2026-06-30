import { PACKAGES } from '../data/mockData';
import { Check, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { Package } from '../types';

interface PackagesProps {
  onBookPackage: (pkg: Package) => void;
  onNavigateToBooking: () => void;
}

export default function Packages({ onBookPackage, onNavigateToBooking }: PackagesProps) {
  const handleSelectPackage = (pkg: Package) => {
    onBookPackage(pkg);
    onNavigateToBooking();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-16">
      
      {/* Title */}
      <section className="text-center max-w-2xl mx-auto space-y-2 mt-4">
        <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Preventative Care
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Proactive Health Screening Packages
        </h1>
        <p className="text-slate-500 text-sm">
          Select from our scientifically designed wellness packages to verify metabolic pathways, examine heart resilience, and protect your long-term vitality.
        </p>
      </section>

      {/* Packages Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {PACKAGES.map((pkg) => {
          const isGold = pkg.id === 'comprehensive-gold';
          return (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-between border relative transition ${
                isGold
                  ? 'border-teal-500 shadow-xl shadow-teal-50/50 scale-102 lg:-translate-y-2'
                  : 'border-slate-100 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Recommended Ribbon */}
              {isGold && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-3.5 py-1 rounded-full text-[10px] font-bold bg-teal-600 text-white shadow-xs uppercase tracking-wider">
                  Most Popular Audit
                </span>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-slate-950">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[36px]">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 border-y border-slate-50 py-4">
                  <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                  <span className="text-xs text-slate-400 font-semibold">/ Single Audit</span>
                </div>

                {/* Features checklist */}
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Included Biomarkers:</p>
                  <ul className="space-y-2">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-600 flex items-start gap-2 font-medium">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="border-t border-slate-50 mt-8 pt-6 space-y-4">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-normal">
                  <span className="font-bold text-slate-600">Best For:</span> {pkg.recommendedFor}
                </div>
                
                <button
                  onClick={() => handleSelectPackage(pkg)}
                  className={`w-full py-3 rounded-xl font-extrabold text-xs transition ${
                    isGold
                      ? 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-md shadow-teal-100'
                      : 'bg-slate-900 hover:bg-slate-950 text-white'
                  }`}
                >
                  Schedule This Audit
                </button>
              </div>

            </div>
          );
        })}
      </section>

      {/* Insurance disclosure */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 text-center max-w-4xl mx-auto">
        <p className="text-xs text-slate-500 leading-relaxed">
          <span className="font-bold text-slate-600">Please Note:</span> Preventive checkup packages may be partially or fully covered by your insurance provider if scheduled under primary care referrals. Speak with our reception desk at <span className="font-bold text-slate-700">+1 (555) 019-9000</span> to request itemized bills.
        </p>
      </section>

    </div>
  );
}
