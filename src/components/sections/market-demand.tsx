import { Badge } from '@/components/ui/badge'

export default function MarketDemand() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: context */}
          <div>
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Market Opportunity
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-6">
              Internet Security
              <br />
              Demand is{' '}
              <span className="text-bd-blue">Growing</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Consumers are increasingly aware of needing protection but lack
              the understanding to make informed decisions for their digital protection.
              Consumers are spending more time online with an increasing portion of
              that activity coming from mobile devices.
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              As the world continues to grow more connected, cyberthreats are becoming
              more sophisticated. They exploit factors beyond the user&apos;s control, such as
              security vulnerabilities in their smart devices and online services. Attacks
              are automated and frequent. Simply &ldquo;being careful&rdquo; isn&apos;t enough anymore.
            </p>
          </div>

          {/* Right: concerns */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-bd-blue mb-6">
              Key Areas of Concern for Consumers
            </h3>
            <div className="space-y-3">
              {[
                { icon: '🏦', text: 'Credit Card or Bank Fraud' },
                { icon: '🦠', text: 'Device being infected with a virus' },
                { icon: '🔓', text: 'Unauthorized access to devices' },
                { icon: '📷', text: 'Unauthorized photo/information sharing' },
                { icon: '💾', text: 'Permanently losing important files' },
                { icon: '✉️', text: 'Compromised Email Identity' },
              ].map((concern) => (
                <div
                  key={concern.text}
                  className="flex items-center gap-4 p-4 rounded-xl bg-bd-slate border border-border/50"
                >
                  <span className="text-xl">{concern.icon}</span>
                  <span className="text-sm font-medium text-foreground">{concern.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl border-2 border-bd-blue/15 bg-bd-blue/[0.03]">
              <h4 className="text-sm font-bold uppercase tracking-wider text-bd-blue mb-3">
                Target Market
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-bd-blue mt-1">•</span>
                  All device owners interested in Internet Security, securing online identity, and digital wellness
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bd-blue mt-1">•</span>
                  Parents requiring parental control solutions to monitor and manage family online activity
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bd-blue mt-1">•</span>
                  Small Businesses that cannot afford enterprise-grade protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
