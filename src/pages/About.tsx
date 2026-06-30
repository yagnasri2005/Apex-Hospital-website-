import { ShieldCheck, Target, Eye, Users, Award, HeartHandshake } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Clinical Precision',
      desc: 'We enforce absolute accuracy in all diagnostic testing and clinical treatments.',
      icon: ShieldCheck,
      color: 'text-teal-600 bg-teal-50'
    },
    {
      title: 'Patient-First Ethics',
      desc: 'Our work revolves entirely around your comfort, consent, and safety.',
      icon: Target,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Global Innovation',
      desc: 'We actively adopt and publish breakthroughs in surgery, neurology, and pediatrics.',
      icon: Eye,
      color: 'text-amber-600 bg-amber-50'
    },
    {
      title: 'Empathy in Action',
      desc: 'We support you through every stage of recovery with kindness and clinical support.',
      icon: HeartHandshake,
      color: 'text-purple-600 bg-purple-50'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Evelyn Vance, MD',
      role: 'Chief Clinical Officer & President',
      bio: 'Evelyn is a former Harvard clinical fellow with 25+ years in hospital administration, ensuring strict global standards are enforced throughout ApexCare.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Dr. Gregory Chang, MD, PhD',
      role: 'Senior VP of Surgical Operations',
      bio: 'Gregory is an award-winning micro-surgeon with a deep focus on integrating robotic navigation and computer-augmented visualization suites.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300'
    }
  ];

  const milestones = [
    { year: '1994', title: 'ApexCare Foundation', desc: 'ApexCare Hospital opens in San Francisco with 120 patient beds and core specialties.' },
    { year: '2004', title: 'First Cardio bypass program', desc: 'Our cardiac catheterization team performs its first coronary artery bypassing with successful patient recovery.' },
    { year: '2014', title: 'Robotics Suite Launch', desc: 'Acquisition and commissioning of the DaVinci robotic surgical suite to shorten recovery durations.' },
    { year: '2024', title: 'Joint Commission International Gold Medal', desc: 'ApexCare receives the prestigious JCI Gold Seal, representing elite compliance in safe healthcare delivery.' }
  ];

  return (
    <div className="space-y-16 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Overview Block */}
      <section className="py-8 md:py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-100 uppercase tracking-wider">
            Our Legacy of Care
          </span>
          <h1 className="text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Connecting World-Class Science with Warm Compassion
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Founded thirty years ago, ApexCare Hospital has grown to become a leading clinical beacon in San Francisco, servicing over 45,000 patients annually. Our campus is built around patient comfort, integrated clinics, and high-efficiency medical diagnostics.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            At ApexCare, we believe in treating individuals, not just syndromes. We emphasize preventive healthcare programs and post-surgical physical rehabilitation so our patients return safely to their daily active lives.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="space-y-1">
              <span className="text-2xl font-bold text-teal-600">JCI Gold</span>
              <p className="text-[11px] text-slate-500 font-semibold tracking-wide uppercase">Hospital Accreditation</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-bold text-teal-600">99.8%</span>
              <p className="text-[11px] text-slate-500 font-semibold tracking-wide uppercase">Successful Surgeries</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl blur-xl opacity-15"></div>
          <div className="relative bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
              alt="ApexCare Hospital Medical Hub"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision & Values */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Our Core Mission and Values</h2>
          <p className="text-slate-500 text-xs">These values represent the principles of our practice, guiding every patient chart, diagnosis, and prescription we write.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs space-y-4">
              <div className={`w-10 h-10 ${v.color} rounded-xl flex items-center justify-center`}>
                <v.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">{v.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Board & Medical Leadership</h2>
          <p className="text-slate-500 text-xs">Our executive administrators govern clinical pathways, patient safety programs, and technological upgrades.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leadership.map((l, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
              <img
                src={l.image}
                alt={l.name}
                className="w-24 h-24 rounded-full object-cover shadow-md shrink-0 bg-slate-50"
              />
              <div className="space-y-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{l.name}</h3>
                  <p className="text-xs text-teal-600 font-semibold">{l.role}</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{l.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hospital Timeline */}
      <section className="space-y-8 border-t border-slate-100 pt-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Our Timeline & Landmarking</h2>
          <p className="text-slate-500 text-xs">A brief overview of key clinical triumphs and campus developments spanning three decades.</p>
        </div>

        <div className="relative max-w-2xl mx-auto pl-6 border-l-2 border-teal-100 space-y-8 py-2">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group space-y-1">
              {/* Bullet node */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-teal-500 bg-white group-hover:bg-teal-600 transition" />
              <span className="text-sm font-black text-teal-600 font-mono tracking-wide">{m.year}</span>
              <h3 className="text-base font-bold text-slate-900">{m.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
