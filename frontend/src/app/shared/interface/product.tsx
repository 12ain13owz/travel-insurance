import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface Product {
  id: number
  name: string
  price: string
  unit: string
  description: string
  features: string[]
  highlights: string[]
  color: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  gradient: string
  popular: boolean
}
