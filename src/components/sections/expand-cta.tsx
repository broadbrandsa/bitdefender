'use client'

import AnimateOnScroll from '@/components/animate-on-scroll'
import { ArrowRight } from 'lucide-react'

export default function ExpandCTA() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="p-8 lg:p-12 rounded-2xl bg-bd-blue text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">It&apos;s time to expand.</h3>
            <p className="text-white/75 mb-8 max-w-xl text-lg leading-relaxed">
              We&apos;ll help you make the best decisions. We work closely with all of our Telco
              partners and provide assistance throughout the entire process of bringing a product to market.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                'Tech & development',
                'Subscriber management',
                'Marketing support',
                'Analytics',
                'Support & maintenance',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                  <ArrowRight className="w-3.5 h-3.5 text-white/40 flex-shrink-0" strokeWidth={2} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
