import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import AboutDigitalResilience from '@/components/sections/about-digital-resilience'
import AboutBitdefender from '@/components/sections/about-bitdefender'
import Awards from '@/components/sections/awards'
import IndustryPartners from '@/components/sections/industry-partners'
import PlatformFeatures from '@/components/sections/platform-features'
import StrategicPackaging from '@/components/sections/strategic-packaging'
import BitdefenderOffering from '@/components/sections/bitdefender-offering'
import BusinessBenefits from '@/components/sections/business-benefits'
import MarketingGTM from '@/components/sections/marketing-gtm'
import ExpandCTA from '@/components/sections/expand-cta'
import UserJourney from '@/components/sections/user-journey'
import RestAPI from '@/components/sections/rest-api'
import Support from '@/components/sections/support'
import Pricing from '@/components/sections/pricing'
import Commercials from '@/components/sections/commercials'
import TermsCTA from '@/components/sections/terms-cta'
import Footer from '@/components/sections/footer'
import ScrollToTop from '@/components/scroll-to-top'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutDigitalResilience />
      <AboutBitdefender />
      <Awards />
      <IndustryPartners />
      <PlatformFeatures />
      <StrategicPackaging />
      <BitdefenderOffering />
      <BusinessBenefits />
      <MarketingGTM />
      <ExpandCTA />
      <UserJourney />
      <RestAPI />
      <Support />
      <Pricing />
      <Commercials />
      <TermsCTA />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
