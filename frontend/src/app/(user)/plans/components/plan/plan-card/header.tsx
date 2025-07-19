import { Plan } from '@/app/shared/types/plan.type'
import { cn } from '@/app/shared/utils/css.utils'

interface HeaderProps {
  plan: Plan
}

export function Header({ plan }: HeaderProps) {
  const Icon = plan.icon

  return (
    <div
      className={cn(
        // Positioning and layout
        'relative p-6 rounded-t-lg overflow-hidden',
        // Styling
        'bg-gradient-to-r text-white',
        plan.gradient,
        // Animation
        'transition-all duration-500',
        'group-hover:bg-gradient-to-br group-hover:from-opacity-90'
      )}
    >
      {/* Animated background elements */}
      <div
        className={cn(
          // Positioning and sizing
          'absolute top-0 right-0 w-24 h-24',
          // Styling
          'bg-white/10 rounded-full',
          // Initial transform
          '-translate-y-12 translate-x-12',
          // Animation
          'transition-transform duration-700',
          'group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:scale-110'
        )}
      />
      <div
        className={cn(
          // Positioning and sizing
          'absolute bottom-0 left-0 w-16 h-16',
          // Styling
          'bg-white/10 rounded-full',
          // Initial transform
          'translate-y-8 -translate-x-8',
          // Animation
          'transition-transform duration-700',
          'group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:scale-110'
        )}
      />
      {/* Sliding light effect */}
      <div
        className={cn(
          // Positioning
          'absolute inset-0',
          // Styling
          'bg-gradient-to-r from-transparent via-white/20 to-transparent',
          // Initial transform
          '-translate-x-full',
          // Animation
          'transition-transform duration-1000 ease-in-out',
          'group-hover:translate-x-full'
        )}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between my-3">
          <Icon className="h-12 w-12 text-white" />
          <div
            className={cn(
              // Layout
              'text-right ml-auto',
              // Animation
              'transform transition-transform duration-300 group-hover:scale-110'
            )}
          >
            <div
              className={cn(
                // Styling
                'text-4xl font-bold',
                // Animation
                'transition-all duration-300 group-hover:text-4xl'
              )}
            >
              ${plan.price}
            </div>
            <div
              className={cn(
                // Styling
                'text-white/80 text-sm',
                // Animation
                'transition-colors duration-300 group-hover:text-white/90'
              )}
            >
              per trip
            </div>
          </div>
        </div>
        <h3
          className={cn(
            // Styling
            'text-3xl font-bold mb-2',
            // Animation
            'transition-all duration-300'
          )}
        >
          {plan.name}
        </h3>
        <p
          className={cn(
            // Styling
            'text-white/90 text-lg font-medium leading-relaxed',
            // Animation
            'transition-colors duration-300 group-hover:text-white'
          )}
        >
          {plan.description}
        </p>
      </div>
    </div>
  )
}
