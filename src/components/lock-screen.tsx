'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const CORRECT_CODE = '0222'
const STORAGE_KEY = 'bd_proposal_v1_unlocked'

export default function LockScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null)
  const [digits, setDigits] = useState<string[]>(['', '', '', ''])
  const [error, setError] = useState(false)
  const [exiting, setExiting] = useState(false)
  const hiddenInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      setUnlocked(saved === 'true')
    } catch {
      setUnlocked(false)
    }
  }, [])

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
                try {
                  localStorage.setItem(STORAGE_KEY, 'true')
                } catch {}
                setUnlocked(true)
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
    [error]
  )

  useEffect(() => {
    if (unlocked) return
    const onKey = (e: KeyboardEvent) => {
      if (document.activeElement === hiddenInputRef.current) return
      if (e.key >= '0' && e.key <= '9') handleDigit(e.key)
      if (e.key === 'Backspace') handleDelete()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [unlocked, handleDigit, handleDelete])

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

  if (unlocked === null) return null
  if (unlocked) return <>{children}</>

  return (
    <>
      <div
        className={`lock-overlay ${exiting ? 'lock-exiting' : ''} ${error ? 'lock-shake' : ''}`}
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
        {/* Background mesh gradient */}
        <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 0 }}>
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,109,240,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(237,28,36,0.06) 0%, transparent 50%)',
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Top: badge */}
        <div className="relative z-10 flex flex-col items-center gap-5 mt-10 md:mt-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase"
            style={{
              background: 'rgba(0,109,240,0.08)',
              border: '1px solid rgba(0,109,240,0.2)',
              color: '#4a9fff',
            }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: '#006DF0' }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: '#006DF0' }}
              />
            </span>
            Confidential · Executive Review Only
          </span>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 120 24" className="h-5 md:h-6" fill="none">
              <text x="0" y="18" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16" fill="white" letterSpacing="-0.02em">
                Digital Resilience
              </text>
            </svg>
            <div className="w-px h-5 bg-white/20" />
            <svg viewBox="0 0 100 24" className="h-5 md:h-6" fill="none">
              <text x="0" y="18" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="15" fill="#006DF0" letterSpacing="-0.02em">
                Bitdefender
              </text>
            </svg>
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
            <span style={{ color: '#006DF0' }}>TO VIEW</span>
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
                      ? 'rgba(0,109,240,0.15)'
                      : isCurrent
                      ? 'rgba(0,109,240,0.08)'
                      : 'rgba(255,255,255,0.03)',
                    border: error
                      ? '2px solid rgba(239,68,68,0.45)'
                      : d
                      ? '2px solid rgba(0,109,240,0.45)'
                      : isCurrent
                      ? '2px solid rgba(0,109,240,0.25)'
                      : '2px solid rgba(255,255,255,0.06)',
                    boxShadow:
                      d && !error ? '0 0 40px rgba(0,109,240,0.15)' : 'none',
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
