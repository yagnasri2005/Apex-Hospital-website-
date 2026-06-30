import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, HeartPulse, Sparkles, Trophy, Play } from 'lucide-react';

export default function Testimonials() {
  const ratingStats = [
    { label: '5 Star Reviews', percent: '94%', count: 340 },
    { label: '4 Star Reviews', percent: '5%', count: 18 },
    { label: '3 Star Reviews', percent: '1%', count: 2 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-16">
      
      {/* Title */}
      <section className="text-center max-w-2xl mx-auto space-y-2 mt-4">
        <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
          Patient Journeys
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Letters of Recovery & Gratitude
        </h1>
        <p className="text-slate-500 text-sm">
          Nothing represents clinical dedication better than the words of our recovered patients. Read stories regarding complex cardiac care, pediatrics, and maternity.
        </p>
      </section>

      {/* Aggregate Score Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm max-w-5xl mx-auto items-center">
        
        {/* Left scoring */}
        <div className="lg:col-span-4 text-center space-y-2 lg:border-r border-slate-100 lg:pr-8 py-2">
          <span className="text-5xl font-black text-slate-900 leading-none">4.95</span>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
            ))}
          </div>
          <p className="text-xs font-semibold text-slate-500">Based on 360+ Verified Audits</p>
        </div>

        {/* Right bars */}
        <div className="lg:col-span-8 space-y-3">
          {ratingStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 text-xs font-semibold">
              <span className="w-24 text-slate-500">{stat.label}</span>
              <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-teal-500 h-full rounded-full" style={{ width: stat.percent }} />
              </div>
              <span className="w-10 text-right text-slate-400">{stat.count}</span>
            </div>
          ))}
        </div>

      </section>

      {/* Grid List */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {TESTIMONIALS.map((test) => (
          <div
            key={test.id}
            className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition relative flex flex-col justify-between"
          >
            <Quote className="absolute right-5 top-5 text-slate-50 w-10 h-10 -z-0" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex gap-1">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              
              <p className="text-xs text-slate-600 italic leading-relaxed font-medium">
                "{test.quote}"
              </p>
            </div>

            <div className="border-t border-slate-50 mt-6 pt-4 relative z-10">
              <h4 className="text-xs font-bold text-slate-900">{test.patientName}</h4>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">{test.treatment} • Age {test.age}</p>
              <p className="text-[9px] text-slate-300 font-semibold tracking-wide uppercase mt-1.5">{test.date}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Video Placeholder Section */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <h3 className="text-base font-bold text-slate-900 tracking-tight text-center">Video Patient Interviews</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-50 group border border-slate-100 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=500"
              alt="Patient Recovery Video Review"
              className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
            />
            <div className="absolute inset-0 bg-slate-950/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-12 h-12 bg-white/95 text-teal-600 hover:text-white hover:bg-teal-600 rounded-full flex items-center justify-center shadow-lg transition">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xs font-bold">Orthopedic recovery journey</h4>
              <p className="text-[10px] text-slate-300">David M., 52 years old • 3 min watch</p>
            </div>
          </div>

          <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-50 group border border-slate-100 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=500"
              alt="Maternity Care Video Review"
              className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
            />
            <div className="absolute inset-0 bg-slate-950/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-12 h-12 bg-white/95 text-teal-600 hover:text-white hover:bg-teal-600 rounded-full flex items-center justify-center shadow-lg transition">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xs font-bold">Maternity delivery experience</h4>
              <p className="text-[10px] text-slate-300">Samantha A., 29 years old • 4 min watch</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
