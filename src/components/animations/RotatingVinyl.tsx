import React from 'react';

const RotatingVinyl = ({ size = 'w-32 h-32' }: { size?: string }) => {
  return (
    <div className={`${size} relative animate-spin-slow`}>
      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-full border-4 border-pink-300 relative overflow-hidden">
        {/* Vinyl grooves */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-gray-600 rounded-full"
            style={{
              width: `${90 - i * 10}%`,
              height: `${90 - i * 10}%`,
              top: `${5 + i * 5}%`,
              left: `${5 + i * 5}%`,
            }}
          />
        ))}
        {/* Center label */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default RotatingVinyl;