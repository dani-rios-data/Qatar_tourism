// Error configuration
export const ERROR_CONFIG = {
  codes: {
    // Authentication errors (1000-1999)
    AUTH_001: 'Invalid credentials',
    AUTH_002: 'User not found',
    AUTH_003: 'Account locked',
    AUTH_004: 'Session expired',
    AUTH_005: 'Unauthorized access',

    // Validation errors (2000-2999)
    VAL_001: 'Invalid input data',
    VAL_002: 'Required field missing',
    VAL_003: 'Invalid format',
    VAL_004: 'Value out of range',
    VAL_005: 'Duplicate value',

    // Data errors (3000-3999)
    DATA_001: 'Data not found',
    DATA_002: 'Data already exists',
    DATA_003: 'Data corrupted',
    DATA_004: 'Data format invalid',
    DATA_005: 'Data processing failed',

    // Network errors (4000-4999)
    NET_001: 'Network connection failed',
    NET_002: 'Request timeout',
    NET_003: 'Server unavailable',
    NET_004: 'API endpoint not found',
    NET_005: 'Rate limit exceeded',

    // File errors (5000-5999)
    FILE_001: 'File not found',
    FILE_002: 'File too large',
    FILE_003: 'Invalid file type',
    FILE_004: 'File upload failed',
    FILE_005: 'File processing failed',

    // System errors (6000-6999)
    SYS_001: 'Internal server error',
    SYS_002: 'Service unavailable',
    SYS_003: 'Configuration error',
    SYS_004: 'Database error',
    SYS_005: 'Cache error'
  },
  messages: {
    // Authentication messages
    AUTH_001: 'The credentials provided are invalid. Please try again.',
    AUTH_002: 'User account not found. Please check your credentials.',
    AUTH_003: 'Your account has been locked. Please contact support.',
    AUTH_004: 'Your session has expired. Please log in again.',
    AUTH_005: 'You do not have permission to access this resource.',

    // Validation messages
    VAL_001: 'The input data is invalid. Please check your entries.',
    VAL_002: 'This field is required. Please fill it in.',
    VAL_003: 'The format is invalid. Please check the requirements.',
    VAL_004: 'The value is out of the allowed range.',
    VAL_005: 'This value already exists. Please choose another.',

    // Data messages
    DATA_001: 'The requested data could not be found.',
    DATA_002: 'This data already exists in the system.',
    DATA_003: 'The data appears to be corrupted.',
    DATA_004: 'The data format is invalid.',
    DATA_005: 'Failed to process the data.',

    // Network messages
    NET_001: 'Unable to connect to the server. Please check your connection.',
    NET_002: 'The request timed out. Please try again.',
    NET_003: 'The server is currently unavailable. Please try again later.',
    NET_004: 'The requested endpoint could not be found.',
    NET_005: 'Too many requests. Please wait a moment before trying again.',

    // File messages
    FILE_001: 'The requested file could not be found.',
    FILE_002: 'The file is too large. Please choose a smaller file.',
    FILE_003: 'The file type is not supported.',
    FILE_004: 'Failed to upload the file. Please try again.',
    FILE_005: 'Failed to process the file. Please try again.',

    // System messages
    SYS_001: 'An internal server error occurred. Please try again later.',
    SYS_002: 'The service is currently unavailable. Please try again later.',
    SYS_003: 'There is a configuration error. Please contact support.',
    SYS_004: 'A database error occurred. Please try again later.',
    SYS_005: 'A cache error occurred. Please try again later.'
  },
  handling: {
    retry: {
      maxAttempts: 3,
      delay: 1000,
      backoff: 2
    },
    timeout: {
      default: 5000,
      long: 10000,
      veryLong: 30000
    },
    fallback: {
      enabled: true,
      defaultValue: null
    }
  }
}; 