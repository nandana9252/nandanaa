import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileCheck, 
  Database, 
  Globe, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Search,
  Zap,
  Code
} from 'lucide-react';
import { skillCategories, additionalVerifiableSkill } from '../data/portfolioData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  FileCheck: FileCheck,
  Database: Database,
  Globe: Globe,
  Wrench: Wrench,
};

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoriesList = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = skillCategories.map((cat) => {
    const matchesCategory = selectedCategory === 'All' || selectedCategory === cat.category;
    if (!matchesCategory) return null;

    const matchedSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (searchTerm && matchedSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchedSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-electric-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-electric-blue mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Structured QA Toolset & Engineering Stack
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Categorized technical capabilities spanning manual test design, SDLC/STLC methodologies, full-stack application logic, and data analysis.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/40 font-semibold shadow-sm'
                    : 'bg-dark-900/80 text-slate-400 border border-slate-800 hover:text-white hover:bg-dark-850'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. SQL, STLC)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-dark-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/50 transition-all"
            />
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.iconName] || ShieldCheck;
            return (
              <div
                key={category.category}
                className="p-6 rounded-2xl bg-dark-850/80 border border-slate-800/90 hover:border-slate-700/90 hover:bg-dark-800/70 transition-all duration-300 flex flex-col justify-between shadow-sm group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-electric-blue group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-electric-blue transition-colors">
                          {category.category}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {category.skills.length} competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-2 group/skill"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 ml-0.5">
                          • {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Verifiable Skill Card: Selenium with Java */}
        <div className="relative rounded-2xl p-6 sm:p-7 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-purple-500/30 shadow-card overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/40 text-[11px] font-mono font-semibold text-purple-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-purple-400" />
                  {additionalVerifiableSkill.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">Web Automation Principles</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>{additionalVerifiableSkill.title}</span>
                <Code className="w-5 h-5 text-purple-400" />
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {additionalVerifiableSkill.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-shrink-0">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono">
                🔍 {additionalVerifiableSkill.status}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
