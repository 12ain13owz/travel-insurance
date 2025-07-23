'use client'

import { CreditCard, FileText, Plane, Shield, User, Users } from 'lucide-react'

import { Step } from '@/app/shared/types/purchase.type'

import DesktopStepper from './desktop-stepper'
import MobileStepper from './mobile-stepper'
import TabletStepper from './tablet-stepper'

interface ProgressStepperProps {
  currentStep: number
  totalSteps: number
}

const steps: Step[] = [
  { id: 1, title: 'Personal Info', icon: User, description: 'Basic information about you' },
  { id: 2, title: 'Travel Details', icon: Plane, description: 'Your trip information' },
  { id: 3, title: 'Additional Travelers', icon: Users, description: 'Other travelers info' },
  { id: 4, title: 'Coverage Options', icon: Shield, description: 'Select your coverage' },
  { id: 5, title: 'Payment', icon: CreditCard, description: 'Payment information' },
  { id: 6, title: 'Review', icon: FileText, description: 'Review and submit' },
]

export default function ProgressStepper({ currentStep, totalSteps }: ProgressStepperProps) {
  const activeSteps =
    totalSteps === 5
      ? steps.filter((step) => step.id !== 3) // Remove "Additional Travelers" step
      : steps

  // Adjust step IDs for 5-step flow
  const adjustedSteps =
    totalSteps === 5
      ? activeSteps.map((step) => ({
          ...step,
          id: step.id > 3 ? step.id - 1 : step.id,
        }))
      : activeSteps

  return (
    <>
      <MobileStepper
        currentStep={currentStep}
        totalSteps={totalSteps}
        adjustedSteps={adjustedSteps}
      ></MobileStepper>

      <TabletStepper
        currentStep={currentStep}
        totalSteps={totalSteps}
        adjustedSteps={adjustedSteps}
      ></TabletStepper>

      <DesktopStepper currentStep={currentStep} adjustedSteps={adjustedSteps}></DesktopStepper>
    </>
  )
}
