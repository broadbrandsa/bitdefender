'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'
import { DollarSign } from 'lucide-react'

export default function Pricing() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Investment
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-4">
              Pricing Breakdown
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed pricing will be tailored to your specific requirements and subscriber base.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={0.1}>
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-bd-slate border border-border/50 text-center">
            <div className="w-16 h-16 rounded-2xl bg-bd-blue/10 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-bd-blue" strokeWidth={1.5} />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              To be discussed during the consultation phase. Pricing is based on selection
              and approval, with licensing billed monthly in advance. All charges exclude
              any Tax &amp; Duties. Prices quoted in USD.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-left mt-8">
              <div className="p-4 rounded-xl bg-white border border-border/50 hover:border-bd-blue/20 hover:shadow-sm transition-all duration-200">
                <h4 className="text-sm font-bold text-foreground mb-1">Payment Terms</h4>
                <p className="text-xs text-muted-foreground">
                  Licensing billed monthly in advance, invoiced and payable within 21 days
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-border/50 hover:border-bd-blue/20 hover:shadow-sm transition-all duration-200">
                <h4 className="text-sm font-bold text-foreground mb-1">Setup Charges</h4>
                <p className="text-xs text-muted-foreground">
                  80% Deposit and 20% invoiced prior to launch
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
