import { Activity, ShieldCheck, HeartPulse, Sparkles, Building, Phone } from 'lucide-react';

export default function Facilities() {
  const items = [
    {
      title: 'Robotic Surgery Suites',
      desc: 'Our operating theatres are commissioned with robotic consoles enabling minimally invasive procedures, high visual magnification, and sub-millimeter precision.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600',
      specs: ['DaVinci Robotic Surgical Arms', 'HD 3D Endoscopic Cameras', 'HEPA laminar airflow purification']
    },
    {
      title: 'Advanced Intensive Care Units',
      desc: 'Our Level III ICU and Neonatal (NICU) wings feature customized patient monitors, backup oxygen lines, and round-the-clock intensive criticalists.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
      specs: ['Continuous Hemodynamic tracking', 'Pediatric incubators & warmers', '1:1 patient-to-nurse critical ratio']
    },
    {
      title: 'Automated Diagnostic Labs',
      desc: 'On-campus pathology and imaging suites equipped with 3T MRI, 128-Slice CT, and state-of-the-art biochemistry analyzers providing swift processing.',
      image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600',
      specs: ['High-contrast 3T MRI scanners', 'Fully computerized blood profiles', 'Expedited diagnostic digital routing']
    },
    {
      title: 'Luxury Patient Recovery Suites',
      desc: 'Fitted around family comfort, featuring adjustable digital beds, private washrooms, nurse call-buttons, television, and custom nutritional menus.',
      image: 'https://images.unsplash.com/photo-1586773860418-d3b31966cfb7?auto=format&fit=crop&q=80&w=600',
      specs: ['Private family companion lounges', 'Full dynamic medical bedding', 'In-suite organic nutrient programs']
    },
    {
      title: '24/7 Mobile ICU Ambulance Fleet',
      desc: 'Mobile intensive care ambulance vehicles equipped with critical cardiac monitors, emergency ventilation, and on-call trauma teams.',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600',
      specs: ['Advanced life-support ventilators', 'Direct radio clinic telemetry link', 'Average response under 10 minutes']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-16">
      
      {/* Title */}
      <section className="text-center max-w-2xl mx-auto space-y-2 mt-4">
        <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Our Medical Campus
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Advanced Clinical Facilities & Technology
        </h1>
        <p className="text-slate-500 text-sm">
          ApexCare’s medical campus is designed for swift patient mobility, total diagnostic efficiency, and sterile, comfortable patient recoveries.
        </p>
      </section>

      {/* Facilities Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-48 overflow-hidden bg-slate-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                />
              </div>
              <div className="p-5 space-y-4">
                <h3 className="text-base font-bold text-slate-950 group-hover:text-teal-600 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>

                {/* Bullet details */}
                <div className="border-t border-slate-50 pt-4 space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Facility Specifications:</p>
                  <ul className="space-y-1.5">
                    {item.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-600 flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 border-t border-slate-50/50 flex items-center justify-between text-[10px] font-bold text-slate-400">
              <span className="uppercase tracking-widest">JCI Gold standard</span>
              <span className="text-teal-600 flex items-center gap-1">Active Unit</span>
            </div>
          </div>
        ))}
      </section>

      {/* Ambulance Dispatch CTA */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl"></div>
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <span className="text-[10px] font-bold text-red-400 bg-red-950/80 border border-red-900 px-3 py-1 rounded-full uppercase tracking-wider">
            24/7 Ambulance Dispatch
          </span>
          <h3 className="text-lg md:text-xl font-bold tracking-tight">Need Urgent Critical Care Telemetry?</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Our specialized ICU mobile ambulances are on call 24 hours a day, staffing trauma medical technicians to coordinate stabilization telemetry with the hospital during transit.
          </p>
        </div>
        <a
          href="tel:+15550199111"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition shadow-lg shadow-red-950 flex items-center gap-2 shrink-0"
        >
          <Phone className="w-4 h-4 animate-bounce" /> Call Direct Ambulance: (555) 019-9111
        </a>
      </section>

    </div>
  );
}
