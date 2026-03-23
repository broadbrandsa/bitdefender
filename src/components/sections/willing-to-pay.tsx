'use client'

import AnimateOnScroll from '@/components/animate-on-scroll'
import AnimatedCounter from '@/components/animated-counter'

export default function WillingToPay() {
  return (
    <section className="py-24 lg:py-32 bg-bd-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '50%',
          height: '100%',
          background: 'radial-gradient(ellipse 80% 80% at 80% 30%, rgba(255,255,255,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-white leading-[0.95] mb-16">
            Your subscribers want more,
            <br />
            and they&apos;re <span className="underline decoration-white/30 underline-offset-4">willing to pay more</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl">
          <AnimateOnScroll animation="fade-up" delay={0.1}>
            <div className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/[0.14] transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
                <AnimatedCounter value="$6–10" duration={1.2} />
              </div>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                Users say they&apos;re willing to pay an extra{' '}
                <strong className="text-white">$6–10/month</strong>
                <sup className="text-white/50 ml-0.5">1</sup>{' '}
                for better security
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={0.18}>
            <div className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/[0.14] transition-all duration-300 group">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
                <AnimatedCounter value="62%" duration={1.4} />
              </div>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                Users are also willing to pay an extra{' '}
                <strong className="text-white">62% of product price</strong>
                <sup className="text-white/50 ml-0.5">2</sup>{' '}
                for a safer Wi-Fi router
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-10 flex flex-col gap-1 text-[11px] text-white/50">
          <span>1. Bitdefender Security and Privacy Study, Sep 2023</span>
          <span>
            2. Blythe, Johnson, Manning. What is security worth to consumers?
            Investigating willingness to pay for secure Internet of Things devices, Crime Science
          </span>
        </div>
      </div>
    </section>
  )
}
