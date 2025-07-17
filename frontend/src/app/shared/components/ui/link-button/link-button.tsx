import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { forwardRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

// Base styles that are always applied
const BASE_STYLES =
  'inline-flex items-center gap-2 px-8 py-4 text-xl font-bold rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg'

// Variant styles
const VARIANTS_STYLES = {
  default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  success: 'bg-green-600 text-white hover:bg-green-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
} as const

// Disabled state styles
const DISABLED_STYLES = 'opacity-50 cursor-not-allowed pointer-events-none'

// Type definitions
type LinkButtonVariant = keyof typeof VARIANTS_STYLES
type IconPosition = 'left' | 'right'

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
  href: string
  variant?: LinkButtonVariant
  className?: string
  icon?: LucideIcon
  iconPosition?: IconPosition
  disabled?: boolean
  prefetch?: boolean
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
}

// Reusable Link Component
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      children,
      href,
      variant = 'default',
      className,
      icon: Icon,
      iconPosition = 'right',
      disabled = false,
      prefetch,
      replace,
      scroll,
      shallow,
      ...props
    },
    ref
  ) => {
    // Build the final className using twMerge
    const linkClassName = twMerge(
      BASE_STYLES,
      VARIANTS_STYLES[variant],
      disabled && DISABLED_STYLES,
      className
    )

    // Build Next.js Link props
    const nextLinkProps = {
      href,
      ...(prefetch !== undefined && { prefetch }),
      ...(replace !== undefined && { replace }),
      ...(scroll !== undefined && { scroll }),
      ...(shallow !== undefined && { shallow }),
    }

    return (
      <Link
        ref={ref}
        className={linkClassName}
        aria-disabled={disabled}
        {...nextLinkProps}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="h-6 w-6" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="h-6 w-6" />}
      </Link>
    )
  }
)

LinkButton.displayName = 'LinkButton'
