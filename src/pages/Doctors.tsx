import { useState, useEffect } from 'react';
import { DOCTORS, DEPARTMENTS } from '../data/mockData';
import { Doctor } from '../types';
import { Search, Filter, Star, Clock, Award, GraduationCap, X, ChevronRight, User, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DoctorsProps {
  initialFilterDeptId?: string;
  initialSearchQuery?: string;
  onSelectDoctorForBooking: (doctorId: string) => void;
  onNavigateToBooking: () => void;
}

export default function Doctors({
  initialFilterDeptId = '',
  initialSearchQuery = '',
  onSelectDoctorForBooking,
  onNavigateToBooking
}: DoctorsProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedDeptFilter, setSelectedDeptFilter] = useState(initialFilterDeptId);
  const [selectedDoctorProfile, setSelectedDoctorProfile] = useState<Doctor | null>(null);

  // Synchronize search and filter props if they change
  useEffect(() => {
    setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  useEffect(() => {
    setSelectedDeptFilter(initialFilterDeptId);
  }, [initialFilterDeptId]);

  const handleBook = (docId: string) => {
    onSelectDoctorForBooking(docId);
    setSelectedDoctorProfile(null);
    onNavigateToBooking();
  };

  const getDeptName = (deptId: string) => {
    return DEPARTMENTS.find(d => d.id === deptId)?.name || 'General Medicine';
  };

  // Filter logic
  const filteredDoctors = DOCTORS.filter(doc => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      doc.role.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesDept = selectedDeptFilter ? doc.departmentId === selectedDeptFilter : true;
    
    return matchesSearch && matchesDept;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      
      <div className="space-y-10">
        
        {/* Page Headings */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mt-4">
          <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Clinical Directories
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Consult Board-Certified Specialists
          </h1>
          <p className="text-slate-500 text-sm">
            Search our board of medical directors, clinical researchers, and surgeons specializing in preventative and complex diagnostic treatments.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-100 rounded-2xl p-4 md:p-6 shadow-sm">
          {/* Search bar */}
          <div className="lg:col-span-7 relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by doctor name, specialties (e.g., 'valve', 'pediatrics')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 rounded-xl focus:outline-none text-xs text-slate-800 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Department Filter Selector */}
          <div className="lg:col-span-5 flex items-center gap-3">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={selectedDeptFilter}
              onChange={(e) => setSelectedDeptFilter(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 rounded-xl focus:outline-none text-xs text-slate-800 transition"
            >
              <option value="">-- All Clinical Specialties --</option>
              {DEPARTMENTS.map(dept => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredDoctors.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-12 bg-slate-50 rounded-2xl border border-slate-100/50"
              >
                <Stethoscope className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h4 className="text-sm font-bold text-slate-700">No Specialist Clinicians Found</h4>
                <p className="text-xs text-slate-400 mt-1">We couldn’t find matches for your search. Try resetting filters or searching with fewer terms.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDeptFilter('');
                  }}
                  className="mt-4 px-4 py-2 border border-slate-200 text-slate-600 hover:bg-white hover:text-teal-600 rounded-xl text-xs font-bold transition shadow-xs"
                >
                  Reset All Filters
                </button>
              </motion.div>
            ) : (
              filteredDoctors.map((doc) => (
                <motion.div
                  key={doc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
                >
                  {/* Photo area */}
                  <div className="relative h-64 overflow-hidden bg-slate-50">
                    <img
                      src={doc.image}
                      referrerPolicy="no-referrer"
                      alt={`Portrait of ${doc.name}`}
                      className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-extrabold text-teal-700 flex items-center gap-1 shadow-xs border border-slate-50">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> {doc.rating}
                    </div>
                    <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                      {getDeptName(doc.departmentId)}
                    </span>
                  </div>

                  {/* Description area */}
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-950">{doc.name}</h3>
                      <p className="text-xs font-semibold text-teal-600">{doc.role}</p>
                    </div>

                    <div className="space-y-1 text-xs text-slate-500">
                      <p className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-teal-500 shrink-0" /> Timings: {doc.timing.split(' (')[0]}
                      </p>
                      <p className="flex items-center gap-1.5 font-medium">
                        <Award className="w-3.5 h-3.5 text-teal-500 shrink-0" /> Experience: {doc.experience} Years
                      </p>
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {doc.bio}
                    </p>

                    <div className="border-t border-slate-50 pt-3.5 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedDoctorProfile(doc)}
                        className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold rounded-lg text-xs transition"
                      >
                        Read Profile
                      </button>
                      <button
                        onClick={() => handleBook(doc.id)}
                        className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg text-xs transition shadow-xs"
                      >
                        Secure Visit
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Doctor Profile Details Drawer / Modal Overlay */}
      <AnimatePresence>
        {selectedDoctorProfile && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctorProfile(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative w-full max-w-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDoctorProfile(null)}
                className="absolute right-4 top-4 p-1.5 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition border border-slate-100"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12">
                {/* Photo area */}
                <div className="sm:col-span-5 h-64 sm:h-full bg-slate-50 relative">
                  <img
                    src={selectedDoctorProfile.image}
                    referrerPolicy="no-referrer"
                    alt={`Portrait of ${selectedDoctorProfile.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details area */}
                <div className="sm:col-span-7 p-6 md:p-8 space-y-5 text-slate-800">
                  <div>
                    <span className="text-[10px] font-black text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {getDeptName(selectedDoctorProfile.departmentId)} Division
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedDoctorProfile.name}</h3>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">{selectedDoctorProfile.role}</p>
                  </div>

                  <div className="space-y-3 border-y border-slate-50 py-4 text-xs">
                    <div className="space-y-1.5">
                      <span className="font-bold text-slate-400 uppercase tracking-widest text-[9px] flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-teal-500" /> Educational Certifications
                      </span>
                      <ul className="list-disc list-inside space-y-1 font-medium text-slate-700 pl-1">
                        {selectedDoctorProfile.qualifications.map((q, i) => (
                          <li key={i}>{q}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="space-y-0.5">
                        <span className="font-bold text-slate-400 uppercase tracking-widest text-[9px] flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-teal-500" /> Timing Slots
                        </span>
                        <p className="font-semibold text-slate-700">{selectedDoctorProfile.timing}</p>
                      </div>
                      <div className="space-y-0.5">
                        <span className="font-bold text-slate-400 uppercase tracking-widest text-[9px] flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-teal-500" /> Clinical practice
                        </span>
                        <p className="font-semibold text-slate-700">{selectedDoctorProfile.experience} Years Active</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <p className="font-bold text-slate-800">Specialist Biography</p>
                    <p className="leading-relaxed">{selectedDoctorProfile.bio}</p>
                  </div>

                  <div className="flex gap-2 justify-end pt-2">
                    <button
                      onClick={() => setSelectedDoctorProfile(null)}
                      className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold rounded-xl text-xs transition"
                    >
                      Close Profile
                    </button>
                    <button
                      onClick={() => handleBook(selectedDoctorProfile.id)}
                      className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-extrabold rounded-xl text-xs transition shadow-md shadow-teal-100 flex items-center gap-1.5"
                    >
                      Secure Consultation <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
