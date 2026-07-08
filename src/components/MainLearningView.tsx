import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MODULES } from '../courseContent';
import { TrackId, UserProgress, PageView } from '../types';
import { IllusionOfTruthDemo } from './IllusionOfTruthDemo';
import { TRACK_LAB_DATA } from '../data';

interface MainLearningViewProps {
  selectedTrack: TrackId;
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  onNavigate: (page: PageView) => void;
}

export function MainLearningView({ selectedTrack, progress, setProgress, onNavigate }: MainLearningViewProps) {
  const trackData = progress.trackProgress[selectedTrack];
  if (!trackData) {
      return <div className="p-8 text-white">Initializing track data...</div>;
  }

  const validModuleIndex = Math.min(trackData.currentModuleIndex || 0, Math.max(0, MODULES.length - 1));
  const currentModule = MODULES[validModuleIndex];
  
  const validLessonIndex = Math.min(trackData.currentLessonIndex || 0, Math.max(0, (currentModule?.lessons?.length || 0) - 1));
  const currentLesson = currentModule?.lessons[validLessonIndex];
  
  const slides = currentLesson?.slides || [];
  const validSlideIndex = Math.min(trackData.currentSlideIndex || 0, Math.max(0, slides.length - 1));
  const currentSlide = slides[validSlideIndex];
  
  const moduleKey = `module${validModuleIndex + 1}`;
  const labData = selectedTrack && TRACK_LAB_DATA[selectedTrack] ? TRACK_LAB_DATA[selectedTrack][moduleKey] : null;

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTo(0, 0);
    }
    setShowAnswer(false);
  }, [validSlideIndex, trackData.currentModuleIndex, trackData.currentLessonIndex]);

  if (!currentLesson) return <div className="p-8 text-white">Loading content...</div>;
  if (!currentSlide) return <div className="p-8 text-white">No slides available for this lesson.</div>;

  const handleNext = React.useCallback(() => {
      setProgress(prev => {
        const newState = { ...prev, trackProgress: { ...prev.trackProgress } };
        const trackState = { ...newState.trackProgress[selectedTrack] };
        
        if (validSlideIndex < slides.length - 1) {
            trackState.currentSlideIndex = validSlideIndex + 1;
        } else {
            // Mark lesson complete
            const lessonKey = `m${trackState.currentModuleIndex}-l${trackState.currentLessonIndex}`;
            if (!trackState.completedLessons.includes(lessonKey)) {
              trackState.completedLessons = [...trackState.completedLessons, lessonKey];
            }

            // Move to next lesson if available
            const currentMod = MODULES[trackState.currentModuleIndex];
            const isLastModule = trackState.currentModuleIndex === MODULES.length - 1;
            const isLastLesson = trackState.currentLessonIndex === currentMod.lessons.length - 1;

            if (!isLastLesson) {
              trackState.currentLessonIndex += 1;
              trackState.currentSlideIndex = 0;
            } else if (!isLastModule) {
              trackState.currentModuleIndex += 1;
              trackState.currentLessonIndex = 0;
              trackState.currentSlideIndex = 0;
            } else {
              // Finish Course
              setTimeout(() => onNavigate('assessments'), 0);
            }
        }

        newState.trackProgress[selectedTrack] = trackState;
        return newState;
      });
  }, [validSlideIndex, slides.length, setProgress, onNavigate, selectedTrack]);

  const handlePrev = React.useCallback(() => {
        setProgress(prev => {
          const newState = { ...prev, trackProgress: { ...prev.trackProgress } };
          const trackState = { ...newState.trackProgress[selectedTrack] };
          
          if (validSlideIndex > 0) {
              trackState.currentSlideIndex = validSlideIndex - 1;
          } else {
              // Move to prev lesson
              if (trackState.currentLessonIndex > 0) {
                   trackState.currentLessonIndex -= 1;
                   const targetMod = MODULES[trackState.currentModuleIndex];
                   trackState.currentSlideIndex = targetMod.lessons[trackState.currentLessonIndex].slides.length - 1;
              } else if (trackState.currentModuleIndex > 0) {
                   trackState.currentModuleIndex -= 1;
                   const targetMod = MODULES[trackState.currentModuleIndex];
                   trackState.currentLessonIndex = targetMod.lessons.length - 1;
                   trackState.currentSlideIndex = targetMod.lessons[trackState.currentLessonIndex].slides.length - 1;
              }
          }
          
          newState.trackProgress[selectedTrack] = trackState;
          return newState;
        });
  }, [validSlideIndex, setProgress, selectedTrack]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const isLastSlideOfCourse = 
    validModuleIndex === MODULES.length - 1 &&
    validLessonIndex === currentModule.lessons.length - 1 &&
    validSlideIndex === slides.length - 1;

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="glass px-8 py-6 flex flex-col gap-4 shrink-0 border-x-0 border-t-0 z-10">
        {/* Macro Level (Modules) Tracker */}
        <div className="flex items-center gap-2">
            {MODULES.map((mod, idx) => {
                const isCompleted = validModuleIndex > idx;
                const isCurrent = validModuleIndex === idx;
                
                return (
                    <React.Fragment key={mod.id}>
                        <div className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${
                            isCompleted ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                            isCurrent ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]' :
                            'bg-surface-800 text-surface-500 border border-surface-700'
                        }`}>
                            {isCompleted && <span className="text-[10px]">✓</span>}
                            Module {idx + 1}
                        </div>
                        {idx < MODULES.length - 1 && (
                            <div className={`h-px w-6 ${isCompleted ? 'bg-emerald-500/50' : 'bg-surface-700'}`}></div>
                        )}
                    </React.Fragment>
                );
            })}
        </div>

        {/* Micro Level (Lessons & Slides) */}
        <div className="flex items-center justify-between mt-1">
            <div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-accent-cyan uppercase tracking-widest mb-1">
                    <span>{currentLesson.title.split(':')[0]}</span>
                    <span className="w-1 h-1 bg-accent-cyan rounded-full"></span>
                    <span>Slide {validSlideIndex + 1} of {slides.length}</span>
                </div>
                <h1 className="text-2xl font-bold text-white tracking-tight">{currentLesson.title.split(':')[1]?.trim() || currentLesson.title}</h1>
            </div>
            
            <div className="flex items-center gap-1.5">
                {slides.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === validSlideIndex ? 'w-8 bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.5)]' : idx < validSlideIndex ? 'w-2 bg-accent-cyan/40' : 'w-2 bg-surface-700'}`}
                    />
                ))}
            </div>
        </div>
      </header>

      {/* Slide Content */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 flex justify-center">
        <AnimatePresence mode="wait">
            <motion.div 
                key={`${validModuleIndex}-${validLessonIndex}-${validSlideIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl w-full"
            >
                <div className="glass-card rounded-2xl p-8 min-h-[400px] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <span className="text-8xl font-black">0{validSlideIndex + 1}</span>
                </div>
                
                {currentSlide.type !== 'demo' && (
                  <h2 className="text-xl font-bold text-accent-light mb-6 flex items-center gap-3">
                      {currentSlide.type === 'concept' && <span className="text-xl">💡</span>}
                      {currentSlide.type === 'interactive' && <span className="text-xl">📊</span>}
                      {currentSlide.type === 'exercise' && <span className="text-xl">🧪</span>}
                      {currentSlide.type === 'highlight' && <span className="text-xl">⭐</span>}
                      {currentSlide.title}
                  </h2>
                )}
                
                {currentSlide.type === 'demo' ? (
                  <IllusionOfTruthDemo selectedTrack={selectedTrack} />
                ) : (
                  <div className="prose prose-invert max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{currentSlide.body}</ReactMarkdown>
                      
                      {currentSlide.type === 'exercise' && selectedTrack && labData && (
                          <div className="mt-8 bg-surface-800 border border-border-glass rounded-xl p-6">
                              <h3 className="text-lg font-bold text-accent-cyan mb-4">Track Data Pack: {selectedTrack}</h3>
                              <div className="space-y-4">
                                  <div>
                                      <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Source Document</h4>
                                      <div className="bg-surface-900 p-4 rounded-lg border border-border-glass font-mono text-sm text-text-secondary whitespace-pre-wrap">
                                          {labData.sourceData}
                                      </div>
                                  </div>
                                  
                                  {validModuleIndex === 1 ? (
                                      <>
                                          <div>
                                              <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Your Suggested Prompt</h4>
                                              <textarea 
                                                  className="w-full bg-surface-900 p-4 rounded-lg border border-border-glass font-mono text-sm text-white focus:outline-none focus:border-accent-cyan resize-y min-h-[120px]"
                                                  placeholder="Type your prompt using the TCL Prompting Equation (Role, Context, Task, Format, Constraints)..."
                                              ></textarea>
                                          </div>
                                          
                                          {!showAnswer ? (
                                              <button 
                                                  onClick={() => setShowAnswer(true)}
                                                  className="btn-primary py-2 px-4 text-sm font-bold mt-2"
                                              >
                                                  Show Instructor Answer
                                              </button>
                                          ) : (
                                              <div className="animate-fade-in space-y-4">
                                                  <div>
                                                      <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                                          <span>✓</span> Instructor's Suggested Prompt
                                                      </h4>
                                                      <div className="bg-surface-900 p-4 rounded-lg border border-emerald-500/30 font-mono text-sm text-emerald-300 whitespace-pre-wrap relative group">
                                                          <button 
                                                            className="absolute top-2 right-2 text-xs bg-surface-700 hover:bg-surface-600 px-2 py-1 rounded transition-colors opacity-0 group-hover:opacity-100"
                                                            onClick={() => navigator.clipboard.writeText(labData.promptTemplate)}
                                                          >
                                                            Copy
                                                          </button>
                                                          {labData.promptTemplate}
                                                      </div>
                                                  </div>
                                                  {labData.expectedOutput && (
                                                      <div>
                                                          <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                                              <span>✓</span> Instructor's Output Rules
                                                          </h4>
                                                          <div className="bg-surface-900 p-4 rounded-lg border border-emerald-500/30 font-mono text-sm text-emerald-300 whitespace-pre-wrap">
                                                              {labData.expectedOutput}
                                                          </div>
                                                      </div>
                                                  )}
                                              </div>
                                          )}
                                      </>
                                  ) : (
                                      <div>
                                          <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Strategic Baseline Prompt</h4>
                                          <div className="bg-surface-900 p-4 rounded-lg border border-accent-primary/30 font-mono text-sm text-accent-light whitespace-pre-wrap relative group">
                                              <button 
                                                className="absolute top-2 right-2 text-xs bg-surface-700 hover:bg-surface-600 px-2 py-1 rounded transition-colors opacity-0 group-hover:opacity-100"
                                                onClick={() => navigator.clipboard.writeText(labData.promptTemplate)}
                                              >
                                                Copy
                                              </button>
                                              {labData.promptTemplate}
                                          </div>
                                      </div>
                                  )}
                              </div>
                          </div>
                      )}
                  </div>
                )}
            </div>
            
            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
                <button 
                    onClick={handlePrev}
                    disabled={trackData.currentModuleIndex === 0 && trackData.currentLessonIndex === 0 && validSlideIndex === 0}
                    aria-label="Previous Slide"
                    className="px-6 py-3 rounded-xl font-semibold text-sm transition-all border border-border-glass text-text-secondary hover:text-white hover:bg-white/5 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent-cyan"
                >
                    Previous
                </button>
                
                <button 
                    onClick={handleNext}
                    aria-label={isLastSlideOfCourse ? 'Finish Course' : validSlideIndex === slides.length - 1 ? 'Complete Lesson' : 'Next Slide'}
                    className="btn-primary flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-surface-900 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
                >
                    {isLastSlideOfCourse ? 'Finish Course' : validSlideIndex === slides.length - 1 ? 'Complete Lesson' : 'Next Slide'}
                    {!isLastSlideOfCourse && <span>→</span>}
                </button>
            </div>
        </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
