/* eslint-disable @typescript-eslint/no-explicit-any */
import flatpickr from 'flatpickr'
import { Instance } from 'flatpickr/dist/types/instance'
import React, { useEffect, useRef, useState } from 'react'

import { DateFormat } from '../../const/date-format.const'
import { Validation } from '../../types/validate.type'
import { cn } from '../../utils/css.utils'

interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  id: string
  label?: string
  helperText?: string
  format?: DateFormat
  value?: string
  onChange?: (date: string) => void
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

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      id,
      helperText,
      format = DateFormat.SHORT,
      value,
      onChange,
      validate,
      errorMessage,
      ...props
    },
    ref
  ) => {
    const flatpickrRef = useRef<Instance | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isTouched, setIsTouched] = useState(false)
    const displayError = errorMessage || error
    const inputValue = props.value === undefined || props.value === null ? '' : props.value

    useEffect(() => {
      const inputElement = document.getElementById(id) as HTMLInputElement | null
      if (inputElement) {
        flatpickrRef.current = flatpickr(inputElement, {
          monthSelectorType: 'static',
          dateFormat: format,
          onChange: (selectedDates) => {
            if (onChange && selectedDates.length > 0) {
              onChange(selectedDates.toString())
              setError(null)
            } else if (required) {
              setError('Field is required')
            }
          },
          defaultDate: value ? new Date(value) : undefined,
        })
      }

      return () => {
        flatpickrRef.current?.destroy()
        flatpickrRef.current = null
      }
    }, [format, id, onChange, value, required])

    return (
      <div className="input-floating">
        <input
          type="text"
          placeholder={props.placeholder}
          className={cn('input input-lg rounded-sm', props.className)}
          id={id}
          ref={ref}
          required={required}
          {...props}
        />
        <span className="absolute right-0 helper-text text-end">{helperText}</span>

        <label className="input-floating-label" htmlFor={id}>
          {props.label}
        </label>
      </div>
    )
  }
)

DatePicker.displayName = 'DatePicker'
