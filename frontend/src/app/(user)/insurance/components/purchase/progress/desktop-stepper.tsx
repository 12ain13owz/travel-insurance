import { Check } from 'lucide-react'
import React from 'react'

import { ProgressStepperProps } from '@/app/shared/types/purchase.type'
import { cn } from '@/app/shared/utils/css.utils'

export default function DesktopStepper({ currentStep, adjustedSteps }: ProgressStepperProps) {
  return (
    <div className="hidden lg:block mb-12">
      <div className="flex items-center justify-between">
        {adjustedSteps.map((step, index) => {
          const Icon = step.icon
          const isCompleted = currentStep > step.id
          const isCurrent = currentStep === step.id

          return (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 transform',
                    isCompleted
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-500 text-white shadow-lg scale-110'
                      : isCurrent
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 border-blue-500 text-white shadow-lg scale-110'
                      : 'bg-white border-gray-300 text-gray-400 hover:border-gray-400'
                  )}
                >
                  {isCompleted ? <Check className="h-8 w-8" /> : <Icon className="h-8 w-8" />}
                </div>
                <div className="mt-4 text-center">
                  <div
                    className={cn(
                      'text-sm font-bold transition-colors',
                      isCurrent ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                    )}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 max-w-24">{step.description}</div>
                </div>
              </div>
              {index < adjustedSteps.length - 1 && (
                <div
                  className={cn(
                    'flex-1 h-1 mx-4 transition-all duration-500 rounded-full',
                    isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gray-300'
                  )}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
