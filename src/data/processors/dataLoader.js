import Papa from 'papaparse';
import { SURVEY_DATA, QUESTION_CATEGORIES } from '../constants/config';
import { CSV_FILES, CSV_COLUMNS, DATA_TRANSFORM } from '../constants/data';
import { processData } from './dataProcessor';

// Load and parse CSV data
export const loadSurveyData = async () => {
  try {
    const dataByPeriod = {};
    
    // Load all survey data files
    for (let i = 0; i < SURVEY_DATA.files.length; i++) {
      const file = SURVEY_DATA.files[i];
      const period = SURVEY_DATA.periods[i];
      
      try {
        console.log(`Loading file: ${file}`);
        const response = await fetch(file);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const csvText = await response.text();
        console.log(`File loaded successfully: ${file}`);
        
        const result = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          transformHeader: (header) => header.trim(),
          transform: (value) => value ? value.toString().trim() : '',
          error: (error) => {
            console.error(`Error parsing CSV: ${error}`);
          }
        });
        
        if (result.errors.length > 0) {
          console.warn(`Warnings parsing ${file}:`, result.errors);
        }

        if (!result.data || result.data.length === 0) {
          throw new Error(`No data found in file: ${file}`);
        }

        console.log(`Successfully parsed ${result.data.length} rows from ${file}`);
        dataByPeriod[period] = result.data;
      } catch (err) {
        console.error(`Error loading ${file}:`, err);
        dataByPeriod[period] = []; // Provide empty array as fallback
      }
    }
    
    if (Object.keys(dataByPeriod).length === 0) {
      throw new Error('No data was loaded from any file');
    }

    console.log('All survey data loaded successfully');
    return dataByPeriod;
  } catch (err) {
    console.error("Error loading survey data:", err);
    // Return empty data structure as fallback
    return SURVEY_DATA.periods.reduce((acc, period) => {
      acc[period] = [];
      return acc;
    }, {});
  }
};

// Process data for a specific question category
export const processQuestionData = (questionLabel, dataByPeriod) => {
  try {
    console.log(`Processing data for question: ${questionLabel}`);
    const result = {
      byPeriod: {},
      trend: []
    };
    
    // Process each time period
    Object.keys(dataByPeriod).forEach(period => {
      const periodData = dataByPeriod[period] || [];
      const questionData = periodData.filter(item => 
        item['Short Label Question'] === questionLabel
      );
      
      console.log(`Found ${questionData.length} items for ${questionLabel} in period ${period}`);
      
      result.byPeriod[period] = questionData.map(item => ({
        attribute: item.Attributes || '',
        audiencePercentage: parseFloat(item['Audience %']) || 0,
        responses: parseInt(item.Responses) || 0
      }));
    });
    
    // Create trend data for each attribute
    const allAttributes = new Set();
    Object.values(result.byPeriod).forEach(periodData => {
      periodData.forEach(item => allAttributes.add(item.attribute));
    });
    
    [...allAttributes].forEach(attribute => {
      const trendItem = { attribute };
      
      Object.keys(result.byPeriod).forEach(period => {
        const match = result.byPeriod[period].find(item => item.attribute === attribute);
        trendItem[period] = match ? match.audiencePercentage : 0;
      });
      
      result.trend.push(trendItem);
    });
    
    console.log(`Successfully processed data for ${questionLabel}`);
    return result;
  } catch (err) {
    console.error(`Error processing question data for ${questionLabel}:`, err);
    // Return empty data structure as fallback
    return {
      byPeriod: SURVEY_DATA.periods.reduce((acc, period) => {
        acc[period] = [];
        return acc;
      }, {}),
      trend: []
    };
  }
};

// Process all survey data
export const processAllSurveyData = (dataByPeriod) => {
  const processedData = {};
  
  // Process each question category
  Object.entries(QUESTION_CATEGORIES).forEach(([key, label]) => {
    processedData[key] = processQuestionData(label, dataByPeriod);
  });
  
  return processedData;
};

// Get latest data for a specific metric
export const getLatestData = (data, metric) => {
  if (!data || !data.byPeriod) return null;
  
  const periods = Object.keys(data.byPeriod);
  const latestPeriod = periods[periods.length - 1];
  return data.byPeriod[latestPeriod]?.find(item => item.attribute === metric) || null;
};

// Calculate trend change between periods
export const calculateTrendChange = (data, metric, startPeriod, endPeriod) => {
  if (!data || !data.byPeriod) return 0;
  
  const startData = data.byPeriod[startPeriod]?.find(item => item.attribute === metric);
  const endData = data.byPeriod[endPeriod]?.find(item => item.attribute === metric);
  
  if (!startData || !endData) return 0;
  
  return endData.audiencePercentage - startData.audiencePercentage;
};

// Aggregate data across multiple attributes
export const aggregateData = (data, attributes) => {
  if (!data || !data.byPeriod) {
    return SURVEY_DATA.periods.reduce((acc, period) => {
      acc[period] = 0;
      return acc;
    }, {});
  }
  
  const periods = Object.keys(data.byPeriod);
  const result = {};
  
  periods.forEach(period => {
    result[period] = (data.byPeriod[period] || [])
      .filter(item => attributes.includes(item.attribute))
      .reduce((sum, item) => sum + (item.audiencePercentage || 0), 0);
  });
  
  return result;
};

// Main export
export const loadData = async () => {
  try {
    // Cargar y procesar datos
    const surveyData = await loadSurveyData();
    const processedData = await processData();
    
    // Cargar datos del período más reciente
    const latestPeriod = SURVEY_DATA.periods[SURVEY_DATA.periods.length - 1];
    let latestData = null;
    let trends = null;
    
    try {
      latestData = JSON.parse(
        localStorage.getItem(`processed_${latestPeriod.toLowerCase().replace(' ', '_')}`)
      );
      trends = JSON.parse(localStorage.getItem('trends'));
    } catch (err) {
      console.error('Error parsing stored data:', err);
    }
    
    // Proporcionar datos por defecto si no hay datos almacenados
    if (!latestData) {
      latestData = {
        summary: { totalResponses: 0, averageSatisfaction: 0, averageSpending: 0, returnIntention: 0 },
        perceptions: { luxury: 0, safety: 0, culture: 0, innovation: 0, service: 0 },
        motivations: { luxury: 0, sports: 0, culture: 0, shopping: 0, gastronomy: 0 },
        behaviors: { activities: [], spending: [], accommodation: [], transportation: [], dining: [] },
        competitive: { positioning: [], preferences: [], advantages: [], competitors: [], opportunitiesThreats: [] }
      };
    }
    
    if (!trends) {
      trends = {
        perceptions: [],
        motivations: [],
        behaviors: []
      };
    }
    
    // Combinar todos los datos
    const data = {
      ...latestData,
      trends,
      surveyData: processAllSurveyData(surveyData)
    };
    
    console.log('Datos cargados exitosamente:', Object.keys(data));
    return data;
  } catch (error) {
    console.error('Error cargando datos:', error);
    // Devolver estructura de datos vacía como fallback
    return {
      summary: { totalResponses: 0, averageSatisfaction: 0, averageSpending: 0, returnIntention: 0 },
      perceptions: { luxury: 0, safety: 0, culture: 0, innovation: 0, service: 0 },
      motivations: { luxury: 0, sports: 0, culture: 0, shopping: 0, gastronomy: 0 },
      behaviors: { activities: [], spending: [], accommodation: [], transportation: [], dining: [] },
      competitive: { positioning: [], preferences: [], advantages: [], competitors: [], opportunitiesThreats: [] },
      trends: {
        perceptions: [],
        motivations: [],
        behaviors: []
      },
      surveyData: {}
    };
  }
}; 