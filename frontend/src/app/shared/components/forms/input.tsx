/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'

import { Validation } from '../../types/validate.type'
import { cn } from '../../utils/css.utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  wrapperClass?: string
  validate?: ((value: Validation, fieldName?: string) => string)[]
  errorMessage?: string
}

const validateField = ({
  value,
  validators,
  fieldName,
}: {
  value: any
  validators?: ((value: Validation, fieldName?: string) => string)[]
  fieldName?: string
}): string => {
  if (!validators || value === undefined || typeof value !== 'string') return ''

  for (const validator of validators) {
    const errorMessage = validator(value as Validation, fieldName)
    if (errorMessage) return errorMessage
  }

  return ''
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, wrapperClass, validate, errorMessage, ...props }, ref) => {
    const [error, setError] = useState<string>('')
    const [isTouched, setIsTouched] = useState(false)
    const displayError = errorMessage || error
    const inputValue = props.value === undefined || props.value === null ? '' : props.value

    useEffect(() => {
      if (!isTouched || errorMessage) return
      const validationError = validateField({
        value: props.value,
        validators: validate,
        fieldName: label,
      })

      setError(validationError)
    }, [inputValue, props.value, isTouched, validate, label, errorMessage])

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsTouched(true)
      props.onBlur?.(e)
    }

    const inputClasses = cn(
      'input input-lg rounded-sm',
      { 'is-invalid': displayError },
      props.className
    )

    return (
      <div className={cn('input-floating w-full', wrapperClass)}>
        <input
          {...props}
          id={props.id}
          value={inputValue}
          ref={ref}
          className={inputClasses}
          onBlur={handleBlur}
        />
        {label && (
          <label className="input-floating-label" htmlFor={props.id}>
            {label}
          </label>
        )}

        {helperText && <span className="absolute right-0 helper-text text-end">{helperText}</span>}
        {displayError && <span className="absolute helper-text text-sm">{displayError}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'
