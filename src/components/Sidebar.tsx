import React from 'react';
import { TRACKS } from '../data';
import { TrackId, PageView, UserProgress } from '../types';

interface SidebarProps {
  selectedTrack: TrackId | null;
  onSelectTrack: (id: TrackId | null) => void;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  progress: UserProgress;
}

export function Sidebar({ selectedTrack, onSelectTrack, currentPage, onNavigate, progress }: SidebarProps) {
  const trackInfo = selectedTrack ? TRACKS.find(t => t.id === selectedTrack) : null;

  const navItems: { id: PageView; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Overview', icon: '⊞' },
    { id: 'learning', label: 'Syllabus', icon: '≡' },
    { id: 'assessments', label: 'Certification', icon: '★' },
    { id: 'challenge', label: '30-Day Challenge', icon: '↗' },
    { id: 'pii-scanner', label: 'PII Pre-Flight', icon: '◎' },
  ];

  return (
    <aside className="w-64 glass-light flex flex-col shrink-0 border-y-0 border-l-0 z-10">
      <div className="p-6">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">Current Track</h3>
        
        {trackInfo ? (
          <div className="glass-card rounded-xl p-4 mb-8 relative group">
            <button 
              onClick={() => onSelectTrack(null)}
              className="absolute top-3 right-3 text-[10px] text-text-muted hover:text-white transition-colors opacity-0 group-hover:opacity-100"
            >
              CHANGE
            </button>
            <div className={`w-8 h-8 rounded-lg ${trackInfo.color} flex items-center justify-center text-white mb-3 shadow-lg`}>
                <span className="text-xs font-bold">{trackInfo.id}</span>
            </div>
            <p className="text-white text-sm font-bold leading-tight mb-1">{trackInfo.name}</p>
            <div className="mt-4 bg-surface-700 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full transition-all duration-500" 
                style={{ width: `${Math.round(((selectedTrack && progress.trackProgress[selectedTrack]?.completedLessons?.length) || 0) / 12 * 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-text-muted font-medium">
              <span>Horizon 1</span>
              <span className="text-accent-cyan">{Math.round(((selectedTrack && progress.trackProgress[selectedTrack]?.completedLessons?.length) || 0) / 12 * 100)}%</span>
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-xl p-4 mb-8 border-dashed border-border-glass">
            <p className="text-text-primary text-sm font-semibold mb-1">No Track Selected</p>
            <p className="text-xs text-text-secondary">Please select a persona track to begin.</p>
          </div>
        )}

        <h3 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-3">Navigation</h3>
        <nav className="space-y-1">
          {navItems.map(item => (
            <div 
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-all ${
                currentPage === item.id 
                ? 'bg-white/10 text-white font-medium border border-white/5 shadow-sm' 
                : 'text-text-secondary hover:bg-white/5 hover:text-text-primary border border-transparent'
              }`}
            >
              <span className={`flex items-center justify-center w-5 h-5 rounded ${currentPage === item.id ? 'text-accent-cyan' : 'text-text-muted'}`}>
                {item.icon}
              </span>
              {item.label}
            </div>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto p-6 bg-surface-800/50 border-t border-border-glass">
        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-pulse"></div>
            <p className="text-[10px] font-bold text-text-primary uppercase tracking-wider">Active Challenge</p>
          </div>
          <p className="text-xs text-text-secondary mb-3">Submit your 30-Day Productivity task logs.</p>
          <button 
            onClick={() => onNavigate('challenge')}
            className="w-full py-1.5 border border-border-glass hover:bg-white/5 rounded-md text-xs font-medium text-text-primary transition-colors"
          >
            Open Portal
          </button>
        </div>
      </div>
    </aside>
  );
}
