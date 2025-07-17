import ContactSection from './components/contact'
import CoverageSection from './components/coverage'
import CTASection from './components/cta'
import FAQSection from './components/faq'
import FeatureSection from './components/feature'
import HeroSection from './components/hero'
import StatisticSection from './components/statistic'
import TestimonialsSection from './components/testimonials'
import WhyChooseSection from './components/why-choose'

export default function HomePage() {
  return (
    <>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <WhyChooseSection></WhyChooseSection>
      <StatisticSection></StatisticSection>
      <TestimonialsSection></TestimonialsSection>
      <CoverageSection></CoverageSection>
      <FAQSection></FAQSection>
      <ContactSection></ContactSection>
      <CTASection></CTASection>
    </>
  )
}
