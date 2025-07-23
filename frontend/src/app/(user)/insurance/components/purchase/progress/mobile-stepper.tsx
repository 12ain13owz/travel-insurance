import React from 'react'

import { ProgressStepperProps } from '@/app/shared/types/purchase.type'
import { cn } from '@/app/shared/utils/css.utils'

export default function MobileStepper({
  currentStep,
  totalSteps,
  adjustedSteps,
}: ProgressStepperProps) {
  return (
    <div className="md:hidden mb-12">
      <div className="flex flex-col items-center">
        {/* Current Step Icon */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-2xl transform scale-110">
            {React.createElement(adjustedSteps[currentStep - 1].icon, { className: 'h-10 w-10' })}
          </div>
          <div className="mt-4 text-center">
            <div className="text-lg font-bold text-blue-600">
              Step {currentStep} of {totalSteps}
            </div>
            <div className="text-xl font-bold text-gray-800 mt-1">
              {adjustedSteps[currentStep - 1].title}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              {adjustedSteps[currentStep - 1].description}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Progress</span>
            <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {adjustedSteps.map((step) => (
            <div
              key={step.id}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                currentStep > step.id
                  ? 'bg-green-500'
                  : currentStep === step.id
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-300'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
