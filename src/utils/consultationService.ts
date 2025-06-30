
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

// Expanded remedy databases with more comprehensive options
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
  "Practice oil pulling with sesame oil for 5-10 minutes every morning for oral and systemic health.",
  "Consume warm ghee (1 tsp) on empty stomach to lubricate internal channels.",
  "Practice Padabhyanga (foot massage) with mustard oil before sleep for grounding.",
  "Take Brahmi ghrita (1/2 tsp) twice daily for nervous system nourishment.",
  "Use Bala oil for massage to strengthen muscles and reduce fatigue.",
  "Practice Karna Purana (ear oiling) with warm sesame oil weekly.",
  "Take Chyawanprash (1 tbsp) in the morning for overall vitality and immunity.",
  "Perform gentle Marma point massage on temples and wrists for energy flow.",
  "Use Jatamansi powder (pinch) with honey for deep relaxation and mental peace.",
  "Practice Yoga Nidra for 20 minutes daily to restore nervous system balance.",
  "Take warm Kheer with cardamom and almonds as an evening snack for nourishment."
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
  "Practice meditation under moonlight or near water bodies for natural cooling.",
  "Consume Gulkand (rose petal preserve) 1 tsp twice daily for cooling and heart health.",
  "Apply Kumkumadi oil on face at night for skin cooling and radiance.",
  "Take Praval Pishti (125mg) with rose water for hyperacidity and heat.",
  "Use Brahmi oil for head massage to cool the mind and improve concentration.",
  "Practice Shirodhara with cool medicated oils for mental tranquility.",
  "Consume fresh mint and coriander chutney with meals for digestive cooling.",
  "Take Avipattikar churna (1/2 tsp) after meals for acid neutralization.",
  "Apply cool cucumber slices on eyes and forehead for instant relief.",
  "Practice moonlight meditation and avoid midday sun exposure.",
  "Take Mukta Pishti (65mg) with honey for cooling and calcium supplementation."
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
  "Use steam inhalation with eucalyptus oil to clear respiratory congestion.",
  "Practice Udgarshana (upward dry massage) with silk gloves to reduce subcutaneous fat.",
  "Take Medohar Guggulu (2 tablets) twice daily for weight management and cholesterol.",
  "Use Kalonji oil for nasal drops to clear sinus congestion and boost immunity.",
  "Practice Kapalabhati pranayama for 10 minutes to energize and clear channels.",
  "Take Vyoshadi churna with warm water for respiratory health and mucus reduction.",
  "Apply warm mustard oil poultice on chest for congestion relief.",
  "Practice vigorous Abhyanga with warming oils like sesame or mustard.",
  "Take Arogyavardhini vati for liver detox and metabolic enhancement.",
  "Use Jalneti (nasal irrigation) with warm saline water daily.",
  "Practice Agnisara kriya to stimulate digestive fire and reduce abdominal fat."
];

// Condition-specific remedy databases
const digestiveRemedies = [
  "Take Hingvastak churna (1/4 tsp) with warm water before meals for gas and bloating.",
  "Consume CCF tea (cumin, coriander, fennel) throughout the day for digestive balance.",
  "Practice Vajrasana for 5-10 minutes after meals to aid digestion.",
  "Take Pachak churna with buttermilk after heavy meals for digestive support.",
  "Use Aja Ekapad asana (one-legged balancing pose) to massage digestive organs.",
  "Consume ginger-lime water 30 minutes before meals to stimulate digestive fire.",
  "Take Shankh Bhasma (125mg) with honey for hyperacidity and gastric issues."
];

const stressRemedies = [
  "Practice Bhramari pranayama (humming bee breath) for 10 minutes daily for stress relief.",
  "Take Saraswatarishta with Brahmi for enhanced mental clarity and stress reduction.",
  "Use Jatamansi oil for head massage to calm the nervous system and induce sleep.",
  "Practice Trataka (candle gazing) for 10 minutes daily to improve concentration.",
  "Take Mandukaparni (Centella asiatica) powder with milk for nervous system support.",
  "Apply Brahmi paste on forehead for cooling and calming effects.",
  "Practice progressive muscle relaxation starting from toes to head."
];

const sleepRemedies = [
  "Take warm turmeric milk with a pinch of nutmeg 30 minutes before bed.",
  "Practice Chandra Bhedana (left nostril breathing) before sleep for cooling.",
  "Apply warm sesame oil to soles of feet and scalp before bedtime.",
  "Take Tagara (Indian valerian) powder with warm milk for natural sedation.",
  "Use lavender or sandalwood essential oil on pillow for aromatherapy.",
  "Practice Yoga Nidra or body scan meditation for 20 minutes before sleep."
];

// Enhanced diet recommendations with seasonal and constitutional variations
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
    "Eat in a calm environment, chew thoroughly, and avoid eating when stressed.",
    "Start meals with warm soup or broth to kindle digestive fire gently.",
    "Include sweet fruits like bananas, mangoes, and cooked apples in your diet.",
    "Use ghee liberally in cooking and as a condiment for its grounding properties.",
    "Consume warm, spiced buttermilk with meals to aid digestion.",
    "Include protein-rich foods like moong dal, chicken, and fish in appropriate quantities."
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
    "Avoid eating late at night and having heavy meals close to bedtime.",
    "Consume fresh vegetable juices like bottle gourd and cucumber for cooling.",
    "Include bitter vegetables like bitter gourd and leafy greens to pacify Pitta.",
    "Use coconut oil for cooking instead of heating oils like mustard or sesame.",
    "Eat during cooler parts of the day and avoid hot foods during summer.",
    "Include naturally sweet foods like dates and raisins for sustained energy."
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
    "Practice intermittent fasting or eat only when truly hungry to reset digestion.",
    "Include warming vegetables like radish, turnip, and cabbage in your diet.",
    "Use minimal oil and favor steaming, grilling, or dry roasting cooking methods.",
    "Consume warm spiced water with honey first thing in the morning.",
    "Include protein from legumes like horse gram, black gram, and kidney beans.",
    "Avoid heavy, sweet fruits; favor apples, pears, and pomegranates instead."
  ]
};

// Seasonal and age-specific diet modifications
const seasonalDietRecommendations = {
  summer: [
    "Increase cooling foods like cucumber, watermelon, and mint during hot weather.",
    "Avoid excessive heating spices and prefer mild, cooling preparations.",
    "Include plenty of fresh fruits and vegetables with high water content.",
    "Drink coconut water and fresh fruit juices to maintain hydration."
  ],
  winter: [
    "Increase warming foods and spices to maintain internal heat during cold weather.",
    "Include more ghee, nuts, and warming teas in your daily diet.",
    "Consume hot, cooked meals and avoid cold, raw foods during winter months.",
    "Add ginger, cinnamon, and black pepper to meals for internal warmth."
  ],
  monsoon: [
    "Focus on light, easily digestible foods during the humid monsoon season.",
    "Include digestive spices like ginger, turmeric, and asafoetida in cooking.",
    "Avoid heavy, oily foods and prefer steamed or boiled preparations.",
    "Drink warm herbal teas to boost immunity during damp weather."
  ]
};

// Enhanced lifestyle recommendations with more variety
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
    "Wear soft, natural fabrics and surround yourself with calming colors.",
    "Establish a morning routine with oil pulling and gentle stretching.",
    "Practice Pranayama with emphasis on extended exhalation for calming.",
    "Create a peaceful living space with soft lighting and soothing sounds.",
    "Engage in regular, gentle exercise like Tai Chi or slow yoga flows.",
    "Maintain social connections and avoid isolation during stressful periods."
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
    "Avoid perfectionism and learn to accept imperfections gracefully.",
    "Schedule regular massage with cooling oils like coconut or sunflower.",
    "Practice cooling Pranayama techniques like Sheetali and Sheetkari.",
    "Maintain work-life balance and avoid overcommitment or excessive competition.",
    "Spend time in natural cooling environments like forests or by lakes.",
    "Practice gratitude and contentment to reduce internal heat and frustration."
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
    "Keep your living space clean, organized, and well-lit to maintain clarity.",
    "Include dancing, aerobics, or high-intensity workouts in your routine.",
    "Practice Sun Salutations every morning to energize the system.",
    "Maintain an active social life and avoid excessive solitude.",
    "Challenge mental stagnation with puzzles, learning, and intellectual activities.",
    "Use aromatherapy with stimulating scents like eucalyptus and peppermint."
  ]
};

// Professional and work-related lifestyle recommendations
const professionalLifestyleRecommendations = {
  vata: [
    "Maintain consistent work hours and avoid irregular schedules that disturb routine.",
    "Take frequent short breaks to prevent mental fatigue and nervous exhaustion.",
    "Create a calm, organized workspace with minimal noise and distractions.",
    "Practice desk yoga and stretching exercises throughout the workday."
  ],
  pitta: [
    "Avoid overworking and maintain healthy boundaries between work and personal life.",
    "Take cooling breaks away from computers and electronic devices regularly.",
    "Practice stress management techniques during high-pressure situations.",
    "Avoid working in hot environments or during peak afternoon hours when possible."
  ],
  kapha: [
    "Incorporate physical movement and standing breaks throughout the workday.",
    "Take on challenging projects that stimulate mental engagement and growth.",
    "Maintain an active, dynamic work environment that prevents stagnation.",
    "Use natural light and fresh air in workspace to maintain alertness and energy."
  ]
};

export const generatePersonalizedResponse = (data: QuestionnaireData) => {
  // Enhanced dosha scoring system with more nuanced analysis
  let vataScore = 0;
  let pittaScore = 0;
  let kaphaScore = 0;

  // Body frame scoring
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

  // Get primary dosha remedies
  const primaryRemedyDB = primaryDosha === 'vata' ? vataRemedies : primaryDosha === 'pitta' ? pittaRemedies : kaphaRemedies;
  
  // Add condition-specific remedies based on primary complaint
  let conditionSpecificRemedies: string[] = [];
  const complaint = data.primaryComplaint.toLowerCase();
  
  if (complaint.includes('digest') || complaint.includes('stomach') || complaint.includes('gas') || complaint.includes('bloat')) {
    conditionSpecificRemedies = getRandomItems(digestiveRemedies, 2);
  } else if (complaint.includes('stress') || complaint.includes('anxiety') || complaint.includes('worry')) {
    conditionSpecificRemedies = getRandomItems(stressRemedies, 2);
  } else if (complaint.includes('sleep') || complaint.includes('insomnia') || complaint.includes('tired')) {
    conditionSpecificRemedies = getRandomItems(sleepRemedies, 2);
  }

  // Combine remedies for variety
  const allRemedies = [...primaryRemedyDB, ...conditionSpecificRemedies];
  const selectedRemedies = getRandomItems(allRemedies, 5);
  
  // Enhanced diet recommendations
  const primaryDietDB = dietRecommendations[primaryDosha as keyof typeof dietRecommendations];
  const seasonalDiet = getRandomItems(seasonalDietRecommendations.winter, 1); // Can be made dynamic based on actual season
  const selectedDiet = [...getRandomItems(primaryDietDB, 6), ...seasonalDiet];
  
  // Enhanced lifestyle recommendations
  const primaryLifestyleDB = lifestyleRecommendations[primaryDosha as keyof typeof lifestyleRecommendations];
  const professionalLifestyle = getRandomItems(professionalLifestyleRecommendations[primaryDosha as keyof typeof professionalLifestyleRecommendations], 1);
  const selectedLifestyle = [...getRandomItems(primaryLifestyleDB, 5), ...professionalLifestyle];

  // Generate varied diagnosis with multiple factors
  const diagnoses = generateComprehensiveDiagnosis(primaryDosha, data, secondaryDosha, scores);
  const selectedDiagnosis = diagnoses[Math.floor(Math.random() * diagnoses.length)];

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
  return shuffled.slice(0, Math.min(count, array.length));
};

// Generate comprehensive diagnosis with multiple variations
const generateComprehensiveDiagnosis = (primaryDosha: string, data: QuestionnaireData, secondaryDosha: string, scores: any[]) => {
  const age = parseInt(data.age);
  const doshaCapitalized = primaryDosha.charAt(0).toUpperCase() + primaryDosha.slice(1);
  const secondaryCapitalized = secondaryDosha ? secondaryDosha.charAt(0).toUpperCase() + secondaryDosha.slice(1) : '';
  
  const baseTexts = [
    `Your comprehensive Ayurvedic assessment reveals a predominant ${doshaCapitalized} constitution${secondaryDosha ? ` with significant ${secondaryCapitalized} influence` : ''}. The manifestation of "${data.primaryComplaint}" is a classic presentation of ${doshaCapitalized} imbalance, particularly common in your age group and lifestyle pattern.`,
    
    `According to traditional Ayurvedic diagnostic principles, you exhibit strong ${doshaCapitalized} characteristics${secondaryDosha ? ` balanced by ${secondaryCapitalized} qualities` : ''}. Your primary concern "${data.primaryComplaint}" aligns with textbook descriptions of ${doshaCapitalized} vitiation as described in classical texts like Charaka Samhita.`,
    
    `Based on detailed constitutional analysis, your prakriti (natural constitution) shows ${doshaCapitalized} dominance${secondaryDosha ? ` with notable ${secondaryCapitalized} secondary traits` : ''}. The symptoms you're experiencing, especially "${data.primaryComplaint}", represent a typical ${doshaCapitalized} aggravation pattern requiring specific therapeutic intervention.`,
    
    `Your Ayurvedic profile indicates a ${doshaCapitalized}-predominant constitution${secondaryDosha ? ` with ${secondaryCapitalized} sub-characteristics` : ''}. The health concern "${data.primaryComplaint}" reflects an imbalance in ${doshaCapitalized} dosha, which governs specific physiological and psychological functions in your body.`,
    
    `From the perspective of Tridosha theory, you demonstrate classic ${doshaCapitalized} constitution${secondaryDosha ? ` influenced by ${secondaryCapitalized} elements` : ''}. Your chief complaint "${data.primaryComplaint}" is characteristic of ${doshaCapitalized} elevation and requires targeted Ayurvedic management for optimal restoration of health.`
  ];

  // Age-specific insights with more variety
  const ageInsights = [];
  if (age < 16) {
    ageInsights.push(
      "During this Kapha-dominant childhood phase, building strong immunity and establishing healthy daily routines is paramount for lifelong wellness.",
      "In the formative Kapha years, focusing on proper nutrition and active lifestyle habits will create a strong foundation for future health.",
      "This Kapha period of growth requires special attention to preventing congestion and maintaining active circulation through appropriate lifestyle practices."
    );
  } else if (age >= 16 && age <= 45) {
    ageInsights.push(
      `In this dynamic Pitta phase of life (age ${age}), maintaining emotional equilibrium and managing stress-related heat accumulation is crucial for sustained health.`,
      `During these productive Pitta years (age ${age}), balancing professional demands with cooling practices becomes essential for preventing burnout and maintaining optimal health.`,
      `This Pitta-dominant life stage (age ${age}) requires careful attention to work-life balance and cooling practices to prevent excessive heat accumulation.`
    );
  } else if (age >= 46 && age <= 65) {
    ageInsights.push(
      `During this transitional Pitta-Vata period (age ${age}), extra care for nervous system health and gentle strengthening practices become increasingly important.`,
      `In this midlife transition phase (age ${age}), where Pitta begins yielding to Vata, maintaining stability and preventing anxiety-related disorders requires focused attention.`,
      `This significant life transition period (age ${age}) demands careful management of both Pitta and emerging Vata imbalances through targeted therapeutic approaches.`
    );
  } else {
    ageInsights.push(
      `In this Vata-dominant phase of life (age ${age}), emphasizing grounding practices and nourishing therapies is most beneficial for maintaining vitality and preventing age-related deterioration.`,
      `During these Vata years (age ${age}), focusing on stability, warmth, and gentle nourishment becomes the cornerstone of maintaining health and preventing common age-related imbalances.`,
      `This Vata-predominant life stage (age ${age}) requires special emphasis on routine, warmth, and gentle strengthening to maintain optimal health and cognitive function.`
    );
  }

  // Gender-specific insights
  const genderInsights = [];
  if (data.gender === 'female') {
    genderInsights.push(
      "As a woman, special consideration of monthly cycles and hormonal fluctuations in relation to dosha balance will enhance the effectiveness of treatments.",
      "For women, integrating lunar cycles and reproductive health considerations into Ayurvedic treatment protocols provides more comprehensive healing.",
      "Female physiology requires particular attention to Ojas (vital essence) conservation and reproductive health in any Ayurvedic treatment approach."
    );
  } else {
    genderInsights.push(
      "For men, focusing on maintaining Tejas (metabolic fire) and Ojas (vital strength) through appropriate lifestyle and dietary practices is particularly important.",
      "Male physiology benefits from emphasis on building and maintaining physical strength while balancing mental and emotional well-being.",
      "Men's health in Ayurveda focuses on maintaining robust digestion and preventing stress-related imbalances through targeted lifestyle practices."
    );
  }

  // Seasonal considerations
  const seasonalInsights = [
    "Current seasonal influences should be considered in your treatment plan, as environmental factors significantly impact dosha balance and therapeutic outcomes.",
    "Adjusting treatments according to seasonal changes will maximize therapeutic benefits and prevent weather-related aggravation of symptoms.",
    "Incorporating seasonal dietary and lifestyle modifications will enhance the effectiveness of your personalized Ayurvedic protocol."
  ];

  // Combine all elements for comprehensive diagnosis
  const randomAgeInsight = getRandomItems(ageInsights, 1)[0];
  const randomGenderInsight = getRandomItems(genderInsights, 1)[0];
  const randomSeasonalInsight = getRandomItems(seasonalInsights, 1)[0];

  return baseTexts.map(base => {
    const insights = [randomAgeInsight, randomGenderInsight, randomSeasonalInsight];
    const selectedInsights = getRandomItems(insights, 2);
    return `${base} ${selectedInsights.join(' ')} This comprehensive approach addresses your unique constitutional needs and promotes lasting wellness through time-tested Ayurvedic principles.`;
  });
};
