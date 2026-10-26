import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  MapPin, 
  Sparkles, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-electric-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-electric-blue mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06 // ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Education & Academic Foundations
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Solid foundations in computer science theory, software design, mathematical logic, and analytical problem-solving.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, idx) => (
            <div
              key={edu.degree}
              className="relative p-6 sm:p-8 rounded-3xl bg-dark-850/80 border border-slate-800/90 hover:border-slate-700 hover:bg-dark-800/80 transition-all duration-300 shadow-card group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Degree & Institution */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-electric-blue group-hover:scale-105 group-hover:border-electric-blue/50 transition-all flex-shrink-0 shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono text-electric-blue tracking-wide uppercase">
                      {edu.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-electric-blue transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Score / Grade Pill */}
                <div className="self-start sm:self-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-br from-slate-900 to-dark-900 border border-electric-blue/30 shadow-sm">
                    <Award className="w-4 h-4 text-electric-blue" />
                    <span className="font-mono font-bold text-sm text-white">
                      {edu.grade}
                    </span>
                  </div>
                </div>

              </div>

              {/* Description & Coursework */}
              <div className="mt-5 pt-5 border-t border-slate-800/80 space-y-3">
                <p className="text-sm text-slate-400 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                {edu.highlights && (
                  <div className="space-y-1.5 pt-1">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
