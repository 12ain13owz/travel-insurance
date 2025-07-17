import { Clock, Globe, LucideIcon, Shield } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

type FeatureCardProps = Feature

const title = 'Why Choose Our Travel Insurance?'
const features: Feature[] = [
  {
    icon: Globe,
    title: 'Worldwide Coverage',
    description:
      'Protection that follows you anywhere in the world with 24/7 emergency assistance.',
  },
  {
    icon: Shield,
    title: 'Comprehensive Protection',
    description: 'Coverage for medical emergencies, trip cancellations, lost baggage, and more.',
  },
  {
    icon: Clock,
    title: 'Instant Coverage',
    description:
      'Get insured immediately with our easy online process and digital policy delivery.',
  },
]

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl">
      <Icon className="h-12 w-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature: Feature, index: number) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
