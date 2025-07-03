/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float-3d': 'float3d 6s ease-in-out infinite',
        'bounce-3d': 'bounce3d 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'waveform': 'waveform 1.5s ease-in-out infinite alternate',
        'sound-wave': 'soundWave 1s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'feature-reveal': 'featureReveal 0.6s ease-out forwards',
        'highlight-flash': 'highlightFlash 1.5s ease-out forwards',
      },
      keyframes: {
        float3d: {
          '0%, 100%': {
            transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)',
          },
          '25%': {
            transform: 'translateY(-20px) rotateX(10deg) rotateY(5deg)',
          },
          '50%': {
            transform: 'translateY(-10px) rotateX(-5deg) rotateY(10deg)',
          },
          '75%': {
            transform: 'translateY(-15px) rotateX(5deg) rotateY(-5deg)',
          },
        },
        bounce3d: {
          '0%, 100%': {
            transform: 'translateY(0) scale(1) rotateZ(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.1) rotateZ(5deg)',
          },
        },
        waveform: {
          '0%': {
            height: '8px',
          },
          '100%': {
            height: '80px',
          },
        },
        soundWave: {
          '0%': {
            transform: 'scaleY(1)',
          },
          '100%': {
            transform: 'scaleY(1.5)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(249, 168, 212, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(249, 168, 212, 0.8)',
          },
        },
        slideIn: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        scaleIn: {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        featureReveal: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)',
          },
          '50%': {
            opacity: '0.7',
            transform: 'translateY(-2px) scale(1.02)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        highlightFlash: {
          '0%': {
            backgroundColor: 'rgba(249, 168, 212, 0)',
            transform: 'scale(1)',
          },
          '30%': {
            backgroundColor: 'rgba(249, 168, 212, 0.3)',
            transform: 'scale(1.02)',
          },
          '70%': {
            backgroundColor: 'rgba(249, 168, 212, 0.1)',
            transform: 'scale(1.01)',
          },
          '100%': {
            backgroundColor: 'rgba(249, 168, 212, 0)',
            transform: 'scale(1)',
          },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(249, 168, 212, 0.3)',
        'glow-lg': '0 0 40px rgba(249, 168, 212, 0.4)',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};