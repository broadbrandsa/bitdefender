import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="py-12 bg-bd-navy border-t border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-white tracking-tight">Digital Resilience</span>
            <span className="text-white/20">×</span>
            <span className="text-sm font-bold text-bd-blue tracking-tight">Bitdefender</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <a
              href="https://digitalresilience.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              digitalresilience.co.za
            </a>
            <a
              href="https://www.dsg.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              dsg.co.za
            </a>
            <a
              href="https://www.bitdefender.com/partners/subscriber-protection-platform.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              bitdefender.com
            </a>
          </div>
        </div>
        <Separator className="bg-white/[0.06] mb-6" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/20">
          <p>
            Prepared by Digital Resilience, a member of Digital Solutions Group (DSG).
            This document is confidential and intended for the designated recipient only.
          </p>
          <p className="flex-shrink-0">© {new Date().getFullYear()} Digital Resilience</p>
        </div>
      </div>
    </footer>
  )
}
