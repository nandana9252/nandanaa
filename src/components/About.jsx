import React from 'react';
import { 
  CheckCircle, 
  Search, 
  Workflow, 
  Database, 
  Code2, 
  ShieldAlert, 
  Eye, 
  Users, 
  Brain, 
  Sparkles,
  GitBranch
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

const iconMap = {
  0: Search,
  1: Workflow,
  2: ShieldAlert,
  3: GitBranch,
  4: Database,
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-electric-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-electric-blue mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ensuring Software Excellence Through Systematic Testing
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {aboutData.summary}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Core QA Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-electric-blue" />
              Core Testing Competencies
            </h3>

            <div className="space-y-3.5">
              {aboutData.highlights.map((item, idx) => {
                const Icon = iconMap[idx] || CheckCircle;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-dark-850/80 border border-slate-800/90 hover:border-slate-700 hover:bg-dark-800/90 transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center flex-shrink-0 group-hover:border-electric-blue/50 group-hover:shadow-glow-blue/20 transition-all">
                        <Icon className="w-5 h-5 text-electric-blue group-hover:text-cyan-300 transition-colors" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-semibold text-white group-hover:text-electric-blue transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Mindset & Developer Synergy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Developer-to-QA Synergy Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-dark-850 to-dark-900 border border-purple-500/30 relative overflow-hidden shadow-card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    The Developer Advantage
                  </h4>
                  <span className="text-xs text-purple-300 font-mono">Architecture-Aware QA</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {aboutData.developerAdvantage}
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/80 text-slate-300">
                  React Components
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/80 text-slate-300">
                  Express Handlers
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/80 text-slate-300">
                  MongoDB Queries
                </span>
              </div>
            </div>

            {/* QA Mindset & Analytical Strengths Card */}
            <div className="p-6 rounded-2xl bg-dark-850/80 border border-slate-800/90 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-electric-blue/15 border border-electric-blue/30 flex items-center justify-center text-electric-blue">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Testing Mindset & Soft Skills
                  </h4>
                  <span className="text-xs text-slate-400">How I approach every sprint</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {aboutData.coreTraits.map((trait) => (
                  <li key={trait} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stat Pill Bar */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 text-center">
                <div className="text-2xl font-bold font-mono text-white mb-0.5">2022–2026</div>
                <div className="text-xs text-slate-400">B.Tech CS Engineering</div>
              </div>
              <div className="p-4 rounded-xl bg-dark-900 border border-slate-800 text-center">
                <div className="text-2xl font-bold font-mono text-emerald-400 mb-0.5">Entry Level</div>
                <div className="text-xs text-slate-400">Ready for Deployment</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
