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

export const REGION: SelectOption[] = [
  { value: 'domestic', label: 'Domestic Travel' },
  { value: 'north-america', label: 'North America' },
  { value: 'europe', label: 'Europe' },
  { value: 'asia', label: 'Asia' },
  { value: 'americas', label: 'South America' },
  { value: 'africa', label: 'Africa' },
  { value: 'oceania', label: 'Oceania' },
  { value: 'worldwide', label: 'Worldwide Coverage' },
]

export const TRIP_PURPOSE: SelectOption[] = [
  { value: 'leisure', label: 'Leisure/Tourism' },
  { value: 'business', label: 'Business Travel' },
  { value: 'study', label: 'Study/Education' },
  { value: 'medical', label: 'Medical Treatment' },
  { value: 'family', label: 'Visiting Family' },
  { value: 'transit', label: 'Transit/Stopover' },
  { value: 'other', label: 'Other' },
]

export const NUMBER_OF_TRAVELERS: SelectOption[] = [
  { value: 1, label: '1 Person (Solo Travel)' },
  { value: 2, label: '2 People (Couple)' },
  { value: 3, label: '3 People' },
  { value: 4, label: '4 People (Family)' },
  { value: 5, label: '5 People' },
  { value: 6, label: '6+ People (Group)' },
]
