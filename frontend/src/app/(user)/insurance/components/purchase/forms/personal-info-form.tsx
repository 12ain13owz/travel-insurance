import { ArrowRight, User } from 'lucide-react'
import { useState } from 'react'

import { DatePicker } from '@/app/shared/components/forms/date-picker'
import { Input } from '@/app/shared/components/forms/input'
import { Select } from '@/app/shared/components/forms/select'
import { PurchaseCard } from '@/app/shared/components/ui/purchase-card/purchase-card'
import { NATIONALITY, RELATIONSHIP } from '@/app/shared/const/select.const'
import { helperTexts, validationPatterns } from '@/app/shared/const/validation.const'
import { PersonalInfo } from '@/app/shared/types/purchase.type'

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

export default function PersonalInfoForm({ onNext, initialData = {} }: PersonalInfoFormProps) {
  const dob = initialData.dateOfBirth ? new Date(initialData.dateOfBirth).toString() : ''

  const [firstName, setFirstName] = useState(initialData.firstName || '')
  const [lastName, setLastName] = useState(initialData.lastName || '')
  const [email, setEmail] = useState(initialData.email || '')
  const [phone, setPhone] = useState(initialData.phone || '')
  const [dateOfBirth, setDateOfBirth] = useState(dob)
  const [nationality, setNationality] = useState(initialData.nationality || '')
  const [passportNumber, setPassportNumber] = useState(initialData.passportNumber || '')

  // Emergency contact state can be added here if needed
  const [emergencyContactName, setEmergencyContactName] = useState(
    initialData.emergencyContact?.name || ''
  )
  const [emergencyContactPhone, setEmergencyContactPhone] = useState(
    initialData.emergencyContact?.phone || ''
  )
  const [emergencyContactRelationship, setEmergencyContactRelationship] = useState(
    initialData.emergencyContact?.relationship || ''
  )

  const handleDateOfBirth = (date: string) => setDateOfBirth(date)
  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData: PersonalInfo = {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      nationality,
      passportNumber,
      emergencyContact: {
        name: emergencyContactName,
        phone: emergencyContactPhone,
        relationship: emergencyContactRelationship,
      },
    }

    onNext(formData)
  }

  const handleMockClick = (data: PersonalInfo) => {
    setFirstName(data.firstName)
    setLastName(data.lastName)
    setEmail(data.email)
    setPhone(data.phone)
    setDateOfBirth(data.dateOfBirth)
    setNationality(data.nationality)
    setPassportNumber(data.passportNumber)
    setEmergencyContactName(data.emergencyContact?.name || '')
    setEmergencyContactPhone(data.emergencyContact?.phone || '')
    setEmergencyContactRelationship(data.emergencyContact?.relationship || '')
  }

  return (
    <PurchaseCard {...header}>
      <PersonalInfoMock onClick={(data) => handleMockClick(data)}></PersonalInfoMock>

      <form onSubmit={handleNext} className="flex flex-col space-y-8">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-4">
            <Input
              id="firstName"
              label="First Name"
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            ></Input>

            <Input
              id="lastName"
              label="Last Name"
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            ></Input>

            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern={validationPatterns.EMAIL}
            ></Input>

            <Input
              id="phone"
              label="Phone number"
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern={validationPatterns.PHONE}
              helperText={helperTexts.PHONE}
            ></Input>

            <DatePicker
              id="dateOfBirth"
              label="Date of Birth"
              placeholder="Select date of birth"
              value={dateOfBirth}
              onChange={handleDateOfBirth}
              required
            ></DatePicker>

            <Select
              id="nationality"
              label="Nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              options={NATIONALITY}
              required
            ></Select>

            <Input
              id="passportNumber"
              label="Passport Number"
              type="text"
              placeholder="Enter passport number"
              wrapperClass="col-span-2"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              required
            ></Input>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-xl font-semibold">Emergency Contact (Optional)</h3>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
            <Input
              id="emergencyContactName"
              label="Contact Name"
              type="text"
              placeholder="Enter contact name"
              value={emergencyContactName}
              onChange={(e) => setEmergencyContactName(e.target.value)}
            ></Input>

            <Input
              id="emergencyContactPhone"
              label="Phone number"
              placeholder="Enter phone number"
              value={emergencyContactPhone}
              onChange={(e) => setEmergencyContactPhone(e.target.value)}
              pattern={validationPatterns.PHONE}
              helperText={helperTexts.PHONE}
            ></Input>

            <Select
              id="emergencyContactRelationship"
              label="Relationship"
              value={emergencyContactRelationship}
              onChange={(e) => setEmergencyContactRelationship(e.target.value)}
              options={RELATIONSHIP}
            ></Select>
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
