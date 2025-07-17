import { CheckCircle2 } from 'lucide-react'

interface Coverage {
  title: string
  description: string
}

const title = 'Comprehensive Coverage'
const coverages: Coverage[] = [
  {
    title: 'Medical Emergencies',
    description: 'Coverage for medical expenses, hospital stays, and emergency evacuations.',
  },
  {
    title: 'Trip Cancellation',
    description: 'Reimbursement for non-refundable travel expenses if you need to cancel.',
  },
  {
    title: 'Lost Baggage',
    description: 'Compensation for lost, stolen, or damaged baggage during your trip.',
  },
  {
    title: 'Travel Delays',
    description: 'Coverage for additional expenses due to significant travel delays.',
  },
  {
    title: 'Adventure Activities',
    description: 'Protection for a wide range of adventure sports and activities.',
  },
  {
    title: '24/7 Assistance',
    description: 'Round-the-clock support in multiple languages wherever you are.',
  },
]

export default function CoverageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {coverages.slice(0, 3).map((item: Coverage, index: number) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {coverages.slice(3, 6).map((item: Coverage, index: number) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
