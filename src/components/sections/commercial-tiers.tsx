'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Basic Security',
    level: 'Foundation',
    features: [
      { name: 'DNS Security', desc: 'Safe surfing blocking malicious sites in your mobile and fixed network' },
      { name: 'Basic Smart Home Protection', desc: 'Identification and safe surfing for all devices in the home' },
    ],
  },
  {
    name: 'Standard Security',
    level: 'Recommended',
    highlight: true,
    features: [
      { name: 'Smart Home Protection', desc: 'Protection of all of your devices in the home and protection of the router' },
      { name: 'Endpoint Security (Windows, macOS)', desc: 'To protect devices when they leave the home' },
      { name: 'VPN', desc: 'Protects your privacy and online presence by encrypting all Internet traffic' },
      { name: 'Parental Control', desc: 'Digital help to parents and extra online safety for children when connected to the home router or mobile network. Filter inappropriate content and limit connectivity time.' },
    ],
  },
  {
    name: 'Advanced Security',
    level: 'Premium',
    features: [
      { name: 'Mobile Security (iOS, Android)', desc: 'Security for online protection, anti phishing, anti-spam, safe online banking, anti theft, social network protection' },
      { name: 'Digital Identity Protection', desc: '24/7 monitoring and alerts if your credentials are exposed in a data breach' },
      { name: 'Password Manager', desc: 'Create and store unique passwords for all of your services' },
    ],
  },
]

export default function CommercialTiers() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Product Tiers
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95]">
              Commercial Offering
              <br />
              for End Customers
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <AnimateOnScroll key={tier.name} animation="fade-up" delay={0.05 + i * 0.1}>
              <div
                className={`rounded-2xl border-2 flex flex-col h-full hover:shadow-md transition-all duration-200 ${
                  tier.highlight
                    ? 'border-bd-blue bg-bd-blue/[0.02] shadow-lg shadow-bd-blue/5'
                    : 'border-border/50 bg-white hover:border-bd-blue/20'
                }`}
              >
                <div className={`p-6 pb-4 ${tier.highlight ? 'border-b-2 border-bd-blue/10' : 'border-b border-border/50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-bd-blue">
                      {tier.level}
                    </span>
                    {tier.highlight && (
                      <span className="px-2 py-0.5 rounded-full bg-bd-blue text-white text-[10px] font-bold uppercase">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                </div>

                <div className="p-6 flex-1 space-y-4">
                  {tier.features.map((feature) => (
                    <div key={feature.name}>
                      <div className="flex items-start gap-2 mb-1">
                        <Check className="w-4 h-4 mt-0.5 text-bd-blue flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-sm font-semibold text-bd-blue">{feature.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground ml-6 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-in" delay={0.3}>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Each tier builds upon the previous — Standard includes all Basic features, and Advanced includes all Standard features.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
