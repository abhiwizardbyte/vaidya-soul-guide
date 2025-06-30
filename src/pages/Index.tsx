
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ConsultationResponse from '@/components/ConsultationResponse';
import PatientQuestionnaire from '@/components/PatientQuestionnaire';
import Header from '@/components/Header';
import DoshaInfo from '@/components/DoshaInfo';
import AyurvedicQuote from '@/components/AyurvedicQuote';
import FallingLeaves from '@/components/FallingLeaves';
import { generatePersonalizedResponse } from '@/utils/consultationService';

const Index = () => {
  const [consultationResponse, setConsultationResponse] = useState<any>(null);
  const [isConsulting, setIsConsulting] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  
  const handleQuestionnaireSubmit = async (questionnaireData: any) => {
    setIsConsulting(true);
    setShowInfo(false);
    
    // Generate personalized response with a realistic delay
    setTimeout(() => {
      const response = generatePersonalizedResponse(questionnaireData);
      setConsultationResponse(response);
      setIsConsulting(false);
      setShowQuestionnaire(false);
    }, 3000);
  };

  const handleStartConsultation = () => {
    setShowQuestionnaire(true);
    setShowInfo(false);
  };
  
  const handleReset = () => {
    setConsultationResponse(null);
    setShowQuestionnaire(false);
    setShowInfo(true);
  };
  
  return (
    <div className="min-h-screen bg-ayurveda-cream bg-[url('/src/assets/ayurveda-pattern.svg')] bg-repeat animate-fade-in relative overflow-hidden">
      <FallingLeaves />
      
      <div className="max-w-7xl mx-auto px-4 pb-16 relative z-10">
        <div className="animate-slide-in-right">
          <Header />
        </div>
        
        {/* Optimized layout for landscape viewing */}
        <div className={`mt-8 ${consultationResponse ? 'grid grid-cols-1 xl:grid-cols-2 gap-8' : 'grid grid-cols-1 lg:grid-cols-3 gap-8'}`}>
          {/* Main content area */}
          <div className={`${consultationResponse ? 'xl:col-span-1' : 'lg:col-span-2'} space-y-6`}>
            <div className="ayurveda-card animate-scale-in">
              {!consultationResponse && !showQuestionnaire ? (
                <div className="text-center">
                  <h2 className="text-3xl font-display text-ayurveda-terracotta mb-4 animate-gentle-pulse">
                    Welcome to RAG Vaidya
                  </h2>
                  <p className="text-ayurveda-brown/80 mb-6 text-lg">
                    Your personal Ayurvedic wellness guide
                  </p>
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-ayurveda-terracotta to-ayurveda-ochre flex items-center justify-center animate-gentle-pulse">
                      <span className="text-3xl">🕉️</span>
                    </div>
                  </div>
                  <Button 
                    onClick={handleStartConsultation}
                    size="lg" 
                    className="w-full bg-ayurveda-terracotta hover:bg-ayurveda-terracotta/80 text-white font-display text-lg transform hover:scale-105 transition-all duration-300 animate-gentle-fade"
                  >
                    Start Your Ayurvedic Assessment
                  </Button>
                </div>
              ) : showQuestionnaire ? (
                <div className="animate-fade-in">
                  <PatientQuestionnaire onSubmit={handleQuestionnaireSubmit} />
                </div>
              ) : (
                <div className="animate-slide-in-right">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-display text-ayurveda-terracotta">
                      Your Personalized Consultation
                    </h2>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-ayurveda-sage text-ayurveda-sage hover:bg-ayurveda-sage hover:text-white transition-all duration-300"
                      onClick={handleReset}
                    >
                      New Assessment
                    </Button>
                  </div>
                  <ConsultationResponse response={consultationResponse} />
                </div>
              )}
            </div>
            
            {isConsulting && (
              <div className="ayurveda-card text-center animate-scale-in">
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 border-4 border-t-ayurveda-terracotta border-ayurveda-ochre/30 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl animate-pulse">🌿</span>
                    </div>
                  </div>
                  <h3 className="text-ayurveda-brown font-display text-xl mb-2 animate-gentle-pulse">
                    Analyzing Your Health Profile
                  </h3>
                  <p className="text-sm text-ayurveda-brown/70 animate-gentle-fade">
                    Our Ayurvedic AI is preparing personalized guidance for your wellness journey
                  </p>
                  <div className="mt-4 flex space-x-1">
                    <div className="w-2 h-2 bg-ayurveda-terracotta rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-ayurveda-ochre rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-ayurveda-sage rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Side content area */}
          <div className={`${consultationResponse ? 'xl:col-span-1' : 'lg:col-span-1'} space-y-6 ${showInfo ? 'block' : 'hidden lg:block'}`}>
            <div className="animate-slide-in-right" style={{animationDelay: '200ms'}}>
              <DoshaInfo />
            </div>
            
            <div className="ayurveda-card animate-scale-in" style={{animationDelay: '400ms'}}>
              <h3 className="text-xl font-display text-ayurveda-terracotta mb-3 flex items-center">
                <span className="mr-2">📿</span>
                About RAG Vaidya
              </h3>
              <p className="text-sm text-ayurveda-brown/80 mb-3">
                RAG Vaidya brings the timeless wisdom of Ayurveda, the ancient Indian science of life, to address your modern wellness needs. Our comprehensive health assessment provides personalized guidance based on your unique constitution and current health status.
              </p>
              <p className="text-sm text-ayurveda-brown/80">
                Complete our detailed questionnaire to receive customized Ayurvedic recommendations including herbal remedies, dietary guidance, and lifestyle practices tailored specifically for you.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '600ms'}}>
              <AyurvedicQuote />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
