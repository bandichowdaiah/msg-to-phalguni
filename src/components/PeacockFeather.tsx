import React from 'react';

interface PeacockFeatherProps {
  className?: string;
  size?: number;
}

const PeacockFeather: React.FC<PeacockFeatherProps> = ({ className = '', size = 100 }) => {
  return (
    <svg
      width={size}
      height={size * 3}
      viewBox="0 0 100 300"
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="eyeGradient" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="30%" stopColor="#1e40af" />
          <stop offset="70%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </radialGradient>
        <linearGradient id="featherGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
      
      {/* Feather stem */}
      <line x1="50" y1="80" x2="50" y2="290" stroke="url(#featherGradient)" strokeWidth="2" />
      
      {/* Feather eye */}
      <ellipse cx="50" cy="40" rx="25" ry="35" fill="url(#eyeGradient)" />
      <ellipse cx="50" cy="40" rx="15" ry="25" fill="#fbbf24" opacity="0.8" />
      <ellipse cx="50" cy="40" rx="8" ry="15" fill="#1e3a8a" />
      <ellipse cx="50" cy="37" rx="4" ry="8" fill="#ffffff" opacity="0.9" />
      
      {/* Feather barbs */}
      {Array.from({ length: 20 }, (_, i) => (
        <g key={i}>
          <path
            d={`M50 ${80 + i * 10} Q${30 - i * 0.5} ${85 + i * 10} ${25 - i * 0.3} ${90 + i * 10}`}
            stroke="url(#featherGradient)"
            strokeWidth="1"
            fill="none"
            opacity={0.7 - i * 0.02}
          />
          <path
            d={`M50 ${80 + i * 10} Q${70 + i * 0.5} ${85 + i * 10} ${75 + i * 0.3} ${90 + i * 10}`}
            stroke="url(#featherGradient)"
            strokeWidth="1"
            fill="none"
            opacity={0.7 - i * 0.02}
          />
        </g>
      ))}
    </svg>
  );
};

export default PeacockFeather;