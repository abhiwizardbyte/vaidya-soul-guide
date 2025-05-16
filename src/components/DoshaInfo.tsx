
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import DoshaBadge from './DoshaBadge';

const DoshaInfo: React.FC = () => {
  return (
    <Card className="bg-white/90 border-ayurveda-lightSage">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-display text-ayurveda-brown">Understanding the Doshas</CardTitle>
        <CardDescription>
          The three fundamental energies that govern our physiology and psychology
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="vata">
            <AccordionTrigger className="hover:text-ayurveda-terracotta">
              <div className="flex items-center gap-2">
                <DoshaBadge dosha="Vata" size="sm" />
                <span>Vata Dosha</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              <p className="mb-2">
                Vata embodies the elements of <span className="sanskrit">Space</span> and 
                <span className="sanskrit"> Air</span>, governing movement and change in the body and mind.
              </p>
              <p className="mb-1 font-medium">Characteristics:</p>
              <ul className="list-disc pl-5 mb-2 space-y-1">
                <li>Creative, quick-thinking, and adaptable</li>
                <li>Light, thin body frame</li>
                <li>Dry skin and hair</li>
                <li>Variable digestion and appetite</li>
                <li>Tendency toward worry and anxiety</li>
              </ul>
              <p className="text-xs italic text-ayurveda-brown/70">
                When in balance: energetic, creative, and flexible
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="pitta">
            <AccordionTrigger className="hover:text-ayurveda-terracotta">
              <div className="flex items-center gap-2">
                <DoshaBadge dosha="Pitta" size="sm" />
                <span>Pitta Dosha</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              <p className="mb-2">
                Pitta represents the elements of <span className="sanskrit">Fire</span> and 
                <span className="sanskrit"> Water</span>, governing metabolism, digestion, and transformation.
              </p>
              <p className="mb-1 font-medium">Characteristics:</p>
              <ul className="list-disc pl-5 mb-2 space-y-1">
                <li>Intelligent, focused, and determined</li>
                <li>Medium build with good muscle tone</li>
                <li>Warm skin, often with freckles or redness</li>
                <li>Strong digestion and hearty appetite</li>
                <li>Tendency toward irritability when out of balance</li>
              </ul>
              <p className="text-xs italic text-ayurveda-brown/70">
                When in balance: confident, passionate, and purposeful
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="kapha">
            <AccordionTrigger className="hover:text-ayurveda-terracotta">
              <div className="flex items-center gap-2">
                <DoshaBadge dosha="Kapha" size="sm" />
                <span>Kapha Dosha</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              <p className="mb-2">
                Kapha combines the elements of <span className="sanskrit">Earth</span> and 
                <span className="sanskrit"> Water</span>, governing structure, stability, and lubrication.
              </p>
              <p className="mb-1 font-medium">Characteristics:</p>
              <ul className="list-disc pl-5 mb-2 space-y-1">
                <li>Patient, compassionate, and grounded</li>
                <li>Strong, sturdy build with tendency to gain weight</li>
                <li>Smooth, oily skin and thick hair</li>
                <li>Slow, steady digestion</li>
                <li>Tendency toward complacency or lethargy</li>
              </ul>
              <p className="text-xs italic text-ayurveda-brown/70">
                When in balance: nurturing, steady, and reliable
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default DoshaInfo;
