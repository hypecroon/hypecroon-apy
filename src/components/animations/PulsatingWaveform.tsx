import React from 'react';

const PulsatingWaveform = () => {
  const bars = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="flex items-end justify-center space-x-1 h-32">
      {bars.map((bar) => (
        <div
          key={bar}
          className="bg-gradient-to-t from-pink-500 to-pink-300 rounded-t-lg animate-waveform"
          style={{
            width: '4px',
            minHeight: '8px',
            animationDelay: `${bar * 0.1}s`,
            animationDuration: `${1 + (bar % 3) * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default PulsatingWaveform;