// Validation configuration
export const VALIDATION_CONFIG = {
  rules: {
    required: {
      message: 'This field is required',
      validate: value => value !== undefined && value !== null && value !== ''
    },
    email: {
      message: 'Please enter a valid email address',
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    minLength: {
      message: 'Minimum length is {min} characters',
      validate: (value, min) => value.length >= min
    },
    maxLength: {
      message: 'Maximum length is {max} characters',
      validate: (value, max) => value.length <= max
    },
    numeric: {
      message: 'Please enter a valid number',
      pattern: /^\d+$/
    },
    decimal: {
      message: 'Please enter a valid decimal number',
      pattern: /^\d*\.?\d+$/
    },
    percentage: {
      message: 'Please enter a valid percentage (0-100)',
      validate: value => value >= 0 && value <= 100
    },
    date: {
      message: 'Please enter a valid date',
      pattern: /^\d{4}-\d{2}-\d{2}$/
    },
    time: {
      message: 'Please enter a valid time',
      pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
    },
    url: {
      message: 'Please enter a valid URL',
      pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
    },
    phone: {
      message: 'Please enter a valid phone number',
      pattern: /^\+?[\d\s-()]{10,}$/
    },
    password: {
      message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number',
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    }
  },
  messages: {
    error: {
      required: 'This field is required',
      email: 'Please enter a valid email address',
      minLength: 'Minimum length is {min} characters',
      maxLength: 'Maximum length is {max} characters',
      numeric: 'Please enter a valid number',
      decimal: 'Please enter a valid decimal number',
      percentage: 'Please enter a valid percentage (0-100)',
      date: 'Please enter a valid date',
      time: 'Please enter a valid time',
      url: 'Please enter a valid URL',
      phone: 'Please enter a valid phone number',
      password: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number'
    },
    success: {
      saved: 'Changes saved successfully',
      created: 'Item created successfully',
      updated: 'Item updated successfully',
      deleted: 'Item deleted successfully'
    },
    warning: {
      unsaved: 'You have unsaved changes',
      confirmDelete: 'Are you sure you want to delete this item?',
      confirmAction: 'Are you sure you want to perform this action?'
    }
  },
  formats: {
    date: 'YYYY-MM-DD',
    time: 'HH:mm',
    datetime: 'YYYY-MM-DD HH:mm',
    currency: {
      USD: {
        symbol: '$',
        decimal: '.',
        thousands: ',',
        precision: 2
      },
      EUR: {
        symbol: '€',
        decimal: ',',
        thousands: '.',
        precision: 2
      },
      GBP: {
        symbol: '£',
        decimal: '.',
        thousands: ',',
        precision: 2
      }
    },
    number: {
      decimal: '.',
      thousands: ',',
      precision: 2
    },
    percentage: {
      decimal: '.',
      thousands: ',',
      precision: 1,
      suffix: '%'
    }
  }
}; 