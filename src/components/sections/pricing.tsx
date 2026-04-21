'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'

export default function Pricing() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center">
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
      </div>
    </section>
  )
}
