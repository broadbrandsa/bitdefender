'use client'

import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'
import { Shield, Check } from 'lucide-react'

const basicFeatures = {
  android: [
    'App Anomaly Detection', 'Malware Scanner', 'On-Demand & On-Install Scan',
    'Web Protection', 'Scam Alert', 'WearON', 'Anti-Theft', 'Autopilot',
    'Battery & Performance Saver', 'Fast & Light-Weight', 'App Lock', 'Account Privacy',
  ],
  ios: ['Web Protection', 'Scan', 'Calendar Protection', 'Account Privacy'],
  macos: [
    'Safe Files', 'Time Machine Protection', 'Adware Blocker',
    'Cross-Platform Malware Detection', 'Traffic Light (browser extension)',
    'Anti-Phishing', 'Bitdefender Shield', 'Autopilot', 'Ultra-Fast Scanning',
    '24/7 Cloud-Based Guard Duty', 'Anti-tracker',
  ],
  windows: [
    'Complete Real-Time Data Protection', 'Network Threat Prevention',
    'Advanced Threat Defense', 'Cryptomining Protection',
    'Multi-Layer Ransomware Protection', 'Vulnerability Assessment',
    'Web Attack Prevention', 'Anti-Phishing', 'Anti-Fraud', 'Antispam',
    'Rescue Environment', 'Autopilot', 'Bitdefender Photon\u2122',
    'Global Protective Network', 'Game, Movie and Work Modes',
    'Speed Up Your Devices', 'Battery Mode', 'Anti-tracker',
    'Microphone Monitor', 'Webcam Protection', 'Safe Online Banking',
    'Parental Control', 'Privacy Firewall', 'Anti-Theft',
    'Wi-Fi Security Advisor', 'File Shredder',
  ],
}

const advancedExtras = {
  android: ['Spam & Scam Call Blocking', 'Bitdefender VPN', 'Parental Control'],
  ios: ['Bitdefender VPN'],
  macos: ['Bitdefender VPN', 'Parental Control'],
  windows: ['Parental Control'],
}

export default function BitdefenderOffering() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Our Bitdefender Offering
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95]">
              Detailed Feature
              <br />
              <span className="text-bd-blue">Comparison</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* BASIC Tier */}
          <AnimateOnScroll animation="fade-up" delay={0.1}>
            <div className="p-8 rounded-2xl bg-bd-slate border border-border/50 h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-foreground mb-2">BASIC</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold bg-bd-blue/10 text-bd-blue px-3 py-1 rounded-full">Device Security</span>
                  <span className="text-xs font-semibold bg-bd-blue/10 text-bd-blue px-3 py-1 rounded-full">Account Privacy</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border/50">
                  <div className="w-8 h-8 bg-bd-red rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Bitdefender Mobile &amp; Computer Protection</p>
                    <p className="text-xs text-bd-blue">1/5/10 devices</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { platform: 'Android', features: basicFeatures.android },
                  { platform: 'iOS', features: basicFeatures.ios },
                  { platform: 'MacOS', features: basicFeatures.macos },
                  { platform: 'Windows', features: basicFeatures.windows },
                ].map((group) => (
                  <div key={group.platform}>
                    <h4 className="text-sm font-bold text-bd-blue mb-2">{group.platform}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                      {group.features.map((f) => (
                        <div key={f} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 mt-0.5 text-bd-blue/50 flex-shrink-0" strokeWidth={2} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* ADVANCED Tier */}
          <AnimateOnScroll animation="fade-up" delay={0.2}>
            <div className="p-8 rounded-2xl bg-bd-slate border-2 border-bd-blue/20 h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-foreground mb-2">ADVANCED</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold bg-bd-blue/10 text-bd-blue px-3 py-1 rounded-full">Device Security</span>
                  <span className="text-xs font-semibold bg-bd-blue/10 text-bd-blue px-3 py-1 rounded-full">Account Privacy</span>
                  <span className="text-xs font-semibold bg-bd-blue/10 text-bd-blue px-3 py-1 rounded-full">Parental Control</span>
                  <span className="text-xs font-semibold bg-bd-blue/10 text-bd-blue px-3 py-1 rounded-full">VPN</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-bd-blue/20">
                  <div className="w-8 h-8 bg-bd-red rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Bitdefender Family Protection</p>
                    <p className="text-xs text-bd-blue">1/5/10 devices</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { platform: 'Android', base: basicFeatures.android, extras: advancedExtras.android },
                  { platform: 'iOS', base: basicFeatures.ios, extras: advancedExtras.ios },
                  { platform: 'MacOS', base: basicFeatures.macos, extras: advancedExtras.macos },
                  { platform: 'Windows', base: basicFeatures.windows, extras: advancedExtras.windows },
                ].map((group) => (
                  <div key={group.platform}>
                    <h4 className="text-sm font-bold text-bd-blue mb-2">{group.platform}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                      {group.base.map((f) => (
                        <div key={f} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 mt-0.5 text-bd-blue/50 flex-shrink-0" strokeWidth={2} />
                          {f}
                        </div>
                      ))}
                      {group.extras.map((f) => (
                        <div key={f} className="flex items-start gap-1.5 text-xs font-semibold text-foreground">
                          <Check className="w-3 h-3 mt-0.5 text-bd-blue flex-shrink-0" strokeWidth={2.5} />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
