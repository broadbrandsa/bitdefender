'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  className?: string
  duration?: number
}

export default function AnimatedCounter({ value, className = '', duration = 1.6 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayed, setDisplayed] = useState(value)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          observer.unobserve(entry.target)
          animateValue()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated])

  function animateValue() {
    // Extract numeric part and suffix/prefix
    const match = value.match(/^([^0-9]*)([0-9,.]+)(.*)$/)
    if (!match) {
      setDisplayed(value)
      return
    }

    const prefix = match[1]
    const numStr = match[2]
    const suffix = match[3]
    const hasComma = numStr.includes(',')
    const cleanNum = parseFloat(numStr.replace(/,/g, ''))
    const hasDecimal = numStr.includes('.')
    const decimalPlaces = hasDecimal ? numStr.split('.')[1].length : 0

    const startTime = performance.now()
    const durationMs = duration * 1000

    function step(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = cleanNum * eased

      let formatted: string
      if (hasDecimal) {
        formatted = current.toFixed(decimalPlaces)
      } else {
        formatted = Math.round(current).toString()
      }

      if (hasComma) {
        formatted = Number(formatted).toLocaleString('en-US')
      }

      setDisplayed(`${prefix}${formatted}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setDisplayed(value)
      }
    }

    requestAnimationFrame(step)
  }

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  )
}
