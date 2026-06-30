import React from 'react';
import { UserProgress, PageView } from '../types';
import { TRACKS } from '../data';

interface CertificationWalletProps {
  progress: UserProgress;
  onNavigate: (page: PageView) => void;
}

export function CertificationWallet({ progress, onNavigate }: CertificationWalletProps) {
  const trackData = progress.selectedTrack ? progress.trackProgress[progress.selectedTrack] : null;
  const hasBronze = trackData ? trackData.challengeSubmissions.length > 0 : false;
  const latestSubmission = hasBronze && trackData ? trackData.challengeSubmissions[0] : null;

  return (
    <div className="flex-1 overflow-y-auto p-10">
      <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">My Certifications</h1>
          <p className="text-text-secondary text-lg">Your official digital wallet for TCL AI Academy credentials.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bronze Badge Card */}
            <div className={`glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[350px] ${hasBronze ? 'border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.1)]' : 'opacity-60 grayscale'}`}>
                {hasBronze ? (
                    <>
                        <div className="absolute inset-0 bg-yellow-500/5"></div>
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-700 via-yellow-500 to-yellow-900 rounded-full flex items-center justify-center border-4 border-yellow-300/50 shadow-[0_0_50px_rgba(234,179,8,0.3)] relative z-10 mb-6">
                            <span className="text-2xl font-black text-yellow-100 uppercase tracking-widest text-center leading-tight">Bronze</span>
                        </div>
                        <h3 className="text-xl font-bold text-white relative z-10">Horizon 1 Certified</h3>
                        <p className="text-xs text-text-muted mt-2 text-center relative z-10">Awarded for successfully executing a strategic prompt in a production environment.</p>
                        <div className="mt-4 text-xs font-mono text-yellow-400/70 relative z-10">
                            ID: {latestSubmission?.id}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-32 h-32 mx-auto bg-surface-700 rounded-full flex items-center justify-center border-4 border-surface-600 mb-6">
                             <svg className="w-12 h-12 text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-text-secondary">Horizon 1 (Locked)</h3>
                        <button 
                            onClick={() => onNavigate('challenge')}
                            className="mt-6 px-4 py-2 border border-accent-cyan/50 text-accent-cyan rounded-lg text-xs font-bold hover:bg-accent-cyan/10 transition-colors"
                        >
                            Complete 30-Day Challenge
                        </button>
                    </>
                )}
            </div>

            {/* Silver Badge Placeholder */}
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[350px] opacity-40 grayscale">
                 <div className="w-32 h-32 mx-auto bg-surface-700 rounded-full flex items-center justify-center border-4 border-surface-600 mb-6">
                        <svg className="w-12 h-12 text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-text-secondary">Horizon 2 (Locked)</h3>
                <p className="text-xs text-text-muted mt-2 text-center">Unlocks after Month 3 (Walk).</p>
            </div>

            {/* Gold Badge Placeholder */}
             <div className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[350px] opacity-40 grayscale">
                 <div className="w-32 h-32 mx-auto bg-surface-700 rounded-full flex items-center justify-center border-4 border-surface-600 mb-6">
                        <svg className="w-12 h-12 text-surface-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-text-secondary">Horizon 3 (Locked)</h3>
                <p className="text-xs text-text-muted mt-2 text-center">Unlocks after Month 6 (Run).</p>
            </div>
        </div>
      </div>
    </div>
  );
}
