export const metadata = {
  title: 'Home - BAKOH',
  description: 'Your contstruction service with more than 8 years experience.',
  icons: '/images/logo.jpeg'
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
