import { Badge } from '@/components/ui/badge'

export default function UserJourney() {
  return (
    <section className="py-24 lg:py-32 bg-bd-slate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            end user would purchase a Bitdefender subscription. The GTM is determined by you,
            in collaboration with Digital Resilience to provide best practices such as attaching
            Bitdefender to Value (Broadband/mobile plans and Tariffs), directly from your website.
            Bitdefender included by default in an opt-out model (Preferred) as some examples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-white border border-border/50">
            <h3 className="text-lg font-bold text-foreground mb-4">API-Driven Provisioning</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You provision the subscription through your APIs, with all provisioning, including
              cancellations being managed directly through your APIs.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-border/50">
            <h3 className="text-lg font-bold text-foreground mb-4">Deployment Timeline</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              It can take as little as <strong className="text-bd-blue font-semibold">3 months</strong> to
              deploy Bitdefender Subscriber Protection Platform. Make the first step today.
            </p>
          </div>
        </div>

        {/* Customer Support */}
        <div className="p-8 rounded-2xl bg-white border border-border/50 mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Customer Support Structure</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
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
            ].map((t) => (
              <div key={t.tier} className="p-5 rounded-xl bg-bd-slate border border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-bd-blue">{t.tier}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-white px-2 py-0.5 rounded-full">
                    {t.owner}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support scope */}
        <div className="p-6 rounded-2xl border border-bd-blue/10 bg-bd-blue/[0.02]">
          <h4 className="text-sm font-bold text-foreground mb-3">General Support Rules</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tier one support including billing and payment queries are managed directly by the partner.
            Queries about the digital delivery of Bitdefender products purchased through the partner
            are provided by the partner, and any product technical queries are managed by Bitdefender,
            with escalations provided through the partner.
          </p>
        </div>

        {/* It's time to expand */}
        <div className="mt-16 p-8 rounded-2xl bg-bd-blue text-white">
          <h3 className="text-xl font-bold mb-4">It&apos;s time to expand.</h3>
          <p className="text-white/75 mb-6 max-w-xl">
            We&apos;ll help you make the best decisions. We work closely with all of our Telco
            partners and provide assistance throughout the entire process of bringing a product to market.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              'Tech & development',
              'Subscriber management',
              'Marketing support',
              'Analytics',
              'Support & maintenance',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                <span className="text-white/40">↳</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
