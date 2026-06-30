import React, { useState } from 'react';

const MOCK_DATA = `To: Legal Team
From: Sarah Jenkins
Subject: Regional Distribution Agreement - Draft

Please review the attached contract for Vendor A. 
Contact details for their representative:
Name: John Doe
Email: j.doe@vendor-a-corp.com
Phone: (555) 123-4567

Internal Project Code: TCL-PRJ-9921
Budget allocation approved for $45,000 via corporate card ending in 4111-2222-3333-4444.

Please ensure compliance with HK PDPO before Friday.`;

const PII_PATTERNS = [
  { name: 'Email Address', regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g },
  { name: 'Phone Number', regex: /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g },
  { name: 'Credit Card', regex: /\b(?:\d[ -]*?){13,16}\b/g },
  { name: 'TCL Internal Code', regex: /TCL-[A-Z]{3}-\d{4}/g }
];

export function PIIScanner() {
  const [inputText, setInputText] = useState(MOCK_DATA);
  const [scanResult, setScanResult] = useState<{ original: string, flagged: { text: string, type: string, index: number }[] } | null>(null);

  const handleScan = () => {
    let flaggedItems: { text: string, type: string, index: number }[] = [];
    
    PII_PATTERNS.forEach(pattern => {
      let match;
      // Reset lastIndex for global regex
      pattern.regex.lastIndex = 0;
      while ((match = pattern.regex.exec(inputText)) !== null) {
        flaggedItems.push({
          text: match[0],
          type: pattern.name,
          index: match.index
        });
      }
    });

    // Sort by index
    flaggedItems.sort((a, b) => a.index - b.index);

    setScanResult({
      original: inputText,
      flagged: flaggedItems
    });
  };

  const handleMask = () => {
    let maskedText = inputText;
    PII_PATTERNS.forEach(pattern => {
      maskedText = maskedText.replace(pattern.regex, '[REDACTED]');
    });
    setInputText(maskedText);
    setScanResult(null); // Reset scan result after masking
  };

  const renderHighlightedText = () => {
    if (!scanResult || scanResult.flagged.length === 0) return <p className="whitespace-pre-wrap font-mono text-sm">{inputText}</p>;

    let elements = [];
    let currentIndex = 0;

    // To prevent overlapping matches causing issues, we filter out matches that fall within the bounds of previous matches
    let cleanFlagged = [];
    let lastEnd = -1;
    for (const item of scanResult.flagged) {
        if (item.index >= lastEnd) {
            cleanFlagged.push(item);
            lastEnd = item.index + item.text.length;
        }
    }

    cleanFlagged.forEach((item, i) => {
      // Add text before the match
      if (item.index > currentIndex) {
        elements.push(<span key={`text-${i}`}>{scanResult.original.substring(currentIndex, item.index)}</span>);
      }
      
      // Add the highlighted match
      elements.push(
        <span key={`match-${i}`} className="group relative bg-red-500/20 text-red-400 border border-red-500/50 rounded px-1 cursor-help">
          {item.text}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-surface-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {item.type}
          </span>
        </span>
      );
      
      currentIndex = item.index + item.text.length;
    });

    // Add remaining text
    if (currentIndex < scanResult.original.length) {
      elements.push(<span key="text-end">{scanResult.original.substring(currentIndex)}</span>);
    }

    return <p className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{elements}</p>;
  };

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            PII Pre-Flight Gateway
          </h1>
          <p className="text-text-secondary text-lg">Simulated corporate firewall. Sanitize unstructured text before pasting into an external LLM workspace.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Area */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-accent-light">Raw Input</h2>
              <button 
                onClick={() => { setInputText(MOCK_DATA); setScanResult(null); }}
                className="text-xs text-text-muted hover:text-accent-cyan transition-colors"
              >
                Reset Example
              </button>
            </div>
            <textarea 
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                setScanResult(null); // Clear highlights if user edits
              }}
              className="flex-1 bg-surface-800 border border-border-glass rounded-xl p-4 text-white font-mono text-sm resize-none focus:outline-none focus:border-accent-cyan transition-colors"
              placeholder="Paste your raw text here..."
              rows={15}
            />
            <button 
              onClick={handleScan}
              className="btn-primary w-full py-4 text-lg font-bold"
            >
              Scan for Sensitive Data
            </button>
          </div>

          {/* Analysis Area */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
             <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                Scanner Analysis 
                {scanResult && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full border border-red-500/50">{scanResult.flagged.length} issues found</span>}
              </h2>
            </div>

            <div className="flex-1 bg-surface-900 border border-border-glass rounded-xl p-4 overflow-y-auto">
              {scanResult ? (
                scanResult.flagged.length > 0 ? (
                  renderHighlightedText()
                ) : (
                   <div className="h-full flex flex-col items-center justify-center text-emerald-400 gap-2">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <p className="font-bold">No PII Detected</p>
                      <p className="text-sm text-text-muted">Safe for external LLM ingestion.</p>
                   </div>
                )
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-text-muted gap-4">
                  <svg className="w-16 h-16 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <p>Awaiting scan initialization...</p>
                </div>
              )}
            </div>

            <button 
              onClick={handleMask}
              disabled={!scanResult || scanResult.flagged.length === 0}
              className="w-full py-4 rounded-xl font-bold text-lg transition-colors border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-surface-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-accent-cyan"
            >
              Mask Detected Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
