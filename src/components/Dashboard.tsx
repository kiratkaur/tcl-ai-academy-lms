import React from 'react';
import { UserProgress, TrackId, PageView } from '../types';
import { MODULES, TRACKS } from '../data';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

interface DashboardProps {
  progress: UserProgress;
  onNavigate: (page: PageView) => void;
}

export function Dashboard({ progress, onNavigate }: DashboardProps) {
  const trackInfo = progress.selectedTrack ? TRACKS.find(t => t.id === progress.selectedTrack) : null;
  const currentTrackProgress = progress.selectedTrack && progress.trackProgress[progress.selectedTrack]
    ? progress.trackProgress[progress.selectedTrack]
    : null;

  const completedLessonsCount = currentTrackProgress ? currentTrackProgress.completedLessons.length : 0;
  const overallProgress = Math.round((completedLessonsCount / 12) * 100);
  const challengeSubmissions = currentTrackProgress ? currentTrackProgress.challengeSubmissions : [];
  
  const hasBronze = challengeSubmissions.length > 0;
  const latestSubmission = hasBronze ? challengeSubmissions[0] : null;

  // Mock competency data based on progress
  const radarData = [
    { subject: 'Strategic Thinking', A: Math.min(100, 30 + (overallProgress * 0.7)), fullMark: 100 },
    { subject: 'Tool Literacy', A: Math.min(100, 40 + (overallProgress * 0.6)), fullMark: 100 },
    { subject: 'Format Structuring', A: Math.min(100, 20 + (overallProgress * 0.8)), fullMark: 100 },
    { subject: 'Risk Constraint', A: Math.min(100, 50 + (overallProgress * 0.5)), fullMark: 100 },
    { subject: 'Cross-Cultural Comm', A: Math.min(100, 35 + (overallProgress * 0.65)), fullMark: 100 },
    { subject: 'Data Synthesis', A: Math.min(100, 25 + (overallProgress * 0.75)), fullMark: 100 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex-1 flex flex-col overflow-y-auto p-10"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Welcome Hero */}
        <div className="glass-card rounded-2xl p-8 flex items-center justify-between">
            <div>
                <div className="flex items-center gap-4 mb-2">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Welcome Back.</h1>
                    {challengeSubmissions.length > 0 && (
                        <div className="px-3 py-1 bg-gradient-to-r from-yellow-700 to-yellow-600 rounded-full border border-yellow-500/50 flex items-center gap-2 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                            <span className="text-xs font-black text-yellow-100 uppercase tracking-widest">Bronze Certified</span>
                            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        </div>
                    )}
                </div>
                <p className="text-text-secondary">You are currently enrolled in the <strong className="text-text-primary">{trackInfo?.name}</strong> track.</p>
            </div>
            <div className="text-right flex items-center gap-6">
                <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">Horizon 1 Completion</p>
                    <p className="text-3xl font-black text-accent-cyan">{overallProgress}%</p>
                </div>
                {/* SVG Progress Ring */}
                <div className="relative w-20 h-20">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" className="stroke-surface-600" strokeWidth="10" fill="none" />
                        <circle cx="50" cy="50" r="40" className="stroke-accent-cyan drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-1000 ease-out" strokeWidth="10" fill="none" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * overallProgress) / 100} />
                    </svg>
                </div>
            </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column: Analytics & Certifications */}
            <div className="lg:col-span-1 space-y-6">
                <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-sm font-bold tracking-widest text-text-muted uppercase mb-4">Competency Radar</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                <PolarGrid stroke="rgba(148, 163, 184, 0.1)" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                                <Radar name="Current Competency" dataKey="A" stroke="#22d3ee" strokeWidth={2} fill="#22d3ee" fillOpacity={0.2} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                    <h3 className="text-sm font-bold tracking-widest text-text-muted uppercase mb-4">Certifications</h3>
                    <div className={`p-4 rounded-xl border ${hasBronze ? 'bg-yellow-500/10 border-yellow-500/30' : 'bg-surface-800 border-surface-700 opacity-60'}`}>
                        {hasBronze ? (
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-700 via-yellow-500 to-yellow-900 rounded-full flex items-center justify-center border-2 border-yellow-300/50 flex-shrink-0 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                                    <span className="text-[10px] font-black text-yellow-100">H1</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Horizon 1 Certified</p>
                                    <p className="text-[10px] text-yellow-500/80 font-mono mt-1">ID: {latestSubmission?.id}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-surface-700 rounded-full flex items-center justify-center border-2 border-surface-600 flex-shrink-0">
                                    <span className="text-[10px] font-bold text-surface-500">H1</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-text-secondary">Horizon 1 Locked</p>
                                    <p className="text-[10px] text-text-muted mt-1">Complete Module 2 Challenge</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Column: Modules Progress */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-6">
                <h3 className="text-sm font-bold tracking-widest text-text-muted uppercase mb-6">Curriculum Progress</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {MODULES.map((module, idx) => {
                        const moduleLessonsCompleted = currentTrackProgress ? module.lessons.filter((_, lIdx) => currentTrackProgress.completedLessons.includes(`m${idx}-l${lIdx}`)).length : 0;
                        const moduleProgress = Math.round((moduleLessonsCompleted / module.lessons.length) * 100);
                        const isCurrent = currentTrackProgress ? currentTrackProgress.currentModuleIndex === idx : false;
                        const isCompleted = moduleProgress === 100;

                        return (
                            <div key={module.id} className={`bg-surface-800 rounded-xl p-5 border border-border-glass transition-all ${isCurrent ? 'ring-1 ring-accent-primary/50 shadow-[0_0_15px_rgba(99,102,241,0.1)]' : ''}`}>
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <p className="text-[10px] font-bold text-accent-light uppercase tracking-widest mb-1">Module {idx + 1}</p>
                                        <h4 className="font-bold text-white text-sm leading-tight">{module.title.split(':')[1]?.trim() || module.title}</h4>
                                    </div>
                                    {isCompleted && <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] border border-emerald-500/30 flex-shrink-0">✓</div>}
                                </div>
                                
                                <div className="mt-4">
                                    <div className="flex justify-between text-[10px] mb-1.5">
                                        <span className="text-text-muted">{moduleLessonsCompleted}/{module.lessons.length} Lessons</span>
                                        <span className={isCompleted ? 'text-emerald-400 font-bold' : 'text-accent-cyan font-bold'}>{moduleProgress}%</span>
                                    </div>
                                    <div className="h-1.5 rounded-full bg-surface-900 overflow-hidden">
                                        <div className={`h-full transition-all duration-1000 ${isCompleted ? 'bg-emerald-400' : 'bg-gradient-to-r from-indigo-500 to-cyan-400'}`} style={{ width: `${moduleProgress}%` }}></div>
                                    </div>
                                </div>
                                
                                {isCurrent && (
                                    <button 
                                        onClick={() => onNavigate('learning')}
                                        className="w-full mt-4 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-accent-light rounded-md text-[10px] font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Resume Module
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
