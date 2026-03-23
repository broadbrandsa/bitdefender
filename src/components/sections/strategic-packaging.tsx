'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'

const strategies = [
  {
    title: 'Differentiation',
    attachRate: '50–80%',
    description: 'Basic security included for all base & promoted as part of the core service',
    benefits: [
      'Target & switch from competition cyber-savvy customers',
      'Decrease base churn',
      'Included in the plan',
    ],
  },
  {
    title: 'Technology Upgrade',
    attachRate: '20–50%',
    description: 'Embedded as portfolio feature for new technology such as 5G, FTTH, Wifi-6',
    benefits: [
      'Accelerate technology migration',
      'Upsell to new technology on higher ARPU',
      'Included in the plan',
    ],
  },
  {
    title: 'Portfolio Up-tiering',
    attachRate: '5–20%',
    description: 'Hard bundle it in the upper part of the portfolio on top of core services',
    benefits: [
      'Create additional up-tiering reasons and give customers extra reasons to up-sell',
      'Included in the plan',
    ],
  },
  {
    title: 'Portfolio Add-on',
    attachRate: '1–5%',
    description: 'Hard bundle it in the upper part of the portfolio on top of core services',
    benefits: [
      'Targeted campaigns and commercial activities in the push and pull channels',
    ],
  },
]

export default function StrategicPackaging() {
  return (
    <section className="py-24 lg:py-32 bg-bd-slate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-white text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Go-to-Market Strategy
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95]">
              Cybersecurity Strategic
              <br />
              <span className="text-bd-blue">Packaging Options</span>
              <br />
              for Service Providers
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, i) => (
            <AnimateOnScroll key={strategy.title} animation="fade-up" delay={0.05 + i * 0.08}>
              <div className="p-6 rounded-2xl bg-white border border-border/50 flex flex-col h-full hover:border-bd-blue/20 hover:shadow-sm transition-all duration-200">
                <h3 className="text-base font-bold text-bd-blue mb-2">{strategy.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {strategy.description}
                </p>

                <div className="mt-auto">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-bd-blue/10 text-bd-blue text-xs font-bold mb-4">
                    {strategy.attachRate} attach rates
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 mb-2">
                      How to Monetize
                    </p>
                    <ul className="space-y-1.5">
                      {strategy.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <span className="text-bd-blue mt-0.5">↳</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
