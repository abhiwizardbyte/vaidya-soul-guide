
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 sm:py-10 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-ayurveda-terracotta">
        RAG Vaidya
      </h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-lg sm:text-xl mt-2 mb-4 text-ayurveda-brown/90">
          Your personal Ayurvedic wellness guide
        </p>
        <Separator className="bg-ayurveda-sage/30" />
        <p className="mt-4 text-sm sm:text-base text-ayurveda-brown/80 italic">
          "May all be healthy, may all be happy, may all be whole" <br />
          <span className="sanskrit">सर्वे भवन्तु सुखिनः</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
