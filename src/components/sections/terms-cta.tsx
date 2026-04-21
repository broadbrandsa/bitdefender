'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'
import { DollarSign } from 'lucide-react'

export default function TermsCTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-bd-slate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Terms */}
        <AnimateOnScroll animation="fade-up">
          <div className="mb-20">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-white text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Terms &amp; Conditions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground leading-[0.95] mb-8">
              Terms &amp; Conditions
            </h2>

            <div className="max-w-3xl space-y-6 text-sm text-muted-foreground leading-relaxed">
              <AnimateOnScroll animation="scale-in" delay={0.04}>
                <div className="p-8 rounded-2xl bg-white border border-border/50 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-bd-blue/10 flex items-center justify-center mx-auto mb-5">
                    <DollarSign className="w-7 h-7 text-bd-blue" strokeWidth={1.5} />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    To be discussed during the consultation phase. Pricing is based on selection
                    and approval, with licensing billed monthly in advance. All charges exclude
                    any Tax &amp; Duties. Prices quoted in USD.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-left mt-6">
                    <div className="p-4 rounded-xl bg-bd-slate border border-border/50 hover:border-bd-blue/20 hover:shadow-sm transition-all duration-200">
                      <h4 className="text-sm font-bold text-foreground mb-1">Payment Terms</h4>
                      <p className="text-xs text-muted-foreground">
                        Licensing billed monthly in advance, invoiced and payable within 21 days
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-bd-slate border border-border/50 hover:border-bd-blue/20 hover:shadow-sm transition-all duration-200">
                      <h4 className="text-sm font-bold text-foreground mb-1">Setup Charges</h4>
                      <p className="text-xs text-muted-foreground">
                        80% Deposit and 20% invoiced prior to launch
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.08}>
                <div className="p-6 rounded-2xl bg-white border border-border/50">
                  <h3 className="text-base font-bold text-foreground mb-3">General</h3>
                  <p>
                    The partner hereby appoints Digital Resilience as its Agent for the performance
                    of the services to be rendered as stipulated in this proposal. All Digital
                    Resilience proposals are valid for fifteen (15) days.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.14}>
                <div className="p-6 rounded-2xl bg-white border border-border/50">
                  <h3 className="text-base font-bold text-foreground mb-3">Payment Terms</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-bd-blue mt-0.5">•</span>
                      All charges exclude any Tax &amp; Duties
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bd-blue mt-0.5">•</span>
                      Prices quoted are in USD
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bd-blue mt-0.5">•</span>
                      Licensing investment based on selection and approval with licensing and billed monthly in advance or in advance per months, invoiced and payable within 21 days
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-bd-blue mt-0.5">•</span>
                      One Off Setup Charges: 80% Deposit and 20% invoiced prior to launch
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <div className="p-6 rounded-2xl bg-white border border-border/50">
                  <h3 className="text-base font-bold text-foreground mb-3">Contract</h3>
                  <p>
                    The contract period is based on a (36) month agreement. A draft MSA (Master Services Agreement)
                    and SOW (Schedule of Work) schedule shall be shared for review should this proposal be approved.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll animation="scale-in" delay={0.1}>
          <div className="relative p-10 lg:p-16 rounded-3xl bg-bd-navy overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(0,109,240,0.10) 0%, transparent 60%)',
                }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-white leading-[0.95] mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/55 max-w-xl mb-8 leading-relaxed">
                Written authorization will be required to commence the set-up and deployment
                of any licensed platforms or services. Contact us to take the first step.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="mailto:liamg@digitalresilience.co.za"
                  className="inline-flex items-center justify-center bg-bd-red hover:bg-bd-red/90 text-white font-semibold px-8 h-12 text-base rounded-xl transition-colors"
                >
                  Contact Us
                </a>
              </div>

              <div className="text-sm text-white/30">
                <p>
                  <strong className="text-white/50">Contact:</strong>{' '}
                  Liam Le Goff, Digital Resilience —{' '}
                  <a href="mailto:liamg@digitalresilience.co.za" className="text-bd-blue hover:underline">
                    liamg@digitalresilience.co.za
                  </a>
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
