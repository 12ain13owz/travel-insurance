import React from 'react'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean // สามารถเพิ่ม disabled ให้แต่ละ option ได้
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string
  name: string
  defaultValue?: string
  options: SelectOption[]
  required?: boolean
  disabled?: boolean
  className?: string
}

export default function Select({
  id,
  name,
  options,
  defaultValue = '',
  required = false,
  disabled = false,
  className = '',
  ...rest
}: SelectProps) {
  const defaultSelectClass = 'w-full select'

  return (
    <select
      id={id}
      name={name}
      defaultValue={defaultValue}
      className={`${defaultSelectClass} ${className}`}
      disabled={disabled}
      required={required}
      {...rest}
    >
      {options.map((option) => (
        <option
          key={option.value} // ใช้ value เป็น key
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}
