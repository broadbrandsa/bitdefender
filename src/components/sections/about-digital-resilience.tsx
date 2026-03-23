'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'
import { Check } from 'lucide-react'

export default function AboutDigitalResilience() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <AnimateOnScroll animation="fade-up">
            <div>
              <Badge
                variant="outline"
                className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
              >
                Your Partner
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-6">
                Digital
                <br />
                Resilience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Digital Resilience, founded in 2018, is a proud member of the Digital Solutions Group (DSG).
                We offer a comprehensive suite of cyber resilience solutions that ensure business continuity
                in the face of adverse cyber threats.
              </p>
              <p className="text-base text-muted-foreground/80 leading-relaxed">
                We believe that we have an offering that is unmatched in service excellence, flexibility,
                relevance, and cost efficiency. Our strategic approach remains focused on enabling our
                clients to remain aware of and to manage Cyber Security through our SaaS offerings.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right */}
          <div className="space-y-6">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 rounded-2xl bg-bd-slate border border-border/50">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-bd-blue mb-3">
                  Trusted Across Sectors
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We remain a trusted digital supplier to many existing clients within the
                  Financial Services, Telecoms, ICT &amp; Retail sectors. Digital Resilience has
                  exclusive rights from Bitdefender in being the sole distributor across Africa.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-bd-slate border border-border/50 text-center">
                  <div className="text-2xl font-black text-bd-blue mb-1">2018</div>
                  <div className="text-xs text-muted-foreground">Founded</div>
                </div>
                <div className="p-5 rounded-2xl bg-bd-slate border border-border/50 text-center">
                  <div className="text-2xl font-black text-bd-blue mb-1">DSG</div>
                  <div className="text-xs text-muted-foreground">Member of Digital Solutions Group</div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 rounded-2xl border border-bd-blue/15 bg-bd-blue/[0.03]">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-bd-blue mb-3">
                  What We Deliver
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'Full Support for Go to Market Strategy',
                    'Billing Mechanism & Solution Support',
                    'Training and Portal Use',
                    'End-to-end customer journey management',
                    'Always-evolving programs to optimize metrics',
                    'A solution with revenue opportunity',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-bd-blue flex-shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
