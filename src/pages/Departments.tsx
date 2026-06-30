import { useState, useEffect } from 'react';
import { DEPARTMENTS } from '../data/mockData';
import { Department } from '../types';
import { ArrowLeft, Phone, Calendar, Stethoscope, ChevronRight, AlertCircle, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import DynamicIcon from '../components/DynamicIcon';

interface DepartmentsProps {
  selectedDeptId?: string;
  onSelectDepartment: (deptId: string) => void;
  onNavigateToDoctorsWithFilter: (deptId: string) => void;
  onNavigateToBooking: (deptId?: string) => void;
}

export default function Departments({
  selectedDeptId,
  onSelectDepartment,
  onNavigateToDoctorsWithFilter,
  onNavigateToBooking
}: DepartmentsProps) {
  const [activeDept, setActiveDept] = useState<Department | null>(null);

  // Sync state if selectedDeptId is passed from parent/navbar
  useEffect(() => {
    if (selectedDeptId) {
      const dept = DEPARTMENTS.find(d => d.id === selectedDeptId);
      if (dept) setActiveDept(dept);
    } else {
      setActiveDept(null);
    }
  }, [selectedDeptId]);

  const handleSelectDept = (dept: Department) => {
    setActiveDept(dept);
    onSelectDepartment(dept.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setActiveDept(null);
    onSelectDepartment('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <AnimatePresence mode="wait">
        {!activeDept ? (
          // Grid View: All Departments
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-12"
          >
            <div className="text-center max-w-2xl mx-auto space-y-2 mt-4">
              <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Clinical Departments
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Our Specialized Medical Services
              </h1>
              <p className="text-slate-500 text-sm">
                ApexCare houses world-class medical departments fully staffed by certified consultants and loaded with cutting-edge medical hardware.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEPARTMENTS.map((dept) => (
                <div
                  key={dept.id}
                  onClick={() => handleSelectDept(dept)}
                  className="bg-white border border-slate-100 hover:border-teal-200 hover:shadow-lg rounded-2xl p-6 transition flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition">
                      <DynamicIcon name={dept.iconName} className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-950 group-hover:text-teal-600 transition">
                        {dept.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-teal-500" /> {dept.services.length} Specialized services
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {dept.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-50 mt-6 pt-4 flex items-center justify-between text-xs font-bold text-teal-600">
                    <span className="group-hover:translate-x-1 transition flex items-center gap-1">
                      View Clinical details <ChevronRight className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">JCI Accredited</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          // Detailed Expanded View
          <motion.div
            key="details"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {/* Breadcrumb / Back Button */}
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <button
                onClick={handleBack}
                className="text-slate-500 hover:text-teal-600 flex items-center gap-1.5 transition uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" /> Departments List
              </button>
              <span>/</span>
              <span className="text-slate-800 uppercase tracking-wider font-semibold">{activeDept.name}</span>
            </div>

            {/* Main Details Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Extensive details */}
              <div className="lg:col-span-8 space-y-8 bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                  <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center">
                    <DynamicIcon name={activeDept.iconName} className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-950">{activeDept.name}</h2>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">ApexCare Division of Excellence</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base font-bold text-slate-800">Department Overview</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {activeDept.detailedDescription}
                  </p>
                </div>

                {/* Sub-services Offered */}
                <div className="space-y-4 border-t border-slate-100 pt-6">
                  <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-teal-600" /> Diagnostic & Surgical Procedures
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {activeDept.services.map((srv, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                        <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                        <span className="text-xs font-semibold text-slate-700">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Panel & Contacts */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Actions Box */}
                <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"></div>
                  <h3 className="text-lg font-bold tracking-tight mb-2">Schedule with a Specialist</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Connect instantly with leading board-certified consultants associated with the {activeDept.name} division.
                  </p>

                  <div className="space-y-3">
                    <button
                      onClick={() => onNavigateToDoctorsWithFilter(activeDept.id)}
                      className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl text-xs transition"
                    >
                      View Specialists Directory
                    </button>
                    <button
                      onClick={() => onNavigateToBooking(activeDept.id)}
                      className="w-full py-3 border border-slate-800 hover:bg-slate-900 text-slate-300 font-bold rounded-xl text-xs transition"
                    >
                      Schedule Appointment
                    </button>
                  </div>
                </div>

                {/* Specific Department hotline */}
                <div className="bg-red-50 border border-red-100 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2.5 text-red-700">
                    <ShieldAlert className="w-5 h-5 shrink-0" />
                    <h4 className="text-xs font-bold uppercase tracking-wider">Direct Trauma & Clinic Hotline</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    If you are experiencing acute coronary pains or skeletal fractures, call this unit directly for swift emergency dispatch guidance.
                  </p>
                  <a
                    href={`tel:${activeDept.emergencyContact}`}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black transition shadow-sm"
                  >
                    <Phone className="w-4 h-4 animate-bounce" /> {activeDept.emergencyContact}
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
