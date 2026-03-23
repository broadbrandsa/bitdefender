import { Badge } from '@/components/ui/badge'

const hexFeatures = [
  'VPN',
  'Endpoint Security',
  'Digital Identity Protection',
  'OneApp',
  'DNS Security',
  'Parental Control',
  'Mobile Security',
  'Password Manager',
  'Smart Home Protection',
  'Insights Dashboard',
  'Identity Theft Protection',
  'Router Protection',
]

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              The Platform
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-4">
              Introducing
              <br />
              <span className="text-bd-blue">Bitdefender Subscriber Protection Platform</span>
            </h2>
            <p className="text-lg text-bd-blue mb-6 font-medium">
              Your all-in-one, fully-customizable cybersecurity ecosystem
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Multi-layered cybersecurity tailored to your needs, with flexible
              integration and modular design. Offers your subscribers a smooth
              experience, with one single app.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Endpoint Security & Privacy', color: 'bg-bd-red/10 text-bd-red border-bd-red/20' },
                { label: 'Smart Home Security', color: 'bg-bd-blue/10 text-bd-blue border-bd-blue/20' },
                { label: 'Network Security', color: 'bg-bd-blue/10 text-bd-blue border-bd-blue/20' },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: feature honeycomb grid */}
          <div className="grid grid-cols-3 gap-3">
            {hexFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center justify-center p-4 rounded-xl bg-bd-blue/[0.04] border border-bd-blue/10 text-center min-h-[80px] hover:bg-bd-blue/[0.08] hover:border-bd-blue/20 transition-colors duration-200"
              >
                <span className="text-xs font-semibold text-bd-blue leading-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Consumer vs Provider solutions */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-bd-slate border border-border/50">
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-bd-blue/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-bd-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Consumer-facing Solutions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Smart Home Protection',
                'Password Manager',
                'VPN',
                'Endpoint Security',
                'Digital Identity Protection',
                'DNS Security',
                'Parental Control',
                'Mobile Security',
              ].map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-3.5 h-3.5 text-bd-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-bd-slate border border-border/50">
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-bd-blue/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-bd-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Service Provider-facing Solutions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Intelligence Dashboard',
                'Traffic Sanitization & Reduction',
                'Managed Subscription Platform',
                'Router Protection',
                'Local DDoS Protection',
                'Open to external services',
              ].map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-3.5 h-3.5 text-bd-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
