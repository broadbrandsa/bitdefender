import { Badge } from '@/components/ui/badge'

const reasons = [
  {
    title: 'One Solution for All Your Needs',
    description:
      'No need to work with multiple vendors to cover all your cybersecurity needs. We offer a comprehensive ecosystem that protects all your subscribers\' devices, privacy and data, at home and on the go.',
  },
  {
    title: 'Choose What Suits You Best',
    description:
      'We can provide solutions that are tailored to your specific brand\'s requirements. Integrate our solutions as they are, develop a co-branded solution together, or add our technology to your existing solution.',
  },
  {
    title: 'Boost Your Business',
    description:
      'Unlock new revenue streams while also boosting satisfaction. Our partners consistently report ARPU increases of 5-8%, reduced churn and a NPS of 62+.',
  },
  {
    title: 'Award Winning Technology',
    description:
      'We offer best-in-class technology with an unmatched track record of industry-leading detection and response, the result of decades of experience.',
  },
  {
    title: "We're Here to Help You All the Way",
    description:
      'Going to market doesn\'t have to be hard. We\'re here to help you every step of the way in integrating our products and becoming a cybersecurity provider.',
  },
]

export default function FiveReasons() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <Badge
            variant="outline"
            className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
          >
            Why Bitdefender
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95]">
            <span className="text-bd-blue">5 reasons</span> to choose
            <br />
            Bitdefender Subscriber
            <br />
            Protection Platform
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`p-8 rounded-2xl border border-border/50 ${
                i === 0 ? 'bg-bd-blue text-white md:row-span-2 flex flex-col justify-between' : 'bg-bd-slate'
              }`}
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 font-black text-lg ${
                    i === 0 ? 'bg-white/15 text-white' : 'bg-bd-blue/10 text-bd-blue'
                  }`}
                >
                  {i + 1}
                </div>
                <h3
                  className={`text-lg font-bold mb-3 ${
                    i === 0 ? 'text-white' : 'text-foreground'
                  }`}
                >
                  {reason.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    i === 0 ? 'text-white/75' : 'text-muted-foreground'
                  }`}
                >
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
