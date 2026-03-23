import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import AboutDigitalResilience from '@/components/sections/about-digital-resilience'
import AboutBitdefender from '@/components/sections/about-bitdefender'
import MarketDemand from '@/components/sections/market-demand'
import WillingToPay from '@/components/sections/willing-to-pay'
import PlatformOverview from '@/components/sections/platform-overview'
import PlatformFeatures from '@/components/sections/platform-features'
import FiveReasons from '@/components/sections/five-reasons'
import StrategicPackaging from '@/components/sections/strategic-packaging'
import CommercialTiers from '@/components/sections/commercial-tiers'
import Awards from '@/components/sections/awards'
import IndustryPartners from '@/components/sections/industry-partners'
import BusinessBenefits from '@/components/sections/business-benefits'
import MarketingGTM from '@/components/sections/marketing-gtm'
import UserJourney from '@/components/sections/user-journey'
import Pricing from '@/components/sections/pricing'
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
      <MarketDemand />
      <WillingToPay />
      <PlatformOverview />
      <PlatformFeatures />
      <FiveReasons />
      <StrategicPackaging />
      <CommercialTiers />
      <Awards />
      <IndustryPartners />
      <BusinessBenefits />
      <MarketingGTM />
      <UserJourney />
      <Pricing />
      <TermsCTA />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
