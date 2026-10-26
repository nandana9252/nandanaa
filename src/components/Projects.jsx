import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Camera, 
  Music, 
  ShieldCheck,
  Info,
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const projectVisuals = {
  'plant-disease-detection': {
    icon: Camera,
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/10',
    borderColor: 'border-emerald-500/30',
    accentColor: 'text-emerald-400',
    badgeText: 'Computer Vision & Mobile UX',
    qaTestingNote: 'Tested camera permission states, lighting edge cases, and response latency across various device resolutions.',
  },
  'ai-choreography': {
    icon: Music,
    gradient: 'from-purple-500/20 via-indigo-500/20 to-blue-500/10',
    borderColor: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    badgeText: 'Audio Analysis & ML Flow',
    qaTestingNote: 'Evaluated algorithmic consistency across diverse tempos, audio formats, and sync timings between sound and UI prompts.',
  },
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-electric-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-electric-blue mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Engineering Projects & Behavioral Validation
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Practical applications developed with rigorous attention to user workflows, input limits, and edge-case behavior.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project) => {
            const visual = projectVisuals[project.id] || projectVisuals['plant-disease-detection'];
            const VisualIcon = visual.icon;

            return (
              <div
                key={project.id}
                className="rounded-3xl bg-dark-850/90 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card group"
              >
                {/* Project Header Banner */}
                <div className={`p-6 sm:p-7 bg-gradient-to-r ${visual.gradient} border-b border-slate-800/80 relative`}>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300">
                      <VisualIcon className={`w-3.5 h-3.5 ${visual.accentColor}`} />
                      {visual.badgeText}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Project Body */}
                <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
                  
                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-1">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${visual.accentColor}`} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* QA Evaluation Callout */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-electric-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block font-semibold uppercase">
                        QA Evaluation Perspective:
                      </span>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {visual.qaTestingNote}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-dark-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Only shown when verified link exists */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    {project.githubAvailable && project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-xs font-semibold text-slate-200 transition-all"
                      >
                        <FolderGit2 className="w-4 h-4 text-electric-blue" />
                        <span>GitHub Profile</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    ) : null}

                    {/* Truthful demo/code status note */}
                    <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5 ml-auto text-right">
                      <Info className="w-3.5 h-3.5 text-slate-500" />
                      <span>{project.demoNote}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
