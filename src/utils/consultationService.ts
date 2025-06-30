
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

// Enhanced remedy databases for more variety
const vataRemedies = [
  "Perform daily Abhyanga (warm oil massage) with sesame oil to calm the nervous system and improve circulation.",
  "Practice Nasya (nasal oil therapy) with warm sesame oil - 2 drops in each nostril morning and evening.",
  "Take Ashwagandha churna (1/4 tsp) with warm milk and a pinch of nutmeg before bed for deep sleep.",
  "Prepare Vata-pacifying tea: equal parts cumin, coriander, and fennel seeds - steep for 10 minutes.",
  "Apply warm sesame oil to the soles of feet and crown of head before sleep for grounding.",
  "Take Dashmool decoction (10ml) twice daily to strengthen the nervous system.",
  "Practice Shiropichu - pour warm medicated oil on the forehead for 20 minutes to calm anxiety.",
  "Use Mahanarayan oil for joint massage to reduce stiffness and improve mobility.",
  "Take Saraswatarishta (15ml) with equal water after meals for mental clarity.",
  "Practice oil pulling with sesame oil for 5-10 minutes every morning for oral and systemic health."
];

const pittaRemedies = [
  "Apply cooling coconut oil for body massage, especially during hot weather or when feeling heated.",
  "Drink fresh aloe vera juice (2 tbsp) with water twice daily to cool internal heat and soothe inflammation.",
  "Take Amalaki rasayana (1 tsp) with honey (avoid if diabetic) to balance acidity and boost immunity.",
  "Practice Sheetali and Sheetkari pranayama for 10 minutes daily to cool the system.",
  "Apply sandalwood paste on forehead and temples during headaches or irritability.",
  "Take Saraswatarishta diluted with water after meals for mental clarity and cooling.",
  "Use rose water as a facial toner and drink rose petal tea for emotional balance.",
  "Take Chandanasava (15ml) with water before meals to cool digestive fire.",
  "Apply ghee or coconut oil to nasal passages to prevent nosebleeds and dryness.",
  "Practice meditation under moonlight or near water bodies for natural cooling."
];

const kaphaRemedies = [
  "Perform dry brushing (Garshana) before shower to stimulate circulation and reduce lymphatic congestion.",
  "Drink warm ginger tea with honey and black pepper to kindle digestive fire.",
  "Take Trikatu churna (pinch) with honey before meals to boost metabolism and reduce mucus.",
  "Practice Bhastrika pranayama for 5-10 minutes to increase internal heat and energy.",
  "Use warming oils like mustard or eucalyptus for body massage to stimulate circulation.",
  "Take Punarnavadi decoction to reduce water retention and improve kidney function.",
  "Chew fresh ginger with rock salt 30 minutes before meals to stimulate appetite.",
  "Practice Surya Namaskara (Sun Salutations) 12 rounds daily to increase circulation.",
  "Take Chitrakadi vati (1 tablet) before meals to improve digestion and reduce heaviness.",
  "Use steam inhalation with eucalyptus oil to clear respiratory congestion."
];

const dietRecommendations = {
  vata: [
    "Favor warm, cooked, and slightly oily foods with sweet, sour, and salty tastes.",
    "Include grounding foods: rice, oats, sweet potatoes, dates, almonds, and warm milk.",
    "Cook with warming spices: ginger, cinnamon, cardamom, cloves, and asafoetida.",
    "Eat regular meals at consistent times - never skip meals as it aggravates Vata.",
    "Include healthy fats: ghee, sesame oil, avocados, and nuts in moderate amounts.",
    "Drink warm herbal teas: chamomile, fennel, ginger, and tulsi throughout the day.",
    "Avoid raw, cold, dry foods, excessive bitter and astringent tastes.",
    "Have warm, spiced milk with turmeric and nutmeg before bed for better sleep.",
    "Include cooked vegetables rather than raw salads, especially in winter.",
    "Eat in a calm environment, chew thoroughly, and avoid eating when stressed."
  ],
  pitta: [
    "Choose cooling foods with sweet, bitter, and astringent tastes like cucumber, melons, and leafy greens.",
    "Include coconut water, mint tea, and cilantro water to cool internal heat naturally.",
    "Cook with cooling spices: coriander, fennel, cardamom, and fresh mint leaves.",
    "Avoid spicy, fried, fermented foods, alcohol, and excessive salt that increase heat.",
    "Include dairy products: milk, ghee, and fresh paneer to cool and nourish.",
    "Eat fresh fruits: grapes, pomegranates, pears, and sweet apples between meals.",
    "Have meals at regular times, avoid skipping meals, and don't overeat.",
    "Include cooling grains: basmati rice, barley, and wheat in your daily diet.",
    "Drink plenty of room temperature water infused with mint or rose petals.",
    "Avoid eating late at night and having heavy meals close to bedtime."
  ],
  kapha: [
    "Emphasize light, warm, dry foods with pungent, bitter, and astringent tastes.",
    "Include plenty of vegetables, legumes, and warming spices like ginger and black pepper.",
    "Cook with metabolism-boosting spices: turmeric, coriander, mustard seeds, and fenugreek.",
    "Minimize dairy, sweet, oily, and cold foods that increase congestion and heaviness.",
    "Include bitter vegetables: bitter gourd, fenugreek leaves, and neem leaves occasionally.",
    "Drink warm water throughout the day, especially with lemon and honey in the morning.",
    "Eat your largest meal at midday when digestive fire is strongest.",
    "Include light grains: millet, quinoa, and barley instead of heavy grains.",
    "Have herbal teas: ginger, green tea, and tulsi to stimulate metabolism.",
    "Practice intermittent fasting or eat only when truly hungry to reset digestion."
  ]
};

const lifestyleRecommendations = {
  vata: [
    "Maintain a regular daily routine with consistent meal and sleep times.",
    "Practice gentle yoga, walking, and deep breathing exercises - avoid overexertion.",
    "Keep warm and avoid cold weather, excessive travel, or overstimulation.",
    "Create a calming bedtime routine: warm bath, gentle massage, and reading.",
    "Practice grounding activities: gardening, pottery, or cooking.",
    "Limit screen time, especially before bed, to calm the nervous system.",
    "Engage in creative activities like painting, music, or writing for mental peace.",
    "Spend time in nature, especially near trees and in quiet environments.",
    "Practice meditation for 10-20 minutes daily to center the mind.",
    "Wear soft, natural fabrics and surround yourself with calming colors."
  ],
  pitta: [
    "Avoid excessive heat, direct sunlight during peak hours, and competitive activities.",
    "Practice moderate exercise during cooler parts of the day - early morning or evening.",
    "Cultivate patience, forgiveness, and cooling practices like swimming or moonlight walks.",
    "Create a cool, calm sleeping environment with good ventilation.",
    "Practice meditation and avoid heated arguments or stressful situations.",
    "Engage in water sports, swimming, or spending time near water bodies.",
    "Listen to soothing music and surround yourself with cool colors like blue and green.",
    "Take regular breaks from work to prevent burnout and frustration.",
    "Practice selfless service (seva) to cultivate compassion and reduce ego.",
    "Avoid perfectionism and learn to accept imperfections gracefully."
  ],
  kapha: [
    "Engage in vigorous daily exercise, preferably in the morning to boost energy.",
    "Wake up early (before 6 AM) and avoid daytime sleeping which increases lethargy.",
    "Seek variety, new experiences, and stimulating activities to counter stagnation.",
    "Challenge yourself with new skills, travel, or changing routines regularly.",
    "Practice energizing pranayama like Bhastrika and Kapalbhati breathing.",
    "Surround yourself with bright, warm colors and energizing music.",
    "Engage in social activities and maintain active friendships.",
    "Take on leadership roles and responsibilities to stay motivated.",
    "Practice dry saunas or steam baths to stimulate circulation.",
    "Keep your living space clean, organized, and well-lit to maintain clarity."
  ]
};

export const generatePersonalizedResponse = (data: QuestionnaireData) => {
  // Enhanced dosha scoring system
  let vataScore = 0;
  let pittaScore = 0;
  let kaphaScore = 0;

  // Body frame scoring with more nuance
  if (data.bodyFrame === 'slim') vataScore += 3;
  else if (data.bodyFrame === 'medium') pittaScore += 3;
  else if (data.bodyFrame === 'heavy') kaphaScore += 3;

  // Digestion scoring
  if (data.digestion === 'irregular') vataScore += 2;
  else if (data.digestion === 'strong') pittaScore += 2;
  else if (data.digestion === 'slow') kaphaScore += 2;

  // Temperament scoring
  if (data.temperament === 'anxious') vataScore += 2;
  else if (data.temperament === 'irritable') pittaScore += 2;
  else if (data.temperament === 'calm') kaphaScore += 2;

  // Sleep pattern analysis
  if (data.sleep === 'no' || data.sleep === 'frequent-wake') vataScore += 2;
  else if (data.sleep === 'yes') kaphaScore += 1;

  // Bowel movement analysis
  if (data.bowelMovements === 'constipated') vataScore += 2;
  else if (data.bowelMovements === 'loose') pittaScore += 2;
  else if (data.bowelMovements === 'regular') kaphaScore += 1;

  // Appetite analysis
  if (data.appetite === 'variable') vataScore += 2;
  else if (data.appetite === 'strong') pittaScore += 2;
  else if (data.appetite === 'poor') kaphaScore += 2;

  // Determine dosha constitution
  const scores = [
    { dosha: 'Vata', score: vataScore },
    { dosha: 'Pitta', score: pittaScore },
    { dosha: 'Kapha', score: kaphaScore }
  ].sort((a, b) => b.score - a.score);

  const primaryDosha = scores[0].dosha.toLowerCase();
  const secondaryDosha = scores[1].score >= scores[0].score - 1 ? scores[1].dosha : '';

  // Generate varied and comprehensive diagnosis
  const diagnoses = generateVariedDiagnosis(primaryDosha, data, secondaryDosha);
  const selectedDiagnosis = diagnoses[Math.floor(Math.random() * diagnoses.length)];

  // Select random remedies, diet, and lifestyle recommendations
  const remedyDB = primaryDosha === 'vata' ? vataRemedies : primaryDosha === 'pitta' ? pittaRemedies : kaphaRemedies;
  const selectedRemedies = getRandomItems(remedyDB, 4);
  
  const dietDB = dietRecommendations[primaryDosha as keyof typeof dietRecommendations];
  const selectedDiet = getRandomItems(dietDB, 5);
  
  const lifestyleDB = lifestyleRecommendations[primaryDosha as keyof typeof lifestyleRecommendations];
  const selectedLifestyle = getRandomItems(lifestyleDB, 4);

  const doshaImbalances = secondaryDosha ? [scores[0].dosha, secondaryDosha] : [scores[0].dosha];

  return {
    diagnosis: selectedDiagnosis,
    remedies: selectedRemedies,
    diet: selectedDiet,
    lifestyle: selectedLifestyle,
    doshaImbalances,
    primaryDosha: scores[0].dosha,
    questionnaire: data
  };
};

// Helper function to get random items from array
const getRandomItems = (array: string[], count: number): string[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Generate varied diagnosis based on multiple factors
const generateVariedDiagnosis = (primaryDosha: string, data: QuestionnaireData, secondaryDosha: string) => {
  const age = parseInt(data.age);
  const baseTexts = [
    `Based on your comprehensive health assessment, you exhibit a predominantly ${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)} constitution${secondaryDosha ? ` with secondary ${secondaryDosha} characteristics` : ''}. Your concern about "${data.primaryComplaint}" is characteristic of ${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)} imbalance patterns.`,
    
    `Your detailed responses indicate a strong ${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)} prakriti (constitution)${secondaryDosha ? ` influenced by ${secondaryDosha} qualities` : ''}. The manifestation of "${data.primaryComplaint}" aligns perfectly with classical ${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)} vitiation signs described in ancient Ayurvedic texts.`,
    
    `According to Ayurvedic principles, your body-mind type predominantly reflects ${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)} dosha${secondaryDosha ? ` with notable ${secondaryDosha} influence` : ''}. Your primary health concern "${data.primaryComplaint}" is a typical expression of ${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)} aggravation.`,
    
    `From an Ayurvedic perspective, you demonstrate classic ${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)} characteristics${secondaryDosha ? ` balanced with ${secondaryDosha} elements` : ''}. The symptoms you're experiencing, particularly "${data.primaryComplaint}", are consistent with ${primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1)} dosha elevation.`
  ];

  // Add age-specific insights
  const ageInsights = [];
  if (age < 16) {
    ageInsights.push("During this Kapha-dominant childhood phase, special attention to building strong immunity and healthy habits is crucial.");
  } else if (age >= 16 && age <= 45) {
    ageInsights.push(`In this Pitta phase of life (age ${age}), maintaining emotional balance and preventing excessive heat accumulation is particularly important.`);
  } else if (age >= 46 && age <= 65) {
    ageInsights.push(`During this transitional period (age ${age}), where Pitta gradually gives way to Vata, extra care for nervous system health becomes essential.`);
  } else {
    ageInsights.push(`In this Vata-dominant phase of life (age ${age}), focusing on grounding practices and nourishing therapies is most beneficial.`);
  }

  // Combine base diagnosis with age insights
  return baseTexts.map(base => `${base} ${ageInsights[0]} This holistic approach will help restore your natural balance and promote lasting wellness.`);
};
