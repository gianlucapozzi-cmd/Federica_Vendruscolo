import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import BenefitsSection from '@/components/BenefitsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'
import CTAFinalSection from '@/components/CTAFinalSection'
import Footer from '@/components/Footer'
import { ScrollProgressBar } from '@/components/ScrollAnimations'

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      <ScrollProgressBar />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <CTAFinalSection />
      <Footer />
    </main>
  )
}
