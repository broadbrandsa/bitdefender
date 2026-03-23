import { Badge } from '@/components/ui/badge'

export default function AboutBitdefender() {
  return (
    <section className="py-24 lg:py-32 bg-bd-slate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Headquarters */}
          <div className="p-6 rounded-2xl bg-white border border-border/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-bd-blue mb-3">
              Headquarters
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bucharest, Romania
              <br />
              Santa Clara, California
            </p>
          </div>

          {/* Patents */}
          <div className="p-6 rounded-2xl bg-white border border-border/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-bd-blue mb-3">
              Continued Innovation
            </h3>
            <div className="text-3xl font-black text-foreground mb-1">440</div>
            <p className="text-sm text-muted-foreground">patents</p>
          </div>

          {/* Employees */}
          <div className="p-6 rounded-2xl bg-white border border-border/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-bd-blue mb-3">
              Employees
            </h3>
            <div className="text-3xl font-black text-foreground mb-1">1800</div>
            <p className="text-sm text-muted-foreground">
              More than half are security researchers and engineers
            </p>
          </div>

          {/* Partners */}
          <div className="p-6 rounded-2xl bg-white border border-border/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-bd-blue mb-3">
              Partners
            </h3>
            <div className="text-3xl font-black text-foreground mb-1">20,000+</div>
            <p className="text-sm text-muted-foreground">
              Qualified partners and resellers distributed in <strong>170</strong> countries
            </p>
          </div>
        </div>

        {/* Office locations */}
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
      </div>
    </section>
  )
}
