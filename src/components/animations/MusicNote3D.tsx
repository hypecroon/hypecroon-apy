import React from 'react';

const MusicNote3D = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="animate-bounce-3d">
        <svg
          width="60"
          height="80"
          viewBox="0 0 60 80"
          className="text-pink-300 drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
          }}
        >
          <defs>
            <linearGradient id="noteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9A8D4" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          {/* Note stem */}
          <rect x="45" y="10" width="4" height="45" fill="url(#noteGradient)" />
          {/* Note head */}
          <ellipse cx="35" cy="55" rx="12" ry="8" fill="url(#noteGradient)" transform="rotate(-20 35 55)" />
          {/* Note flag */}
          <path d="M49 10 Q55 15 49 25 Q55 30 49 40" stroke="url(#noteGradient)" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </div>
  );
};

export default MusicNote3D;