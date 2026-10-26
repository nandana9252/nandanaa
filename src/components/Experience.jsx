import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  GitBranch, 
  Sparkles, 
  Layers, 
  ShieldCheck,
  Users
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-electric-blue/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-electric-blue mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Hands-On Development & Workflow Validation
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Practical industry immersion building full-stack applications in an Agile team—leveraged directly to sharpen software testing insight.
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div
              key={exp.role}
              className="relative p-7 sm:p-9 rounded-3xl bg-dark-850/90 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 shadow-card"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-electric-blue via-electric-purple to-transparent" />

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-electric-blue/10 border border-electric-blue/30 text-xs font-mono text-electric-blue mb-2">
                    <Briefcase className="w-3 h-3" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-slate-300 flex items-center gap-2 mt-1">
                    <span className="text-electric-blue">{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 font-normal flex items-center gap-1 text-sm">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-electric-purple" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-electric-blue" />
                  Key Responsibilities & System Validation
                </h4>

                <div className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700/80 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* QA Perspective Highlight Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-dark-900 to-dark-850 border border-electric-purple/30 relative overflow-hidden">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Direct Connection to QA & Software Quality</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30">
                        QA Synergy
                      </span>
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.qaTakeaway}
                    </p>
                  </div>
                </div>
              </div>

              {/* Team & Methodology Badges */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-500" />
                  <span>6-Member Agile Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-slate-500" />
                  <span>GitHub Version Control & Pull Request Reviews</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
