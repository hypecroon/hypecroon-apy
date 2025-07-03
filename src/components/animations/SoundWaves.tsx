import React from 'react';

const SoundWaves = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="w-1 bg-pink-300 rounded-full animate-sound-wave"
          style={{
            height: `${20 + i * 10}px`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SoundWaves;