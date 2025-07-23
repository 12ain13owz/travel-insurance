import { Check } from 'lucide-react'
import React from 'react'

import { ProgressStepperProps } from '@/app/shared/types/purchase.type'
import { cn } from '@/app/shared/utils/css.utils'

export default function TabletStepper({
  currentStep,
  totalSteps,
  adjustedSteps,
}: ProgressStepperProps) {
  return (
    <div className="hidden md:block lg:hidden mb-12">
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white mr-4">
              {React.createElement(adjustedSteps[currentStep - 1].icon, { className: 'h-6 w-6' })}
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">
                {adjustedSteps[currentStep - 1].title}
              </div>
              <div className="text-sm text-gray-600">
                {adjustedSteps[currentStep - 1].description}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-blue-600">
              Step {currentStep} of {totalSteps}
            </div>
            <div className="text-xs text-gray-500">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Mini Step Indicators */}
        <div className="flex justify-center space-x-3">
          {adjustedSteps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300',
                  currentStep > step.id
                    ? 'bg-green-500 text-white'
                    : currentStep === step.id
                    ? 'bg-blue-500 text-white scale-110'
                    : 'bg-gray-300 text-gray-600'
                )}
              >
                {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
              </div>
              <div
                className={cn(
                  'text-xs mt-1 font-medium transition-colors',
                  currentStep === step.id
                    ? 'text-blue-600'
                    : currentStep > step.id
                    ? 'text-green-600'
                    : 'text-gray-400'
                )}
              >
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
