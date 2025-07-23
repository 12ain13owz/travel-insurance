import React from 'react'

import { cn } from '../../utils/css.utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  wrapperClass?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, wrapperClass, id, ...props }, ref) => {
    return (
      <div className={cn('input-floating w-full', wrapperClass)}>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={cn('input input-lg rounded-sm', props.className)}
          id={id}
          ref={ref}
          {...props}
        />
        <span className="absolute right-0 helper-text text-end">{helperText}</span>

        <label className="input-floating-label" htmlFor={id}>
          {label}
        </label>
      </div>
    )
  }
)

Input.displayName = 'Input'
