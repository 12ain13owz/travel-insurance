import { Star } from 'lucide-react'

interface Testimonials {
  rating: number
  text: string
  author: string
  role: string
}

const title = 'What Our Customers Say?'
const testimonials: Testimonials[] = [
  {
    rating: 5,
    text: 'The claims process was incredibly smooth. When I had a medical emergency in Thailand, they took care of everything.',
    author: 'Sarah Johnson',
    role: 'Adventure Traveler',
  },
  {
    rating: 5,
    text: "Best travel insurance I've ever used. Their customer service is exceptional, and the coverage is comprehensive.",
    author: 'Michael Chen',
    role: 'Business Traveler',
  },
  {
    rating: 5,
    text: 'Their instant coverage saved our family vacation. We got insured right at the airport when our flight was delayed.',
    author: 'Emma Davis',
    role: 'Family Traveler',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonials, index: number) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
