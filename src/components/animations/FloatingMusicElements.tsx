import React from 'react';
import { Music, Headphones, Mic, Radio, Volume2, Play } from 'lucide-react';

const FloatingMusicElements = () => {
  const musicIcons = [
    { Icon: Music, delay: '0s', duration: '6s', x: '10%', y: '20%' },
    { Icon: Headphones, delay: '1s', duration: '8s', x: '80%', y: '15%' },
    { Icon: Mic, delay: '2s', duration: '7s', x: '15%', y: '70%' },
    { Icon: Radio, delay: '3s', duration: '9s', x: '85%', y: '75%' },
    { Icon: Volume2, delay: '4s', duration: '6s', x: '50%', y: '10%' },
    { Icon: Play, delay: '5s', duration: '8s', x: '70%', y: '60%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {musicIcons.map(({ Icon, delay, duration, x, y }, index) => (
        <div
          key={index}
          className="absolute animate-float-3d opacity-20"
          style={{
            left: x,
            top: y,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon className="h-8 w-8 text-pink-300" />
        </div>
      ))}
    </div>
  );
};

export default FloatingMusicElements;