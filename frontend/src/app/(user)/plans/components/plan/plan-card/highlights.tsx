import { Shield } from 'lucide-react'

import { Plan } from '@/app/shared/types/plan.type'
import { cn } from '@/app/shared/utils/css.utils'

interface HighlightsProps {
  plan: Plan
}

export function Highlights({ plan }: HighlightsProps) {
  return (
    <div
      className={cn(
        // Animation
        'transition-all duration-500',
        'group-hover:bg-gradient-to-b group-hover:from-gray-50 group-hover:to-white'
      )}
    >
      <div
        className={cn(
          // Styling
          'bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 mb-4 border border-gray-100',
          // Animation
          'transition-all duration-500 group-hover:shadow-md group-hover:border-blue-200'
        )}
      >
        <div
          className={cn(
            // Layout
            'flex items-center mb-2',
            // Styling
            'font-bold text-gray-800',
            // Animation
            'transition-colors duration-300 group-hover:text-blue-800'
          )}
        >
          <Shield className="h-5 w-5 text-blue-600 mr-2" />
          Plan Highlights
        </div>
        <div className="space-y-2">
          {plan.highlights.map((highlight, index) => (
            <div
              key={index}
              className={cn(
                // Layout
                'flex items-center',
                // Styling
                'text-gray-700',
                // Animation
                'transition-all duration-500 group-hover:translate-x-1'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  // Sizing and styling
                  'w-2 h-2 rounded-full bg-gradient-to-r mr-2 flex-shrink-0',
                  plan.gradient,
                  // Animation
                  'transition-all duration-500 group-hover:shadow-lg'
                )}
              />
              <span
                className={cn(
                  // Styling
                  'text-sm font-medium',
                  // Animation
                  'transition-colors duration-300 group-hover:text-gray-800'
                )}
              >
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
