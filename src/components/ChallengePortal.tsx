import React, { useState } from 'react';
import { UserProgress, ChallengeSubmission } from '../types';

interface ChallengePortalProps {
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
}

export function ChallengePortal({ progress, setProgress }: ChallengePortalProps) {
  const [taskDesc, setTaskDesc] = useState('');
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const trackData = progress.selectedTrack ? progress.trackProgress[progress.selectedTrack] : null;
  const hasSubmitted = trackData ? trackData.challengeSubmissions.length > 0 : false;
  const latestSubmission = hasSubmitted && trackData ? trackData.challengeSubmissions[0] : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskDesc || !prompt || !output) return;

    setIsSubmitting(true);
    
    // Simulate API submission delay
    setTimeout(() => {
      const newSubmission: ChallengeSubmission = {
        id: `sub-${Date.now()}`,
        moduleId: 'm1',
        prompt,
        output,
        taskDescription: taskDesc,
        timestamp: Date.now()
      };

      setProgress(prev => {
        if (!prev.selectedTrack) return prev;
        const newState = { ...prev, trackProgress: { ...prev.trackProgress } };
        const trackState = { ...newState.trackProgress[prev.selectedTrack] };
        trackState.challengeSubmissions = [...trackState.challengeSubmissions, newSubmission];
        newState.trackProgress[prev.selectedTrack] = trackState;
        return newState;
      });
      setIsSubmitting(false);
    }, 1500);
  };

  if (hasSubmitted) {
    return (
      <div className="flex-1 overflow-y-auto p-8 flex items-center justify-center">
        <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
          <div className="inline-block relative">
             <div className="absolute inset-0 bg-accent-cyan/20 blur-3xl rounded-full"></div>
             {/* Note: I don't know the exact image name, so I'll render the CSS fallback immediately */}
             <div className="w-48 h-48 mx-auto bg-gradient-to-br from-yellow-700 via-yellow-500 to-yellow-900 rounded-full flex items-center justify-center border-4 border-yellow-300/50 shadow-[0_0_50px_rgba(234,179,8,0.3)]">
                <span className="text-4xl font-black text-yellow-100 uppercase tracking-widest text-center leading-tight">Bronze<br/>Certified</span>
             </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight mb-4">Congratulations!</h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              You have successfully completed the Horizon 1 30-Day Challenge and earned your <span className="text-accent-cyan font-bold">Bronze Certification</span>. Your productivity win has been logged into the enterprise registry.
            </p>
          </div>
          
          <div className="bg-surface-800 border border-border-glass rounded-xl p-6 text-left inline-block max-w-lg w-full mt-8">
             <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Your Submission Record</h3>
             <div className="space-y-4">
                <div>
                  <span className="text-xs text-text-muted block mb-1">Task</span>
                  <p className="text-sm text-white">{latestSubmission?.taskDescription}</p>
                </div>
                <div>
                  <span className="text-xs text-text-muted block mb-1">Prompt</span>
                  <p className="text-sm text-accent-light font-mono bg-surface-900 p-2 rounded">{latestSubmission?.prompt}</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <svg className="w-8 h-8 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
            30-Day Productivity Challenge
          </h1>
          <p className="text-text-secondary text-lg">
            To earn your Bronze Certification, you must demonstrate real-world application of the TCL Prompting Framework. Log your specific automation win below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
           <div className="space-y-2">
             <label className="block text-sm font-bold text-white uppercase tracking-wider">1. Task Description</label>
             <p className="text-xs text-text-muted mb-2">What manual or repetitive task did you identify for AI automation?</p>
             <textarea 
               required
               value={taskDesc}
               onChange={e => setTaskDesc(e.target.value)}
               className="w-full bg-surface-800 border border-border-glass rounded-xl p-4 text-white font-sans text-sm focus:outline-none focus:border-accent-cyan transition-colors"
               placeholder="e.g., I used to spend 2 hours manually formatting weekly pipeline reports..."
               rows={3}
             />
           </div>

           <div className="space-y-2">
             <label className="block text-sm font-bold text-white uppercase tracking-wider">2. The Strategic Prompt</label>
             <p className="text-xs text-text-muted mb-2">Paste the exact prompt you used in your enterprise AI sandbox. Ensure it follows the Role, Context, Task, Format framework.</p>
             <textarea 
               required
               value={prompt}
               onChange={e => setPrompt(e.target.value)}
               className="w-full bg-surface-900 border border-accent-primary/30 rounded-xl p-4 text-accent-light font-mono text-sm focus:outline-none focus:border-accent-primary transition-colors"
               placeholder="Act as a data analyst. Review this CSV..."
               rows={5}
             />
           </div>

           <div className="space-y-2">
             <label className="block text-sm font-bold text-white uppercase tracking-wider">3. The Final Output & Impact</label>
             <p className="text-xs text-text-muted mb-2">What was the result? How much time did you save?</p>
             <textarea 
               required
               value={output}
               onChange={e => setOutput(e.target.value)}
               className="w-full bg-surface-800 border border-border-glass rounded-xl p-4 text-white font-sans text-sm focus:outline-none focus:border-accent-cyan transition-colors"
               placeholder="The AI generated a perfect pivot table layout in 10 seconds. Estimated time saved: 1.5 hours per week."
               rows={4}
             />
           </div>

           <button 
             type="submit" 
             disabled={isSubmitting || !taskDesc || !prompt || !output}
             className="btn-primary w-full py-4 text-lg font-bold flex items-center justify-center gap-3 disabled:opacity-50"
           >
             {isSubmitting ? (
               <>
                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                 Submitting to Enterprise Registry...
               </>
             ) : (
               'Submit Challenge & Claim Certification'
             )}
           </button>
        </form>
      </div>
    </div>
  );
}
