'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { useLock } from './lock-context'

const CORRECT_CODE = '0222'

export default function LockScreen({ children }: { children: React.ReactNode }) {
  const { isLocked, unlock } = useLock()
  const [digits, setDigits] = useState<string[]>(['', '', '', ''])
  const [error, setError] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [entering, setEntering] = useState(false)
  const hiddenInputRef = useRef<HTMLInputElement>(null)

  // Reset digits when locking
  useEffect(() => {
    if (isLocked) {
      setDigits(['', '', '', ''])
      setExiting(false)
      setEntering(true)
      const t = setTimeout(() => setEntering(false), 50)
      return () => clearTimeout(t)
    }
  }, [isLocked])

  const handleDelete = useCallback(() => {
    setDigits((prev) => {
      const next = [...prev]
      for (let i = 3; i >= 0; i--) {
        if (next[i] !== '') {
          next[i] = ''
          break
        }
      }
      return next
    })
  }, [])

  const handleDigit = useCallback(
    (d: string) => {
      if (error) return
      setDigits((prev) => {
        const next = [...prev]
        const idx = next.findIndex((v) => v === '')
        if (idx === -1) return prev
        next[idx] = d

        if (idx === 3) {
          const code = next.join('')
          if (code === CORRECT_CODE) {
            setTimeout(() => {
              setExiting(true)
              setTimeout(() => {
                unlock()
              }, 900)
            }, 200)
          } else {
            setTimeout(() => {
              setError(true)
              setTimeout(() => {
                setError(false)
                setDigits(['', '', '', ''])
              }, 700)
            }, 100)
          }
        }
        return next
      })
    },
    [error, unlock]
  )

  useEffect(() => {
    if (!isLocked) return
    const onKey = (e: KeyboardEvent) => {
      if (document.activeElement === hiddenInputRef.current) return
      if (e.key >= '0' && e.key <= '9') handleDigit(e.key)
      if (e.key === 'Backspace') handleDelete()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isLocked, handleDigit, handleDelete])

  const handleHiddenInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value
      if (!val) return
      const char = val[val.length - 1]
      if (char >= '0' && char <= '9') handleDigit(char)
      e.target.value = ''
    },
    [handleDigit]
  )

  if (!isLocked) return <>{children}</>

  return (
    <>
      <div
        className={`lock-overlay ${exiting ? 'lock-exiting' : ''} ${error ? 'lock-shake' : ''} ${entering ? 'lock-entering' : ''}`}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          background: '#06090f',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 0 }}>
          <Image
            src="/Lockscreen image.webp"
            alt=""
            fill
            className="object-cover object-center"
            style={{ opacity: 0.4 }}
            priority
          />
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 20%, #06090f 100%)',
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: '50%',
              background: 'linear-gradient(to top, #06090f 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Blue glow top */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: '40vh',
            background:
              'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,109,255,0.15) 0%, transparent 70%)',
            zIndex: 0,
          }}
        />

        {/* Top: badge + logos */}
        <div className="relative z-10 flex flex-col items-center gap-5 mt-10 md:mt-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase"
            style={{
              background: 'rgba(0,109,255,0.08)',
              border: '1px solid rgba(0,109,255,0.2)',
              color: '#4a9fff',
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: '#006DFF' }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: '#006DFF' }}
              />
            </span>
            Confidential · Executive Review Only
          </span>

          {/* Logos row */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-24 sm:w-36 h-6 sm:h-8">
              <Image
                src="/Digitalresilience.png"
                alt="Digital Resilience"
                fill
                className="object-contain object-center"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
              />
            </div>
            <div className="w-px h-5 sm:h-6 bg-white/20" />
            <div className="relative w-20 sm:w-28 h-5 sm:h-7">
              <Image
                src="/bitdefender logo.svg"
                alt="Bitdefender"
                fill
                className="object-contain object-center"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
              />
            </div>
          </div>
        </div>

        {/* Centre: headline */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
          <h1
            className="font-black leading-[0.88] tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 7.5vw, 7.5rem)',
              color: '#eef0f4',
              maxWidth: '16ch',
            }}
          >
            ENTER THE 4
            <br />
            DIGIT CODE
            <br />
            <span style={{ color: '#006DFF' }}>TO VIEW</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.18)' }}>THE PROPOSAL.</span>
          </h1>
        </div>

        {/* Bottom: digit boxes */}
        <div className="relative z-10 w-full flex flex-col items-center pb-10 md:pb-20 px-6 gap-6">
          <input
            ref={hiddenInputRef}
            type="tel"
            inputMode="numeric"
            onChange={handleHiddenInput}
            style={{
              position: 'absolute',
              opacity: 0,
              width: '1px',
              height: '1px',
              pointerEvents: 'none',
            }}
            autoComplete="off"
          />

          <div
            className="flex items-center gap-3 md:gap-5 cursor-pointer"
            onClick={() => hiddenInputRef.current?.focus()}
          >
            {digits.map((d, i) => {
              const isCurrent = d === '' && digits.slice(0, i).every((v) => v !== '')
              return (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-2xl transition-all duration-200"
                  style={{
                    width: 'clamp(4rem, 16vw, 8rem)',
                    height: 'clamp(5rem, 20vw, 10rem)',
                    background: error
                      ? 'rgba(239,68,68,0.12)'
                      : d
                      ? 'rgba(0,109,255,0.15)'
                      : isCurrent
                      ? 'rgba(0,109,255,0.08)'
                      : 'rgba(255,255,255,0.03)',
                    border: error
                      ? '2px solid rgba(239,68,68,0.45)'
                      : d
                      ? '2px solid rgba(0,109,255,0.45)'
                      : isCurrent
                      ? '2px solid rgba(0,109,255,0.25)'
                      : '2px solid rgba(255,255,255,0.06)',
                    boxShadow:
                      d && !error ? '0 0 40px rgba(0,109,255,0.15)' : 'none',
                  }}
                >
                  <span
                    className="font-black leading-none"
                    style={{
                      fontSize: 'clamp(2rem, 10vw, 5rem)',
                      color: error
                        ? 'rgba(239,68,68,0.85)'
                        : d
                        ? '#eef0f4'
                        : 'rgba(255,255,255,0.12)',
                    }}
                  >
                    {d || (isCurrent ? '_' : '·')}
                  </span>
                </div>
              )
            })}
          </div>

          {error && (
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'rgba(239,68,68,0.75)' }}
            >
              Incorrect code — try again
            </p>
          )}
        </div>
      </div>

      {/* Site rendered but hidden behind lock */}
      <div style={{ visibility: 'hidden', pointerEvents: 'none' }}>
        {children}
      </div>
    </>
  )
}
