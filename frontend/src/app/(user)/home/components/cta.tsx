import { ArrowRight } from 'lucide-react'

import { LinkButton } from '@/app/shared/components/ui/link-button/link-button'
import { navigation } from '@/app/shared/const/navigation.const'

const title = 'Ready to Travel Safely?'
const description =
  'Choose a travel insurance plan that meets all your needs and budget, for every worry-free adventure.'
const buttonText = 'Explore Plans'

export default function CTASection() {
  return (
    <section className="bg-blue-700 py-20 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{title}</h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">{description}</p>

        <LinkButton href={navigation.PLANS} icon={ArrowRight} className="text-blue-500">
          {buttonText}
        </LinkButton>
      </div>
    </section>
  )
}
