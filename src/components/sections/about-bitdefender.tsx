'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'
import AnimatedCounter from '@/components/animated-counter'

export default function AboutBitdefender() {
  return (
    <section className="py-24 lg:py-32 bg-bd-slate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-white text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              About Bitdefender
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-6">
              A Global Leader
              <br />
              in Cybersecurity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Protecting millions of consumer and business environments since 2001.
              We take pride in our Telco-oriented solutions that include Value-Added Services,
              Core Network Security and Management &amp; Intelligence Platforms, as well as the
              partnerships we established with some of the biggest Service Providers in the world.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { label: 'Headquarters', sublabel: null, value: null, text: 'Bucharest, Romania\nSanta Clara, California' },
            { label: 'Continued Innovation', sublabel: 'patents', value: '440', text: null },
            { label: 'Employees', sublabel: 'More than half are security researchers and engineers', value: '1800', text: null },
            { label: 'Partners', sublabel: 'Qualified partners and resellers distributed in 170 countries', value: '20,000+', text: null },
          ].map((item, i) => (
            <AnimateOnScroll key={item.label} animation="fade-up" delay={0.05 + i * 0.08}>
              <div className="p-6 rounded-2xl bg-white border border-border/50 hover:border-bd-blue/20 hover:shadow-md transition-all duration-300 h-full group">
                <h3 className="text-xs font-bold uppercase tracking-wider text-bd-blue mb-3">
                  {item.label}
                </h3>
                {item.value && (
                  <div className="text-3xl lg:text-4xl font-black text-foreground mb-1">
                    <AnimatedCounter value={item.value} />
                  </div>
                )}
                {item.sublabel && (
                  <p className="text-sm text-muted-foreground">{item.sublabel}</p>
                )}
                {item.text && (
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={0.35}>
          <div className="mt-8 p-6 rounded-2xl bg-white border border-border/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-bd-blue mb-4">
              Worldwide Offices
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div>
                <span className="font-semibold text-foreground">North America:</span>{' '}
                United States — Santa Clara CA, San Antonio TX, Fort Lauderdale FL;
                Canada — Toronto, Vancouver
              </div>
              <div>
                <span className="font-semibold text-foreground">EMEA:</span>{' '}
                United Kingdom, France, Germany, Spain, Denmark, Italy, Sweden, Netherlands
              </div>
              <div>
                <span className="font-semibold text-foreground">UAEAPAC:</span>{' '}
                Australia — Melbourne
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
