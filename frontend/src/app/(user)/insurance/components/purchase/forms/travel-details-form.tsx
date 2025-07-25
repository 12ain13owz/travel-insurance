'use client'
import { ArrowLeft, ArrowRight, Plane } from 'lucide-react'
import { useState } from 'react'

import { DatePicker } from '@/app/shared/components/forms/date-picker'
import { Select } from '@/app/shared/components/forms/select'
import { PurchaseCard } from '@/app/shared/components/ui/purchase-card/purchase-card'
import { NUMBER_OF_TRAVELERS, REGION, TRIP_PURPOSE } from '@/app/shared/const/select.const'
import { TravelDetails, TravelDetailsFormState } from '@/app/shared/types/purchase.type'

const header = {
  icon: Plane,
  title: 'Travel Details',
  description: 'Tell us about your upcoming journey',
}

interface TravelDetailsFormProps {
  initialData?: Partial<TravelDetails>
  onNext: (data: TravelDetails) => void
  onPrev: () => void
}

export default function TravelDetailsForm({ initialData, onNext, onPrev }: TravelDetailsFormProps) {
  const [formState, setFormState] = useState<TravelDetailsFormState>({})
  const updateFormState = (data: TravelDetailsFormState) =>
    setFormState((prev) => ({ ...prev, ...data }))

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const duration = Math.ceil(
      (formState.returnDate!.getTime() - formState.departureDate!.getTime()) / (1000 * 60 * 60 * 24)
    )
    const formData: TravelDetails = {
      destination: formState.destination as string,
      departureDate: formState.departureDate as Date,
      returnDate: formState.returnDate as Date,
      tripPurpose: formState.tripPurpose as string,
      numberOfTravelers: formState.numberOfTravelers as number,
      tripDuration: duration,
    }

    console.log(formData)
  }

  return (
    <PurchaseCard {...header}>
      <form onSubmit={handleNext} className="flex flex-col gap-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
          <Select
            id="destination"
            label="Destination"
            value={formState.destination}
            options={REGION}
            onChange={(e) => updateFormState({ destination: e.target.value })}
            wrapperClass="col-span-2"
            required
          ></Select>

          <DatePicker
            id="departureDate"
            label="Departure Date"
            value={formState.departureDate?.toString()}
            onChange={(date) => updateFormState({ departureDate: new Date(date) })}
            required
          ></DatePicker>

          <DatePicker
            id="returnDate"
            label="Return Date"
            value={formState.returnDate?.toString()}
            onChange={(date) => updateFormState({ returnDate: new Date(date) })}
            required
          ></DatePicker>

          <Select
            id="tripPurpose"
            label="Purpose of Trip"
            value={formState.tripPurpose}
            options={TRIP_PURPOSE}
            onChange={(e) => updateFormState({ tripPurpose: e.target.value })}
            required
          ></Select>

          <Select
            id="numberOfTravelers"
            label="Number of Travelers"
            value={formState.numberOfTravelers}
            options={NUMBER_OF_TRAVELERS}
            onChange={(e) => updateFormState({ numberOfTravelers: Number(e.target.value) })}
            required
          ></Select>
        </div>

        <div className="flex justify-between">
          <button type="button" className="btn btn-outline btn-secondary btn-lg rounded-sm">
            <ArrowLeft className="h-5 w-5" />
            Back to Personal Info
          </button>

          <button type="submit" className="btn btn-primary btn-lg rounded-sm">
            Continue to Travel Details
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </form>
    </PurchaseCard>
  )
}
