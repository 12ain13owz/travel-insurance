import { Check } from 'lucide-react'

import { Plan } from '@/app/shared/types/plan.type'
import { cn } from '@/app/shared/utils/css.utils'

interface FeatureProps {
  plan: Plan
}

export function Feature({ plan }: FeatureProps) {
  return (
    <div className="space-y-2 mb-6">
      <h4
        className={cn(
          'font-semibold text-gray-800 text-lg ',
          'transition-colors duration-300 group-hover:text-blue-800'
        )}
      >
        Coverage Includes
      </h4>
      {plan.features.map((feature) => (
        <div
          key={feature}
          className="flex gap-x-3 text-gray-600 group-hover:text-gray-700 transition-colors"
        >
          <div className="flex-shrink-0 mt-1">
            <Check className="h-5 w-5 text-green-500" />
          </div>
          <span className="text-sm leading-relaxed">{feature}</span>
        </div>
      ))}
    </div>
  )
}
