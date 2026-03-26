'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'


export default function UserJourney() {
  return (
    <section className="py-24 lg:py-32 bg-bd-slate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-white text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Implementation
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-6">
              User Journey
              <br />
              &amp; <span className="text-bd-blue">Integration</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              The customer user journey starts at your desired point of acquisition, where the
              end user would purchase a Bitdefender subscription.
            </p>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  )
}
