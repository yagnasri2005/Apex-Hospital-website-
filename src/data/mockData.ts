import { Doctor, Department, Service, Package, Testimonial, Article } from '../types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Heart Care',
    iconName: 'Heart',
    description: 'Comprehensive cardiovascular care including diagnostics, non-invasive treatments, and advanced cardiac surgeries.',
    detailedDescription: 'Our Cardiology Division is recognized globally for pioneering work and exceptional patient care. We offer state-of-the-art diagnostic testing, active cardiac catheterization labs, a dedicated coronary intensive care unit, and advanced surgical interventions for heart valves, congenital heart conditions, and vascular repairs.',
    services: ['Electrocardiograms (ECG)', 'Echocardiograms', 'Cardiac Catheterization', 'Angioplasty & Stenting', 'Heart Valve Repair', 'Cardiac Rehabilitation'],
    emergencyContact: '+1 (555) 019-9111'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Joint Care',
    iconName: 'Activity',
    description: 'Specialized care for bones, joints, ligaments, tendons, muscles, and nerves in adults and children.',
    detailedDescription: 'The Orthopedic Department delivers full-spectrum care for musculoskeletal conditions. Our specialists are highly trained in joint replacement therapies, robotic-assisted spine surgeries, complex sports injuries, pediatric orthopedics, and physical rehabilitation. We aim to restore your pain-free mobility safely and efficiently.',
    services: ['Total Hip Replacement', 'Total Knee Replacement', 'Arthroscopic Surgery', 'Spine & Disc Surgery', 'Sports Medicine Care', 'Fracture & Trauma Care'],
    emergencyContact: '+1 (555) 019-9112'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Neonatal Care',
    iconName: 'Baby',
    description: 'Nurturing, compassionate medical care for infants, children, and adolescents from birth through age 18.',
    detailedDescription: 'From general checkups to critical neonatal intensive care, our pediatrics department offers a child-friendly environment staffed by experts who understand the unique physical and emotional needs of younger patients. Our Level III NICU is equipped with advanced technology for micro-premature infants.',
    services: ['Well-Child Checkups', 'Immunizations & Vaccinations', 'Neonatal Intensive Care (NICU)', 'Pediatric Allergy & Asthma Care', 'Child Development Screening', 'Emergency Pediatric Care'],
    emergencyContact: '+1 (555) 019-9113'
  },
  {
    id: 'neurology',
    name: 'Neurology & Neurosurgery',
    iconName: 'Brain',
    description: 'Advanced diagnosis and comprehensive treatment of complex brain, spine, and nervous system disorders.',
    detailedDescription: 'The Neurology & Neurosurgery division leverages pioneering research and state-of-the-art neuro-imaging. We specialize in treating stroke, epilepsy, Parkinson’s disease, Alzheimer’s, neuropathies, and traumatic spine injuries, utilizing minimally invasive neurosurgical techniques when operation is required.',
    services: ['Electroencephalogram (EEG)', 'Stroke Management', 'Epilepsy Monitoring', 'Minimally Invasive Neurosurgery', 'Spinal Cord Injury Treatment', 'Chronic Headache Care'],
    emergencyContact: '+1 (555) 019-9114'
  },
  {
    id: 'maternity',
    name: 'Maternity & Women’s Health',
    iconName: 'Sparkles',
    description: 'Compassionate prenatal, childbirth, and postnatal care, alongside complete gynecological services.',
    detailedDescription: 'We provide an exceptionally warm, supportive, and safe space for women at every stage of life. Our comprehensive maternity care includes high-risk pregnancy monitoring, luxury delivery suites, expert midwifery support, lactation counseling, and a full range of preventive and corrective gynecological procedures.',
    services: ['Prenatal Care & Education', 'Pain-managed & Natural Deliveries', 'High-Risk Pregnancy Support', 'Lactation & Postpartum Counseling', 'Annual Gynecological Screenings', 'Minimally Invasive Gynecologic Surgery'],
    emergencyContact: '+1 (555) 019-9115'
  },
  {
    id: 'oncology',
    name: 'Oncology & Cancer Center',
    iconName: 'Shield',
    description: 'Holistic and advanced cancer treatment combining medical oncology, radiation, and surgical expertise.',
    detailedDescription: 'Our Oncology Center delivers compassionate, multi-disciplinary cancer treatment plans tailored to each patient. Integrating medical oncology, localized radiation therapies, immunotherapy, and genetic testing, our tumor boards ensure you receive the most precise, evidence-based care alongside robust psychological support.',
    services: ['Chemotherapy & Infusions', 'Advanced Radiation Therapy', 'Immunotherapy & Target Biologics', 'Surgical Oncology', 'Genetic Counseling & Screening', 'Palliative & Supportive Care'],
    emergencyContact: '+1 (555) 019-9116'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-sarah-jenkins',
    name: 'Dr. Sarah Jenkins, MD',
    role: 'Chief of Cardiology',
    departmentId: 'cardiology',
    qualifications: ['MD - Harvard Medical School', 'Fellowship in Interventional Cardiology - Johns Hopkins'],
    experience: 18,
    specialties: ['Interventional Cardiology', 'Coronary Artery Disease', 'Heart Failure Management'],
    timing: 'Mon, Wed, Fri (9:00 AM - 1:00 PM)',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    bio: 'Dr. Jenkins has over 18 years of experience in performing complex cardiac catheterizations and is a prominent voice in preventative cardiology and women’s heart health.',
    rating: 4.9
  },
  {
    id: 'dr-robert-chen',
    name: 'Dr. Robert Chen, MD',
    role: 'Senior Pediatrician',
    departmentId: 'pediatrics',
    qualifications: ['MD - Stanford University School of Medicine', 'Residency in Pediatrics - Boston Children’s Hospital'],
    experience: 15,
    specialties: ['Neonatology', 'Pediatric Asthma & Allergies', 'Developmental Pediatrics'],
    timing: 'Tue, Thu, Sat (10:00 AM - 4:00 PM)',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    bio: 'Dr. Chen is celebrated for his compassionate bedside manner and has spent the last decade and a half caring for children and pioneering parent education programs.',
    rating: 4.8
  },
  {
    id: 'dr-elena-rodriguez',
    name: 'Dr. Elena Rodriguez, MD',
    role: 'Director of Maternity Services',
    departmentId: 'maternity',
    qualifications: ['MD - Yale School of Medicine', 'Residency in OB/GYN - Columbia University Medical Center'],
    experience: 16,
    specialties: ['High-Risk Obstetrics', 'Minimally Invasive Gynecologic Surgery', 'Menopause Medicine'],
    timing: 'Mon, Tue, Thu (8:30 AM - 12:30 PM)',
    image: 'https://images.unsplash.com/photo-1594824813573-246434e33963?auto=format&fit=crop&q=80&w=400',
    bio: 'Dr. Rodriguez provides comprehensive prenatal and gynecological care. She is dedicated to empowering mothers and supporting natural childbirth choices.',
    rating: 4.95
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance, MD, PhD',
    role: 'Chief Neurosurgery Specialist',
    departmentId: 'neurology',
    qualifications: ['MD, PhD - Columbia College of Physicians & Surgeons', 'Fellowship in Stereotactic Neurosurgery - Mayo Clinic'],
    experience: 20,
    specialties: ['Brain Tumor Resection', 'Spinal Cord Surgery', 'Trigeminal Neuralgia Care'],
    timing: 'Wed, Fri (1:00 PM - 5:00 PM)',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    bio: 'Dr. Vance is a world-renowned neurosurgeon specializing in complex microsurgery and tumor resections, actively researching computer-assisted brain navigation systems.',
    rating: 4.9
  },
  {
    id: 'dr-james-carter',
    name: 'Dr. James Carter, MD',
    role: 'Senior Orthopedic Surgeon',
    departmentId: 'orthopedics',
    qualifications: ['MD - Perelman School of Medicine, UPenn', 'Residency in Orthopedic Surgery - Hospital for Special Surgery, NY'],
    experience: 14,
    specialties: ['Joint Reconstruction', 'Sports Medicine Injuries', 'Arthroscopic Knee Repairs'],
    timing: 'Tue, Thu (9:00 AM - 3:00 PM)',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    bio: 'Dr. Carter treats competitive athletes and active adults alike, focusing on joint preservation, tissue restoration, and minimally invasive joint replacements.',
    rating: 4.75
  },
  {
    id: 'dr-amara-patel',
    name: 'Dr. Amara Patel, MD',
    role: 'Lead Oncologist',
    departmentId: 'oncology',
    qualifications: ['MD - University of Chicago Pritzker School of Medicine', 'Oncology Fellowship - MD Anderson Cancer Center'],
    experience: 12,
    specialties: ['Breast Oncology', 'Immunotherapy Protocols', 'Targeted Molecular Therapies'],
    timing: 'Mon, Wed, Thu (10:00 AM - 2:00 PM)',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400',
    bio: 'Dr. Patel combines deep expertise in precision medicine and customized clinical trials with a passionate focus on her patients’ quality of life.',
    rating: 4.88
  }
];

export const SERVICES: Service[] = [
  {
    id: 'emergency-care',
    name: '24/7 Emergency Medicine',
    description: 'Round-the-clock rapid response trauma center fully equipped for severe injuries and life-threatening conditions.',
    iconName: 'Activity',
    details: ['Level 1 Trauma Center', 'Dedicated Pediatric Emergency Bay', 'Mobile ICU Ambulance Fleet', 'On-call Specialists 24/7/365']
  },
  {
    id: 'diagnostics',
    name: 'Advanced Imaging & Diagnostics',
    description: 'Highly accurate state-of-the-art scans and blood tests with expedited processing for swift diagnoses.',
    iconName: 'Activity',
    details: ['3T MRI and 128-Slice CT Scanners', 'Ultrasound & Digital Mammography', 'Fully Automated Pathology Lab', 'Molecular Diagnostics & Genetic Testing']
  },
  {
    id: 'intensive-care',
    name: 'Critical Care (ICU / NICU)',
    description: 'Constant monitoring, high nurse-to-patient ratio, and advanced life support for critical adult and neonatal patients.',
    iconName: 'Shield',
    details: ['Advanced Hemodynamic Monitors', 'Mechanized Ventilator Technologies', 'Specialized Neonatal Incubators', '24-hour Critical Care Intensivists']
  },
  {
    id: 'surgery',
    name: 'Minimally Invasive Surgery',
    description: 'Precise, expert surgeries utilizing laparoscopy, robotic assistance, and modern techniques to accelerate recovery times.',
    iconName: 'Sparkles',
    details: ['DaVinci Robotic Surgical Suite', 'Outpatient Day Surgery', 'Advanced Sterilization Protocols', 'Specialized Post-Op Recovery Units']
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'basic-well-check',
    name: 'Essential Health Screen',
    price: '$149',
    description: 'Recommended annually for young adults to track vital biomarkers and establish health baselines.',
    features: [
      'Complete Blood Count (CBC)',
      'Basic Metabolic & Kidney Panel',
      'Cholesterol & Lipid Profile',
      'Blood Pressure & BMI Assessment',
      'General Physician Consultation'
    ],
    recommendedFor: 'Adults aged 18 to 35 seeking proactive routine screening.'
  },
  {
    id: 'comprehensive-gold',
    name: 'Comprehensive Gold Package',
    price: '$299',
    description: 'An exhaustive physical and metabolic audit designed to identify hidden risks and boost vitality.',
    features: [
      'Everything in Essential Health Screen',
      'Liver Function Panel & Enzymes',
      'Thyroid Hormone Panel (TSH)',
      'Electrocardiogram (ECG / EKG)',
      'Vitamin D & B12 Levels Assessment',
      'Dietary & Lifestyle Counseling'
    ],
    recommendedFor: 'Men and women aged 35 to 55 pursuing deep proactive wellness.'
  },
  {
    id: 'senior-cardiac-care',
    name: 'Platinum Senior & Cardiac Audit',
    price: '$499',
    description: 'Our most rigorous screening focused on cardiovascular resilience, metabolic function, and senior health factors.',
    features: [
      'Everything in Gold Package',
      'Echocardiogram or Cardiac Stress Test',
      'HbA1c Diabetes Markers',
      'Bone Mineral Density (DEXA) Scan',
      'Urine Analysis & Kidney GFR',
      'Senior Specialist Consultation'
    ],
    recommendedFor: 'Seniors aged 55+ or individuals with a family history of heart disease.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'David Miller',
    age: 52,
    treatment: 'Double Bypass Surgery',
    rating: 5,
    quote: 'The care I received at the cardiology department saved my life. Dr. Jenkins and the entire nursing team were incredibly supportive, explaining every step clearly. The facilities felt like a premium hotel, and the recovery support was superb.',
    date: 'May 12, 2026'
  },
  {
    id: 'test-2',
    patientName: 'Samantha Albright',
    age: 29,
    treatment: 'Maternity Delivery',
    rating: 5,
    quote: 'Giving birth to our first daughter here was a dream experience. The birthing suites were clean, warm, and highly comfortable. Dr. Rodriguez respected all my birth preferences while ensuring absolute safety. The postpartum lactation counselors were angels!',
    date: 'June 02, 2026'
  },
  {
    id: 'test-3',
    patientName: 'Robert Vance',
    age: 41,
    treatment: 'Pediatric Asthma Management (Son)',
    rating: 5,
    quote: 'My son had chronic asthma issues that kept us in and out of clinics. Dr. Chen put together an easy-to-follow, highly effective prevention and trigger management plan. My son hasn’t missed a single school day since! We are forever grateful.',
    date: 'March 15, 2026'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'heart-healthy-habits',
    title: '5 Daily Habits to Protect Your Cardiovascular Health',
    excerpt: 'Simple yet powerful lifestyle adjustments you can make starting today to protect your heart and arteries.',
    content: `Cardiovascular disease remains the leading cause of death worldwide. However, the good news is that up to 80% of premature heart attacks and strokes are preventable through lifestyle choices. Our cardiology team, led by Dr. Sarah Jenkins, highlights five daily habits that significantly improve heart health:

1. **Prioritize 30 Minutes of Moderate Exercise:** Brisk walking, cycling, or swimming strengthens the heart muscle and lowers blood pressure.
2. **Embrace a Mediterranean-Style Diet:** Focus on whole grains, leafy greens, lean proteins, olive oil, and abundant berries. Reduce processed sodium.
3. **Ensure High-Quality Sleep:** Getting 7 to 8 hours of uninterrupted sleep helps regulate cortisol (stress hormones) and stabilizes your resting heart rate.
4. **Manage Stress Positively:** Practice deep diaphragmatic breathing, meditation, or spend time in nature to calm the nervous system.
5. **Ditch the Taboos of Screening:** Regular blood pressure and cholesterol checkups identify silent arterial warning signs long before symptoms manifest.

By adopting even two of these habits, you can establish a strong baseline for lifelong heart resilience. Speak to a physician today to check your cardiac score!`,
    category: 'Heart Health',
    author: 'Dr. Sarah Jenkins, MD',
    date: 'June 18, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'childhood-immunity-guide',
    title: 'Nurturing Your Child’s Immunity: Fact vs. Fiction',
    excerpt: 'An expert pediatrician cuts through the clutter to guide you on vaccines, vitamins, and building immune baselines.',
    content: `With seasonal bugs constantly rotating, parent chat groups are flooded with tips on boosting kids' immune systems. Some of these are incredibly helpful, while others are purely mythical. Dr. Robert Chen, Senior Pediatrician, helps us separate clinical facts from fiction:

### Myth 1: Megadoses of Vitamin C prevent cold infections.
**Fact:** While Vitamin C is an essential nutrient, overloading your child's body past the daily absorption ceiling does not prevent colds. It is simply excreted. Instead, emphasize a balanced colorful plate with strawberries, citrus fruits, and broccoli.

### Myth 2: Kids should be kept in 100% sterile environments.
**Fact:** Over-sanitization can limit the development of a child's immune system. Healthy exposure to outdoor soils, friendly family pets, and normal play is vital for building immune antibodies. Clean hands are important, but absolute sterilization is counterproductive.

### Clinical Foundations of True Immunity:
1. **Immunization:** Staying on track with the pediatric vaccine schedule is the single most powerful defense against highly infectious child disorders.
2. **Quality Sleep:** Infants need 12-16 hours, while school-aged kids require 9-11 hours to actively synthesize immune proteins.
3. **Gut Health:** A diet rich in prebiotic fibers (bananas, oats, onions) supports healthy gut flora where 70% of immune tissue resides.

Ensure your little ones stay hydrated and enjoy plenty of unstructured physical outdoor play to build a natural, resilient baseline.`,
    category: 'Pediatric Wellness',
    author: 'Dr. Robert Chen, MD',
    date: 'May 29, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'preventative-care-importance',
    title: 'Why Preventive Screening is the Ultimate Modern Medicine',
    excerpt: 'Why waiting for disease symptoms is a dangerous strategy, and how comprehensive health scans are changing outcomes.',
    content: `Modern medical research is shifting focus from reactive treatments (curing sickness) to proactive longevity (keeping individuals highly functional and healthy). Preventive health checkups represent the bedrock of this transition.

### The Problem with Waiting for Symptoms
Many critical health conditions—such as high blood pressure, early-stage type 2 diabetes, fatty liver disease, and arterial calcification—are notoriously silent. They do not cause visible pain or clear symptoms until they have progressed to advanced, harder-to-manage stages.

### Benefits of Annual Strategic Screening:
1. **Favorable Medical Outcomes:** Finding atypical cells or arterial narrowings early allows for gentle, lifestyle-based or minimally invasive reversals.
2. **Peace of Mind:** Knowing your biological markers are highly optimized gives you confidence to live fully and design active career goals.
3. **Substantial Cost Savings:** It is significantly more affordable to check and manage cholesterol early than to undergo emergency surgical stents later in life.

At ApexCare, we design health screens from basic panels to senior Platinum audits that look deeply at your metabolic health. Treat your annual health screening like an oil change for your body's luxury high-performance vehicle—non-negotiable and highly rewarding.`,
    category: 'Preventative Medicine',
    author: 'Dr. Amara Patel, MD',
    date: 'April 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
  }
];

export const FAQS = [
  {
    question: 'How do I schedule an appointment online?',
    answer: 'You can easily schedule an appointment by navigating to our "Book Appointment" form, choosing your department and preferred doctor, selecting an available date and time slot, filling in your basic contact details, and submitting. You will see a confirmed booking immediately, which is visible in your local "My Appointments" panel.'
  },
  {
    question: 'What insurance networks do you accept?',
    answer: 'ApexCare Hospital partners with major domestic and international health insurance providers, including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, and Kaiser Permanente. We suggest checking with your carrier to verify specific co-pay and referral details before scheduling.'
  },
  {
    question: 'What documentation should I bring to my first appointment?',
    answer: 'Please bring a valid photo government identification card, your current active health insurance card, a list of any current active prescription medicines you are taking, and copies of recent imaging scans or lab reports related to your visit.'
  },
  {
    question: 'Does the hospital provide round-the-clock emergency services?',
    answer: 'Yes! Our Level 1 Emergency Trauma Center and advanced Cardiac Catheterization units are staffed and operational 24 hours a day, 365 days a year. Our mobile ICU emergency ambulances can be reached at our hotlines immediately.'
  },
  {
    question: 'Is parking available on-site for patients and visitors?',
    answer: 'Yes, we have a multi-level secure parking garage directly adjacent to the main entrance. Parking is free for all patients undergoing active treatment, day surgery, or immediate emergency care. Visitor parking passes are validated at the main reception desk.'
  }
];
