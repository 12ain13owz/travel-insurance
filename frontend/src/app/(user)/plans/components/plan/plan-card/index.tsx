import { Plan } from '@/app/shared/types/plan.type'
import { cn } from '@/app/shared/utils/css.utils'

import { AnimatedBackground } from './animation-background'
import { Button } from './button'
import { Coverage } from './coverage'
import { Feature } from './feature'
import { Header } from './header'
import { Highlights } from './highlights'
import { PopularBadge } from './popular-badge'

interface PlanCardProps {
  plan: Plan
  onSelectPlan: (id: string) => void
}

export default function PlanCard({ plan, onSelectPlan }: PlanCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-lg shadow-sm border border-gray-200 bg-white',
        'transition-all duration-500',
        'group hover:shadow-2xl',
        plan.popular && 'ring-2 ring-blue-400/50'
      )}
    >
      {plan.popular && <PopularBadge></PopularBadge>}
      <AnimatedBackground></AnimatedBackground>
      <Header plan={plan}></Header>

      <div className="p-8">
        <div className="flex flex-col justify-between lg:h-[660px]">
          <div className="flex flex-col">
            <Highlights plan={plan}></Highlights>
            <Feature plan={plan}></Feature>
          </div>

          <div className="flex flex-col gap-4">
            <Coverage plan={plan}></Coverage>
            <Button plan={plan} onSelectPlan={onSelectPlan}></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
