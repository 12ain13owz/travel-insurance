/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { ArrowRight, User } from 'lucide-react'
import { useState } from 'react'

import { DatePicker } from '@/app/shared/components/forms/date-picker'
import { Input } from '@/app/shared/components/forms/input'
import { Select } from '@/app/shared/components/forms/select'
import { PurchaseCard } from '@/app/shared/components/ui/purchase-card/purchase-card'
import { NATIONALITY, RELATIONSHIP } from '@/app/shared/const/select.const'
import { helperTexts, message, validation } from '@/app/shared/const/validation.const'
import {
  PersonalInfo,
  PersonalInfoFormErrors,
  PersonalInfoFormState,
} from '@/app/shared/types/purchase.type'

import PersonalInfoMock from '../mocks/personal-info-mock'

const header = {
  icon: User,
  title: 'Personal Info',
  description: 'Tell us about the primary applicant (policy holder) and emergency contact',
}

interface PersonalInfoFormProps {
  initialData?: Partial<PersonalInfo>
  onNext: (data: PersonalInfo) => void
}

const validateSchema: Record<keyof PersonalInfoFormErrors, ((value: string) => string | null)[]> = {
  firstName: [validation.required],
  lastName: [validation.required],
  email: [validation.required, validation.email],
  phone: [validation.required, validation.phone],
  dateOfBirth: [validation.required],
}

export default function PersonalInfoForm({ initialData = {}, onNext }: PersonalInfoFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formState, setFormState] = useState<PersonalInfoFormState>({})
  const validateField = (
    key: keyof PersonalInfoFormErrors,
    value: any
  ): string | null | undefined => {
    const rules = validateSchema[key] || []
    for (const rule of rules) {
      const error = rule(value)
      if (error) return error

      return null
    }
  }

  const validateForm = (form: PersonalInfoFormState): Record<string, string> => {
    const newErrors: Record<string, string> = {}
    for (const key in validateSchema) {
      const error = validateField(
        key as keyof PersonalInfoFormErrors,
        form[key as keyof PersonalInfoFormState]
      )
      if (error) newErrors[key] = error
    }
    return newErrors
  }

  const validateChangedFields = (newData: PersonalInfoFormState) => {
    const newErrors = { ...errors }
    for (const key of Object.keys(newData)) {
      const error = validateField(
        key as keyof PersonalInfoFormErrors,
        newData[key as keyof PersonalInfoFormState]
      )
      if (error) newErrors[key] = error
      else delete newErrors[key]
    }

    setErrors(newErrors)
  }

  const validateAllField = () => {
    const newErrors = validateForm(formState)
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const updateFormState = (data: PersonalInfoFormState) => {
    setFormState((prev) => {
      const updatedState = {
        ...prev,
        ...data,
        emergencyContact: data.emergencyContact
          ? { ...prev.emergencyContact, ...data.emergencyContact }
          : prev.emergencyContact,
      }

      validateChangedFields(data)
      return updatedState
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateAllField()) return

    console.log(formState)
  }

  const handleMockClick = (data: PersonalInfo) => {
    updateFormState(data)
  }

  return (
    <PurchaseCard {...header}>
      <PersonalInfoMock onClick={(data) => handleMockClick(data)}></PersonalInfoMock>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
            <Input
              id="firstName"
              label="First Name"
              type="text"
              placeholder="Enter first name"
              value={formState.firstName}
              onChange={(e) => updateFormState({ firstName: e.target.value })}
              validate={[validation.required]}
              errorMessage={errors.firstName}
            ></Input>

            <Input
              id="lastName"
              label="Last Name"
              type="text"
              placeholder="Enter last name"
              value={formState.lastName}
              onChange={(e) => updateFormState({ lastName: e.target.value })}
              validate={[validation.required]}
              errorMessage={errors.lastName}
            ></Input>

            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              value={formState.email}
              onChange={(e) => updateFormState({ email: e.target.value })}
              validate={[validation.required, validation.email]}
              errorMessage={errors.email}
            ></Input>

            <Input
              id="phone"
              label="Phone number"
              type="tel"
              placeholder="Enter phone number"
              value={formState.phone}
              onChange={(e) => updateFormState({ phone: e.target.value })}
              validate={[validation.required, validation.phone]}
              errorMessage={errors.phone}
              helperText={helperTexts.PHONE}
            ></Input>

            <DatePicker
              id="dateOfBirth"
              label="Date of Birth"
              placeholder="Select date of birth"
              value={formState.dateOfBirth?.toString()}
              onChange={(e) => updateFormState({ dateOfBirth: new Date(e) })}
              validate={[validation.required]}
              errorMessage={errors.dateOfBirth}
            ></DatePicker>

            {/* <Select
              id="nationality"
              label="Nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              options={NATIONALITY}
              required
            ></Select> */}

            {/* <Input
              id="passportNumber"
              label="Passport Number"
              type="text"
              placeholder="Enter passport number"
              wrapperClass="col-span-2"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              required
            ></Input> */}
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold">Emergency Contact (Optional)</h3>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
            {/* <Input
              id="emergencyContactName"
              label="Contact Name"
              type="text"
              placeholder="Enter contact name"
              value={emergencyContactName}
              onChange={(e) => setEmergencyContactName(e.target.value)}
            ></Input> */}

            {/* <Input
              id="emergencyContactPhone"
              label="Phone number"
              placeholder="Enter phone number"
              value={emergencyContactPhone}
              onChange={(e) => setEmergencyContactPhone(e.target.value)}
              pattern={validationPatterns.PHONE}
              helperText={helperTexts.PHONE}
            ></Input> */}

            {/* <Select
              id="emergencyContactRelationship"
              label="Relationship"
              value={emergencyContactRelationship}
              onChange={(e) => setEmergencyContactRelationship(e.target.value)}
              options={RELATIONSHIP}
            ></Select> */}
          </div>
        </section>

        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary btn-lg rounded-sm">
            Continue to Travel Details
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </form>
    </PurchaseCard>
  )
}
