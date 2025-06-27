import React from 'react';

interface LotusFlowerProps {
  className?: string;
  size?: number;
}

const LotusFlower: React.FC<LotusFlowerProps> = ({ className = '', size = 60 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="lotusGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fdf2f8" />
          <stop offset="50%" stopColor="#f9a8d4" />
          <stop offset="100%" stopColor="#f43f5e" />
        </radialGradient>
        <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>
      </defs>
      
      {/* Outer petals */}
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse
          key={i}
          cx="60"
          cy="60"
          rx="35"
          ry="15"
          fill="url(#lotusGradient)"
          opacity="0.8"
          transform={`rotate(${i * 45} 60 60)`}
          style={{ transformOrigin: '60px 60px' }}
        />
      ))}
      
      {/* Inner petals */}
      {Array.from({ length: 6 }, (_, i) => (
        <ellipse
          key={i}
          cx="60"
          cy="60"
          rx="25"
          ry="10"
          fill="url(#lotusGradient)"
          opacity="0.9"
          transform={`rotate(${i * 60 + 30} 60 60)`}
          style={{ transformOrigin: '60px 60px' }}
        />
      ))}
      
      {/* Center */}
      <circle cx="60" cy="60" r="12" fill="url(#centerGradient)" />
      <circle cx="60" cy="60" r="6" fill="#fbbf24" opacity="0.8" />
    </svg>
  );
};

export default LotusFlower;