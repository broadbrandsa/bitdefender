'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-in' | 'scale-in' | 'slide-left' | 'slide-right'
}

export default function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const baseStyles: React.CSSProperties = {
    transitionProperty: 'opacity, transform',
    transitionDuration: '0.7s',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}s`,
  }

  const hiddenStyles: Record<string, React.CSSProperties> = {
    'fade-up': { opacity: 0, transform: 'translateY(32px)' },
    'fade-in': { opacity: 0, transform: 'none' },
    'scale-in': { opacity: 0, transform: 'scale(0.94)' },
    'slide-left': { opacity: 0, transform: 'translateX(-32px)' },
    'slide-right': { opacity: 0, transform: 'translateX(32px)' },
  }

  const visibleStyles: React.CSSProperties = { opacity: 1, transform: 'none' }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyles,
        ...(isVisible ? visibleStyles : hiddenStyles[animation]),
      }}
    >
      {children}
    </div>
  )
}
