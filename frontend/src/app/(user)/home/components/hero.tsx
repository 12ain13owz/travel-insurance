import { ArrowRight } from 'lucide-react'

import { LinkButton } from '@/app/shared/components/ui/link-button/link-button'
import { navigation } from '@/app/shared/const/navigation.const'

const image =
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80'
const title = 'Travel with Complete Peace of Mind'
const description =
  'Comprehensive travel insurance that protects you worldwide. Get instant coverage for your adventures.'
const buttonText = 'View Our Plans'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10">{description}</p>
          <LinkButton href={navigation.PLANS} variant="primary" icon={ArrowRight}>
            {buttonText}
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
