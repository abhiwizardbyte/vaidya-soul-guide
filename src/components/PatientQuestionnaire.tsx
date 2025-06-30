
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QuestionnaireData {
  age: string;
  gender: string;
  primaryComplaint: string;
  bodyFrame: string;
  digestion: string;
  temperament: string;
  sleep: string;
  bowelMovements: string;
  appetite: string;
}

interface PatientQuestionnaireProps {
  onSubmit: (data: QuestionnaireData) => void;
}

const PatientQuestionnaire: React.FC<PatientQuestionnaireProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<QuestionnaireData>({
    age: '',
    gender: '',
    primaryComplaint: '',
    bodyFrame: '',
    digestion: '',
    temperament: '',
    sleep: '',
    bowelMovements: '',
    appetite: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateField = (field: keyof QuestionnaireData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-display text-ayurveda-terracotta text-center">
          Health Assessment Questionnaire
        </CardTitle>
        <p className="text-center text-ayurveda-brown/80">
          Help us understand your health to provide personalized Ayurvedic guidance
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ayurveda-terracotta border-b border-ayurveda-sage/30 pb-2">
              🔹 Basic Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">What is your age?</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={(e) => updateField('age', e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>What is your gender?</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => updateField('gender', value)}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Primary Complaint */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ayurveda-terracotta border-b border-ayurveda-sage/30 pb-2">
              🔹 Primary Complaint
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="complaint">What health issue are you facing right now?</Label>
              <Textarea
                id="complaint"
                placeholder="e.g., headache, acidity, fatigue, constipation, anxiety"
                value={formData.primaryComplaint}
                onChange={(e) => updateField('primaryComplaint', e.target.value)}
                required
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* Prakriti Assessment */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ayurveda-terracotta border-b border-ayurveda-sage/30 pb-2">
              🔹 Prakriti Assessment (Body Type)
            </h3>
            
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">How would you describe your body frame?</Label>
                <RadioGroup
                  value={formData.bodyFrame}
                  onValueChange={(value) => updateField('bodyFrame', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="slim" id="slim" />
                    <Label htmlFor="slim">Slim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="heavy" id="heavy" />
                    <Label htmlFor="heavy">Heavy</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium">How is your digestion?</Label>
                <RadioGroup
                  value={formData.digestion}
                  onValueChange={(value) => updateField('digestion', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="irregular" id="irregular" />
                    <Label htmlFor="irregular">Irregular</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="strong" id="strong" />
                    <Label htmlFor="strong">Strong</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="slow" id="slow" />
                    <Label htmlFor="slow">Slow</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium">How's your usual temperament?</Label>
                <RadioGroup
                  value={formData.temperament}
                  onValueChange={(value) => updateField('temperament', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="anxious" id="anxious" />
                    <Label htmlFor="anxious">Anxious or restless</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="irritable" id="irritable" />
                    <Label htmlFor="irritable">Irritable or intense</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="calm" id="calm" />
                    <Label htmlFor="calm">Calm or laid-back</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Lifestyle Indicators */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ayurveda-terracotta border-b border-ayurveda-sage/30 pb-2">
              🔹 Lifestyle Indicators
            </h3>
            
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">Do you sleep well at night?</Label>
                <RadioGroup
                  value={formData.sleep}
                  onValueChange={(value) => updateField('sleep', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="sleep-yes" />
                    <Label htmlFor="sleep-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="sleep-no" />
                    <Label htmlFor="sleep-no">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="frequent-wake" id="frequent-wake" />
                    <Label htmlFor="frequent-wake">I wake up frequently</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium">How are your bowel movements?</Label>
                <RadioGroup
                  value={formData.bowelMovements}
                  onValueChange={(value) => updateField('bowelMovements', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="regular" id="bowel-regular" />
                    <Label htmlFor="bowel-regular">Regular</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="constipated" id="constipated" />
                    <Label htmlFor="constipated">Constipated</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="loose" id="loose" />
                    <Label htmlFor="loose">Loose or frequent</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium">How is your appetite?</Label>
                <RadioGroup
                  value={formData.appetite}
                  onValueChange={(value) => updateField('appetite', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poor" id="appetite-poor" />
                    <Label htmlFor="appetite-poor">Poor</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="strong" id="appetite-strong" />
                    <Label htmlFor="appetite-strong">Strong</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="variable" id="appetite-variable" />
                    <Label htmlFor="appetite-variable">Variable</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-ayurveda-terracotta hover:bg-ayurveda-terracotta/80 text-white font-display text-lg"
          >
            Get Personalized Ayurvedic Guidance
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PatientQuestionnaire;
