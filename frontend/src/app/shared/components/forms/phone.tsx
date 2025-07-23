import { useMask } from '@react-input/mask'
import React from 'react'

import { cn } from '../../utils/css.utils'

interface PhoneProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  wrapperClass?: string
}

export const Phone = React.forwardRef<HTMLInputElement, PhoneProps>(
  ({ label, helperText, wrapperClass, id, ...props }, ref) => {
    const inputRef = useMask({
      mask: '+66 __-___-____',
      replacement: { _: /\d/ },
    })

    return (
      <div className={cn('input-floating w-full', wrapperClass)}>
        <input
          type="tel"
          placeholder={props.placeholder}
          className={cn('input input-lg rounded-sm', props.className)}
          id={id}
          ref={inputRef}
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

Phone.displayName = 'Input'
