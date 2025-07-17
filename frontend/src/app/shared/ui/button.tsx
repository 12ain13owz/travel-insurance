import { LucideIcon } from 'lucide-react'
import { forwardRef, ReactNode } from 'react'

// Defining button variants
const VARIANTS = {
  default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  success: 'bg-green-600 text-white hover:bg-green-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
} as const

// Defining animation styles
const ANIMATIONS = {
  base: 'transition-all duration-300 ease-in-out',
  hover: 'hover:shadow-lg',
} as const

// Type definitions
type ButtonVariant = keyof typeof VARIANTS
type IconPosition = 'left' | 'right'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
  className?: string
  icon?: LucideIcon
  iconPosition?: IconPosition
  disabled?: boolean
}

// Reusable Button Component
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      variant = 'default',
      className = '',
      icon: Icon,
      iconPosition = 'right',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const variantStyles = VARIANTS[variant] || VARIANTS.primary
    const animationStyles = `${ANIMATIONS.base} ${ANIMATIONS.hover}`
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

    return (
      <button
        ref={ref}
        type={type}
        className={` inline-flex items-center px-8 py-4 text-xl font-bold rounded-full ${variantStyles} ${animationStyles} ${disabledStyles} ${className}`}
        disabled={disabled}
        {...props}
      >
        <span className="flex items-center gap-2">
          {Icon && iconPosition === 'left' && <Icon className="h-6 w-6" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="h-6 w-6" />}
        </span>
      </button>
    )
  }
)
Button.displayName = 'Button'
