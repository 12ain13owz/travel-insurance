interface FAQ {
  question: string
  answer: string
}

const title = 'Frequently Asked Questions (FAQs)'
const faqs: FAQ[] = [
  {
    question: 'What does travel insurance cover?',
    answer:
      'Generally, our travel insurance covers **emergency medical expenses** abroad, **trip cancellation or delay**, **lost or damaged baggage**, and personal liability. Coverage may vary depending on the plan you choose.',
  },
  {
    question: 'How many days before my trip can I purchase insurance?',
    answer:
      'You can purchase insurance today, and coverage will start on the date specified in your policy. We recommend buying **early** for peace of mind and to cover potential pre-trip cancellations.',
  },
  {
    question: 'What should I do in case of an emergency abroad?',
    answer:
      'The first step is to contact our **24-hour emergency assistance center** using the phone number provided in your policy. Our team is ready to assist you and coordinate with hospitals or relevant agencies.',
  },
  {
    question: 'Can I extend my policy?',
    answer:
      'In some cases, you may be able to extend your policy. Please contact our **customer service** before your policy expires to inquire about renewal terms and procedures.',
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">{title}</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq: FAQ, index: number) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <details>
                <summary className="font-bold text-xl cursor-pointer py-2 text-gray-800 hover:text-blue-600 transition-colors">
                  {faq.question}
                </summary>
                <p className="text-lg text-gray-700 mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
