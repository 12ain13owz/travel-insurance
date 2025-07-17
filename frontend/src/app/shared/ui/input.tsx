import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id?: string
  name: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel'
  placeholder?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export default function Input({
  label,
  id,
  name,
  type = 'text',
  placeholder = ' ',
  required = false,
  disabled = false,
  className = '',
  ...rest
}: InputProps) {
  const defaultInputClass = 'w-full input'

  return (
    <label className="floating-label">
      <span>{label}</span>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`${defaultInputClass} ${className}`}
        disabled={disabled}
        required={required}
        {...rest}
      />
    </label>
  )
}
