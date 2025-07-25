import { LucideIcon } from 'lucide-react'

export interface PersonalInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: Date
  nationality: string
  passportNumber: string
  emergencyContact: {
    name: string
    phone: string
    relationship: string
  }
  isPrimaryApplicant?: boolean
  relationship?: string // For additional travelers
}

export type PersonalInfoFormState = Partial<PersonalInfo>

export interface TravelDetails {
  destination: string
  departureDate: Date
  returnDate: Date
  tripPurpose: string
  numberOfTravelers: number
  tripDuration: number
}

export type TravelDetailsFormState = Partial<TravelDetails>

export interface CoverageOptions {
  planId: string
  medicalCoverage: number
  tripCancellation: boolean
  baggageCoverage: boolean
  adventureSports: boolean
  preExistingConditions: boolean
  additionalCoverage: string[]
}

export interface PaymentInfo {
  cardNumber: string
  expiryDate: string
  cvv: string
  cardholderName: string
  billingAddress: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  isPrimaryApplicant?: boolean
  relationship?: string
}

export interface Step {
  id: number
  title: string
  description: string
  icon: LucideIcon
}

export type ProgressStepperProps = {
  currentStep: number
  totalSteps?: number
  adjustedSteps: Step[]
}
