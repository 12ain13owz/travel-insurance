export interface ValidationResult {
  isValid: boolean
  message: (name?: string) => void
}

export type Validation =
  | 'REQUIRED'
  | 'EMAIL'
  | 'MIN_LENGTH'
  | 'MAX_LENGTH'
  | 'MIN_VALUE'
  | 'MAX_VALUE'
  | 'PASSWORD_MATCH'
  | 'PASSWORD_STRENGTH'
  | 'PHONE'
