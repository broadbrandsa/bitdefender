'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Download, Mail, EyeOff } from 'lucide-react'
import { useLock } from '@/components/lock-context'

export default function Navbar() {
  const { lock } = useLock()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-bd-blue transition-[width] duration-100 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logos */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/Digitalresilience.png"
            alt="Digital Resilience"
            width={130}
            height={34}
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <div className="w-px h-5 bg-border" />
          <Image
            src="/bitdefender logo.svg"
            alt="Bitdefender"
            width={110}
            height={28}
            className="h-5 sm:h-6 w-auto object-contain"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <button
            onClick={lock}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-white hover:bg-bd-slate text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
            title="Hide proposal"
          >
            <EyeOff className="w-4 h-4" />
            <span className="hidden md:inline">Hide</span>
          </button>
          <a
            href="/ISP-Overview-Deck.pdf"
            download="ISP Overview Deck.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-white hover:bg-bd-slate text-sm font-medium text-foreground transition-colors duration-150"
          >
            <Download className="w-4 h-4" />
            <span className="hidden lg:inline">ISP Overview Deck</span>
            <span className="lg:hidden">Deck</span>
          </a>
          <a
            href="mailto:liamg@digitalresilience.co.za"
            className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-lg bg-bd-red hover:bg-bd-red/90 text-white text-sm font-medium transition-colors duration-150"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
