import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  FileCode2, 
  Terminal, 
  ShieldCheck, 
  Sparkles,
  Bug,
  Search,
  ExternalLink,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [activeStep, setActiveStep] = useState(0);

  const testSteps = [
    { id: 'TS-01', name: 'User Authentication Flow', status: 'PASS', time: '14ms', type: 'Functional' },
    { id: 'TS-02', name: 'Input Boundary Validation', status: 'PASS', time: '08ms', type: 'Negative' },
    { id: 'TS-03', name: 'Cart Checkout Payload Format', status: 'DEFECT', time: '22ms', type: 'Edge-Case' },
    { id: 'TS-04', name: 'JWT Expiration & Refresh Flow', status: 'PASS', time: '16ms', type: 'Security' },
  ];

  // Subtle cyclic animation for QA steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % testSteps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [testSteps.length]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electric-purple/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-electric-blue/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle tech grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-medium text-emerald-300 shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">{personalInfo.status}</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <span className="text-slate-400 text-sm sm:text-base font-mono font-medium block">
                👋 Hello World, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
            </div>

            {/* Role Subtitle */}
            <div className="inline-block">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-electric-blue via-indigo-300 to-electric-purple bg-clip-text text-transparent">
                {personalInfo.title}
              </p>
            </div>

            {/* Tagline / Bio Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
              "{personalInfo.tagline}"
            </p>

            {/* Core Value Quick Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-electric-blue" />
                Manual & Functional QA
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono flex items-center gap-1.5">
                <Bug className="w-3.5 h-3.5 text-rose-400" />
                Defect Life Cycle
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                MERN Intern Background
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-electric-blue via-indigo-600 to-electric-purple hover:from-cyan-400 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-electric-purple/25 hover:shadow-electric-purple/40 flex items-center justify-center gap-2 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-electric-blue" />
                <span>Contact Me</span>
              </a>

              <a
                href="#qa-showcase"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-medium text-xs text-slate-400 hover:text-slate-200 border border-dashed border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5 text-purple-400" />
                <span>Explore QA Approach</span>
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Technology & QA Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Glow Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-electric-blue/30 via-purple-600/30 to-pink-500/20 rounded-3xl blur-xl opacity-75 animate-pulse-subtle pointer-events-none" />
              
              {/* Main Interactive Diagnostics Card */}
              <div className="relative bg-dark-900/95 border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-slate-400 ml-2">qa-inspector.terminal</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SUITE LIVE
                  </div>
                </div>

                {/* Dashboard Metrics */}
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
                    <div className="text-xs text-slate-400 font-mono mb-1">Executed</div>
                    <div className="text-xl font-bold font-mono text-white">42/42</div>
                    <span className="text-[10px] text-emerald-400">100% complete</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
                    <div className="text-xs text-slate-400 font-mono mb-1">Passed</div>
                    <div className="text-xl font-bold font-mono text-emerald-400">41</div>
                    <span className="text-[10px] text-slate-400">97.6% rate</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
                    <div className="text-xs text-slate-400 font-mono mb-1">Defects</div>
                    <div className="text-xl font-bold font-mono text-rose-400">01</div>
                    <span className="text-[10px] text-rose-300">P1 isolated</span>
                  </div>
                </div>

                {/* Live Test Case Monitor */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
                    <span>Recent Test Executions</span>
                    <span className="text-[10px] text-slate-500">v2.4-staging</span>
                  </div>

                  <div className="space-y-2">
                    {testSteps.map((step, idx) => {
                      const isHighlighted = idx === activeStep;
                      return (
                        <div
                          key={step.id}
                          className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-between font-mono text-xs ${
                            isHighlighted
                              ? 'bg-slate-800/80 border-electric-blue/50 shadow-sm'
                              : 'bg-slate-950/50 border-slate-800/60 opacity-80'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            {step.status === 'PASS' ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            ) : (
                              <Bug className="w-4 h-4 text-rose-400 flex-shrink-0 animate-bounce" />
                            )}
                            <div className="truncate">
                              <span className="text-slate-400 mr-2 text-[11px]">{step.id}</span>
                              <span className="text-slate-200 font-sans text-xs">{step.name}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                              {step.type}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                step.status === 'PASS'
                                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                                  : 'bg-rose-950/80 text-rose-400 border border-rose-500/30'
                              }`}
                            >
                              {step.status}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer badge inside card */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
                    <span>Quality Assurance Ready</span>
                  </div>
                  <span className="font-mono text-slate-500">STLC Cycle 3</span>
                </div>
              </div>

              {/* Floating Quality Gate Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-dark-900/95 border border-purple-500/40 rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Quality Mindset</div>
                  <div className="text-[10px] text-slate-400">Zero Critical Defects to Production</div>
                </div>
              </div>

              {/* Floating Defect Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-dark-900/95 border border-cyan-500/40 rounded-2xl px-3.5 py-2 shadow-xl backdrop-blur-md items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono text-cyan-300">Manual & Functional QA</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
