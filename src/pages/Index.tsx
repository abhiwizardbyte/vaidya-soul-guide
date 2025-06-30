
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ConsultationForm from '@/components/ConsultationForm';
import ConsultationResponse from '@/components/ConsultationResponse';
import PatientQuestionnaire from '@/components/PatientQuestionnaire';
import Header from '@/components/Header';
import DoshaInfo from '@/components/DoshaInfo';
import AyurvedicQuote from '@/components/AyurvedicQuote';
import { generatePersonalizedResponse } from '@/utils/consultationService';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { User } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [consultationResponse, setConsultationResponse] = useState<any>(null);
  const [isConsulting, setIsConsulting] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
      });
    }
  };

  const handleQuestionnaireSubmit = async (questionnaireData: any) => {
    setIsConsulting(true);
    setShowInfo(false);
    
    // Generate personalized response
    setTimeout(() => {
      const response = generatePersonalizedResponse(questionnaireData);
      setConsultationResponse(response);
      setIsConsulting(false);
      setShowQuestionnaire(false);
      
      // Save consultation to database if user is logged in
      if (user) {
        saveConsultation(response, questionnaireData);
      }
    }, 2000);
  };

  const handleConsultation = (symptoms: string, concerns: string[], doshas: string[]) => {
    // Show questionnaire for more detailed assessment
    setShowQuestionnaire(true);
    setShowInfo(false);
  };

  const saveConsultation = async (response: any, questionnaireData: any) => {
    try {
      const { error } = await supabase
        .from('consultations')
        .insert({
          user_id: user?.id,
          symptoms: questionnaireData.primaryComplaint,
          concerns: [questionnaireData.primaryComplaint],
          selected_doshas: response.doshaImbalances,
          diagnosis: response.diagnosis,
          remedies: response.remedies,
          diet: response.diet,
          lifestyle: response.lifestyle,
          dosha_imbalances: response.doshaImbalances,
        });

      if (error) {
        console.error('Error saving consultation:', error);
      }
    } catch (error) {
      console.error('Error saving consultation:', error);
    }
  };
  
  const handleReset = () => {
    setConsultationResponse(null);
    setShowQuestionnaire(false);
    setShowInfo(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-ayurveda-cream bg-[url('/src/assets/ayurveda-pattern.svg')] bg-repeat flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-ayurveda-terracotta border-ayurveda-ochre/30 rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-ayurveda-brown font-display text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-ayurveda-cream bg-[url('/src/assets/ayurveda-pattern.svg')] bg-repeat">
        <div className="max-w-4xl mx-auto px-4 pb-16">
          <Header />
          
          <div className="text-center py-8">
            <div className="ayurveda-card max-w-md mx-auto">
              <h2 className="text-2xl font-display text-ayurveda-terracotta mb-4">
                Welcome to RAG Vaidya
              </h2>
              <p className="text-ayurveda-brown/80 mb-6">
                Sign in to access personalized Ayurvedic consultations and track your wellness journey.
              </p>
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-ayurveda-terracotta hover:bg-ayurveda-terracotta/80 text-white"
              >
                Sign In / Sign Up
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <DoshaInfo />
            <AyurvedicQuote />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-ayurveda-cream bg-[url('/src/assets/ayurveda-pattern.svg')] bg-repeat">
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <header className="flex justify-between items-center py-4">
          <div className="flex-1">
            <Header />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-ayurveda-brown">Welcome back!</span>
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="border-ayurveda-sage text-ayurveda-sage hover:bg-ayurveda-sage hover:text-white"
            >
              Sign Out
            </Button>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className={`space-y-6 ${consultationResponse && 'md:border-r md:pr-6 border-ayurveda-lightSage'}`}>
            <div className="ayurveda-card">
              {!consultationResponse && !showQuestionnaire ? (
                <>
                  <h2 className="text-2xl font-display text-ayurveda-terracotta mb-4">
                    Share Your Wellness Concerns
                  </h2>
                  <ConsultationForm onSubmit={handleConsultation} />
                </>
              ) : showQuestionnaire ? (
                <>
                  <PatientQuestionnaire onSubmit={handleQuestionnaireSubmit} />
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-display text-ayurveda-terracotta">
                      Your Personalized Consultation
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
                    Analyzing your health profile...
                  </p>
                  <p className="text-sm text-ayurveda-brown/70 mt-2">
                    Generating personalized Ayurvedic guidance
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
                RAG Vaidya brings the timeless wisdom of Ayurveda, the ancient Indian science of life, to address your modern wellness needs. Our comprehensive health assessment provides personalized guidance based on your unique constitution and current health status.
              </p>
              <p className="text-sm text-ayurveda-brown/80">
                Complete our detailed questionnaire to receive customized Ayurvedic recommendations including herbal remedies, dietary guidance, and lifestyle practices tailored specifically for you.
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
