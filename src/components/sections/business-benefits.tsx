'use client'

import AnimateOnScroll from '@/components/animate-on-scroll'

const benefits = [
  {
    title: 'Boost ARPU',
    description:
      'Our partners consistently report an 8% ARPU growth, attributed to the heightened perceived value of their offers and plans.',
    highlight: '8% ARPU growth',
  },
  {
    title: 'Less Churn',
    description: "Happy subscribers don't cancel their plans.",
    highlight: null,
  },
  {
    title: 'Fewer Calls',
    description: '...and they make fewer calls to tech support.',
    highlight: null,
  },
  {
    title: 'Higher Customer NPS',
    description:
      'The increase in user satisfaction is supported by a NPS score of 60+.',
    highlight: 'NPS score of 60+',
  },
  {
    title: 'Upsell Opportunities',
    description:
      "Consumer demand for security keeps evolving. Connected to our product portfolio, you'll always stay ahead of the curve.",
    highlight: null,
  },
]

export default function BusinessBenefits() {
  return (
    <section className="py-24 lg:py-32 bg-bd-navy relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,109,255,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-20">
          {benefits.map((benefit, i) => (
            <AnimateOnScroll
              key={benefit.title}
              delay={i * 0.08}
              animation="fade-up"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-bd-blue leading-tight flex-shrink-0 md:w-[40%] md:text-right">
                  {benefit.title}
                </h3>
                <p className="text-base lg:text-lg text-white/55 max-w-lg leading-relaxed">
                  {benefit.highlight ? (
                    <>
                      {benefit.description.split(benefit.highlight)[0]}
                      <strong className="text-bd-blue font-semibold">
                        {benefit.highlight}
                      </strong>
                      {benefit.description.split(benefit.highlight)[1]}
                    </>
                  ) : (
                    benefit.description
                  )}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
