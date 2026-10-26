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
import profileImg from '../assets/profile.jpg';

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

          {/* Right Column: Profile Photo & Interactive QA Diagnostics */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md space-y-4">
              
              {/* Outer Decorative Glow Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-electric-blue/30 via-purple-600/30 to-pink-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />
              
              {/* Profile Photo Card */}
              <div className="relative bg-dark-900/90 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl group">
                <div className="relative aspect-[3.8/4.6] overflow-hidden bg-gradient-to-b from-slate-900/40 via-dark-900/60 to-dark-950">
                  <img
                    src={profileImg}
                    alt="Nandana Vinod - Manual Software Tester & QA Engineer"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Vignette at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent pointer-events-none" />

                  {/* Top-Right Pill Badge */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-950/85 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Open to QA Roles</span>
                  </div>

                  {/* Bottom Photo Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-dark-950/85 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>Nandana Vinod</span>
                        <ShieldCheck className="w-4 h-4 text-electric-blue" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        Manual Software Tester / QA
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">Focus</span>
                      <span className="text-xs font-semibold text-emerald-400">Quality First</span>
                    </div>
                  </div>
                </div>

                {/* Integrated Mini QA Diagnostics Bar */}
                <div className="p-3.5 bg-dark-950/95 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 block mb-0.5">Test Suite</span>
                    <span className="text-white font-bold text-sm">42/42</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/80">
                    <span className="text-[10px] text-emerald-400 block mb-0.5">Pass Rate</span>
                    <span className="text-emerald-400 font-bold text-sm">97.6%</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/80">
                    <span className="text-[10px] text-rose-400 block mb-0.5">Defect Caught</span>
                    <span className="text-rose-400 font-bold text-sm">01 (P1)</span>
                  </div>
                </div>
              </div>

              {/* Live Test Case Monitor Snippet */}
              <div className="p-3 rounded-2xl bg-dark-900/90 border border-slate-800 shadow-lg text-xs font-mono space-y-1.5">
                <div className="flex items-center justify-between px-1 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Terminal className="w-3.5 h-3.5 text-electric-blue" />
                    <span>Live Test Verification</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    STLC Active
                  </span>
                </div>

                {testSteps.slice(activeStep, activeStep + 1).map((step) => (
                  <div
                    key={step.id}
                    className="p-2.5 rounded-xl bg-slate-950/80 border border-electric-blue/40 flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-2 truncate">
                      {step.status === 'PASS' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <Bug className="w-4 h-4 text-rose-400 flex-shrink-0 animate-bounce" />
                      )}
                      <span className="text-slate-200 text-xs truncate">{step.name}</span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ml-2 ${
                        step.status === 'PASS'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-950/80 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Floating Quality Gate Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-dark-900/95 border border-purple-500/40 rounded-2xl px-3.5 py-2 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Quality Mindset</div>
                  <div className="text-[9px] text-slate-400">Zero Critical Leaks</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
