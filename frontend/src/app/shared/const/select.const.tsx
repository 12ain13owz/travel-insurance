import { SelectOption } from '../types/select.type'

export const NATIONALITY: SelectOption[] = [
  { value: 'TH', label: 'Thai' },
  { value: 'US', label: 'American' },
  { value: 'CN', label: 'Chinese' },
  { value: 'JP', label: 'Japanese' },
  { value: 'KR', label: 'Korean' },
  { value: 'GB', label: 'British' },
  { value: 'FR', label: 'French' },
  { value: 'DE', label: 'German' },
  { value: 'IN', label: 'Indian' },
  { value: 'VN', label: 'Vietnamese' },
  { value: 'MY', label: 'Malaysian' },
  { value: 'SG', label: 'Singaporean' },
  { value: 'AU', label: 'Australian' },
  { value: 'CA', label: 'Canadian' },
  { value: 'RU', label: 'Russian' },
  { value: 'BR', label: 'Brazilian' },
  { value: 'ZA', label: 'South African' },
  { value: 'OT', label: 'Other' },
] as const

export const RELATIONSHIP: SelectOption[] = [
  { value: 'spouse', label: 'Spouse' },
  { value: 'parent', label: 'Parent' },
  { value: 'child', label: 'Child' },
  { value: 'sibling', label: 'Sibling' },
  { value: 'friend', label: 'Friend' },
  { value: 'other', label: 'Other' },
]
