import { Badge } from '@/components/ui/badge'

export default function MarketingGTM() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Marketing &amp; Go-to-Market
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-6">
              Craft Your Own
              <br />
              <span className="text-bd-blue">Cybersecurity Offering</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Digital Resilience will work with you on marketing activities and programs
              to support the joint Go to Market plan and launch set up plan. Our focus
              will be to ensure that we drive best value and Return on Investment for
              Customers, your organisation, and Bitdefender.
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              Our solution is tailored to your specific requirements and market strategy.
              Each market has its own set of challenges and Telcos have different needs.
              Your subscribers will receive market-leading protection, regardless of
              which integration model you choose.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-bd-blue mb-4">
              What You Can Expect from Digital Resilience
            </h3>
            {[
              {
                title: 'Always-evolving Programs',
                desc: 'Constantly optimize and improve metrics',
              },
              {
                title: 'Full Go to Market Support',
                desc: 'Strategy development and execution assistance',
              },
              {
                title: 'Billing Mechanism',
                desc: 'Complete billing integration support',
              },
              {
                title: 'Training and Portal Use',
                desc: 'Comprehensive training for your team',
              },
              {
                title: 'End-to-End Customer Journey',
                desc: 'We ensure the complete customer experience',
              },
              {
                title: 'Revenue Opportunity',
                desc: 'A solution designed to generate returns',
              },
              {
                title: 'Go-To-Market Campaign',
                desc: 'Expert support for launching the service',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-bd-slate border border-border/50 flex items-start gap-4"
              >
                <svg className="w-5 h-5 mt-0.5 text-bd-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration models */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              model: 'Bitdefender Solutions',
              desc: 'Deploy Bitdefender-branded solutions directly to your subscribers',
            },
            {
              model: 'Co-branding',
              desc: 'Develop a co-branded solution with your brand front and center',
            },
            {
              model: 'Custom Integration',
              desc: 'Add Bitdefender technology into your own existing solution',
            },
          ].map((m) => (
            <div
              key={m.model}
              className="p-6 rounded-2xl border-2 border-bd-blue/10 bg-bd-blue/[0.02] text-center"
            >
              <h4 className="text-base font-bold text-bd-blue mb-2">{m.model}</h4>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
