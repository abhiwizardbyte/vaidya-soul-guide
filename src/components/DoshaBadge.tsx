
import React from 'react';
import { cn } from '@/lib/utils';

interface DoshaBadgeProps {
  dosha: 'Vata' | 'Pitta' | 'Kapha';
  isSelected?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const DoshaBadge: React.FC<DoshaBadgeProps> = ({ 
  dosha, 
  isSelected = false,
  onClick,
  size = 'md'
}) => {
  const doshaInfo = {
    'Vata': {
      color: 'bg-indigo-100 border-indigo-300',
      activeColor: 'bg-indigo-200',
      textColor: 'text-indigo-900',
      emoji: '🌬️',
      description: 'Air & Space'
    },
    'Pitta': {
      color: 'bg-amber-100 border-amber-300',
      activeColor: 'bg-amber-200',
      textColor: 'text-amber-900',
      emoji: '🔥',
      description: 'Fire & Water'
    },
    'Kapha': {
      color: 'bg-emerald-100 border-emerald-300',
      activeColor: 'bg-emerald-200',
      textColor: 'text-emerald-900',
      emoji: '🌊',
      description: 'Earth & Water'
    }
  };

  const info = doshaInfo[dosha];
  
  const sizeClasses = {
    sm: 'text-xs py-1 px-2',
    md: 'text-sm py-1.5 px-3',
    lg: 'text-base py-2 px-4',
  };
  
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border transition-all flex items-center gap-1.5',
        sizeClasses[size],
        info.textColor,
        isSelected ? info.activeColor : info.color,
        onClick ? 'cursor-pointer hover:shadow-md' : 'cursor-default',
        isSelected && 'ring-1 ring-offset-1 ring-inset'
      )}
    >
      <span>{info.emoji}</span>
      <span className="font-sanskrit">{dosha}</span>
      {size !== 'sm' && (
        <span className="text-xs opacity-70 hidden sm:inline">
          ({info.description})
        </span>
      )}
    </button>
  );
};

export default DoshaBadge;
