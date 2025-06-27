import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  delay: number;
  size: number;
  color: string;
}

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ['#fbbf24', '#f43f5e', '#7c3aed', '#3b82f6'];
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-60 particle-float"
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;