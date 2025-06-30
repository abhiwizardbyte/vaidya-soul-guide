
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

  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateField = (field: keyof QuestionnaireData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const steps = [
    {
      title: "🔹 Basic Information",
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 animate-slide-in-right">
              <Label htmlFor="age" className="text-lg font-medium">What is your age?</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e) => updateField('age', e.target.value)}
                required
                className="text-lg p-4 border-2 border-ayurveda-sage/30 focus:border-ayurveda-terracotta transition-all duration-300"
              />
            </div>
            
            <div className="space-y-3 animate-slide-in-right" style={{animationDelay: '200ms'}}>
              <Label className="text-lg font-medium">What is your gender?</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => updateField('gender', value)}
                required
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-ayurveda-lightSage/20 transition-all duration-300">
                  <RadioGroupItem value="male" id="male" className="border-ayurveda-sage" />
                  <Label htmlFor="male" className="text-lg cursor-pointer">Male</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-ayurveda-lightSage/20 transition-all duration-300">
                  <RadioGroupItem value="female" id="female" className="border-ayurveda-sage" />
                  <Label htmlFor="female" className="text-lg cursor-pointer">Female</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-ayurveda-lightSage/20 transition-all duration-300">
                  <RadioGroupItem value="other" id="other" className="border-ayurveda-sage" />
                  <Label htmlFor="other" className="text-lg cursor-pointer">Other</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "🔹 Primary Complaint",
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-3">
            <Label htmlFor="complaint" className="text-lg font-medium">What health issue are you facing right now?</Label>
            <Textarea
              id="complaint"
              placeholder="e.g., headache, acidity, fatigue, constipation, anxiety"
              value={formData.primaryComplaint}
              onChange={(e) => updateField('primaryComplaint', e.target.value)}
              required
              className="min-h-[120px] text-lg p-4 border-2 border-ayurveda-sage/30 focus:border-ayurveda-terracotta transition-all duration-300 resize-none"
            />
          </div>
        </div>
      )
    },
    {
      title: "🔹 Prakriti Assessment (Body Type)",
      content: (
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <Label className="text-lg font-medium">How would you describe your body frame?</Label>
            <RadioGroup
              value={formData.bodyFrame}
              onValueChange={(value) => updateField('bodyFrame', value)}
              className="space-y-3"
            >
              {['slim', 'medium', 'heavy'].map((option, index) => (
                <div key={option} className="animate-slide-in-right" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-transparent hover:border-ayurveda-sage/30 hover:bg-ayurveda-lightSage/20 transition-all duration-300">
                    <RadioGroupItem value={option} id={option} className="border-ayurveda-sage" />
                    <Label htmlFor={option} className="text-lg cursor-pointer capitalize">{option}</Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-medium">How is your digestion?</Label>
            <RadioGroup
              value={formData.digestion}
              onValueChange={(value) => updateField('digestion', value)}
              className="space-y-3"
            >
              {['irregular', 'strong', 'slow'].map((option, index) => (
                <div key={option} className="animate-slide-in-right" style={{animationDelay: `${(index + 3) * 100}ms`}}>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-transparent hover:border-ayurveda-sage/30 hover:bg-ayurveda-lightSage/20 transition-all duration-300">
                    <RadioGroupItem value={option} id={`digestion-${option}`} className="border-ayurveda-sage" />
                    <Label htmlFor={`digestion-${option}`} className="text-lg cursor-pointer capitalize">{option}</Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-medium">How's your usual temperament?</Label>
            <RadioGroup
              value={formData.temperament}
              onValueChange={(value) => updateField('temperament', value)}
              className="space-y-3"
            >
              {[
                { value: 'anxious', label: 'Anxious or restless' },
                { value: 'irritable', label: 'Irritable or intense' },
                { value: 'calm', label: 'Calm or laid-back' }
              ].map((option, index) => (
                <div key={option.value} className="animate-slide-in-right" style={{animationDelay: `${(index + 6) * 100}ms`}}>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-transparent hover:border-ayurveda-sage/30 hover:bg-ayurveda-lightSage/20 transition-all duration-300">
                    <RadioGroupItem value={option.value} id={`temperament-${option.value}`} className="border-ayurveda-sage" />
                    <Label htmlFor={`temperament-${option.value}`} className="text-lg cursor-pointer">{option.label}</Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      )
    },
    {
      title: "🔹 Lifestyle Indicators",
      content: (
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <Label className="text-lg font-medium">Do you sleep well at night?</Label>
            <RadioGroup
              value={formData.sleep}
              onValueChange={(value) => updateField('sleep', value)}
              className="space-y-3"
            >
              {[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
                { value: 'frequent-wake', label: 'I wake up frequently' }
              ].map((option, index) => (
                <div key={option.value} className="animate-slide-in-right" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-transparent hover:border-ayurveda-sage/30 hover:bg-ayurveda-lightSage/20 transition-all duration-300">
                    <RadioGroupItem value={option.value} id={`sleep-${option.value}`} className="border-ayurveda-sage" />
                    <Label htmlFor={`sleep-${option.value}`} className="text-lg cursor-pointer">{option.label}</Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-medium">How are your bowel movements?</Label>
            <RadioGroup
              value={formData.bowelMovements}
              onValueChange={(value) => updateField('bowelMovements', value)}
              className="space-y-3"
            >
              {[
                { value: 'regular', label: 'Regular' },
                { value: 'constipated', label: 'Constipated' },
                { value: 'loose', label: 'Loose or frequent' }
              ].map((option, index) => (
                <div key={option.value} className="animate-slide-in-right" style={{animationDelay: `${(index + 3) * 100}ms`}}>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-transparent hover:border-ayurveda-sage/30 hover:bg-ayurveda-lightSage/20 transition-all duration-300">
                    <RadioGroupItem value={option.value} id={`bowel-${option.value}`} className="border-ayurveda-sage" />
                    <Label htmlFor={`bowel-${option.value}`} className="text-lg cursor-pointer">{option.label}</Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-medium">How is your appetite?</Label>
            <RadioGroup
              value={formData.appetite}
              onValueChange={(value) => updateField('appetite', value)}
              className="space-y-3"
            >
              {[
                { value: 'poor', label: 'Poor' },
                { value: 'strong', label: 'Strong' },
                { value: 'variable', label: 'Variable' }
              ].map((option, index) => (
                <div key={option.value} className="animate-slide-in-right" style={{animationDelay: `${(index + 6) * 100}ms`}}>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border-2 border-transparent hover:border-ayurveda-sage/30 hover:bg-ayurveda-lightSage/20 transition-all duration-300">
                    <RadioGroupItem value={option.value} id={`appetite-${option.value}`} className="border-ayurveda-sage" />
                    <Label htmlFor={`appetite-${option.value}`} className="text-lg cursor-pointer">{option.label}</Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      )
    }
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto animate-scale-in bg-white/95 shadow-xl border-2 border-ayurveda-sage/20">
      <CardHeader className="text-center bg-gradient-to-r from-ayurveda-terracotta/10 to-ayurveda-ochre/10">
        <CardTitle className="text-3xl font-display text-ayurveda-terracotta animate-gentle-pulse">
          Health Assessment Questionnaire
        </CardTitle>
        <p className="text-ayurveda-brown/80 text-lg">
          Help us understand your health to provide personalized Ayurvedic guidance
        </p>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index <= currentStep 
                    ? 'bg-ayurveda-terracotta animate-pulse' 
                    : 'bg-ayurveda-sage/30'
                }`}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="min-h-[400px]">
            <h3 className="text-2xl font-semibold text-ayurveda-terracotta border-b-2 border-ayurveda-sage/30 pb-3 mb-6 animate-slide-in-right">
              {steps[currentStep].title}
            </h3>
            {steps[currentStep].content}
          </div>

          <div className="flex justify-between pt-6 border-t-2 border-ayurveda-sage/20">
            {currentStep > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="border-ayurveda-sage text-ayurveda-sage hover:bg-ayurveda-sage hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Previous
              </Button>
            )}
            
            <div className="ml-auto">
              {currentStep < steps.length - 1 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-ayurveda-terracotta hover:bg-ayurveda-terracotta/80 text-white transition-all duration-300 transform hover:scale-105"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-ayurveda-terracotta to-ayurveda-ochre hover:from-ayurveda-terracotta/80 hover:to-ayurveda-ochre/80 text-white font-display text-lg px-8 py-3 transition-all duration-300 transform hover:scale-105 animate-gentle-pulse"
                >
                  Get Your Ayurvedic Guidance ✨
                </Button>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PatientQuestionnaire;
