import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Search, 
  Sparkles, 
  Bug, 
  ShieldCheck, 
  Layers, 
  Terminal,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Filter,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';
import { qaTestingApproach } from '../data/portfolioData';

const iconMap = {
  FileSpreadsheet: FileSpreadsheet,
  CheckCircle2: CheckCircle2,
  AlertTriangle: AlertTriangle,
  RefreshCw: RefreshCw,
};

export default function QAShowcase() {
  const [activePillar, setActivePillar] = useState('test-case-design');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCaseId, setExpandedCaseId] = useState(null);

  const categories = ['All', 'Authentication', 'Forms & Fields', 'UI & Navigation', 'API & Backend', 'Regression'];

  const filteredTestCases = qaTestingApproach.sampleTestCases.filter((tc) => {
    const matchesCategory = selectedCategory === 'All' || tc.category === selectedCategory;
    const matchesSearch =
      tc.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tc.scenario.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tc.expectedResult.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleRow = (id) => {
    setExpandedCaseId(expandedCaseId === id ? null : id);
  };

  return (
    <section id="qa-showcase" className="py-24 relative overflow-hidden bg-dark-900/60 border-y border-slate-800/80">
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-electric-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-electric-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-electric-blue mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>05 // QA TESTING SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            My QA Testing Approach
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            A structured, analytical mindset designed to detect defects early, guarantee end-to-end user satisfaction, and maintain rock-solid software quality.
          </p>
        </div>

        {/* Four Interactive Methodology Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qaTestingApproach.pillars.map((pillar) => {
            const IconComponent = iconMap[pillar.iconName] || ShieldCheck;
            const isSelected = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-dark-800/95 border-electric-blue/60 shadow-glow-blue/20 ring-1 ring-electric-blue/30 scale-[1.02]'
                    : 'bg-dark-850/80 border-slate-800/80 hover:border-slate-700 hover:bg-dark-800/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-electric-blue/20 text-electric-blue'
                          : 'bg-slate-900 text-slate-400'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        isSelected
                          ? 'bg-electric-blue/20 text-electric-blue font-semibold'
                          : 'bg-slate-900 text-slate-500'
                      }`}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  {pillar.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                      <span className="text-electric-blue font-mono font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Sample Bug Report Artifact */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <Bug className="w-5 h-5 text-rose-400" />
                <h3 className="text-xl font-bold text-white">
                  Sample Bug Report (Illustrative Demonstration)
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Standardized defect documentation showcasing root-cause clarity and reproduction accuracy.
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono self-start sm:self-center">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <span>Severity: {qaTestingApproach.sampleBugReport.severity} (Defect Logged)</span>
            </div>
          </div>

          <div className="rounded-2xl bg-dark-850/90 border border-slate-800 p-6 sm:p-8 shadow-card space-y-6">
            
            {/* Bug Header Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs font-mono">
              <div>
                <span className="text-slate-500 block">BUG ID</span>
                <span className="text-electric-blue font-bold text-sm">
                  {qaTestingApproach.sampleBugReport.bugId}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">STATUS</span>
                <span className="text-amber-400 font-semibold">
                  {qaTestingApproach.sampleBugReport.status}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">SEVERITY / PRIORITY</span>
                <span className="text-rose-400 font-semibold">
                  {qaTestingApproach.sampleBugReport.severity} / {qaTestingApproach.sampleBugReport.priority}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">REPORTER</span>
                <span className="text-slate-200">
                  {qaTestingApproach.sampleBugReport.reportedBy}
                </span>
              </div>
            </div>

            {/* Bug Title & Module */}
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Module: {qaTestingApproach.sampleBugReport.module}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {qaTestingApproach.sampleBugReport.title}
              </h4>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2 pt-1">
                <span>Environment:</span>
                <span className="text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {qaTestingApproach.sampleBugReport.environment}
                </span>
              </div>
            </div>

            {/* Steps To Reproduce */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Steps to Reproduce:
              </span>
              <div className="space-y-1.5 p-4 rounded-xl bg-slate-900/70 border border-slate-800/70 font-mono text-xs text-slate-300">
                {qaTestingApproach.sampleBugReport.stepsToReproduce.map((step, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Expected vs Actual Result Split Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Expected Result
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {qaTestingApproach.sampleBugReport.expectedResult}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-1">
                <span className="text-xs font-mono uppercase text-rose-400 font-bold flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" />
                  Actual Result
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {qaTestingApproach.sampleBugReport.actualResult}
                </p>
              </div>
            </div>

            {/* Impact Analysis */}
            <div className="pt-2 border-t border-slate-800/80 flex items-start gap-2 text-xs text-slate-400">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-300 font-mono">Business Impact:</strong>{' '}
                {qaTestingApproach.sampleBugReport.impactAnalysis}
              </span>
            </div>

          </div>
        </div>

        {/* Sample Test Case Table */}
        <div className="space-y-6">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-electric-blue" />
                <h3 className="text-xl font-bold text-white">
                  Sample Test Case Suite (Structured QA Artifact)
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Interactive demonstration of test case scenarios, steps, expected outputs, and execution verdicts.
              </p>
            </div>

            {/* Illustrative Disclaimer Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-[11px] font-mono text-slate-300">
              <Info className="w-3.5 h-3.5 text-electric-blue" />
              <span>Illustrative Demonstration Data</span>
            </div>
          </div>

          {/* Table Filters & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/40 font-semibold'
                      : 'bg-dark-850 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter test cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-dark-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-electric-blue/50"
              />
            </div>
          </div>

          {/* Responsive Test Case Table */}
          <div className="rounded-2xl bg-dark-850/90 border border-slate-800 overflow-hidden shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 border-b border-slate-800 font-mono text-slate-400 uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4 w-28">Test ID</th>
                    <th className="py-3.5 px-4">Test Scenario</th>
                    <th className="py-3.5 px-4 hidden md:table-cell w-56">Test Steps</th>
                    <th className="py-3.5 px-4 hidden lg:table-cell">Expected Result</th>
                    <th className="py-3.5 px-4 hidden lg:table-cell">Actual Result</th>
                    <th className="py-3.5 px-4 w-24 text-center">Status</th>
                    <th className="py-3.5 px-3 w-10 text-center lg:hidden"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70">
                  {filteredTestCases.map((tc) => {
                    const isExpanded = expandedCaseId === tc.id;
                    const isPass = tc.status === 'Pass';

                    return (
                      <React.Fragment key={tc.id}>
                        <tr
                          onClick={() => toggleRow(tc.id)}
                          className="hover:bg-slate-900/60 transition-colors cursor-pointer group"
                        >
                          {/* Test ID */}
                          <td className="py-3.5 px-4 font-mono font-semibold text-electric-blue whitespace-nowrap">
                            {tc.id}
                            <span className="block text-[10px] text-slate-500 font-sans">
                              {tc.category}
                            </span>
                          </td>

                          {/* Scenario */}
                          <td className="py-3.5 px-4 font-medium text-slate-200">
                            {tc.scenario}
                          </td>

                          {/* Steps (Desktop) */}
                          <td className="py-3.5 px-4 font-mono text-[11px] text-slate-400 whitespace-pre-line hidden md:table-cell">
                            {tc.steps}
                          </td>

                          {/* Expected Result (Desktop) */}
                          <td className="py-3.5 px-4 text-slate-300 hidden lg:table-cell leading-relaxed">
                            {tc.expectedResult}
                          </td>

                          {/* Actual Result (Desktop) */}
                          <td className="py-3.5 px-4 text-slate-400 hidden lg:table-cell leading-relaxed">
                            {tc.actualResult}
                          </td>

                          {/* Status Badge */}
                          <td className="py-3.5 px-4 text-center whitespace-nowrap">
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                                isPass
                                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                                  : 'bg-rose-950/80 text-rose-400 border border-rose-500/40'
                              }`}
                            >
                              {isPass ? (
                                <CheckCircle className="w-3 h-3 text-emerald-400" />
                              ) : (
                                <XCircle className="w-3 h-3 text-rose-400" />
                              )}
                              <span>{tc.status}</span>
                            </span>
                          </td>

                          {/* Expand chevron for mobile */}
                          <td className="py-3.5 px-3 text-center lg:hidden">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-slate-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                            )}
                          </td>
                        </tr>

                        {/* Mobile Expandable Details Row */}
                        {isExpanded && (
                          <tr className="lg:hidden bg-slate-950/80">
                            <td colSpan={7} className="p-4 space-y-3 border-b border-slate-800 font-sans">
                              <div>
                                <span className="text-[11px] font-mono text-slate-400 uppercase block font-semibold">
                                  Test Steps:
                                </span>
                                <div className="text-xs font-mono text-slate-300 whitespace-pre-line mt-1 p-2.5 rounded bg-slate-900 border border-slate-800">
                                  {tc.steps}
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/20">
                                  <span className="text-[11px] font-mono text-emerald-400 block font-semibold">
                                    Expected Result:
                                  </span>
                                  <span className="text-xs text-slate-300 mt-1 block">
                                    {tc.expectedResult}
                                  </span>
                                </div>
                                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                                  <span className="text-[11px] font-mono text-slate-400 block font-semibold">
                                    Actual Result:
                                  </span>
                                  <span className="text-xs text-slate-300 mt-1 block">
                                    {tc.actualResult}
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {filteredTestCases.length === 0 && (
              <div className="py-12 text-center text-slate-500 text-xs font-mono">
                No matching test cases found for "{searchTerm}" in category "{selectedCategory}".
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
