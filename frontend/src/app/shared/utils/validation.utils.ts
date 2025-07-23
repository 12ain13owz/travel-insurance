export const validateRequired = (
  value: string,
  fieldName: string = 'Field'
): string | undefined => {
  if (!value || value.trim() === '') {
    return `${fieldName} is required.`
  }
  return undefined
}

export const validateEmail = (value: string, fieldName: string = 'Email'): string | undefined => {
  if (!/\S+@\S+\.\S+/.test(value)) {
    return `Invalid ${fieldName} format.`
  }
  return undefined
}

export const validateMinLength = (
  value: string,
  minLength: number,
  fieldName: string = 'Field'
): string | undefined => {
  if (value.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters.`
  }
  return undefined
}
