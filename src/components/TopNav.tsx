import React from 'react';
import { PageView } from '../types';

interface TopNavProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

export function TopNav({ currentPage, onNavigate }: TopNavProps) {
  return (
    <nav className="h-16 glass flex items-center justify-between px-6 shrink-0 z-20 border-x-0 border-t-0">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 ring-1 ring-white/10">Σ</div>
          <span className="text-sm font-bold tracking-widest text-text-primary uppercase">TCL AI Academy</span>
        </div>
        <div className="h-6 w-px bg-border-glass"></div>
        <div className="flex gap-2 text-sm font-medium">
          <button 
            onClick={() => onNavigate('dashboard')}
            className={`px-4 py-2 rounded-lg transition-all ${currentPage === 'dashboard' ? 'bg-indigo-500/10 text-accent-light border border-indigo-500/20' : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent'}`}
          >
            My Dashboard
          </button>
          <button 
            onClick={() => onNavigate('learning')}
            className={`px-4 py-2 rounded-lg transition-all ${currentPage === 'learning' ? 'bg-indigo-500/10 text-accent-light border border-indigo-500/20' : 'text-text-secondary hover:text-text-primary hover:bg-white/5 border border-transparent'}`}
          >
            Learning Portal
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-surface-600 border border-border-glass flex items-center justify-center text-xs text-text-secondary">
          JD
        </div>
      </div>
    </nav>
  );
}
