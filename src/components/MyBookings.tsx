import { useState, useEffect } from 'react';
import { Booking } from '../types';
import { DOCTORS, DEPARTMENTS } from '../data/mockData';
import { Calendar, Clock, AlertCircle, XCircle, Trash2, ShieldCheck, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MyBookingsProps {
  onBackToBooking: () => void;
}

export default function MyBookings({ onBackToBooking }: MyBookingsProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    try {
      const stored = localStorage.getItem('apexcare_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Error reading bookings from localStorage:', err);
    }
  };

  const cancelBooking = (id: string) => {
    if (!window.confirm('Are you sure you want to cancel this scheduled appointment?')) return;

    try {
      const stored = localStorage.getItem('apexcare_bookings');
      if (stored) {
        const list: Booking[] = JSON.parse(stored);
        const updated = list.map(b => b.id === id ? { ...b, status: 'cancelled' as const } : b);
        localStorage.setItem('apexcare_bookings', JSON.stringify(updated));
        setBookings(updated);
      }
    } catch (err) {
      console.error('Error cancelling booking:', err);
    }
  };

  const deleteBookingRecord = (id: string) => {
    try {
      const stored = localStorage.getItem('apexcare_bookings');
      if (stored) {
        const list: Booking[] = JSON.parse(stored);
        const updated = list.filter(b => b.id !== id);
        localStorage.setItem('apexcare_bookings', JSON.stringify(updated));
        setBookings(updated);
      }
    } catch (err) {
      console.error('Error removing booking record:', err);
    }
  };

  const getDocName = (id: string) => DOCTORS.find(d => d.id === id)?.name || 'Specialist Doctor';
  const getDeptName = (id: string) => DEPARTMENTS.find(d => d.id === id)?.name || 'Medical Specialty';

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-100/50 border border-slate-100 p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-5 mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <HeartPulse className="text-teal-600 w-6 h-6" /> Patient Consultation Desk
          </h3>
          <p className="text-slate-500 mt-1">Review, monitor, and cancel your live scheduled consultations.</p>
        </div>
        <button
          onClick={onBackToBooking}
          className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold rounded-xl text-xs transition self-start sm:self-center"
        >
          + Request New Visit
        </button>
      </div>

      <AnimatePresence mode="popLayout">
        {bookings.length === 0 ? (
          <motion.div
            key="empty-bookings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12 px-4"
          >
            <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-700">No Scheduled Appointments Found</h4>
            <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">
              You do not have any pending or past consultation bookings registered on this browser.
            </p>
            <button
              onClick={onBackToBooking}
              className="mt-5 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition text-sm shadow-sm"
            >
              Book Your First Visit
            </button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <motion.div
                key={booking.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className={`border rounded-xl p-5 relative overflow-hidden transition ${
                  booking.status === 'cancelled'
                    ? 'bg-slate-50 border-slate-100 text-slate-500'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Status Indicator Stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    booking.status === 'confirmed' ? 'bg-teal-500' : 'bg-slate-300'
                  }`}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mt-1">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                        {booking.id}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          booking.status === 'confirmed'
                            ? 'bg-teal-50 text-teal-700 border border-teal-100'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {booking.status === 'confirmed' ? (
                          <>
                            <ShieldCheck className="w-3 h-3 text-teal-600" /> Confirmed
                          </>
                        ) : (
                          'Cancelled'
                        )}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-800">
                        {getDocName(booking.doctorId)}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {getDeptName(booking.departmentId)}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-teal-600" /> {booking.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-teal-600" /> {booking.timeSlot}
                      </span>
                    </div>

                    <div className="bg-slate-50/50 p-2.5 rounded-lg border border-slate-100/70">
                      <p className="text-xs text-slate-600 italic">
                        <span className="font-bold not-italic text-slate-500">Chief Symptoms:</span> "{booking.symptoms}"
                      </p>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2 justify-end items-end w-full md:w-auto pt-3 md:pt-0 border-t border-slate-100 md:border-0">
                    <div className="text-right text-xs text-slate-400 hidden md:block">
                      Registered:<br />{new Date(booking.createdAt).toLocaleDateString()}
                    </div>
                    
                    {booking.status === 'confirmed' ? (
                      <button
                        onClick={() => cancelBooking(booking.id)}
                        className="px-3.5 py-1.5 border border-red-200 text-red-600 hover:bg-red-50 font-bold rounded-lg text-xs flex items-center gap-1 transition shadow-sm"
                      >
                        <XCircle className="w-3.5 h-3.5" /> Cancel Appointment
                      </button>
                    ) : (
                      <button
                        onClick={() => deleteBookingRecord(booking.id)}
                        className="px-3.5 py-1.5 border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-red-600 font-bold rounded-lg text-xs flex items-center gap-1 transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Delete Record
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="mt-8 pt-5 border-t border-slate-100 text-center text-xs text-slate-400">
        All patient information is processed locally on this browser following medical privacy regulations.
      </div>
    </div>
  );
}
