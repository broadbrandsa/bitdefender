'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'
import { Shield, Check, ArrowDown } from 'lucide-react'

const products = [
  { name: 'Endpoint &\nMobile Security', color: 'bg-bd-red' },
  { name: 'Endpoint\nParental Control', color: 'bg-bd-red' },
  { name: 'Endpoint\nVPN', color: 'bg-bd-red' },
  { name: 'Account\nPrivacy', color: 'bg-bd-red' },
]

export default function RestAPI() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Integration
            </Badge>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A simple REST API platform is the link between the Bitdefender products and your ecosystem
            </p>
          </div>
        </AnimateOnScroll>

        {/* Bitdefender Products */}
        <AnimateOnScroll animation="fade-up" delay={0.1}>
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {products.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-center gap-3 p-5 rounded-xl border-2 border-bd-blue/10 bg-bd-slate min-w-[140px]"
              >
                <div className="w-10 h-10 bg-bd-red rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold text-bd-blue text-center whitespace-pre-line leading-tight">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Arrow + REST API label */}
        <AnimateOnScroll animation="fade-up" delay={0.15}>
          <div className="flex flex-col items-center gap-2 my-8">
            <div className="w-px h-12 bg-bd-red/30" />
            <div className="px-8 py-3 rounded-full bg-bd-slate border-2 border-bd-red/20">
              <span className="text-lg font-black text-foreground tracking-tight">REST API</span>
            </div>
            <div className="w-px h-12 bg-bd-red/30" />
            <ArrowDown className="w-5 h-5 text-bd-red" />
          </div>
        </AnimateOnScroll>

        {/* Your Ecosystem */}
        <AnimateOnScroll animation="fade-up" delay={0.2}>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl border-2 border-bd-red/15 bg-bd-red/[0.02]">
            <h3 className="text-2xl font-black mb-1">
              <span className="text-bd-red">Your</span>
            </h3>
            <p className="text-xl font-bold text-foreground mb-6">ecosystem</p>
            <div className="space-y-3 text-left max-w-md mx-auto">
              {[
                { text: 'Subscriptions provisioning & management', bold: false },
                { text: 'Easy & Flexible integration with API', bold: true, boldWord: 'Easy' },
                { text: 'Integration in weeks (not quarters)', bold: false },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 text-bd-blue flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm text-muted-foreground">
                    {item.bold ? (
                      <>
                        <strong className="text-foreground">{item.boldWord}</strong>
                        {' '}{item.text.replace(item.boldWord + ' ', '')}
                      </>
                    ) : (
                      item.text
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
