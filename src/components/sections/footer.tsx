import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="py-16 bg-bd-navy border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top: logos */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <Image
              src="/Digitalresilience.png"
              alt="Digital Resilience"
              width={160}
              height={40}
              className="h-7 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div className="w-px h-6 bg-white/15" />
            <Image
              src="/bitdefender logo.svg"
              alt="Bitdefender"
              width={130}
              height={32}
              className="h-6 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:liamg@digitalresilience.co.za"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-bd-red hover:bg-bd-red/90 text-white text-sm font-medium transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/ISP-Overview-Deck.pdf"
              download="ISP Overview Deck.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-white/70 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
            >
              Download Deck
            </a>
          </div>
        </div>

        <Separator className="bg-white/[0.06] mb-10" />

        {/* Middle: contact + address + links */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h4>
            <p className="text-sm text-white/70 mb-1">
              <strong className="text-white font-medium">Liam Le Goff</strong>
            </p>
            <p className="text-sm text-white/50 mb-1">Digital Resilience</p>
            <a
              href="mailto:liamg@digitalresilience.co.za"
              className="text-sm text-bd-blue hover:underline"
            >
              liamg@digitalresilience.co.za
            </a>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Address
            </h4>
            <p className="text-sm text-white/50 leading-relaxed">
              158 Jan Smuts Ave
              <br />
              Illovo Johannesburg
              <br />
              Gauteng 2196
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Links
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://digitalresilience.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                digitalresilience.co.za
              </a>
              <a
                href="https://www.dsg.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                dsg.co.za
              </a>
              <a
                href="https://www.bitdefender.com/partners/subscriber-protection-platform.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                bitdefender.com
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/[0.06] mb-6" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/20">
          <p>
            Prepared by Digital Resilience, a member of Digital Solutions Group (DSG).
            This document is confidential and intended for the designated recipient only.
          </p>
          <p className="flex-shrink-0">&copy; {new Date().getFullYear()} Digital Resilience</p>
        </div>
      </div>
    </footer>
  )
}
