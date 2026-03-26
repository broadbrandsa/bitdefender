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
              Bitdefender Technical product queries are managed directly by Bitdefender, with a
              support escalation process provided. For a fully integrated experience, we recommend
              that partners provide tier 1 and tier 2 support to their customers. Training will be provided.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  tier: 'Tier 1',
                  desc: 'Includes solutions to known problems, for example: customer install, removal tool',
                  owner: 'Partner',
                },
                {
                  tier: 'Tier 2',
                  desc: 'Includes escalation of T1 problems where resolution may involve a third-party conflict compatibility issue',
                  owner: 'Partner',
                },
                {
                  tier: 'Tier 3',
                  desc: 'Includes further escalation where engineering would get involved, for example: there is a design issue or a product defect',
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
              Tier one support including billing and payment queries are managed directly by the partner.
              Queries about the digital delivery of Bitdefender products purchased through the partner
              are provided by the partner, and any product technical queries are managed by Bitdefender,
              with escalations provided through the partner.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
