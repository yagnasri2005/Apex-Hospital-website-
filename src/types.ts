export interface Doctor {
  id: string;
  name: string;
  role: string;
  departmentId: string;
  qualifications: string[];
  experience: number; // in years
  specialties: string[];
  timing: string;
  image: string;
  bio: string;
  rating: number;
}

export interface Department {
  id: string;
  name: string;
  iconName: string; // lucide icon identifier
  description: string;
  detailedDescription: string;
  services: string[];
  emergencyContact: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age: number;
  treatment: string;
  rating: number;
  quote: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Booking {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  doctorId: string;
  departmentId: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  status: 'confirmed' | 'cancelled';
  createdAt: string;
}
