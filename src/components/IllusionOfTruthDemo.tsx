import React, { useState, useEffect } from 'react';
import { TrackId } from '../types';
import { TRACK_HALLUCINATION_DATA } from '../data';

interface IllusionOfTruthDemoProps {
  selectedTrack: TrackId;
}

export function IllusionOfTruthDemo({ selectedTrack }: IllusionOfTruthDemoProps) {
  const data = TRACK_HALLUCINATION_DATA[selectedTrack];
  
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedText, setExtractedText] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  
  // Reset state when track changes
  useEffect(() => {
    setIsExtracting(false);
    setExtractedText('');
    setIsRevealed(false);
  }, [selectedTrack]);

  const handleExtract = () => {
    setIsExtracting(true);
    setExtractedText('');
    setIsRevealed(false);
    
    // Simulate API delay
    setTimeout(() => {
      setIsExtracting(false);
      // Simulate typing effect
      let i = 0;
      const typeInterval = setInterval(() => {
        setExtractedText(data.hallucinatedOutput.slice(0, i));
        i++;
        if (i > data.hallucinatedOutput.length) {
          clearInterval(typeInterval);
        }
      }, 30);
    }, 1500);
  };

  const renderOutputWithHighlight = (text: string) => {
    if (!isRevealed) return text;
    
    const parts = text.split(data.hallucinatedSnippet);
    if (parts.length === 1) return text; // Snippet not found somehow

    return (
      <>
        {parts[0]}
        <span className="bg-red-500/20 text-red-400 border border-red-500/50 rounded px-1 animate-pulse">
          {data.hallucinatedSnippet}
        </span>
        {parts[1]}
      </>
    );
  };

  if (!data) return <div className="text-white">Data not found for track {selectedTrack}.</div>;

  return (
    <div className="flex flex-col gap-6 w-full animate-fade-in">
      <div className="flex gap-4 items-start mb-4">
        <div className="p-3 bg-red-500/20 rounded-xl">
           <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">The Illusion of Truth</h3>
          <p className="text-text-secondary">Simulating an AI hallucination based on your persona's common document types.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side: Document Viewer */}
        <div className="glass-card rounded-xl border border-border-glass overflow-hidden flex flex-col h-[500px]">
          <div className="bg-surface-700 px-4 py-3 border-b border-border-glass flex justify-between items-center">
            <span className="text-sm font-mono text-text-secondary flex items-center gap-2">
              <svg className="w-4 h-4 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              {data.documentTitle}
            </span>
          </div>
          <div className="p-6 font-mono text-sm text-text-secondary whitespace-pre-wrap overflow-y-auto leading-relaxed">
            {data.documentSnippet}
          </div>
        </div>

        {/* Right Side: AI Terminal */}
        <div className="glass-card rounded-xl border border-border-glass overflow-hidden flex flex-col h-[500px]">
          <div className="bg-surface-700 px-4 py-3 border-b border-border-glass flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
             <div className="w-3 h-3 rounded-full bg-green-500"></div>
             <span className="ml-2 text-xs font-mono text-text-secondary">ai-workspace-terminal</span>
          </div>
          <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
            {/* User Prompt */}
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-primary/20 flex items-center justify-center shrink-0">
                <span className="text-accent-primary font-bold text-xs">U</span>
              </div>
              <div className="bg-surface-600 rounded-lg p-4 rounded-tl-none border border-border-glass">
                <p className="text-white text-sm">{data.simulatedPrompt}</p>
              </div>
            </div>

            {/* AI Response Area */}
            {isExtracting ? (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center shrink-0">
                  <span className="text-accent-cyan font-bold text-xs">AI</span>
                </div>
                <div className="bg-surface-700 rounded-lg p-4 rounded-tl-none border border-accent-cyan/30 flex items-center gap-2">
                   <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                   <div className="w-2 h-2 bg-accent-cyan rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            ) : extractedText ? (
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center shrink-0">
                  <span className="text-accent-cyan font-bold text-xs">AI</span>
                </div>
                <div className="bg-surface-700 rounded-lg p-4 rounded-tl-none border border-accent-cyan/30 w-full">
                  <p className="text-white text-sm whitespace-pre-wrap">
                    {renderOutputWithHighlight(extractedText)}
                  </p>
                </div>
              </div>
            ) : null}
            
            {/* Reality Check Reveal */}
            {isRevealed && (
               <div className="mt-4 p-4 border border-red-500/30 bg-red-500/10 rounded-lg animate-fade-in">
                  <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Hallucination Detected
                  </h4>
                  <p className="text-sm text-white/90">{data.realityCheck}</p>
               </div>
            )}
          </div>
          
          {/* Controls */}
          <div className="p-4 border-t border-border-glass bg-surface-700/50 flex justify-between gap-4">
             <button 
                onClick={handleExtract}
                disabled={isExtracting}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
             >
                {extractedText ? 'Re-run Extraction' : 'Run Extraction'}
             </button>
             
             {extractedText.length === data.hallucinatedOutput.length && (
                 <button 
                    onClick={() => setIsRevealed(true)}
                    disabled={isRevealed}
                    className="px-4 py-2 rounded-lg font-medium text-sm border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50"
                 >
                    Verify Output
                 </button>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
