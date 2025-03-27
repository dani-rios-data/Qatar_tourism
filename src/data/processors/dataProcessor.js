import Papa from 'papaparse';
import { SURVEY_DATA } from '../constants/config';
import { CSV_FILES, CSV_COLUMNS, DATA_TRANSFORM } from '../constants/data';

// Procesar datos
export const processData = async () => {
  try {
    const dataByPeriod = {};
    
    // Cargar todos los archivos de encuesta
    for (let i = 0; i < SURVEY_DATA.files.length; i++) {
      const file = SURVEY_DATA.files[i];
      const period = SURVEY_DATA.periods[i];
      
      console.log(`Procesando archivo: ${file}`);
      
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error(`Error cargando archivo ${file}: ${response.statusText}`);
      }
      
      const csvText = await response.text();
      const result = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        transformHeader: (header) => header.trim(),
        transform: (value) => value ? value.toString().trim() : ''
      });
      
      if (!result.data || result.data.length === 0) {
        throw new Error(`No se encontraron datos en el archivo: ${file}`);
      }

      dataByPeriod[period] = result.data;
      
      // Procesar datos por período
      const processedData = {
        summary: processSummaryData(result.data),
        perceptions: processPerceptionsData(result.data),
        motivations: processMotivationsData(result.data),
        behaviors: processBehaviorsData(result.data),
        competitive: processCompetitiveData(result.data)
      };
      
      // Almacenar datos procesados en localStorage
      localStorage.setItem(
        `processed_${period.toLowerCase().replace(' ', '_')}`,
        JSON.stringify(processedData)
      );
      console.log(`Datos procesados guardados para el período: ${period}`);
    }
    
    // Procesar tendencias
    const trends = {
      perceptions: calculateTrends(dataByPeriod, CSV_COLUMNS.perceptions),
      motivations: calculateTrends(dataByPeriod, CSV_COLUMNS.motivations),
      behaviors: calculateTrends(dataByPeriod, CSV_COLUMNS.behaviors)
    };
    
    // Almacenar tendencias en localStorage
    localStorage.setItem('trends', JSON.stringify(trends));
    console.log('Tendencias guardadas');
    
    return { dataByPeriod, trends };
  } catch (error) {
    console.error('Error procesando datos:', error);
    throw error;
  }
};

// Funciones de procesamiento existentes
const processSummaryData = (data) => {
  return {
    totalResponses: data.length,
    averageSatisfaction: calculateAverage(data, CSV_COLUMNS.satisfaction),
    averageSpending: calculateAverage(data, CSV_COLUMNS.spending),
    returnIntention: calculateAverage(data, CSV_COLUMNS.returnIntention),
    ageDistribution: calculateDistribution(data, CSV_COLUMNS.age, DATA_TRANSFORM.ageGroups),
    spendingDistribution: calculateDistribution(data, CSV_COLUMNS.spending, DATA_TRANSFORM.spendingGroups)
  };
};

const processPerceptionsData = (data) => {
  return {
    luxury: calculateAverage(data, CSV_COLUMNS.perceptions.luxury),
    safety: calculateAverage(data, CSV_COLUMNS.perceptions.safety),
    culture: calculateAverage(data, CSV_COLUMNS.perceptions.culture),
    innovation: calculateAverage(data, CSV_COLUMNS.perceptions.innovation),
    service: calculateAverage(data, CSV_COLUMNS.perceptions.service)
  };
};

const processMotivationsData = (data) => {
  return {
    luxury: calculateAverage(data, CSV_COLUMNS.motivations.luxury),
    sports: calculateAverage(data, CSV_COLUMNS.motivations.sports),
    culture: calculateAverage(data, CSV_COLUMNS.motivations.culture),
    shopping: calculateAverage(data, CSV_COLUMNS.motivations.shopping),
    gastronomy: calculateAverage(data, CSV_COLUMNS.motivations.gastronomy)
  };
};

const processBehaviorsData = (data) => {
  return {
    activities: calculateDistribution(data, CSV_COLUMNS.behaviors.activities),
    spending: calculateDistribution(data, CSV_COLUMNS.behaviors.spending),
    accommodation: calculateDistribution(data, CSV_COLUMNS.behaviors.accommodation),
    transportation: calculateDistribution(data, CSV_COLUMNS.behaviors.transportation),
    dining: calculateDistribution(data, CSV_COLUMNS.behaviors.dining)
  };
};

const processCompetitiveData = (data) => {
  return {
    positioning: calculatePositioning(data),
    preferences: calculatePreferences(data),
    advantages: calculateAdvantages(data),
    competitors: calculateCompetitors(data),
    opportunitiesThreats: calculateOpportunitiesThreats(data)
  };
};

// Funciones de cálculo
const calculateAverage = (data, column) => {
  const values = data.map(row => parseFloat(row[column])).filter(val => !isNaN(val));
  return values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
};

const calculateDistribution = (data, column, groups = null) => {
  if (groups) {
    const distribution = {};
    Object.entries(groups).forEach(([group, [min, max]]) => {
      distribution[group] = data.filter(row => {
        const value = parseFloat(row[column]);
        return value >= min && value <= max;
      }).length;
    });
    return distribution;
  } else {
    const distribution = {};
    data.forEach(row => {
      const value = row[column];
      distribution[value] = (distribution[value] || 0) + 1;
    });
    return distribution;
  }
};

const calculateTrends = (dataByPeriod, metrics) => {
  const trends = {};
  
  Object.entries(metrics).forEach(([key, column]) => {
    trends[key] = Object.entries(dataByPeriod).map(([period, data]) => ({
      period,
      value: calculateAverage(data, column)
    })).sort((a, b) => SURVEY_DATA.periods.indexOf(a.period) - SURVEY_DATA.periods.indexOf(b.period));
  });
  
  return trends;
};

// Funciones de análisis competitivo
const calculatePositioning = (data) => {
  return [
    { label: 'Luxury Perception', value: calculateAverage(data, CSV_COLUMNS.perceptions.luxury) },
    { label: 'Safety Perception', value: calculateAverage(data, CSV_COLUMNS.perceptions.safety) },
    { label: 'Culture Perception', value: calculateAverage(data, CSV_COLUMNS.perceptions.culture) }
  ];
};

const calculatePreferences = (data) => {
  return [
    { name: 'Luxury', value: calculateAverage(data, CSV_COLUMNS.motivations.luxury) },
    { name: 'Culture', value: calculateAverage(data, CSV_COLUMNS.motivations.culture) },
    { name: 'Sports', value: calculateAverage(data, CSV_COLUMNS.motivations.sports) }
  ];
};

const calculateAdvantages = (data) => {
  return [
    { name: 'Luxury', value: calculateAverage(data, CSV_COLUMNS.perceptions.luxury) },
    { name: 'Safety', value: calculateAverage(data, CSV_COLUMNS.perceptions.safety) },
    { name: 'Culture', value: calculateAverage(data, CSV_COLUMNS.perceptions.culture) }
  ];
};

const calculateCompetitors = (data) => {
  return [
    {
      name: 'Dubai',
      description: 'Major luxury tourism destination in the region',
      marketShare: 35,
      trend: 2.5
    },
    {
      name: 'Abu Dhabi',
      description: 'Cultural and luxury tourism destination',
      marketShare: 25,
      trend: 1.8
    }
  ];
};

const calculateOpportunitiesThreats = (data) => {
  return [
    {
      title: 'Growing Luxury Tourism',
      description: 'Increasing demand for luxury experiences',
      impact: 85,
      type: 'opportunity'
    },
    {
      title: 'Regional Competition',
      description: 'Strong competition from neighboring destinations',
      impact: 75,
      type: 'threat'
    }
  ];
}; 