'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'

const partners = [
  'Orange', 'WINDTRE', 'NETGEAR', 'CKH', 'Swisscom', 'Telefónica',
  'SFR', 'Zyxel Networks', 'Viasat', 'Altice', 'TELE2', 'Telenet',
  'Liberty Global', 'T1 ISP', 'Proximus',
]

export default function IndustryPartners() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Testimonials */}
          <div>
            <AnimateOnScroll animation="fade-up">
              <Badge
                variant="outline"
                className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
              >
                Industry Acknowledgement
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground leading-[0.95] mb-10">
                Trusted by Leading
                <br />
                Service Providers
              </h2>
            </AnimateOnScroll>

            <div className="space-y-8">
              <AnimateOnScroll animation="slide-left" delay={0.1}>
                <blockquote className="p-6 rounded-2xl bg-bd-slate border border-border/50 hover:border-bd-blue/20 hover:shadow-sm transition-all duration-200">
                  <p className="text-base text-foreground leading-relaxed mb-4 italic">
                    &ldquo;<strong className="text-bd-blue not-italic">Bitdefender is the best in the market today.</strong>{' '}
                    We looked at three, four different options and we all came to the same,
                    unanimous conclusion, that Bitdefender is the most robust out there
                    for consumer usage.&rdquo;
                  </p>
                  <footer className="text-sm">
                    <strong className="text-foreground">Patrick Lo</strong>
                    <span className="text-muted-foreground"> — Co-Founder, NETGEAR</span>
                  </footer>
                </blockquote>
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-left" delay={0.18}>
                <blockquote className="p-6 rounded-2xl bg-bd-slate border border-border/50 hover:border-bd-blue/20 hover:shadow-sm transition-all duration-200">
                  <p className="text-base text-foreground leading-relaxed mb-4 italic">
                    &ldquo;We&apos;ve chosen to partner with Bitdefender, because the quality of the
                    technologies clearly responds to customers&apos; needs and the company&apos;s offering
                    for ISPs was{' '}
                    <strong className="text-bd-blue not-italic">the most versatile</strong> we found.&rdquo;
                  </p>
                  <footer className="text-sm">
                    <strong className="text-foreground">Grégory Rabuel</strong>
                    <span className="text-muted-foreground"> — CEO, SFR</span>
                  </footer>
                </blockquote>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Partner logos grid */}
          <div>
            <AnimateOnScroll animation="fade-up" delay={0.05}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
                Partner Network
              </h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-3 gap-3">
              {partners.map((partner, i) => (
                <AnimateOnScroll key={partner} animation="scale-in" delay={0.05 + i * 0.03}>
                  <div className="flex items-center justify-center p-5 rounded-xl bg-bd-slate border border-border/50 min-h-[72px] hover:border-bd-blue/20 hover:shadow-sm transition-all duration-200">
                    <span className="text-sm font-semibold text-muted-foreground text-center">
                      {partner}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
