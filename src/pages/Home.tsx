import { DEPARTMENTS, DOCTORS, ARTICLES, TESTIMONIALS } from '../data/mockData';
import { Calendar, PhoneCall, ShieldCheck, HeartPulse, Trophy, Users, Building, GraduationCap, ArrowRight, Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import DynamicIcon from '../components/DynamicIcon';

interface HomeProps {
  onNavigate: (page: string) => void;
  onSelectDoctor: (doctorId: string) => void;
  onSelectDepartment: (deptId: string) => void;
  onSelectArticle: (articleId: string) => void;
}

export default function Home({ onNavigate, onSelectDoctor, onSelectDepartment, onSelectArticle }: HomeProps) {
  // Statistics configuration
  const stats = [
    { value: '45,000+', label: 'Patients Treated Annually', icon: Users, color: 'text-teal-600 bg-teal-50/60 border border-teal-100' },
    { value: '150+', label: 'Board-Certified Specialists', icon: GraduationCap, color: 'text-blue-600 bg-blue-50/60 border border-blue-100' },
    { value: '30+', label: 'Years of Trustworthy Care', icon: Trophy, color: 'text-amber-600 bg-amber-50/60 border border-amber-100' },
    { value: '24+', label: 'Advanced Medical Departments', icon: Building, color: 'text-purple-600 bg-purple-50/60 border border-purple-100' },
  ];

  const coreReasons = [
    {
      title: 'Expert Medical Boards',
      desc: 'Our staff consists of globally published, Ivy League-trained professors and clinical experts.',
      icon: 'ShieldCheck'
    },
    {
      title: 'State-of-the-Art Care',
      desc: 'Fully loaded with robotic surgical suites, advanced 3T MRI, and fully digitized imaging.',
      icon: 'Sparkles'
    },
    {
      title: 'Compassionate Care',
      desc: 'We put the human touch back in medicine, prioritizing patient emotional comfort alongside physical recoveries.',
      icon: 'Heart'
    },
    {
      title: 'Rapid Emergency Diagnostics',
      desc: 'Highly organized trauma wards with an average door-to-treatment time under 18 minutes.',
      icon: 'Activity'
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      
      {/* Section 1: Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-16 md:py-24 border-b border-slate-200">
        
        {/* Decorative circular background blurs */}
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] bg-blue-150 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute -left-32 -bottom-32 w-[500px] h-[500px] bg-teal-150 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center font-sans">
            
            {/* Left Col: Headings & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-teal-600 font-extrabold tracking-widest text-xs uppercase block">
                TRUSTED CLINICAL EXCELLENCE SINCE 1994
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 tracking-tight leading-[1.12]">
                Your Health is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">Absolute Priority</span>
              </h1>
              
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Connect instantly with leading board-certified specialists. Book custom wellness plans, secure instant diagnostic appointments, and explore 24/7 world-class hospital facilities designed around your recovery.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white rounded-xl font-bold shadow-xl shadow-blue-100 hover:shadow-blue-200 transition duration-150 flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4 text-teal-300" /> Schedule Consultation
                </button>
                <button
                  onClick={() => onNavigate('departments')}
                  className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 font-bold rounded-xl transition duration-150 flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-sm"
                >
                  Explore Specialties <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick stats under buttons */}
              <div className="pt-8 border-t border-slate-150/80 flex flex-wrap justify-center lg:justify-start gap-10 md:gap-14">
                <div>
                  <div className="text-3xl font-black text-blue-900 tracking-tight">350+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Specialists</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-900 tracking-tight">24/7</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Emergency Care</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-900 tracking-tight">15k+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Surgeries Annually</div>
                </div>
              </div>

              {/* Instant Emergency Notice */}
              <div className="pt-4 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3 bg-red-50/80 border border-red-100 p-3 rounded-xl justify-center lg:justify-start shadow-sm">
                  <PhoneCall className="w-5 h-5 text-red-600 shrink-0 animate-bounce" />
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-red-700 uppercase tracking-wider">Emergency Ambulance Hotline</p>
                    <a href="tel:+15550199111" className="font-extrabold text-blue-950 text-sm hover:text-red-600 transition">Call Direct: +1 (555) 019-9111</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Graphic / Banner Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl blur-2xl opacity-15"></div>
                
                {/* Image Container with Floating Badges */}
                <div className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
                    alt="Modern medical diagnostic facility at ApexCare Hospital"
                    className="w-full h-[400px] object-cover hover:scale-102 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge 1 */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 max-w-xs">
                    <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">100% Secure Care</p>
                      <p className="text-[10px] text-slate-500 font-semibold">JCI clinical standard compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Animated Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-100/50">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-2 p-3 border-r border-slate-150/80 last:border-r-0">
              <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight">{stat.value}</h3>
              <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Featured Specialties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-black text-blue-900 tracking-tight">Our Core Medical Specialties</h2>
          <p className="text-slate-500 text-sm">We provide expert surgical, therapeutic, and emergency healthcare solutions across multiple clinical disciplines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.slice(0, 3).map((dept) => (
            <div
              key={dept.id}
              className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <DynamicIcon name={dept.iconName} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 group-hover:text-blue-600 transition">{dept.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{dept.description}</p>
              </div>

              <div className="border-t border-slate-100 mt-6 pt-4 flex items-center justify-between">
                <button
                  onClick={() => onSelectDepartment(dept.id)}
                  className="text-xs font-bold text-blue-600 group-hover:text-blue-800 flex items-center gap-1.5 transition"
                >
                  Explore Specialty <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Accredited</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('departments')}
            className="px-6 py-2.5 border border-slate-300 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-50 hover:text-blue-600 hover:border-blue-500 transition bg-white"
          >
            View All Specialties
          </button>
        </div>
      </section>

      {/* Section 4: Why Choose ApexCare */}
      <section className="bg-slate-50/50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Graphic and Badge */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-black text-blue-900 tracking-tight leading-tight">
              Pioneering Tomorrow’s Healthcare Technologies Today
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              For thirty years, we have broken medical barriers. We recruit elite specialists, integrate intelligent diagnostic computers, and craft calm recovery centers to help our patients return to health securely.
            </p>
            <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800">100% Patient Satisfaction Rating</h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Calculated independently via third-party health surveys.</p>
              </div>
            </div>
          </div>

          {/* Right: Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreReasons.map((reason, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3 hover:border-blue-350 hover:shadow-md transition">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <DynamicIcon name={reason.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-blue-900">{reason.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{reason.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 5: Featured Doctors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-blue-900 tracking-tight">Our Leading Medical Specialists</h2>
            <p className="text-slate-500 text-xs font-semibold">Meet our Ivy League-trained clinicians holding double-certifications and board appointments.</p>
          </div>
          <button
            onClick={() => onNavigate('doctors')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition self-start sm:self-end uppercase tracking-wider"
          >
            Search Entire Directory <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.slice(0, 3).map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
            >
              <div className="relative h-64 overflow-hidden bg-slate-50">
                <img
                  src={doc.image}
                  referrerPolicy="no-referrer"
                  alt={`Portrait of ${doc.name}`}
                  className="w-full h-full object-cover group-hover:scale-101 transition duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold text-blue-900 flex items-center gap-1 shadow-sm border border-slate-200">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> {doc.rating} Rating
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-base font-bold text-blue-950">{doc.name}</h3>
                  <p className="text-xs font-extrabold text-teal-600 uppercase tracking-wider">{doc.role}</p>
                </div>
                
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">{doc.bio}</p>

                <div className="border-t border-slate-100 pt-3 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectDoctor(doc.id)}
                    className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-lg text-xs transition border border-slate-200"
                  >
                    Biography
                  </button>
                  <button
                    onClick={() => {
                      onSelectDoctor(doc.id);
                      onNavigate('contact'); // redirect with context
                    }}
                    className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-lg text-xs transition shadow-md shadow-blue-100"
                  >
                    Secure Booking
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Testimonial Preview */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <span className="text-[10px] font-extrabold text-teal-400 bg-teal-950/60 border border-teal-900/50 px-3 py-1 rounded-full uppercase tracking-widest">
              Verified Patient Journeys
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">What Our Recovered Patients Say</h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
              Nothing proves ApexCare quality more than real patient testimonials. Read these verified letters submitted by individuals who experienced complex operations or neonatal triumphs.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('testimonials')}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition uppercase tracking-wider"
              >
                Read All Success Stories
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {TESTIMONIALS.slice(0, 2).map((test) => (
              <div key={test.id} className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl relative space-y-4">
                <Quote className="absolute right-4 top-4 text-slate-800 w-8 h-8" />
                <div className="flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed font-medium">
                  "{test.quote}"
                </p>
                <div className="border-t border-slate-800 pt-3">
                  <h4 className="text-xs font-extrabold text-white">{test.patientName}</h4>
                  <p className="text-[10px] text-slate-500 font-bold">{test.treatment} • Age {test.age}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 7: Health News & Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-black text-blue-900 tracking-tight">Recent Insights & Clinical Guidelines</h2>
          <p className="text-slate-500 text-xs font-semibold">Stay informed with medical tips and wellness guides prepared by our board specialists.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectArticle(art.id)}
            >
              <div className="space-y-4">
                <div className="relative h-44 overflow-hidden bg-slate-50">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-101 transition"
                  />
                  <span className="absolute bottom-3 left-3 bg-blue-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                    {art.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-blue-950 group-hover:text-blue-600 transition line-clamp-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2 font-medium">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                <span>By {art.author}</span>
                <span className="text-blue-600 group-hover:translate-x-1 transition flex items-center gap-0.5">Read Article <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: Pre-Footer Booking Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 font-sans">
        <div className="bg-gradient-to-br from-blue-50 to-teal-50/50 border border-blue-100 rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl md:text-2xl font-black text-blue-900 tracking-tight">Book Your Screening Program Today</h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
              Take a proactive stance on your biological indicators. Fill in our instant secure booking form to coordinate clinical screenings, sports medicines, or specialty surgeries.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-extrabold rounded-xl transition shadow-lg shadow-teal-100 text-xs uppercase tracking-wider"
            >
              Book My Consultation
            </button>
            <button
              onClick={() => onNavigate('packages')}
              className="px-6 py-3.5 border border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-extrabold rounded-xl transition text-xs bg-white uppercase tracking-wider"
            >
              Browse Health Checkups
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
