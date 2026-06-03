import Hero from '@/components/Hero'
import FeaturedPlants from '@/components/FeaturedPlants'
import Services from '@/components/Services'
import CategoryGrid from '@/components/CategoryGrid'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedPlants />
      <Services />
      <CategoryGrid />
      <Newsletter />
      <Footer />
    </main>
  )
}
