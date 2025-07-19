'use client'

import { mockPlans } from '@/app/shared/mock/plans'
import { Plan } from '@/app/shared/types/plan.type'

import PlanCard from './plan-card/_index'

export default function PlanSection() {
  const plans: Plan[] = mockPlans

  function handleSelectPlan(id: string) {
    console.log(id)
  }

  return (
    <section className="container mx-auto px-4 pb-12 -mt-16 h-full">
      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan: Plan) => (
          <PlanCard key={plan.id} plan={plan} onSelectPlan={handleSelectPlan}></PlanCard>
        ))}
      </div>
    </section>
  )
}
