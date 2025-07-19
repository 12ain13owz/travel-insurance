import { cn } from '@/app/shared/utils/css.utils'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles effect */}
      <div
        className={cn(
          // Positioning and sizing
          'absolute top-1/4 left-1/4 w-2 h-2',
          // Styling
          'rounded-full opacity-0 bg-blue-400/30',
          // Animation
          'transition-all duration-700 delay-100',
          'group-hover:opacity-100 group-hover:animate-bounce'
        )}
      />
      <div
        className={cn(
          // Positioning and sizing
          'absolute top-3/4 right-1/4 w-1.5 h-1.5',
          // Styling
          'rounded-full opacity-0 bg-purple-400/30',
          // Animation
          'transition-all duration-700 delay-300',
          'group-hover:opacity-100 group-hover:animate-bounce'
        )}
      />
      <div
        className={cn(
          // Positioning and sizing
          'absolute top-1/2 right-1/3 w-1 h-1',
          // Styling
          'rounded-full opacity-0 bg-pink-400/30',
          // Animation
          'transition-all duration-700 delay-500',
          'group-hover:opacity-100 group-hover:animate-bounce'
        )}
      />
      {/* Animated background glow */}
      <div
        className={cn(
          // Positioning
          'absolute inset-0',
          // Styling
          'bg-gradient-to-r opacity-0 from-blue-400/20 via-purple-400/20 to-pink-400/20',
          // Animation
          'group-hover:opacity-100 transition-opacity duration-500 blur-xl'
        )}
      />
    </div>
  )
}
