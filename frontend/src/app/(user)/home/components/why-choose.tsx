import { HeartPulse, LucideIcon, Sparkles, ThumbsUp, Users } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const title = 'Travel Insurance: Your Trusted Travel Partner'
const description =
  "At Travel Insurance, we understand that travel is a precious experience, and we're here to give you peace of mind on every trip. With a commitment to excellent service and insurance plans that meet all your needs."
const features: Feature[] = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Insurance specialists ready to advise and assist you 24 hours a day.',
  },
  {
    icon: Sparkles,
    title: 'Flexible Plans',
    description:
      "Customize coverage plans to suit all travel styles, whether it's a short trip or a long journey.",
  },
  {
    icon: ThumbsUp,
    title: 'Fast Approval',
    description:
      'Hassle-free approval process. Get your policy instantly through an easy-to-use online system.',
  },
  {
    icon: HeartPulse,
    title: 'Comprehensive Care',
    description:
      'Caring for you from before your trip until its completion, covering medical expenses and emergencies.',
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">{title}</h2>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-16">{description}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <feature.icon className="h-14 w-14 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-lg text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
