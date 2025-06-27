import React from 'react';

interface MandalaProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

const Mandala: React.FC<MandalaProps> = ({ className = '', size = 200, animate = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className} ${animate ? 'mandala-rotate' : ''}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="mandalaGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" opacity="0.3" />
          <stop offset="50%" stopColor="#f59e0b" opacity="0.2" />
          <stop offset="100%" stopColor="#d97706" opacity="0.1" />
        </radialGradient>
      </defs>
      
      {/* Outer ring */}
      <circle cx="100" cy="100" r="90" stroke="#fbbf24" strokeWidth="1" opacity="0.3" />
      <circle cx="100" cy="100" r="75" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
      <circle cx="100" cy="100" r="60" stroke="#d97706" strokeWidth="1" opacity="0.5" />
      
      {/* Geometric patterns */}
      {Array.from({ length: 12 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 30} 100 100)`}>
          <line x1="100" y1="40" x2="100" y2="60" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
          <line x1="100" y1="140" x2="100" y2="160" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
          <circle cx="100" cy="50" r="3" fill="#f59e0b" opacity="0.7" />
          <circle cx="100" cy="150" r="3" fill="#f59e0b" opacity="0.7" />
        </g>
      ))}
      
      {/* Inner patterns */}
      {Array.from({ length: 8 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 45} 100 100)`}>
          <polygon
            points="100,70 105,85 100,90 95,85"
            fill="#fbbf24"
            opacity="0.5"
          />
          <polygon
            points="100,110 105,115 100,130 95,115"
            fill="#fbbf24"
            opacity="0.5"
          />
        </g>
      ))}
      
      {/* Center */}
      <circle cx="100" cy="100" r="15" fill="url(#mandalaGradient)" />
      <circle cx="100" cy="100" r="8" fill="#fbbf24" opacity="0.8" />
    </svg>
  );
};

export default Mandala;