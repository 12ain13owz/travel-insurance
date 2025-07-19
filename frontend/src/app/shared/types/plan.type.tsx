import { LucideIcon } from 'lucide-react'

export interface Plan {
  id: string
  name: string
  price: number
  coverage: string
  description: string
  features: string[]
  highlights: string[]
  color: string
  icon: LucideIcon
  gradient: string
  popular?: boolean
  maxCoverage: number
  regions: string[]
}
