
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

export const generatePersonalizedResponse = (data: QuestionnaireData) => {
  // Determine dominant dosha based on questionnaire responses
  let vataScore = 0;
  let pittaScore = 0;
  let kaphaScore = 0;

  // Body frame scoring
  if (data.bodyFrame === 'slim') vataScore += 2;
  else if (data.bodyFrame === 'medium') pittaScore += 2;
  else if (data.bodyFrame === 'heavy') kaphaScore += 2;

  // Digestion scoring
  if (data.digestion === 'irregular') vataScore += 2;
  else if (data.digestion === 'strong') pittaScore += 2;
  else if (data.digestion === 'slow') kaphaScore += 2;

  // Temperament scoring
  if (data.temperament === 'anxious') vataScore += 2;
  else if (data.temperament === 'irritable') pittaScore += 2;
  else if (data.temperament === 'calm') kaphaScore += 2;

  // Sleep scoring
  if (data.sleep === 'no' || data.sleep === 'frequent-wake') vataScore += 1;
  else if (data.sleep === 'yes') {
    if (kaphaScore > pittaScore && kaphaScore > vataScore) kaphaScore += 1;
    else pittaScore += 1;
  }

  // Bowel movements scoring
  if (data.bowelMovements === 'constipated') vataScore += 1;
  else if (data.bowelMovements === 'loose') pittaScore += 1;
  else if (data.bowelMovements === 'regular') kaphaScore += 1;

  // Appetite scoring
  if (data.appetite === 'variable') vataScore += 1;
  else if (data.appetite === 'strong') pittaScore += 1;
  else if (data.appetite === 'poor') kaphaScore += 1;

  // Determine primary dosha
  let primaryDosha = 'Vata';
  let secondaryDosha = '';
  
  if (pittaScore > vataScore && pittaScore > kaphaScore) {
    primaryDosha = 'Pitta';
  } else if (kaphaScore > vataScore && kaphaScore > pittaScore) {
    primaryDosha = 'Kapha';
  }

  // Determine secondary dosha
  const scores = [
    { dosha: 'Vata', score: vataScore },
    { dosha: 'Pitta', score: pittaScore },
    { dosha: 'Kapha', score: kaphaScore }
  ].sort((a, b) => b.score - a.score);

  if (scores[0].score === scores[1].score) {
    secondaryDosha = scores[1].dosha;
  }

  // Generate personalized diagnosis
  let diagnosis = `Based on your detailed health assessment, you appear to have a ${primaryDosha} constitution`;
  
  if (secondaryDosha) {
    diagnosis += ` with significant ${secondaryDosha} influence`;
  }

  diagnosis += `. Your primary complaint of "${data.primaryComplaint}" aligns with typical ${primaryDosha} imbalances. `;

  // Age-specific considerations
  const age = parseInt(data.age);
  if (age > 50) {
    diagnosis += `At ${age} years, Vata naturally increases, so extra attention to grounding practices is beneficial. `;
  } else if (age >= 30 && age <= 50) {
    diagnosis += `During this Pitta phase of life (${age} years), maintaining emotional balance and avoiding excess heat is crucial. `;
  } else if (age < 30) {
    diagnosis += `In this Kapha-dominant phase of life (${age} years), maintaining activity and avoiding stagnation is important. `;
  }

  // Generate personalized remedies
  const remedies = generateRemedies(primaryDosha, data);
  const diet = generateDietaryGuidance(primaryDosha, data);
  const lifestyle = generateLifestyleRecommendations(primaryDosha, data);

  return {
    diagnosis,
    remedies,
    diet,
    lifestyle,
    doshaImbalances: secondaryDosha ? [primaryDosha, secondaryDosha] : [primaryDosha],
    primaryDosha,
    questionnaire: data
  };
};

const generateRemedies = (primaryDosha: string, data: QuestionnaireData) => {
  const remedies = [];

  if (primaryDosha === 'Vata') {
    remedies.push(
      `For your ${data.primaryComplaint}, perform daily Abhyanga (warm oil massage) with sesame oil to calm the nervous system.`,
      `Prepare a tea with 1 tsp each of cumin, coriander, and fennel seeds to improve digestion and reduce anxiety.`,
      `Take Ashwagandha powder (1/4 tsp) with warm milk before bed to improve sleep quality and reduce stress.`
    );

    if (data.sleep === 'no' || data.sleep === 'frequent-wake') {
      remedies.push(`Apply warm sesame oil to the soles of your feet and scalp before bedtime for better sleep.`);
    }
  } else if (primaryDosha === 'Pitta') {
    remedies.push(
      `For your ${data.primaryComplaint}, use cooling coconut oil for body massage and avoid hot, spicy foods.`,
      `Drink aloe vera juice (2 tbsp) with water twice daily to cool internal heat and improve digestion.`,
      `Take Amalaki (Indian gooseberry) powder with water to balance acidity and strengthen immunity.`
    );

    if (data.temperament === 'irritable') {
      remedies.push(`Practice Sheetali pranayama (cooling breath) for 5 minutes daily to calm irritability.`);
    }
  } else if (primaryDosha === 'Kapha') {
    remedies.push(
      `For your ${data.primaryComplaint}, use dry brushing before shower to stimulate circulation and reduce stagnation.`,
      `Drink ginger tea with honey (avoid if diabetic) to kindle digestive fire and reduce congestion.`,
      `Take Trikatu (ginger, black pepper, long pepper) powder with honey before meals to boost metabolism.`
    );

    if (data.appetite === 'poor') {
      remedies.push(`Chew a small piece of fresh ginger with rock salt before meals to stimulate appetite.`);
    }
  }

  return remedies;
};

const generateDietaryGuidance = (primaryDosha: string, data: QuestionnaireData) => {
  const diet = [];

  if (primaryDosha === 'Vata') {
    diet.push(
      `Favor warm, cooked, and slightly oily foods with sweet, sour, and salty tastes.`,
      `Include grounding foods like rice, oats, sweet potatoes, and warm milk in your daily meals.`,
      `Avoid cold, raw, dry foods and excessive bitter or astringent tastes.`
    );

    if (data.bowelMovements === 'constipated') {
      diet.push(`Include stewed prunes, warm water with lemon, and ghee to improve bowel movements.`);
    }
  } else if (primaryDosha === 'Pitta') {
    diet.push(
      `Choose cooling foods with sweet, bitter, and astringent tastes like cucumbers, melons, and leafy greens.`,
      `Include coconut water, mint tea, and rose water to cool internal heat.`,
      `Avoid spicy, fried, fermented foods, alcohol, and excessive salt.`
    );

    if (data.digestion === 'strong') {
      diet.push(`Despite strong digestion, avoid overeating and skip late-night meals to prevent acid buildup.`);
    }
  } else if (primaryDosha === 'Kapha') {
    diet.push(
      `Emphasize light, warm, dry foods with pungent, bitter, and astringent tastes.`,
      `Include plenty of vegetables, legumes, and warming spices like ginger, black pepper, and turmeric.`,
      `Minimize dairy, sweet, oily, and cold foods that increase congestion.`
    );

    if (data.appetite === 'poor') {
      diet.push(`Eat smaller, more frequent meals and include digestive spices to kindle appetite.`);
    }
  }

  return diet;
};

const generateLifestyleRecommendations = (primaryDosha: string, data: QuestionnaireData) => {
  const lifestyle = [];

  if (primaryDosha === 'Vata') {
    lifestyle.push(
      `Maintain a regular daily routine with consistent meal and sleep times.`,
      `Practice gentle yoga, walking, and deep breathing exercises.`,
      `Keep warm and avoid excessive travel or overstimulation.`
    );

    if (data.sleep === 'no' || data.sleep === 'frequent-wake') {
      lifestyle.push(`Create a calming bedtime routine and avoid screens 1 hour before sleep.`);
    }
  } else if (primaryDosha === 'Pitta') {
    lifestyle.push(
      `Avoid excessive heat, direct sunlight during peak hours, and competitive activities.`,
      `Practice moderate exercise during cooler parts of the day.`,
      `Cultivate patience, forgiveness, and cooling practices like swimming or moonlight walks.`
    );

    if (data.temperament === 'irritable') {
      lifestyle.push(`Practice meditation and avoid heated arguments or stressful situations.`);
    }
  } else if (primaryDosha === 'Kapha') {
    lifestyle.push(
      `Engage in vigorous daily exercise, preferably in the morning.`,
      `Wake up early (before 6 AM) and avoid daytime sleeping.`,
      `Seek variety, new experiences, and stimulating activities to counter stagnation.`
    );

    if (data.sleep === 'yes' && data.appetite === 'poor') {
      lifestyle.push(`Balance adequate rest with active periods to maintain healthy metabolism.`);
    }
  }

  return lifestyle;
};
