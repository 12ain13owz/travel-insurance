/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'

import {
  CoverageOptions,
  PaymentInfo,
  PersonalInfo,
  TravelDetails,
} from '@/app/shared/types/purchase.type'

import PersonalInfoForm from './forms/personal-info-form'
import TravelDetailsForm from './forms/travel-details-form'
import ProgressStepper from './progress'

interface PurchaseSectionProps {
  onSubmit: (data: {
    primaryApplicant: PersonalInfo
    additionalTravelers: PersonalInfo[]
    travelDetails: TravelDetails
    coverageOptions: CoverageOptions
    paymentInfo: PaymentInfo
  }) => void
  loading?: boolean
  preSelectedPlan?: string | null
}

export default function PurchaseSection({
  onSubmit,
  loading = false,
  preSelectedPlan,
}): PurchaseSectionProps {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formData, setFormData] = useState({
    personalInfo: {} as PersonalInfo,
    additionalTravelers: [] as PersonalInfo[],
    travelDetails: {} as TravelDetails,
    coverageOptions: preSelectedPlan
      ? ({ planId: preSelectedPlan } as CoverageOptions)
      : ({} as CoverageOptions),
    paymentInfo: {} as PaymentInfo,
  })

  const nextStep = () => {
    const maxSteps = formData.travelDetails.numberOfTravelers > 1 ? 6 : 5
    if (currentStep < maxSteps) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const updateFormData = (step: keyof typeof formData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }))

    nextStep()
  }

  const updateAdditionalTravelers = (travelers: PersonalInfo[]) => {
    setFormData((prev) => ({
      ...prev,
      additionalTravelers: travelers,
    }))
  }

  const handleSubmit = () => {
    onSubmit(formData)
  }

  const getTotalSteps = () => {
    return formData.travelDetails.numberOfTravelers > 1 ? 6 : 5
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoForm
            initialData={formData.personalInfo}
            onNext={(data: PersonalInfo) => updateFormData('personalInfo', data)}
          />
        )

      case 2:
        return <TravelDetailsForm></TravelDetailsForm>

      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-12">
      {/* Progress Stepper */}
      <ProgressStepper currentStep={currentStep} totalSteps={getTotalSteps()}></ProgressStepper>

      {/* Form Content */}
      {renderStepContent()}
    </div>
  )
}
