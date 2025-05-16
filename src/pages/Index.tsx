
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ConsultationForm from '@/components/ConsultationForm';
import ConsultationResponse from '@/components/ConsultationResponse';
import Header from '@/components/Header';
import DoshaInfo from '@/components/DoshaInfo';
import AyurvedicQuote from '@/components/AyurvedicQuote';

// Mock Ayurvedic responses for different concerns
const getMockResponse = (symptoms: string, concerns: string[], doshas: string[]) => {
  let diagnosis = "Based on your symptoms, there appears to be an imbalance in your ";
  let doshaImbalances: ("Vata" | "Pitta" | "Kapha")[] = [];
  
  // Determine dosha imbalances based on symptoms and concerns
  if (doshas.length) {
    doshaImbalances = doshas as ("Vata" | "Pitta" | "Kapha")[];
  } else {
    if (symptoms.toLowerCase().includes("stress") || 
        symptoms.toLowerCase().includes("anxiety") ||
        symptoms.toLowerCase().includes("pain") ||
        concerns.includes("Sleep Issues") || 
        concerns.includes("Joint Pain")) {
      doshaImbalances.push("Vata");
    }
    
    if (symptoms.toLowerCase().includes("heat") || 
        symptoms.toLowerCase().includes("irritation") || 
        symptoms.toLowerCase().includes("acid") || 
        concerns.includes("Skin Issues") || 
        concerns.includes("Digestive Problems")) {
      doshaImbalances.push("Pitta");
    }
    
    if (symptoms.toLowerCase().includes("congest") || 
        symptoms.toLowerCase().includes("weight") || 
        symptoms.toLowerCase().includes("lethargy") || 
        concerns.includes("Weight Management") || 
        concerns.includes("Low Energy")) {
      doshaImbalances.push("Kapha");
    }
    
    // If no specific doshas were identified, default to Vata
    if (doshaImbalances.length === 0) {
      doshaImbalances.push("Vata");
    }
  }
  
  // Build the diagnosis
  if (doshaImbalances.length === 1) {
    diagnosis += `${doshaImbalances[0]} dosha. `;
    
    if (doshaImbalances[0] === "Vata") {
      diagnosis += "The symptoms you've described point to excess movement and irregularity in your system, classic signs of Vata imbalance. In Ayurveda, we call this 'Vata prakopa' - a state where the air and space elements have become excessive. ";
    } else if (doshaImbalances[0] === "Pitta") {
      diagnosis += "Your symptoms suggest an excess of heat and intensity in your system, characteristic of Pitta imbalance. In Sanskrit, we refer to this as 'Pitta prakopa' - when fire and water elements become aggravated. ";
    } else {
      diagnosis += "I notice signs of congestion and heaviness in your system, indicating Kapha imbalance. This condition, known as 'Kapha prakopa' in Ayurveda, occurs when earth and water elements accumulate excessively. ";
    }
  } else {
    diagnosis += `${doshaImbalances.join("-")} doshas. This dual imbalance creates a complex pattern that requires a balanced approach. `;
  }
  
  diagnosis += "Your current state reflects an imbalance in your prakruti (natural constitution) that can be harmonized through appropriate diet, herbs, and lifestyle practices. The root cause likely stems from a combination of dietary habits, emotional patterns, and daily routines that have disrupted your natural balance.";
  
  // Generate remedies, diet, and lifestyle recommendations based on dosha imbalances
  const remedies = [];
  const diet = [];
  const lifestyle = [];
  
  if (doshaImbalances.includes("Vata")) {
    remedies.push(
      "Prepare warm sesame oil (Tila Taila) for daily self-massage (Abhyanga), focusing on the lower back, joints, and feet.",
      "Brew a calming tea with equal parts cumin, coriander, and fennel seeds to aid digestion and calm the nervous system.",
      "Take 1/4 teaspoon of Ashwagandha powder mixed with warm milk and honey before bed to promote sound sleep and reduce anxiety."
    );
    
    diet.push(
      "Favor warm, cooked, and slightly oily foods with sweet, sour, and salty tastes.",
      "Include grounding foods like root vegetables, rice, and ghee in your daily meals.",
      "Avoid cold, raw, and dry foods, as well as excessive consumption of bitter and astringent tastes."
    );
    
    lifestyle.push(
      "Maintain a consistent daily routine (Dinacharya) with regular meal and sleep times.",
      "Practice gentle yoga focusing on grounding poses and deep, rhythmic breathing.",
      "Keep warm and protected from cold, dry, and windy weather."
    );
  }
  
  if (doshaImbalances.includes("Pitta")) {
    remedies.push(
      "Apply cooling coconut oil (Narikela Taila) to the scalp and soles of feet before sleep.",
      "Prepare a cooling drink of fresh aloe vera juice with a pinch of cumin powder and a touch of maple syrup.",
      "Use Amalaki (Indian gooseberry) powder, 1/2 teaspoon twice daily with water, to balance internal heat."
    );
    
    diet.push(
      "Emphasize cooling, sweet, bitter, and astringent foods like fresh vegetables and fruits.",
      "Include cooling spices like coriander, fennel, and mint in your meals.",
      "Reduce hot, spicy, fermented, and salty foods, as well as alcohol and caffeine."
    );
    
    lifestyle.push(
      "Avoid excessive heat and direct sunlight, especially during midday.",
      "Practice cooling breath work (Sheetali pranayama) and moderate exercise during cooler times of day.",
      "Cultivate patience, forgiveness, and calm to balance the fiery Pitta emotions."
    );
  }
  
  if (doshaImbalances.includes("Kapha")) {
    remedies.push(
      "Prepare a stimulating tea with ginger, black pepper, and cinnamon to kindle digestive fire (Agni).",
      "Practice dry brushing (Garshana) before bathing to stimulate lymphatic flow and reduce stagnation.",
      "Take 1/2 teaspoon of Trikatu (a mixture of ginger, black pepper, and long pepper) with honey before meals to boost metabolism."
    );
    
    diet.push(
      "Focus on light, warm, and dry foods with pungent, bitter, and astringent tastes.",
      "Include plenty of leafy greens, spices, and legumes in your diet.",
      "Minimize sweet, sour, and salty tastes, as well as dairy, oils, and cold foods."
    );
    
    lifestyle.push(
      "Engage in vigorous exercise daily, preferably in the morning hours.",
      "Avoid daytime sleep and rise early (before 6 am) to prevent lethargy.",
      "Seek variety, stimulation, and new experiences to counter Kapha's tendency toward stagnation."
    );
  }
  
  return {
    diagnosis,
    remedies,
    diet,
    lifestyle,
    doshaImbalances
  };
};

const Index = () => {
  const [consultationResponse, setConsultationResponse] = useState<any>(null);
  const [isConsulting, setIsConsulting] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  
  const handleConsultation = (symptoms: string, concerns: string[], doshas: string[]) => {
    setIsConsulting(true);
    setShowInfo(false);
    
    // Simulate an API call with a slight delay
    setTimeout(() => {
      const response = getMockResponse(symptoms, concerns, doshas);
      setConsultationResponse(response);
      setIsConsulting(false);
    }, 1500);
  };
  
  const handleReset = () => {
    setConsultationResponse(null);
    setShowInfo(true);
  };
  
  return (
    <div className="min-h-screen bg-ayurveda-cream bg-[url('/src/assets/ayurveda-pattern.svg')] bg-repeat">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className={`space-y-6 ${consultationResponse && 'md:border-r md:pr-6 border-ayurveda-lightSage'}`}>
            <div className="ayurveda-card">
              {!consultationResponse ? (
                <>
                  <h2 className="text-2xl font-display text-ayurveda-terracotta mb-4">
                    Share Your Wellness Concerns
                  </h2>
                  <ConsultationForm onSubmit={handleConsultation} />
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-display text-ayurveda-terracotta">
                      Your Consultation
                    </h2>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-ayurveda-sage text-ayurveda-sage"
                      onClick={handleReset}
                    >
                      New Consultation
                    </Button>
                  </div>
                  <ConsultationResponse response={consultationResponse} />
                </>
              )}
            </div>
            
            {isConsulting && (
              <div className="ayurveda-card text-center animate-gentle-pulse">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 border-4 border-t-ayurveda-terracotta border-ayurveda-ochre/30 rounded-full animate-spin mb-4"></div>
                  <p className="text-ayurveda-brown font-display text-lg">
                    Consulting the ancient wisdom...
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <div className={`space-y-6 ${showInfo ? 'block' : 'hidden md:block'}`}>
            <DoshaInfo />
            
            <div className="ayurveda-card">
              <h3 className="text-xl font-display text-ayurveda-terracotta mb-3">
                About RAG Vaidya
              </h3>
              <p className="text-sm text-ayurveda-brown/80 mb-3">
                RAG Vaidya brings the timeless wisdom of Ayurveda, the ancient Indian science of life, to address your modern wellness needs. Like a traditional <span className="sanskrit">vaidya</span> (Ayurvedic physician), this assistant draws upon thousands of years of holistic healing knowledge.
              </p>
              <p className="text-sm text-ayurveda-brown/80">
                Share your current symptoms and concerns to receive personalized Ayurvedic guidance, including herb recommendations, dietary advice, and lifestyle practices to restore your natural balance.
              </p>
            </div>
            
            <AyurvedicQuote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
