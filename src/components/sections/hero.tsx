'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-bd-navy">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/Hero image.webp"
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.35 }}
          priority
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, #06090f 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '40%',
            background: 'linear-gradient(to top, #06090f 0%, transparent 100%)',
          }}
        />
        {/* Top gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 70% 40%, rgba(0,109,255,0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <Badge
            variant="outline"
            className="mb-8 border-bd-blue/25 bg-bd-blue/5 text-blue-400 text-xs tracking-wider uppercase font-medium px-4 py-1.5"
          >
            Subscriber Protection Platform
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[0.92] text-white mb-6">
            All-in-one
            <br />
            <span className="text-bd-blue">cybersecurity</span>
            <br />
            designed to add value
            <br />
            <span className="text-white/30">to your subscribers</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/55 max-w-xl mb-10 leading-relaxed">
            Bitdefender Subscriber Protection Platform is a comprehensive
            cybersecurity ecosystem tailored to the specific needs of service
            providers. Watch your ARPU jump by{' '}
            <strong className="text-bd-blue font-semibold">5-8%</strong>*.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="mailto:liamg@digitalresilience.co.za"
              className="inline-flex items-center justify-center bg-bd-red hover:bg-bd-red/90 text-white font-semibold px-8 h-12 text-base rounded-xl transition-colors"
            >
              Get in Touch
            </a>
            <button
              className="inline-flex items-center justify-center border border-white/15 text-white/70 hover:text-white hover:bg-white/5 font-medium px-8 h-12 text-base rounded-xl transition-colors"
              onClick={() => {
                document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore the Platform
            </button>
          </div>

          <p className="text-xs text-white/30">
            *Results reported by existing partners. Values are subject to variability
            and rely on a multitude of influencing factors.
          </p>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { value: '5.5B', label: 'malware attacks in 2022', sup: '1' },
            { value: '8', label: 'attacks/day against home networks', sup: '2' },
            { value: '74%', label: 'users worried about being hacked', sup: '3' },
            { value: '49%', label: 'users expect a solution from their ISP', sup: '4' },
          ].map((stat) => (
            <div
              key={stat.value}
              className="relative p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
            >
              <div className="text-3xl lg:text-4xl font-black text-bd-blue mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/45 leading-snug">
                {stat.label}
                <sup className="text-white/25 ml-0.5">{stat.sup}</sup>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[10px] text-white/20">
          <span>1. Statista, Annual number of malware attacks worldwide 2015–2022</span>
          <span>2. Bitdefender, The 2023 IoT Security Landscape Report</span>
          <span>3. Statista, Crimes Americans worry about most in 2022</span>
          <span>4. Bitdefender Security and Privacy Study, Sep 2023</span>
        </div>
      </div>
    </section>
  )
}
