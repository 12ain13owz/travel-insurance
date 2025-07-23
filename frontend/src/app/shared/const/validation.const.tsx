export const validationPatterns = {
  EMAIL: '^[\\w-\\.]+@[\\w-]+\\.[a-zA-Z]{2,}$',
  PHONE: '^\\+\\d{1,3}\\s\\d{3}\\d{3}\\d{4}$',
} as const

export const helperTexts = {
  PHONE: 'Format +1 1234567890',
} as const
