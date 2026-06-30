import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Eye, Type, ChevronDown, Search, HeartPulse, Sparkles } from 'lucide-react';
import { DEPARTMENTS } from '../data/mockData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onSelectDepartment: (deptId: string) => void;
  onSearchQuery: (query: string) => void;
  
  // Accessibility Props
  fontSize: 'normal' | 'large' | 'extra-large';
  setFontSize: (size: 'normal' | 'large' | 'extra-large') => void;
  highContrast: boolean;
  setHighContrast: (contrast: boolean) => void;
}

export default function Navbar({
  currentPage,
  onNavigate,
  onSelectDepartment,
  onSearchQuery,
  fontSize,
  setFontSize,
  highContrast,
  setHighContrast
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAccessDropdown, setShowAccessDropdown] = useState(false);
  const [showDeptDropdown, setShowDeptDropdown] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  // Sticky header state
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Departments', value: 'departments' },
    { label: 'Doctors', value: 'doctors' },
    { label: 'Services', value: 'services' },
    { label: 'Facilities', value: 'facilities' },
    { label: 'Health Packages', value: 'packages' },
    { label: 'Testimonials', value: 'testimonials' },
    { label: 'Health Articles', value: 'blog' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      onSearchQuery(searchVal);
      onNavigate('doctors'); // Redirect to doctors page where search results are handled
    }
  };

  const selectDept = (id: string) => {
    onSelectDepartment(id);
    onNavigate('departments');
    setShowDeptDropdown(false);
  };

  return (
    <div className={`w-full z-50 ${highContrast ? 'bg-black text-white border-b border-yellow-400' : ''}`}>
      {/* Top Utility Bar */}
      <div className={`hidden sm:flex bg-blue-900 text-white px-8 py-2 justify-between items-center text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${highContrast ? 'bg-zinc-950 border-b border-yellow-400/35 text-yellow-400' : ''}`}>
        <div className="flex gap-6">
          <span className="flex items-center gap-1.5 opacity-90">
            <Phone className="w-3.5 h-3.5 text-teal-300" />
            24/7 EMERGENCY: (555) 019-9111
          </span>
          <span className="flex items-center gap-1.5 opacity-90">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400"></span>
            LOCATED: 100 MEDICAL PLAZA, SAN FRANCISCO, CA
          </span>
        </div>
        <div className="flex gap-4">
          <button onClick={() => onNavigate('contact')} className="hover:text-teal-300 transition uppercase">PATIENT PORTAL</button>
          <button onClick={() => onNavigate('about')} className="hover:text-teal-300 transition uppercase">CAREERS</button>
          <button onClick={() => onNavigate('packages')} className="hover:text-teal-300 transition uppercase">PAY A BILL</button>
        </div>
      </div>

      <header
        className={`w-full transition-all duration-300 ${
          isSticky
            ? 'sticky top-0 bg-white/95 backdrop-blur-md shadow-lg shadow-slate-100/50 border-b border-slate-200 py-3'
            : 'relative bg-white py-4 border-b border-slate-200 shadow-sm'
        } ${highContrast ? 'bg-black border-yellow-400 text-white border-b-2' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md text-white group-hover:scale-105 transition">
                <HeartPulse className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-blue-900 tracking-tight group-hover:text-blue-700 transition flex items-center gap-1">
                  ApexCare <span className="text-teal-600 font-light">Hospital</span>
                </span>
                <p className="text-[10px] text-slate-400 font-bold tracking-wide uppercase leading-none">Center of Clinical Excellence</p>
              </div>
            </div>

            {/* Desktop Search */}
            <form onSubmit={handleSearchSubmit} className="hidden lg:flex items-center relative w-full max-w-xs xl:max-w-sm">
              <Search className="absolute left-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search specialists, medical keywords..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl focus:outline-none text-xs text-slate-800 transition"
              />
              {searchVal && (
                <button
                  type="button"
                  onClick={() => setSearchVal('')}
                  className="absolute right-3 text-slate-400 hover:text-slate-600 text-xs"
                >
                  Clear
                </button>
              )}
            </form>

            {/* Right utilities: Navigation links, Accessibility, Emergency Contact */}
            <div className="hidden xl:flex items-center gap-6">
              <nav className="flex items-center gap-4">
                {navItems.map((item) => {
                  if (item.value === 'departments') {
                    // Special Dropdown for Departments (Mega Menu Trigger)
                    return (
                      <div
                        key={item.value}
                        className="relative"
                        onMouseEnter={() => setShowDeptDropdown(true)}
                        onMouseLeave={() => setShowDeptDropdown(false)}
                      >
                        <button
                          onClick={() => onNavigate('departments')}
                          className={`px-2 py-1 text-xs font-bold tracking-wide uppercase flex items-center gap-1 transition ${
                            currentPage === 'departments'
                              ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                              : 'text-slate-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-200 pb-1'
                          }`}
                        >
                          {item.label} <ChevronDown className="w-3 h-3" />
                        </button>

                        {showDeptDropdown && (
                          <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50">
                            <div className="px-4 py-2 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                              Explore Specialties
                            </div>
                            {DEPARTMENTS.map((dept) => (
                              <button
                                key={dept.id}
                                onClick={() => selectDept(dept.id)}
                                className="w-full px-4 py-2.5 text-left text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                {dept.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.value}
                      onClick={() => onNavigate(item.value)}
                      className={`px-2 py-1 text-xs font-bold tracking-wide uppercase transition ${
                        currentPage === item.value
                          ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                          : 'text-slate-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-200 pb-1'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              {/* Accessibility Panel Toggle */}
              <div className="relative">
                <button
                  onClick={() => setShowAccessDropdown(!showAccessDropdown)}
                  className={`p-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl transition flex items-center justify-center ${
                    highContrast ? 'border-yellow-400 border text-yellow-400 bg-black' : ''
                  }`}
                  title="Accessibility controls"
                >
                  <Eye className="w-4 h-4" />
                </button>

                {showAccessDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl p-4 z-50 text-slate-800">
                    <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-teal-600" /> Accessibility Support
                      </span>
                      <button
                        onClick={() => setShowAccessDropdown(false)}
                        className="text-slate-400 hover:text-slate-600 text-xs font-bold"
                      >
                        Close
                      </button>
                    </div>

                    {/* Font Sizing */}
                    <div className="space-y-2 mb-4">
                      <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                        <Type className="w-3.5 h-3.5" /> Text Size Resizer
                      </span>
                      <div className="grid grid-cols-3 gap-1">
                        <button
                          onClick={() => setFontSize('normal')}
                          className={`py-1.5 text-xs rounded-lg border font-medium ${
                            fontSize === 'normal'
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          Default
                        </button>
                        <button
                          onClick={() => setFontSize('large')}
                          className={`py-1.5 text-xs rounded-lg border font-semibold ${
                            fontSize === 'large'
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          A+ Large
                        </button>
                        <button
                          onClick={() => setFontSize('extra-large')}
                          className={`py-1.5 text-xs rounded-lg border font-extrabold ${
                            fontSize === 'extra-large'
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          A++ Max
                        </button>
                      </div>
                    </div>

                    {/* High Contrast Mode Toggle */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" /> High Contrast
                      </span>
                      <button
                        onClick={() => setHighContrast(!highContrast)}
                        className={`px-3 py-1 text-xs font-bold rounded-lg border transition ${
                          highContrast
                            ? 'bg-black border-yellow-400 text-yellow-400'
                            : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {highContrast ? 'ON' : 'OFF'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Emergency CTA */}
              <button
                onClick={() => onNavigate('contact')}
                className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-wider shadow-lg shadow-teal-100 hover:bg-teal-700 uppercase transition"
              >
                BOOK APPOINTMENT
              </button>
            </div>

            {/* Medium and small screens hamburger and utilities */}
            <div className="flex xl:hidden items-center gap-3">
              <button
                onClick={() => {
                  setHighContrast(!highContrast);
                  setFontSize(fontSize === 'normal' ? 'large' : fontSize === 'large' ? 'extra-large' : 'normal');
                }}
                className="p-2 bg-slate-50 rounded-xl text-slate-600 text-xs font-bold border border-slate-150 flex items-center gap-1"
                title="Quick cycle accessibility layout"
              >
                <Eye className="w-3.5 h-3.5" /> Text++
              </button>

              <a
                href="tel:+15550199111"
                className="p-2 bg-red-600 text-white rounded-xl flex items-center justify-center"
                title="Emergency Call"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-4 shadow-xl text-slate-800">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search doctors, medicine, services..."
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-xs text-slate-800"
              />
            </form>

            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide uppercase transition ${
                    currentPage === item.value
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="border-t border-slate-100 pt-4 space-y-3">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Accessibility Panels</p>
              <div className="flex items-center justify-between gap-2 bg-slate-50 p-2.5 rounded-xl">
                <span className="text-xs font-bold text-slate-600">Text Size:</span>
                <div className="flex gap-1">
                  {(['normal', 'large', 'extra-large'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setFontSize(sz)}
                      className={`px-2.5 py-1 text-[10px] rounded-lg font-bold capitalize border ${
                        fontSize === sz
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'border-slate-200 text-slate-700 bg-white'
                      }`}
                    >
                      {sz.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setHighContrast(!highContrast)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex justify-between items-center"
              >
                <span>Contrast Mode</span>
                <span className="text-blue-600">{highContrast ? 'High Contrast On' : 'Standard'}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
