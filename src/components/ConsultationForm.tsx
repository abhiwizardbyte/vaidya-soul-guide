
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from '@/components/ui/label';
import DoshaBadge from './DoshaBadge';

interface ConsultationFormProps {
  onSubmit: (symptoms: string, concerns: string[], selectedDoshas: string[]) => void;
}

const COMMON_CONCERNS = [
  'Sleep Issues', 'Digestive Problems', 'Stress & Anxiety', 
  'Joint Pain', 'Skin Issues', 'Low Energy', 'Headaches',
  'Weight Management', 'Seasonal Allergies'
];

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onSubmit }) => {
  const [symptoms, setSymptoms] = useState('');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [selectedDoshas, setSelectedDoshas] = useState<string[]>([]);

  const handleConcernToggle = (concern: string) => {
    if (selectedConcerns.includes(concern)) {
      setSelectedConcerns(selectedConcerns.filter(c => c !== concern));
    } else {
      setSelectedConcerns([...selectedConcerns, concern]);
    }
  };

  const handleDoshaToggle = (dosha: string) => {
    if (selectedDoshas.includes(dosha)) {
      setSelectedDoshas(selectedDoshas.filter(d => d !== dosha));
    } else {
      setSelectedDoshas([...selectedDoshas, dosha]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(symptoms, selectedConcerns, selectedDoshas);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="symptoms" className="text-lg font-display">
          Tell me about your symptoms or concerns
        </Label>
        <Textarea 
          id="symptoms"
          placeholder="Describe how you're feeling physically and mentally..."
          className="ayurveda-input min-h-[120px] text-base"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label className="text-lg font-display">Common Concerns</Label>
        <div className="flex flex-wrap gap-2">
          {COMMON_CONCERNS.map(concern => (
            <Button
              key={concern}
              type="button"
              variant={selectedConcerns.includes(concern) ? "default" : "outline"}
              className={`rounded-full text-sm ${
                selectedConcerns.includes(concern) 
                  ? 'bg-ayurveda-sage text-white hover:bg-ayurveda-sage/90' 
                  : 'border-ayurveda-sage text-ayurveda-sage hover:bg-ayurveda-sage/10'
              }`}
              onClick={() => handleConcernToggle(concern)}
            >
              {concern}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-lg font-display">Know your dosha? (optional)</Label>
        <p className="text-sm text-ayurveda-brown/80">
          Select if you already know your dominant dosha(s)
        </p>
        <div className="flex flex-wrap gap-3">
          <DoshaBadge 
            dosha="Vata" 
            isSelected={selectedDoshas.includes('Vata')}
            onClick={() => handleDoshaToggle('Vata')}
          />
          <DoshaBadge 
            dosha="Pitta" 
            isSelected={selectedDoshas.includes('Pitta')}
            onClick={() => handleDoshaToggle('Pitta')}
          />
          <DoshaBadge 
            dosha="Kapha" 
            isSelected={selectedDoshas.includes('Kapha')}
            onClick={() => handleDoshaToggle('Kapha')}
          />
        </div>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-ayurveda-terracotta hover:bg-ayurveda-terracotta/80 text-white font-display text-lg"
      >
        Consult RAG Vaidya
      </Button>
    </form>
  );
};

export default ConsultationForm;
