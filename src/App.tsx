import React, { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { TrackSelector } from './components/TrackSelector';
import { MainLearningView } from './components/MainLearningView';
import { PIIScanner } from './components/PIIScanner';
import { ChallengePortal } from './components/ChallengePortal';
import { TrackId, PageView, UserProgress, DEFAULT_PROGRESS } from './types';

import { Dashboard } from './components/Dashboard';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('tcl_lms_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const trackProgress = parsed.trackProgress || {};
        
        // Migrate legacy progress to the new format if needed
        if (parsed.selectedTrack && !trackProgress[parsed.selectedTrack]) {
             trackProgress[parsed.selectedTrack] = {
                 currentModuleIndex: parsed.currentModuleIndex || 0,
                 currentLessonIndex: parsed.currentLessonIndex || 0,
                 currentSlideIndex: parsed.currentSlideIndex || 0,
                 completedLessons: parsed.completedLessons || [],
                 challengeSubmissions: parsed.challengeSubmissions || []
             };
        }
        
        // Ensure currentSlideIndex is defined for all existing tracks
        Object.keys(trackProgress).forEach(key => {
            if (trackProgress[key].currentSlideIndex === undefined) {
                trackProgress[key].currentSlideIndex = 0;
            }
        });

        return {
          ...DEFAULT_PROGRESS,
          ...parsed,
          trackProgress
        };
      } catch (e) {
        return DEFAULT_PROGRESS;
      }
    }
    return DEFAULT_PROGRESS;
  });

  const [currentPage, setCurrentPage] = useState<PageView>('learning');

  useEffect(() => {
    localStorage.setItem('tcl_lms_progress', JSON.stringify(progress));
  }, [progress]);

  const handleSelectTrack = (trackId: TrackId | null) => {
    setProgress((prev) => {
        if (!trackId) return { ...prev, selectedTrack: null };
        
        if (prev.selectedTrack !== trackId) {
            const newTrackProgress = { ...prev.trackProgress };
            if (!newTrackProgress[trackId]) {
                newTrackProgress[trackId] = {
                    currentModuleIndex: 0,
                    currentLessonIndex: 0,
                    currentSlideIndex: 0,
                    completedLessons: [],
                    challengeSubmissions: []
                };
            }
            return {
                ...prev,
                selectedTrack: trackId,
                trackProgress: newTrackProgress
            };
        }
        return prev;
    });
    
    if (trackId && currentPage === 'dashboard') {
        setCurrentPage('learning');
    }
  };

  const renderContent = () => {
    if (!progress.selectedTrack) {
      return <TrackSelector onSelect={handleSelectTrack} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard progress={progress} onNavigate={setCurrentPage} />;
      case 'learning':
        return (
          <MainLearningView 
            selectedTrack={progress.selectedTrack}
            progress={progress}
            setProgress={setProgress}
            onNavigate={setCurrentPage}
          />
        );
      case 'challenge':
        return <ChallengePortal progress={progress} setProgress={setProgress} />;
      case 'pii-scanner':
        return <PIIScanner />;
      default:
        return <div className="p-8 text-white">404 - Not Found</div>;
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-surface-900 font-sans overflow-hidden">
      <TopNav currentPage={currentPage} onNavigate={setCurrentPage} />

      <div className="flex flex-1 overflow-hidden relative">
        <div className="absolute inset-0 mesh-bg -z-10"></div>
        
        <Sidebar 
          selectedTrack={progress.selectedTrack} 
          onSelectTrack={handleSelectTrack}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          progress={progress}
        />
        
        <main className="flex-1 flex flex-col relative z-0 overflow-y-auto">
            {renderContent()}
        </main>
      </div>

      <footer className="h-10 glass-light flex items-center justify-between px-6 shrink-0 z-10 border-t-0 border-b-0 border-x-0">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 ring-glow animate-pulse"></div>
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Systems Online</span>
          </div>
          <span className="text-[10px] text-text-dim font-medium">TCL AI Academy — Secured</span>
        </div>
        <div className="flex gap-4">
          <span className="text-[10px] font-bold text-text-muted hover:text-text-primary cursor-pointer uppercase tracking-widest transition-colors">Help & Documentation</span>
          <span className="text-[10px] font-bold text-text-muted hover:text-text-primary cursor-pointer uppercase tracking-widest transition-colors">Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}
