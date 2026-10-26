import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import LinkedinIcon from './icons/LinkedinIcon';
import { personalInfo, educationData, experienceData, skillCategories, additionalVerifiableSkill } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-950 border-b border-slate-800 text-white flex-shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-electric-blue" />
            <span className="font-bold text-sm tracking-tight">
              Nandana Vinod — QA Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-electric-blue" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 text-xs sm:text-sm bg-[#0a0d16] print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-electric-blue/40 shadow-sm print:border-gray-400 flex-shrink-0"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-electric-blue font-bold text-sm sm:text-base mt-0.5 print:text-blue-700">
                  {personalInfo.title}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 print:text-gray-700 mt-2 font-mono">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-electric-blue" /> {personalInfo.email}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.phone}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" /> {personalInfo.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" /> linkedin.com/in/nandana-vinod-k
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-electric-blue print:text-blue-700 font-bold">
              Professional Summary
            </h2>
            <p className="text-slate-300 print:text-gray-800 leading-relaxed">
              Passionate Computer Science Engineering graduate seeking an entry-level Manual Software Tester / QA Engineer position. Strong foundational knowledge in manual testing, functional and regression testing, test case design, defect tracking, and SDLC/STLC methodologies. Leverages hands-on MERN stack internship experience to understand underlying application workflows, APIs, and databases for thorough root-cause analysis and reliable defect reporting.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-electric-blue print:text-blue-700 font-bold">
              Core Skills & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-dark-900 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-white print:text-black block mb-1">Software Testing:</span>
                <span className="text-slate-300 print:text-gray-700">
                  Manual Testing, Functional Testing, Regression Testing, Test Case Design & Execution, Defect Identification, Bug Reporting
                </span>
              </div>
              <div className="p-3 rounded-xl bg-dark-900 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-white print:text-black block mb-1">Testing Fundamentals:</span>
                <span className="text-slate-300 print:text-gray-700">
                  SDLC, STLC, Agile / Scrum Methodology, Requirement Analysis, Test Documentation
                </span>
              </div>
              <div className="p-3 rounded-xl bg-dark-900 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-white print:text-black block mb-1">Web & Database:</span>
                <span className="text-slate-300 print:text-gray-700">
                  REST APIs, React, Node.js, Express.js, MongoDB, SQL, MySQL, Python, C
                </span>
              </div>
              <div className="p-3 rounded-xl bg-dark-900 border border-slate-800 print:border-gray-300">
                <span className="font-bold text-white print:text-black block mb-1">Tools & Additional:</span>
                <span className="text-slate-300 print:text-gray-700">
                  GitHub, Excel, Power BI, Pandas, NumPy, Matplotlib • <em>Selenium with Java (Demonstrable)</em>
                </span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-electric-blue print:text-blue-700 font-bold">
              Experience
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.role} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white print:text-black text-sm">{exp.role}</span>
                    <span className="text-slate-400 print:text-gray-600 ml-2">— {exp.company}, {exp.location}</span>
                  </div>
                  <span className="font-mono text-slate-400 print:text-gray-600">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-gray-700">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="leading-relaxed">{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-electric-blue print:text-blue-700 font-bold">
              Engineering Projects
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white print:text-black text-sm">
                    Plant Disease Detection App
                  </span>
                  <span className="font-mono text-slate-400 print:text-gray-600">April 2024</span>
                </div>
                <p className="text-slate-300 print:text-gray-700 mt-1 leading-relaxed">
                  Developed mobile ML app for plant disease detection using image processing. Integrated smartphone camera functionality for leaf scans and structured treatment workflows. Validated camera permission handling, boundary inputs, and latency.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white print:text-black text-sm">
                    AI-Powered Choreography System
                  </span>
                  <span className="font-mono text-slate-400 print:text-gray-600">March 2026</span>
                </div>
                <p className="text-slate-300 print:text-gray-700 mt-1 leading-relaxed">
                  Engineered AI choreography platform based on music tempo and rhythm analysis. Implemented beat detection and dance-step recommendations using machine learning techniques. Evaluated application behavior and audio synchronization.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-electric-blue print:text-blue-700 font-bold">
              Education
            </h2>
            <div className="space-y-2">
              {educationData.map((edu) => (
                <div key={edu.degree} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white print:text-black">{edu.degree}</span>
                    <span className="text-slate-400 print:text-gray-600 ml-2">— {edu.institution}</span>
                  </div>
                  <div className="font-mono text-slate-300 print:text-gray-700 font-semibold">
                    {edu.grade} ({edu.period})
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
