import React from 'react';
import { UserProgress, TrackId } from '../types';
import { MODULES, TRACKS } from '../data';

interface DashboardProps {
  progress: UserProgress;
  onNavigate: (page: string) => void;
}

export function Dashboard({ progress, onNavigate }: DashboardProps) {
  const trackInfo = progress.selectedTrack ? TRACKS.find(t => t.id === progress.selectedTrack) : null;
  const currentTrackProgress = progress.selectedTrack && progress.trackProgress[progress.selectedTrack]
    ? progress.trackProgress[progress.selectedTrack]
    : null;

  const completedLessonsCount = currentTrackProgress ? currentTrackProgress.completedLessons.length : 0;
  const overallProgress = Math.round((completedLessonsCount / 12) * 100);
  const challengeSubmissions = currentTrackProgress ? currentTrackProgress.challengeSubmissions : [];

  return (
    <div className="flex-1 flex flex-col overflow-y-auto p-10">
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

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODULES.map((module, idx) => {
                const moduleLessonsCompleted = currentTrackProgress ? module.lessons.filter((_, lIdx) => currentTrackProgress.completedLessons.includes(`m${idx}-l${lIdx}`)).length : 0;
                const moduleProgress = Math.round((moduleLessonsCompleted / module.lessons.length) * 100);
                const isCurrent = currentTrackProgress ? currentTrackProgress.currentModuleIndex === idx : false;
                const isCompleted = moduleProgress === 100;

                return (
                    <div key={module.id} className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all ${isCurrent ? 'ring-1 ring-accent-primary/50' : ''}`}>
                        {isCompleted && <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs border border-emerald-500/30">✓</div>}
                        
                        <p className="text-[10px] font-bold text-accent-light uppercase tracking-widest mb-1">Module {idx + 1}</p>
                        <h3 className="font-bold text-white text-base leading-tight mb-4">{module.title.split(':')[1]?.trim() || module.title}</h3>
                        
                        <div className="mt-auto">
                            <div className="flex justify-between text-xs mb-2">
                                <span className="text-text-muted">{moduleLessonsCompleted}/{module.lessons.length} Lessons</span>
                                <span className={isCompleted ? 'text-emerald-400' : 'text-accent-cyan'}>{moduleProgress}%</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-surface-700 overflow-hidden">
                                <div className={`h-full transition-all duration-500 ${isCompleted ? 'bg-emerald-400' : 'bg-gradient-to-r from-indigo-500 to-cyan-400'}`} style={{ width: `${moduleProgress}%` }}></div>
                            </div>
                        </div>
                        
                        {isCurrent && (
                            <button 
                                onClick={() => onNavigate('learning')}
                                className="w-full mt-6 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-accent-light rounded-lg text-xs font-bold transition-colors"
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
  );
}
