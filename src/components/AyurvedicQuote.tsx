
import React from 'react';

interface AyurvedicQuoteProps {
  className?: string;
}

const quotes = [
  {
    text: "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need.",
    attribution: "Ayurvedic Proverb"
  },
  {
    text: "Health is not just the absence of disease but the dynamic expression of life.",
    attribution: "Charaka Samhita"
  },
  {
    text: "Like increases like and opposites balance.",
    attribution: "Fundamental principle of Ayurveda"
  },
  {
    text: "Proper digestion is the key to your health and immunity.",
    attribution: "Ayurvedic Wisdom"
  },
  {
    text: "The mind and body are not separate. What affects one, affects the other.",
    attribution: "Sushruta Samhita"
  }
];

const AyurvedicQuote: React.FC<AyurvedicQuoteProps> = ({ className = "" }) => {
  // Select a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <div className={`italic text-center p-4 ${className}`}>
      <p className="text-ayurveda-brown/80">"{randomQuote.text}"</p>
      <p className="text-sm mt-2 text-ayurveda-brown/60">— {randomQuote.attribution}</p>
    </div>
  );
};

export default AyurvedicQuote;
