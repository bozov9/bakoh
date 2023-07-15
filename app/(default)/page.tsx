export const metadata = {
  title: 'Home - BAKOH',
  description: 'Your contstruction service with more than 8 years experience.',
  icons: '/bakoh/images/logo.jpeg'
}

import Hero from '@/components/hero'
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
