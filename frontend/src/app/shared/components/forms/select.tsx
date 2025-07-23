import React from 'react'

import { SelectOption } from '../../types/select.type'
import { cn } from '../../utils/css.utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: SelectOption[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, options, ...props }, ref) => {
    return (
      <div className="select-floating w-full">
        <select className={cn('select select-lg', props.className)} id={id} ref={ref} {...props}>
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
