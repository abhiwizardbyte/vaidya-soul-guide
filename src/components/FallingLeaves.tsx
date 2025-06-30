
import React from 'react';

const FallingLeaves = () => {
  const leaves = Array.from({ length: 15 }, (_, i) => i);
  
  const leafEmojis = ['🍃', '🌿', '🍂', '🌾'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf}
          className="absolute animate-leaf-fall opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
            fontSize: `${12 + Math.random() * 8}px`,
          }}
        >
          {leafEmojis[Math.floor(Math.random() * leafEmojis.length)]}
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;
