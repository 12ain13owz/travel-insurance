import React from 'react'

import { SelectOption } from '../../types/select.type'
import { cn } from '../../utils/css.utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  placholder?: string
  wrapperClass?: string
  options: SelectOption[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, placholder, wrapperClass, options, ...props }, ref) => {
    return (
      <div className={cn('select-floating w-full', wrapperClass)}>
        <select
          className={cn('select select-lg appearance-non', props.className)}
          id={id}
          ref={ref}
          {...props}
        >
          <option disabled selected>
            {placholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label className="select-floating-label" htmlFor={id}>
          {label}
        </label>
      </div>
    )
  }
)

Select.displayName = 'Select'
