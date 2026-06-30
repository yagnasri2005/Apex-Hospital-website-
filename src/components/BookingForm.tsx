import React, { useState, useEffect } from 'react';
import { DEPARTMENTS, DOCTORS } from '../data/mockData';
import { Booking } from '../types';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, ChevronRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingFormProps {
  preselectedDoctorId?: string;
  onBookingSuccess?: () => void;
  onViewBookings?: () => void;
}

export default function BookingForm({ preselectedDoctorId, onBookingSuccess, onViewBookings }: BookingFormProps) {
  // Form States
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [symptoms, setSymptoms] = useState('');
  
  // UI & Validation States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successBooking, setSuccessBooking] = useState<Booking | null>(null);

  // Time Slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  // Auto-fill preselected doctor
  useEffect(() => {
    if (preselectedDoctorId) {
      const doc = DOCTORS.find(d => d.id === preselectedDoctorId);
      if (doc) {
        setSelectedDept(doc.departmentId);
        setSelectedDoctor(doc.id);
      }
    }
  }, [preselectedDoctorId]);

  // Handle department change to clear or pre-fill doctor
  const handleDeptChange = (deptId: string) => {
    setSelectedDept(deptId);
    setSelectedDoctor('');
    setSelectedSlot('');
  };

  // Filter doctors based on selected department
  const filteredDoctors = DOCTORS.filter(doc => doc.departmentId === selectedDept);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!selectedDept) tempErrors.department = 'Please select a medical department.';
    if (!selectedDoctor) tempErrors.doctor = 'Please select a specialist doctor.';
    if (!bookingDate) tempErrors.date = 'Please select an appointment date.';
    if (!selectedSlot) tempErrors.slot = 'Please select a preferred time slot.';
    
    if (!patientName.trim()) {
      tempErrors.name = 'Patient name is required.';
    } else if (patientName.trim().length < 3) {
      tempErrors.name = 'Name must be at least 3 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patientEmail) {
      tempErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(patientEmail)) {
      tempErrors.email = 'Please provide a valid email address.';
    }

    const phoneRegex = /^\+?[0-9\s-]{7,15}$/;
    if (!patientPhone) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(patientPhone)) {
      tempErrors.phone = 'Please enter a valid phone number (e.g., +1 555-019-9111).';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network delay for premium feel
    setTimeout(() => {
      const newBooking: Booking = {
        id: 'BK-' + Math.floor(100000 + Math.random() * 900000),
        patientName,
        patientEmail,
        patientPhone,
        doctorId: selectedDoctor,
        departmentId: selectedDept,
        date: bookingDate,
        timeSlot: selectedSlot,
        symptoms: symptoms || 'Routine consultation checkup',
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };

      // Save to localStorage
      try {
        const existingBookingsStr = localStorage.getItem('apexcare_bookings');
        const existingBookings = existingBookingsStr ? JSON.parse(existingBookingsStr) : [];
        existingBookings.unshift(newBooking);
        localStorage.setItem('apexcare_bookings', JSON.stringify(existingBookings));
      } catch (err) {
        console.error('Failed to write to localStorage:', err);
      }

      setSuccessBooking(newBooking);
      setIsSubmitting(false);
      if (onBookingSuccess) onBookingSuccess();
    }, 1200);
  };

  const getDocName = (id: string) => DOCTORS.find(d => d.id === id)?.name || 'Specialist';
  const getDeptName = (id: string) => DEPARTMENTS.find(d => d.id === id)?.name || 'Department';

  const resetForm = () => {
    setSuccessBooking(null);
    setSelectedDept('');
    setSelectedDoctor('');
    setPatientName('');
    setPatientEmail('');
    setPatientPhone('');
    setBookingDate('');
    setSelectedSlot('');
    setSymptoms('');
    setErrors({});
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-100/50 border border-slate-100 p-6 md:p-8" id="booking-section">
      <AnimatePresence mode="wait">
        {!successBooking ? (
          <motion.div
            key="booking-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Book Your Consultation</h3>
              <p className="text-slate-500 mt-1">Please fill in your preferences and details to request a secure, instantly confirmed medical appointment.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Specialty & Doctor */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dept-select" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    1. Select Department <span className="text-teal-600">*</span>
                  </label>
                  <select
                    id="dept-select"
                    value={selectedDept}
                    onChange={(e) => handleDeptChange(e.target.value)}
                    className={`w-full px-4 py-2.5 bg-slate-50 border ${errors.department ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-teal-100'} rounded-xl focus:outline-none focus:ring-4 focus:border-teal-500 transition text-slate-800 text-sm`}
                  >
                    <option value="">-- Choose Department --</option>
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  {errors.department && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.department}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="doctor-select" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    2. Choose Medical Specialist <span className="text-teal-600">*</span>
                  </label>
                  <select
                    id="doctor-select"
                    value={selectedDoctor}
                    onChange={(e) => {
                      setSelectedDoctor(e.target.value);
                      setSelectedSlot('');
                    }}
                    disabled={!selectedDept}
                    className={`w-full px-4 py-2.5 ${!selectedDept ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-50 text-slate-800'} border ${errors.doctor ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-teal-100'} rounded-xl focus:outline-none focus:ring-4 focus:border-teal-500 transition text-sm`}
                  >
                    <option value="">
                      {!selectedDept ? 'Select a department first' : '-- Choose Specialist --'}
                    </option>
                    {filteredDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} - {doc.role}
                      </option>
                    ))}
                  </select>
                  {errors.doctor && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.doctor}
                    </p>
                  )}
                </div>
              </div>

              {/* Step 2: Date & Slots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    3. Appointment Date <span className="text-teal-600">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      id="booking-date"
                      type="date"
                      value={bookingDate}
                      min={new Date().toISOString().split('T')[0]} // prevent booking in past
                      onChange={(e) => setBookingDate(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${errors.date ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-teal-100'} rounded-xl focus:outline-none focus:ring-4 focus:border-teal-500 transition text-slate-800 text-sm`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    4. Available Time Slots <span className="text-teal-600">*</span>
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 text-xs font-medium rounded-lg text-center border transition ${
                          selectedSlot === slot
                            ? 'bg-teal-600 border-teal-600 text-white shadow-sm'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.slot && (
                    <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.slot}
                    </p>
                  )}
                </div>
              </div>

              {/* Step 3: Patient Details */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="text-sm font-bold text-slate-800 tracking-wide uppercase mb-3.5">5. Patient Personal Details</h4>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="patient-name" className="block text-sm font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-teal-600">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <input
                        id="patient-name"
                        type="text"
                        placeholder="John Doe"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-teal-100'} rounded-xl focus:outline-none focus:ring-4 focus:border-teal-500 transition text-slate-800 text-sm`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="patient-email" className="block text-sm font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-teal-600">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          id="patient-email"
                          type="email"
                          placeholder="johndoe@example.com"
                          value={patientEmail}
                          onChange={(e) => setPatientEmail(e.target.value)}
                          className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-teal-100'} rounded-xl focus:outline-none focus:ring-4 focus:border-teal-500 transition text-slate-800 text-sm`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="patient-phone" className="block text-sm font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-teal-600">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          id="patient-phone"
                          type="tel"
                          placeholder="+1 (555) 019-9111"
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:ring-teal-100'} rounded-xl focus:outline-none focus:ring-4 focus:border-teal-500 transition text-slate-800 text-sm`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="symptoms-input" className="block text-sm font-semibold text-slate-700 mb-1">
                      Brief Symptoms / Purpose of Visit <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                      <textarea
                        id="symptoms-input"
                        placeholder="Please briefly describe your current physical symptoms or general checkup objectives..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        rows={3}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-teal-100 focus:border-teal-500 rounded-xl focus:outline-none transition text-slate-800 text-sm resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-slate-100 pt-5 flex items-center justify-between gap-4">
                {onViewBookings && (
                  <button
                    type="button"
                    onClick={onViewBookings}
                    className="text-slate-500 hover:text-teal-600 text-sm font-semibold flex items-center gap-1 transition"
                  >
                    View My Bookings <ChevronRight className="w-4 h-4" />
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`ml-auto px-6 py-3 rounded-xl font-bold text-white transition shadow-lg ${
                    isSubmitting
                      ? 'bg-teal-400 cursor-wait shadow-none'
                      : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 shadow-teal-100 hover:shadow-teal-200'
                  }`}
                >
                  {isSubmitting ? 'Securing Slot...' : 'Confirm Appointment'}
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="booking-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="text-center py-6"
          >
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-5 text-teal-600">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Appointment Secured Successfully!</h3>
            <p className="text-slate-500 mt-2 max-w-md mx-auto">
              Your consultation at ApexCare Hospital has been registered and verified by our automated systems.
            </p>

            {/* Receipt Summary */}
            <div className="my-6 max-w-md mx-auto bg-slate-50 border border-slate-100 rounded-xl p-5 text-left divide-y divide-slate-100">
              <div className="pb-3 flex justify-between items-center text-sm">
                <span className="text-slate-400 font-medium">Receipt Code</span>
                <span className="font-mono font-bold text-slate-800">{successBooking.id}</span>
              </div>
              <div className="py-3 flex justify-between items-center text-sm">
                <span className="text-slate-400 font-medium">Patient</span>
                <span className="font-semibold text-slate-800">{successBooking.patientName}</span>
              </div>
              <div className="py-3 flex justify-between items-center text-sm">
                <span className="text-slate-400 font-medium">Department</span>
                <span className="font-semibold text-slate-800">{getDeptName(successBooking.departmentId)}</span>
              </div>
              <div className="py-3 flex justify-between items-center text-sm">
                <span className="text-slate-400 font-medium">Specialist</span>
                <span className="font-semibold text-slate-800">{getDocName(successBooking.doctorId)}</span>
              </div>
              <div className="py-3 flex justify-between items-center text-sm">
                <span className="text-slate-400 font-medium">Scheduled Time</span>
                <span className="font-semibold text-slate-800 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" /> {successBooking.date} at <Clock className="w-3.5 h-3.5 text-teal-600" /> {successBooking.timeSlot}
                </span>
              </div>
              <div className="pt-3 flex justify-between items-center text-sm">
                <span className="text-slate-400 font-medium">Status</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 capitalize">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                  {successBooking.status}
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {onViewBookings && (
                <button
                  type="button"
                  onClick={onViewBookings}
                  className="px-5 py-2.5 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition text-sm"
                >
                  Manage My Appointments
                </button>
              )}
              <button
                type="button"
                onClick={resetForm}
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition text-sm"
              >
                Book Another Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
