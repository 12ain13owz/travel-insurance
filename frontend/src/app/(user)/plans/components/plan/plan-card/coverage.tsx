import { Plan } from '@/app/shared/types/plan.type'
import { cn } from '@/app/shared/utils/css.utils'

interface CoverageProps {
  plan: Plan
}

export function Coverage({ plan }: CoverageProps) {
  return (
    <div
      className={cn(
        'bg-gray-100 rounded-lg p-3 mb-4',
        'border border-gray-200',
        'transition-all duration-500 group-hover:bg-blue-50 group-hover:shadow-inner'
      )}
    >
      <div
        className={cn(
          'text-md font-semibold text-gray-600 mb-1',
          'transition-colors duration-300 group-hover:text-blue-600'
        )}
      >
        Maximum Coverage
      </div>
      <div
        className={cn(
          'text-xl font-bold text-blue-600 ',
          'transition-all duration-300 group-hover:text-blue-700'
        )}
      >
        {plan.coverage}
      </div>
    </div>
  )
}
