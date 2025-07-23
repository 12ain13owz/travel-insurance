import { LucideIcon } from 'lucide-react'

import { cn } from '@/app/shared/utils/css.utils'

type ButtonType = 'button' | 'submit'
type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ButtonStyle = 'soft' | 'outline' | 'gradient'

interface ButtonProps {
  type?: ButtonType
  variant?: ButtonVariant
  size?: ButtonSize
  styleType?: ButtonStyle
  isWide?: boolean
  isBlock?: boolean
  isRounded?: boolean
  isDisabled?: boolean
  isActive?: boolean
  className?: string
  children: React.ReactNode
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant,
  size = 'md',
  styleType = '',
  isWide = false,
  isBlock = false,
  isRounded = false,
  isDisabled = false,
  isActive = false,
  className = '',
  children,
  icon: Icon,
  iconPosition = 'left',
  onClick,
}) => {
  const baseClasses = 'btn flex items-center justify-center gap-2'
  const variantClasses = variant ? `btn-${variant}` : ``
  const styleTypeClasses = styleType ? `btn-${styleType}` : ''
  const sizeClasses = {
    xs: 'btn-xs text-xs',
    sm: 'btn-sm text-sm',
    md: '',
    lg: 'btn-lg text-lg',
    xl: 'btn-xl text-xl',
  }[size]
  const wideClass = isWide ? 'btn-wide' : ''
  const blockClass = isBlock ? 'btn-block' : ''
  const roundedClass = isRounded ? 'rounded-full' : ''
  const disabledClass = isDisabled ? 'btn-disabled  cursor-not-allowed' : ''
  const activeClass = isActive ? 'btn-active' : ''

  const classes = cn(
    baseClasses,
    variantClasses,
    styleTypeClasses,
    sizeClasses,
    wideClass,
    blockClass,
    roundedClass,
    disabledClass,
    activeClass,
    className
  )

  return (
    <button type={type} className={classes} onClick={onClick} disabled={isDisabled}>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </button>
  )
}
