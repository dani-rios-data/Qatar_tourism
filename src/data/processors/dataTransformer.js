import { DATA_PROCESSING } from '../constants/config';

// Transform data for bar charts
export const transformBarChartData = (data, options = {}) => {
  const {
    limit = DATA_PROCESSING.topItems.motivators,
    sortBy = 'audiencePercentage',
    reverse = true
  } = options;

  let transformedData = data.map(item => ({
    name: item.attribute,
    value: item.audiencePercentage,
    responses: item.responses
  }));

  // Sort data
  transformedData.sort((a, b) => {
    const multiplier = reverse ? -1 : 1;
    return multiplier * (a[sortBy] - b[sortBy]);
  });

  // Apply limit
  if (limit) {
    transformedData = transformedData.slice(0, limit);
  }

  return transformedData;
};

// Transform data for line charts (trends)
export const transformTrendData = (data, options = {}) => {
  const {
    periods = [],
    attributes = [],
    filterThreshold = DATA_PROCESSING.minPercentage
  } = options;

  // Filter and transform data
  let transformedData = data.trend
    .filter(item => {
      // Filter by minimum threshold if specified
      if (filterThreshold) {
        return Object.values(item)
          .some(value => typeof value === 'number' && value >= filterThreshold);
      }
      return true;
    })
    .map(item => {
      const result = { name: item.attribute };
      periods.forEach(period => {
        result[period] = item[period] || 0;
      });
      return result;
    });

  // Filter by specific attributes if provided
  if (attributes.length > 0) {
    transformedData = transformedData.filter(item => 
      attributes.includes(item.name)
    );
  }

  return transformedData;
};

// Transform data for pie charts
export const transformPieChartData = (data, options = {}) => {
  const {
    limit = DATA_PROCESSING.topItems.motivators,
    filterThreshold = DATA_PROCESSING.minPercentage
  } = options;

  let transformedData = data.map(item => ({
    name: item.attribute,
    value: item.audiencePercentage
  }));

  // Filter by threshold
  if (filterThreshold) {
    transformedData = transformedData.filter(item => 
      item.value >= filterThreshold
    );
  }

  // Sort and limit
  transformedData.sort((a, b) => b.value - a.value);
  if (limit) {
    transformedData = transformedData.slice(0, limit);
  }

  return transformedData;
};

// Transform data for radar charts
export const transformRadarChartData = (data, options = {}) => {
  const {
    attributes = [],
    filterThreshold = DATA_PROCESSING.minPercentage
  } = options;

  let transformedData = data.map(item => ({
    attribute: item.attribute,
    value: item.audiencePercentage
  }));

  // Filter by threshold
  if (filterThreshold) {
    transformedData = transformedData.filter(item => 
      item.value >= filterThreshold
    );
  }

  // Filter by specific attributes if provided
  if (attributes.length > 0) {
    transformedData = transformedData.filter(item => 
      attributes.includes(item.attribute)
    );
  }

  return transformedData;
};

// Transform data for comparison charts
export const transformComparisonData = (data, options = {}) => {
  const {
    periods = [],
    attributes = [],
    filterThreshold = DATA_PROCESSING.minPercentage
  } = options;

  let transformedData = data.trend
    .filter(item => {
      if (filterThreshold) {
        return Object.values(item)
          .some(value => typeof value === 'number' && value >= filterThreshold);
      }
      return true;
    })
    .map(item => {
      const result = { attribute: item.attribute };
      periods.forEach(period => {
        result[period] = item[period] || 0;
      });
      return result;
    });

  if (attributes.length > 0) {
    transformedData = transformedData.filter(item => 
      attributes.includes(item.attribute)
    );
  }

  return transformedData;
};

// Format percentage values
export const formatPercentage = (value) => {
  return `${value.toFixed(1)}%`;
};

// Format large numbers
export const formatNumber = (value) => {
  return new Intl.NumberFormat().format(value);
};

// Calculate percentage change
export const calculatePercentageChange = (oldValue, newValue) => {
  if (oldValue === 0) return newValue > 0 ? 100 : 0;
  return ((newValue - oldValue) / oldValue) * 100;
}; 