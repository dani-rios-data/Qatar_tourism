import { useState, useEffect } from 'react';
import { loadData } from '../data/processors/dataLoader';

export const useDataLoading = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const processedData = await loadData();
        
        if (!processedData) {
          throw new Error('No data was returned from the data loader');
        }

        // Verify that all required sections are present
        const requiredSections = ['summary', 'perceptions', 'motivations', 'behaviors', 'competitive', 'trends'];
        const missingSections = requiredSections.filter(section => !processedData[section]);
        
        if (missingSections.length > 0) {
          throw new Error(`Missing data sections: ${missingSections.join(', ')}`);
        }

        setData(processedData);
      } catch (err) {
        console.error('Error loading data:', err);
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook for loading specific section data
export const useSectionData = (data, section) => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);

      if (!data) {
        throw new Error('No data available');
      }

      if (!data[section]) {
        throw new Error(`No data available for section: ${section}`);
      }

      setSectionData(data[section]);
    } catch (err) {
      console.error(`Error loading section data for ${section}:`, err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [data, section]);

  return { sectionData, loading, error };
};

// Hook for loading trend data
export const useTrendData = (data, section) => {
  const [trendData, setTrendData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);

      if (!data || !data.trends) {
        throw new Error('No trend data available');
      }

      if (!data.trends[section]) {
        throw new Error(`No trend data available for section: ${section}`);
      }

      setTrendData(data.trends[section]);
    } catch (err) {
      console.error(`Error loading trend data for ${section}:`, err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [data, section]);

  return { trendData, loading, error };
};

// Hook for loading comparison data
export const useComparisonData = (data, sections, options = {}) => {
  const [comparisonData, setComparisonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!data || !sections || sections.length < 2) return;

    try {
      setLoading(true);
      setError(null);

      const { periods = [], attributes = [] } = options;

      // Get data for each section
      const sectionData = sections.map(section => {
        if (!data[section]) {
          throw new Error(`No data available for section: ${section}`);
        }
        return data[section];
      });

      // Transform data for comparison
      const transformedData = sectionData.map((section, index) => ({
        section: sections[index],
        data: section.trend
          .filter(item => {
            if (attributes.length > 0) {
              return attributes.includes(item.attribute);
            }
            return true;
          })
          .map(item => {
            const result = { attribute: item.attribute };
            periods.forEach(period => {
              result[period] = item[period] || 0;
            });
            return result;
          })
      }));

      setComparisonData(transformedData);
    } catch (err) {
      console.error('Error loading comparison data:', err);
      setError(err.message || 'Failed to load comparison data');
    } finally {
      setLoading(false);
    }
  }, [data, sections, options]);

  return { comparisonData, loading, error };
}; 