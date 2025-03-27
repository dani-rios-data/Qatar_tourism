import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Input data folder
const DATA_DIR = path.join(__dirname, '..', 'public', 'data');
// Output subfolder
const PROCESSED_DIR = path.join(DATA_DIR, 'processed');

// Ensure 'processed' folder exists
if (!fs.existsSync(PROCESSED_DIR)) {
  fs.mkdirSync(PROCESSED_DIR, { recursive: true });
}

/**
 * Convert the CSV filename into a simpler JSON filename.
 * E.g. "qatar - premium traveler - q1 2023.csv" -> "q1_2023.json".
 */
function slugify(csvFilename) {
  // Lowercase everything
  let outName = csvFilename.toLowerCase();
  // Remove "qatar - premium traveler - "
  outName = outName.replace('qatar - premium traveler - ', '');
  // Replace spaces with underscores
  outName = outName.replace(/\s+/g, '_');
  // Finally, replace .csv with .json
  outName = outName.replace('.csv', '.json');
  return outName;
}

// Main function
(function processAllCSVs() {
  try {
    // Read all files in `public/data`
    const allFiles = fs.readdirSync(DATA_DIR);

    // Filter for .csv only (exclude the 'processed' directory itself)
    const csvFiles = allFiles.filter(file => file.endsWith('.csv'));

    csvFiles.forEach(file => {
      const filePath = path.join(DATA_DIR, file);
      console.log(`Parsing CSV: ${filePath}`);

      // Read CSV content
      const csvText = fs.readFileSync(filePath, 'utf8');

      // Parse with PapaParse
      const parsed = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true
      });

      // Extract period from filename (e.g., "Q1 2023")
      const period = file.match(/q[1-4]\s*\d{4}/i)[0].toUpperCase();

      // Process the data
      const dataRows = parsed.data.map(row => ({
        ...row,
        period
      }));

      // Process the data into categories
      const processedData = {
        summary: calculateSummary(dataRows),
        perceptions: processPerceptions(dataRows),
        motivationsBarriers: processMotivationsBarriers(dataRows),
        behaviors: processBehaviors(dataRows),
        competitive: processCompetitive(dataRows),
        trends: calculateTrends(dataRows),
        period,
        allData: dataRows.filter(row => row['Audience %'] > 0)
      };

      // Build output path
      const outName = slugify(file);
      const outPath = path.join(PROCESSED_DIR, outName);

      // Write JSON
      fs.writeFileSync(outPath, JSON.stringify(processedData, null, 2), 'utf8');
      console.log(`--> Wrote: ${outPath}`);
    });

    console.log('All CSV files processed successfully!');
  } catch (err) {
    console.error('Error processing CSV files:', err);
    process.exit(1);
  }
})();

function calculateSummary(data) {
  // Calculate total responses
  const totalResponses = data.reduce((sum, row) => sum + (row.Responses || 0), 0);

  // Calculate vacation importance - FIXED
  const vacationData = data.filter(row => 
    row['Short Label Question'] === 'Importance of Vacations'
  );
  const highImportance = vacationData
    .filter(row => 
      row.Attributes.includes('Very important') || 
      row.Attributes.includes('Extremely important')
    )
    .reduce((sum, row) => sum + parseFloat(row['Audience %'] || 0), 0);

  // Calculate new destination preference - FIXED
  const destinationData = data.filter(row => 
    row['Short Label Question'] === 'New Versus Previous Destinations'
  );
  const newDestination = parseFloat(
    destinationData.find(row => 
      row.Attributes.toLowerCase().includes('somewhere new') ||
      row.Attributes.toLowerCase().includes('new destination')
    )?.['Audience %'] || 0
  );

  // Calculate local experience interest - FIXED
  const localExperienceData = data.filter(row => 
    row['Short Label Question'].toLowerCase().includes('local') ||
    row['Short Label Question'].toLowerCase().includes('cultural') ||
    row['Short Label Question'] === 'Eco & Experience Attitudes'
  );
  const localExperience = localExperienceData
    .filter(row => 
      row.Attributes.toLowerCase().includes('local') || 
      row.Attributes.toLowerCase().includes('culture') ||
      row.Attributes.toLowerCase().includes('authentic')
    )
    .reduce((sum, row) => sum + parseFloat(row['Audience %'] || 0), 0);

  // Calculate bleisure interest - FIXED
  const businessData = data.filter(row => 
    row['Short Label Question'] === 'Business Travel Attitudes'
  );
  const bleisureInterest = parseFloat(
    businessData.find(row => 
      row.Attributes.toLowerCase().includes('extra days') ||
      row.Attributes.toLowerCase().includes('leisure') ||
      row.Attributes.toLowerCase().includes('explore')
    )?.['Audience %'] || 0
  );

  // Calculate luxury appeal
  const luxuryData = data.filter(row => 
    row['Short Label Question'].toLowerCase().includes('luxury') || 
    row['Short Label Question'].toLowerCase().includes('premium')
  );
  const luxuryValues = luxuryData
    .filter(row => parseFloat(row['Audience %']) > 0)
    .map(row => parseFloat(row['Audience %']));
  const luxuryAppeal = luxuryValues.length > 0 
    ? luxuryValues.reduce((sum, val) => sum + val, 0) / luxuryValues.length 
    : 0;

  // Calculate cultural interest
  const culturalData = data.filter(row => 
    row['Short Label Question'].toLowerCase().includes('cultural') || 
    row['Short Label Question'].toLowerCase().includes('heritage')
  );
  const culturalValues = culturalData
    .filter(row => parseFloat(row['Audience %']) > 0)
    .map(row => parseFloat(row['Audience %']));
  const culturalInterest = culturalValues.length > 0
    ? culturalValues.reduce((sum, val) => sum + val, 0) / culturalValues.length
    : 0;

  return {
    totalResponses,
    highImportancePercent: Math.round(highImportance * 10) / 10,
    newDestinationPercent: Math.round(newDestination * 10) / 10,
    localExperiencePercent: Math.round(localExperience * 10) / 10,
    bleisureInterestPercent: Math.round(bleisureInterest * 10) / 10,
    luxuryAppealPercent: Math.round(luxuryAppeal * 10) / 10,
    culturalInterestPercent: Math.round(culturalInterest * 10) / 10
  };
}

function processPerceptions(data) {
  const perceptionQuestions = [
    'Importance of Vacations',
    'New Versus Previous Destinations',
    'Perceptions of Qatar',
    'Destination Type',
    'Cultural Experience',
    'Infrastructure Quality',
    'Luxury Appeal',
    'Premium Perception',
    'Stopover vs Destination',
    'Brand Recognition',
    'Market Position'
  ];

  return data
    .filter(row => perceptionQuestions.includes(row['Short Label Question']))
    .map(row => ({
      question: row['Short Label Question'],
      attribute: row.Attributes,
      value: row['Audience %'] || 0,
      responses: row.Responses || 0,
      index: row.Index || 100,
      period: row.period,
      category: getPerceptionCategory(row['Short Label Question'])
    }));
}

function processMotivationsBarriers(data) {
  const motivationQuestions = [
    'Reasons for Not Traveling',
    'Business Travel Attitudes',
    'Travel Motivations',
    'Barriers to Travel',
    'Cultural Interest',
    'Travel Preferences',
    'Luxury Preferences',
    'Premium Experiences',
    'Cultural Activities',
    'Shopping Preferences',
    'Entertainment Options',
    'Safety Concerns',
    'Cultural Restrictions',
    'Cost Considerations'
  ];

  return data
    .filter(row => motivationQuestions.includes(row['Short Label Question']))
    .map(row => ({
      question: row['Short Label Question'],
      attribute: row.Attributes,
      value: row['Audience %'] || 0,
      responses: row.Responses || 0,
      index: row.Index || 100,
      period: row.period,
      category: getMotivationCategory(row['Short Label Question'])
    }));
}

function processBehaviors(data) {
  const behaviorQuestions = [
    'Eco & Experience Attitudes',
    'Business Travel Attitudes',
    'Activities',
    'Entertainment',
    'Cultural Activities',
    'Spending',
    'Budget',
    'Expenses',
    'Accommodation',
    'Hotel',
    'Lodging',
    'Transportation',
    'Travel',
    'Transport',
    'Dining',
    'Food',
    'Restaurants',
    'Digital Research',
    'Booking Channels',
    'Travel Agencies',
    'Concierge Services',
    'Social Media Usage',
    'Influencer Impact',
    'Sustainability Practices'
  ];

  return data
    .filter(row => behaviorQuestions.some(q => row['Short Label Question'].includes(q)))
    .map(row => ({
      question: row['Short Label Question'],
      attribute: row.Attributes,
      value: row['Audience %'] || 0,
      responses: row.Responses || 0,
      index: row.Index || 100,
      period: row.period,
      category: getBehaviorCategory(row['Short Label Question'])
    }));
}

function processCompetitive(data) {
  const competitiveQuestions = [
    'New Versus Previous Destinations',
    'Business Travel Attitudes',
    'Positioning',
    'Brand',
    'Image',
    'Preferences',
    'Choices',
    'Selection',
    'Advantages',
    'Strengths',
    'Benefits',
    'Competitors',
    'Alternatives',
    'Other Destinations',
    'Opportunities',
    'Threats',
    'Challenges',
    'Dubai Comparison',
    'Abu Dhabi Comparison',
    'Saudi Arabia Comparison',
    'Maldives Comparison',
    'Market Position',
    'Competitive Edge'
  ];

  return data
    .filter(row => competitiveQuestions.some(q => row['Short Label Question'].includes(q)))
    .map(row => ({
      question: row['Short Label Question'],
      attribute: row.Attributes,
      value: row['Audience %'] || 0,
      responses: row.Responses || 0,
      index: row.Index || 100,
      period: row.period,
      category: getCompetitiveCategory(row['Short Label Question'])
    }));
}

// Helper functions for categorization
function getPerceptionCategory(question) {
  if (question.includes('Luxury') || question.includes('Premium')) return 'luxury';
  if (question.includes('Cultural') || question.includes('Heritage')) return 'cultural';
  if (question.includes('Infrastructure')) return 'infrastructure';
  if (question.includes('Brand') || question.includes('Recognition')) return 'brand';
  return 'general';
}

function getMotivationCategory(question) {
  if (question.includes('Luxury') || question.includes('Premium')) return 'luxury';
  if (question.includes('Cultural')) return 'cultural';
  if (question.includes('Safety')) return 'safety';
  if (question.includes('Cost')) return 'cost';
  return 'general';
}

function getBehaviorCategory(question) {
  if (question.includes('Digital') || question.includes('Social')) return 'digital';
  if (question.includes('Agency') || question.includes('Concierge')) return 'booking';
  if (question.includes('Sustainability') || question.includes('Eco')) return 'sustainability';
  return 'general';
}

function getCompetitiveCategory(question) {
  if (question.includes('Dubai')) return 'dubai';
  if (question.includes('Abu Dhabi')) return 'abu_dhabi';
  if (question.includes('Saudi')) return 'saudi';
  if (question.includes('Maldives')) return 'maldives';
  return 'general';
}

function calculateTrends(data) {
  // Define trend categories and their related keywords
  const trendCategories = {
    perceptions: ['Perceptions', 'Image', 'Reputation', 'Brand'],
    motivations: ['Motivations', 'Reasons', 'Drivers', 'Preferences'],
    behaviors: ['Behaviors', 'Activities', 'Actions', 'Attitudes'],
    cultural: ['Cultural', 'Heritage', 'Local', 'Authentic'],
    luxury: ['Luxury', 'Premium', 'High-end', 'Exclusive']
  };

  const result = {};
  
  for (const [category, keywords] of Object.entries(trendCategories)) {
    const relevantData = data
      .filter(row => 
        keywords.some(keyword => 
          row['Short Label Question'].toLowerCase().includes(keyword.toLowerCase())
        )
      )
      .map(row => ({
        question: row['Short Label Question'],
        attribute: row.Attributes,
        value: parseFloat(row['Audience %'] || 0),
        change: row.Index ? Math.round((row.Index - 100) * 10) / 10 : 0,
        responses: row.Responses || 0,
        period: row.period
      }))
      .filter(item => item.value > 0);

    // Calculate average values for the category
    const avgValue = relevantData.length > 0
      ? Math.round(relevantData.reduce((sum, item) => sum + item.value, 0) / relevantData.length * 10) / 10
      : 0;

    const avgChange = relevantData.length > 0
      ? Math.round(relevantData.reduce((sum, item) => sum + item.change, 0) / relevantData.length * 10) / 10
      : 0;

    result[category] = {
      data: relevantData,
      average: {
        value: avgValue,
        change: avgChange
      }
    };
  }

  return result;
} 