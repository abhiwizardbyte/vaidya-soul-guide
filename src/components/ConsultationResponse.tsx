
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DoshaBadge from './DoshaBadge';

interface ConsultationResponseProps {
  response: {
    diagnosis: string;
    remedies: string[];
    diet: string[];
    lifestyle: string[];
    doshaImbalances: ('Vata' | 'Pitta' | 'Kapha')[];
  } | null;
}

const ConsultationResponse: React.FC<ConsultationResponseProps> = ({ response }) => {
  if (!response) return null;

  return (
    <div className="space-y-6 animate-gentle-fade">
      <div className="ayurveda-card">
        <h3 className="text-xl sm:text-2xl font-display text-ayurveda-terracotta mb-2">
          Ayurvedic Assessment
        </h3>
        
        {response.doshaImbalances.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {response.doshaImbalances.map(dosha => (
              <DoshaBadge key={dosha} dosha={dosha} />
            ))}
          </div>
        )}
        
        <div className="prose prose-stone max-w-none">
          <p className="text-ayurveda-brown/90">{response.diagnosis}</p>
        </div>
      </div>

      <Tabs defaultValue="remedies" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger 
            value="remedies" 
            className="font-display data-[state=active]:bg-ayurveda-terracotta data-[state=active]:text-white"
          >
            Remedies
          </TabsTrigger>
          <TabsTrigger 
            value="diet" 
            className="font-display data-[state=active]:bg-ayurveda-terracotta data-[state=active]:text-white"
          >
            Diet
          </TabsTrigger>
          <TabsTrigger 
            value="lifestyle" 
            className="font-display data-[state=active]:bg-ayurveda-terracotta data-[state=active]:text-white"
          >
            Lifestyle
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="remedies" className="mt-0">
          <Card className="ayurveda-card">
            <h4 className="text-lg font-display mb-4 text-ayurveda-brown">Ayurvedic Remedies</h4>
            <ul className="space-y-3">
              {response.remedies.map((remedy, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-ayurveda-terracotta mt-0.5">✦</span>
                  <span>{remedy}</span>
                </li>
              ))}
            </ul>
          </Card>
        </TabsContent>
        
        <TabsContent value="diet" className="mt-0">
          <Card className="ayurveda-card">
            <h4 className="text-lg font-display mb-4 text-ayurveda-brown">Dietary Recommendations</h4>
            <ul className="space-y-3">
              {response.diet.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-ayurveda-terracotta mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </TabsContent>
        
        <TabsContent value="lifestyle" className="mt-0">
          <Card className="ayurveda-card">
            <h4 className="text-lg font-display mb-4 text-ayurveda-brown">Lifestyle Practices</h4>
            <ul className="space-y-3">
              {response.lifestyle.map((practice, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-ayurveda-terracotta mt-0.5">✦</span>
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center text-sm text-ayurveda-brown/70 italic">
        <p>
          "Let food be thy medicine and medicine be thy food" — Ancient Wisdom
        </p>
      </div>
    </div>
  );
};

export default ConsultationResponse;
