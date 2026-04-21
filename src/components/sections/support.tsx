'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'

export default function Support() {
  return (
    <section className="py-24 lg:py-32 bg-bd-slate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-white text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Support
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95]">
              Customer Support
              <br />
              <span className="text-bd-blue">Structure</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0.1}>
          <div className="p-8 rounded-2xl bg-white border border-border/50 mb-8">
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              All technical product enquiries are handled by Bitdefender&apos;s own engineering team, with a
              clearly defined escalation path in place. To deliver a seamless end-to-end experience for
              subscribers, we recommend partners take ownership of Tier 1 and Tier 2 support — full training
              is included to enable this.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  tier: 'Tier 1',
                  desc: 'Front-line support covering common issues such as installation assistance, removal tool guidance, and other well-documented resolutions.',
                  owner: 'Partner',
                },
                {
                  tier: 'Tier 2',
                  desc: 'Escalated cases from Tier 1 — typically more complex situations involving third-party software conflicts or compatibility challenges.',
                  owner: 'Partner',
                },
                {
                  tier: 'Tier 3',
                  desc: 'Deep technical escalations that require engineering input — for instance product defects or underlying design-level issues.',
                  owner: 'Bitdefender',
                },
              ].map((t, i) => (
                <AnimateOnScroll key={t.tier} animation="fade-up" delay={0.15 + i * 0.08}>
                  <div className="p-5 rounded-xl bg-bd-slate border border-border/50 hover:border-bd-blue/20 transition-all duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-bd-blue">{t.tier}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-white px-2 py-0.5 rounded-full">
                        {t.owner}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0.3}>
          <div className="p-6 rounded-2xl border border-bd-blue/10 bg-bd-blue/[0.02]">
            <h4 className="text-sm font-bold text-foreground mb-3">General Support Rules</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Front-line assistance — including billing and payment-related enquiries — sits with the partner.
              Anything relating to how Bitdefender products are digitally delivered through the partner is also
              owned by the partner. Product-level technical matters remain with Bitdefender, with all escalations
              routed back through the partner.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
