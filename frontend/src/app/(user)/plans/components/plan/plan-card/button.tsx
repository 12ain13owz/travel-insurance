import { ArrowRight } from 'lucide-react'

import { Plan } from '@/app/shared/types/plan.type'
import { cn } from '@/app/shared/utils/css.utils'

interface ButtonProps {
  plan: Plan
  onSelectPlan: (id: string) => void
}

export function Button({ plan, onSelectPlan }: ButtonProps) {
  return (
    <button
      onClick={() => onSelectPlan(plan.id)}
      className={cn(
        'w-full py-3 text-white  font-semibold rounded-lg',
        `bg-gradient-to-r ${plan.gradient} hover:shadow-lg`,
        'transition-all duration-500 transform',
        'group-hover group-hover:shadow-xl group-hover:-translate-y-1'
      )}
    >
      <span className="flex justify-center items-center gap-1 transition-all duration-300 group-hover:tracking-wide">
        Choose {plan.name} Plan
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  )
}
