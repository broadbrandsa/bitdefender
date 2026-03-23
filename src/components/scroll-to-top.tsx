'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-bd-blue text-white shadow-lg shadow-bd-blue/25 flex items-center justify-center hover:bg-bd-blue-dark hover:scale-110 active:scale-95 transition-all duration-200"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.9)',
        transition: 'opacity 0.3s, transform 0.3s, background-color 0.15s',
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 text-black" strokeWidth={2.5} />
    </button>
  )
}
