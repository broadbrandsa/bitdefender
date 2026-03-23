'use client'

import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logos */}
        <div className="flex items-center gap-4">
          <Image
            src="/Digitalresilience.png"
            alt="Digital Resilience"
            width={160}
            height={40}
            className="h-7 w-auto object-contain"
          />
          <div className="w-px h-6 bg-border" />
          <Image
            src="/bitdefender logo.svg"
            alt="Bitdefender"
            width={130}
            height={32}
            className="h-6 w-auto object-contain"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/ISP-Overview-Deck.pdf"
            download="ISP Overview Deck.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white hover:bg-bd-slate text-sm font-medium text-foreground transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            ISP Overview Deck
          </a>
          <a
            href="mailto:liamg@digitalresilience.co.za"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bd-red hover:bg-bd-red/90 text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
