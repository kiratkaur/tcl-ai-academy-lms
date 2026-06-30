import React from 'react';
import { TRACKS } from '../data';
import { TrackId } from '../types';

interface TrackSelectorProps {
  onSelect: (id: TrackId) => void;
}

export function TrackSelector({ onSelect }: TrackSelectorProps) {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto p-12">
      <div className="max-w-5xl mx-auto w-full pt-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Select Your Persona Track</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Choose your specialized track to load customized lab packages, realistic data scenarios, and tailored prompts. Your selection defines your Horizon 1 experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACKS.map(track => (
            <button
              key={track.id}
              onClick={() => onSelect(track.id)}
              className="glass-card rounded-2xl p-6 text-left glass-card-hover group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <span className="text-6xl font-black">{track.id}</span>
              </div>
              
              <div className={`w-12 h-12 rounded-xl ${track.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                <span className="text-lg font-bold">{track.id}</span>
              </div>
              
              <h3 className="font-bold text-white text-lg mb-3 leading-tight group-hover:text-accent-light transition-colors">{track.name}</h3>
              <p className="text-sm text-text-muted mt-auto leading-relaxed group-hover:text-text-secondary transition-colors">{track.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
