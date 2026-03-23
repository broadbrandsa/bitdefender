'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'
import { Check, User, Building2 } from 'lucide-react'

const hexFeatures = [
  'VPN',
  'Endpoint Security',
  'Digital Identity Protection',
  'OneApp',
  'DNS Security',
  'Parental Control',
  'Mobile Security',
  'Password Manager',
  'Smart Home Protection',
  'Insights Dashboard',
  'Identity Theft Protection',
  'Router Protection',
]

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <AnimateOnScroll animation="fade-up">
            <div>
              <Badge
                variant="outline"
                className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
              >
                The Platform
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-4">
                Introducing
                <br />
                <span className="text-bd-blue">Bitdefender Subscriber Protection Platform</span>
              </h2>
              <p className="text-lg text-bd-blue mb-6 font-medium">
                Your all-in-one, fully-customizable cybersecurity ecosystem
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Multi-layered cybersecurity tailored to your needs, with flexible
                integration and modular design. Offers your subscribers a smooth
                experience, with one single app.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Endpoint Security & Privacy', color: 'bg-bd-red/10 text-bd-red border-bd-red/20' },
                  { label: 'Smart Home Security', color: 'bg-bd-blue/10 text-bd-blue border-bd-blue/20' },
                  { label: 'Network Security', color: 'bg-bd-blue/10 text-bd-blue border-bd-blue/20' },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: feature grid */}
          <div className="grid grid-cols-3 gap-3">
            {hexFeatures.map((feature, i) => (
              <AnimateOnScroll key={feature} animation="scale-in" delay={i * 0.04}>
                <div className="flex items-center justify-center p-4 rounded-xl bg-bd-blue/[0.04] border border-bd-blue/10 text-center min-h-[80px] hover:bg-bd-blue/[0.08] hover:border-bd-blue/20 hover:scale-[1.03] transition-all duration-200 cursor-default">
                  <span className="text-xs font-semibold text-bd-blue leading-tight">
                    {feature}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Consumer vs Provider solutions */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <AnimateOnScroll animation="slide-left" delay={0.1}>
            <div className="p-8 rounded-2xl bg-bd-slate border border-border/50 h-full">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-bd-blue/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-bd-blue" strokeWidth={2} />
                </span>
                Consumer-facing Solutions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Smart Home Protection',
                  'Password Manager',
                  'VPN',
                  'Endpoint Security',
                  'Digital Identity Protection',
                  'DNS Security',
                  'Parental Control',
                  'Mobile Security',
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-bd-blue flex-shrink-0" strokeWidth={2.5} />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-right" delay={0.1}>
            <div className="p-8 rounded-2xl bg-bd-slate border border-border/50 h-full">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-bd-blue/10 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-bd-blue" strokeWidth={2} />
                </span>
                Service Provider-facing Solutions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Intelligence Dashboard',
                  'Traffic Sanitization & Reduction',
                  'Managed Subscription Platform',
                  'Router Protection',
                  'Local DDoS Protection',
                  'Open to external services',
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-bd-blue flex-shrink-0" strokeWidth={2.5} />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
