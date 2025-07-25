export const validationMessages = {
  error: {
    email: 'Please enter a valid email address.',
    password:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
    confirmPassword: 'Passwords do not match.',
    phone: 'Please enter a valid phone number (e.g., +12 345678901 or +1 2345678901).',

    required: (name?: string) => `${name || 'This field'} is required.`,
    minLength: (minLength: number) => `Must be at least ${minLength} characters.`,
    maxLength: (maxLength: number) => `Must be at most ${maxLength} characters.`,
    minValue: (minValue: number) => `Must be at least ${minValue}.`,
    maxValue: (maxValue: number) => `Must be at most ${maxValue}.`,
  },
} as const

export const validation = {
  required: (value: string, fieldName?: string): string => {
    if (value && value.trim() !== '') return ''
    return validationMessages.error.required(fieldName)
  },

  email: (value: string): string => {
    if (!value) return ''

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(value)) return ''
    return validationMessages.error.email
  },

  minLength:
    (minLength: number) =>
    (value: string, fieldName?: string): string => {
      if (!value || value.length >= minLength) return ''

      const errorMsg = validationMessages.error.minLength(minLength)
      return fieldName ? `${fieldName} ${errorMsg.toLowerCase()}` : errorMsg
    },

  maxLength:
    (maxLength: number) =>
    (value: string, fieldName?: string): string => {
      if (!value || value.length <= maxLength) return ''

      const errorMsg = validationMessages.error.maxLength(maxLength)
      return fieldName ? `${fieldName} ${errorMsg.toLowerCase()}` : errorMsg
    },

  minValue:
    (minValue: number) =>
    (value: number, fieldName?: string): string => {
      if (value >= minValue) return ''

      const errorMsg = validationMessages.error.minValue(minValue)
      return fieldName ? `${fieldName} ${errorMsg.toLowerCase()}` : errorMsg
    },

  maxValue:
    (maxValue: number) =>
    (value: number, fieldName?: string): string => {
      if (value <= maxValue) return ''

      const errorMsg = validationMessages.error.maxValue(maxValue)
      return fieldName ? `${fieldName} ${errorMsg.toLowerCase()}` : errorMsg
    },

  passwordMatch: (password: string, confirmPassword: string): string => {
    if (password === confirmPassword) return ''
    return validationMessages.error.confirmPassword
  },

  passwordStrength: (password: string): string => {
    if (!password) return ''

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (passwordRegex.test(password)) return ''
    return validationMessages.error.password
  },

  phone: (phone: string): string => {
    if (!phone) return ''

    const phoneRegex = /^\+\d{1,3}\s?\d{3}\d{3}\d{4}$/
    if (phoneRegex.test(phone)) return ''
    return validationMessages.error.phone
  },
} as const

export const helperTexts = {
  EMAIL: 'Format: qwerty@example.com',
  PHONE: 'Format: +1 1234567890',
} as const
