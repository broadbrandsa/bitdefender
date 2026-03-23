'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'
import { Shield, Check } from 'lucide-react'

const features = [
  {
    title: 'Smart Home Protection',
    color: 'bg-bd-red',
    bullets: [
      'Protects all connected devices',
      'Covers smart devices',
      'No need for users to install an app',
      'Offers router functionalities: VPN & Parental Control',
    ],
  },
  {
    title: 'Endpoint & Mobile Security',
    color: 'bg-bd-red',
    bullets: [
      'Works on Windows, MacOS, Android, iOS',
      'Protects against all new & existing threats',
      'Offers protection at home & on the go',
      'Award-winning protection & performance',
    ],
  },
  {
    title: 'Privacy Solutions',
    color: 'bg-bd-red',
    bullets: [
      'Help improve online privacy',
      'Allow digital identity management',
      'Protect online accounts',
      'Help protect children from online dangers',
    ],
  },
]

export default function PlatformFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-bd-slate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-white text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Core Capabilities
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95]">
              Three Pillars of Protection
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimateOnScroll key={feature.title} animation="fade-up" delay={0.08 + i * 0.1}>
              <div className="p-8 rounded-2xl bg-white border border-border/50 hover:border-bd-blue/20 hover:shadow-sm transition-all duration-200 h-full">
                <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                  <Shield className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-bd-blue mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-bd-blue mt-0.5 text-xs">↳</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* OneApp */}
        <AnimateOnScroll animation="fade-up" delay={0.3}>
          <div className="mt-8 p-8 rounded-2xl bg-white border border-border/50 hover:border-bd-blue/20 hover:shadow-sm transition-all duration-200">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-bd-red flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-2xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-bd-blue mb-2">The OneApp</h3>
                <p className="text-sm font-semibold text-foreground mb-4">
                  One interface to manage everything
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    'Allows users to quickly check security status & take action',
                    'Always notified & in control',
                    'Makes upgrade and upsell easier',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 mt-0.5 text-bd-blue flex-shrink-0" strokeWidth={2.5} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* SDKs/APIs */}
        <AnimateOnScroll animation="fade-up" delay={0.35}>
          <div className="mt-4 p-6 rounded-2xl bg-bd-blue/[0.04] border border-bd-blue/10">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-bd-blue">SDKs/APIs</span>
              <span className="text-sm text-muted-foreground">
                Ability to integrate with partner ecosystem / app by providing SDK / API based solutions across portfolio.
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
