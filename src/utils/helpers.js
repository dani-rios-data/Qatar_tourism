// Format date strings
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Format currency values
export const formatCurrency = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(value);
};

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Deep clone object
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Check if value is empty (null, undefined, empty string, empty array, empty object)
export const isEmpty = (value) => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};

// Get object property by path
export const get = (obj, path, defaultValue = undefined) => {
  const travel = (regexp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

// Group array by key
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const group = item[key];
    result[group] = result[group] || [];
    result[group].push(item);
    return result;
  }, {});
};

// Sort array by multiple properties
export const sortByMultiple = (array, properties) => {
  return array.sort((a, b) => {
    for (let i = 0; i < properties.length; i++) {
      const prop = properties[i];
      const propA = a[prop];
      const propB = b[prop];
      
      if (propA < propB) return -1;
      if (propA > propB) return 1;
    }
    return 0;
  });
};

// Calculate moving average
export const calculateMovingAverage = (data, windowSize) => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const start = Math.max(0, i - windowSize + 1);
    const window = data.slice(start, i + 1);
    const average = window.reduce((sum, val) => sum + val, 0) / window.length;
    result.push(average);
  }
  return result;
};

// Format large numbers with K/M/B suffixes
export const formatCompactNumber = (number) => {
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  });
  return formatter.format(number);
};

// Check if browser supports specific feature
export const supportsFeature = (feature) => {
  const features = {
    webGL: () => {
      try {
        return !!window.WebGLRenderingContext;
      } catch (e) {
        return false;
      }
    },
    canvas: () => {
      try {
        return !!window.CanvasRenderingContext2D;
      } catch (e) {
        return false;
      }
    },
    localStorage: () => {
      try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
      } catch (e) {
        return false;
      }
    }
  };

  return features[feature] ? features[feature]() : false;
}; 