export default function Awards() {
  return (
    <section className="py-24 lg:py-32 bg-bd-slate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-4">
            There&apos;s &lsquo;award-winning&rsquo;.
            <br />
            And then there&apos;s{' '}
            <span className="text-bd-blue">award domination.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quote */}
          <div className="p-8 rounded-2xl bg-white border border-border/50">
            <blockquote className="text-base text-bd-blue leading-relaxed italic mb-6">
              &ldquo;Not only did Bitdefender receive the highest overall rating in this
              year&apos;s test, but it has also now{' '}
              <strong className="font-bold not-italic">won this coveted award five times</strong>,
              which surpasses all other vendors assessed in the past decade.&rdquo;
            </blockquote>
            <cite className="text-xs text-muted-foreground not-italic block">
              AV Comparatives Consumer Summary Report 2022
            </cite>
          </div>

          {/* PCMag awards */}
          <div className="p-8 rounded-2xl bg-white border border-border/50 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Over the years Bitdefender products have constantly ranked high both
              in independent labs tests as well as in user preferences.
            </p>
            <div className="grid grid-cols-4 gap-4 w-full">
              {[
                'The Best Antivirus Software for 2024',
                'Best Malware Removal & Protection Software for 2024',
                'Best Mac Antivirus Software for 2024',
                'The Best Android Antivirus for 2024',
              ].map((award) => (
                <div
                  key={award}
                  className="p-3 rounded-xl bg-bd-red/5 border border-bd-red/10 flex flex-col items-center justify-center"
                >
                  <span className="text-2xl font-black text-bd-red mb-1">#1</span>
                  <span className="text-[9px] text-muted-foreground leading-tight text-center">
                    {award}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Score card */}
          <div className="p-8 rounded-2xl bg-white border border-border/50">
            <p className="text-sm text-muted-foreground mb-6 italic">
              &ldquo;Antivirus protection by Bitdefender Total Security&apos;s Android edition
              swept the testing labs, with perfect scores from AV-Test,
              AV-Comparatives, and MRG-Effitas.&rdquo;
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Security Suites 2023 — Overall Satisfaction
            </h4>
            <div className="space-y-2">
              {[
                { name: 'Bitdefender', score: 9.1, highlight: true },
                { name: 'Webroot', score: 9.0, highlight: false },
                { name: 'Malwarebytes', score: 9.0, highlight: false },
                { name: 'Microsoft', score: 8.6, highlight: false },
                { name: 'Kaspersky Lab', score: 8.6, highlight: false },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <span className={`text-xs w-24 ${item.highlight ? 'font-bold text-bd-blue' : 'text-muted-foreground'}`}>
                    {item.name}
                  </span>
                  <div className="flex-1 h-5 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.highlight ? 'bg-bd-blue' : 'bg-muted-foreground/30'}`}
                      style={{ width: `${(item.score / 10) * 100}%` }}
                    />
                  </div>
                  <span className={`text-xs font-bold w-8 text-right ${item.highlight ? 'text-bd-blue' : 'text-muted-foreground'}`}>
                    {item.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
