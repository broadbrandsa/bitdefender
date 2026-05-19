'use client'

import { useEffect, useRef, useState } from 'react'
import { RotateCcw, Pen, Type } from 'lucide-react'

type Mode = 'typed' | 'drawn'

interface SignaturePadProps {
  typedValue: string
  onTypedChange: (value: string) => void
  drawnDataUrl: string
  onDrawnChange: (dataUrl: string) => void
  mode: Mode
  onModeChange: (mode: Mode) => void
  fullName: string
}

export default function SignaturePad({
  typedValue,
  onTypedChange,
  drawnDataUrl,
  onDrawnChange,
  mode,
  onModeChange,
  fullName,
}: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const drawingRef = useRef(false)
  const lastPointRef = useRef<{ x: number; y: number } | null>(null)
  const hasContentRef = useRef(false)
  const [, setRedraw] = useState(0) // force re-render after clear

  // Sync typed value with full name when empty
  useEffect(() => {
    if (mode === 'typed' && !typedValue && fullName) {
      onTypedChange(fullName)
    }
  }, [mode, fullName, typedValue, onTypedChange])

  // Setup the canvas at the correct pixel ratio
  useEffect(() => {
    if (mode !== 'drawn') return
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const setupCanvas = () => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = 180 * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `180px`
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.scale(dpr, dpr)
      ctx.lineWidth = 2.2
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.strokeStyle = '#0f1729'

      // Restore existing signature on resize
      if (drawnDataUrl) {
        const img = new Image()
        img.onload = () => ctx.drawImage(img, 0, 0, rect.width, 180)
        img.src = drawnDataUrl
      }
    }
    setupCanvas()
    const observer = new ResizeObserver(setupCanvas)
    observer.observe(container)
    return () => observer.disconnect()
  }, [mode, drawnDataUrl])

  const getPoint = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.setPointerCapture(e.pointerId)
    drawingRef.current = true
    lastPointRef.current = getPoint(e)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const p = getPoint(e)
    const last = lastPointRef.current
    if (!last) return
    ctx.beginPath()
    ctx.moveTo(last.x, last.y)
    ctx.lineTo(p.x, p.y)
    ctx.stroke()
    lastPointRef.current = p
    hasContentRef.current = true
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawingRef.current) return
    drawingRef.current = false
    lastPointRef.current = null
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.releasePointerCapture(e.pointerId)
    if (hasContentRef.current) {
      onDrawnChange(canvas.toDataURL('image/png'))
    }
  }

  const handleClear = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const rect = canvas.getBoundingClientRect()
    ctx.clearRect(0, 0, rect.width, rect.height)
    hasContentRef.current = false
    onDrawnChange('')
    setRedraw((x) => x + 1)
  }

  return (
    <div>
      {/* Mode toggle */}
      <div className="inline-flex p-1 mb-3 rounded-xl bg-bd-slate border border-border/50">
        <button
          type="button"
          onClick={() => onModeChange('typed')}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-150 ${
            mode === 'typed' ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Type className="w-3.5 h-3.5" /> Type
        </button>
        <button
          type="button"
          onClick={() => onModeChange('drawn')}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-150 ${
            mode === 'drawn' ? 'bg-white text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Pen className="w-3.5 h-3.5" /> Draw
        </button>
      </div>

      {mode === 'typed' ? (
        <div className="space-y-2">
          <input
            type="text"
            value={typedValue}
            onChange={(e) => onTypedChange(e.target.value)}
            placeholder="Type your full name as signature"
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-bd-blue/30 focus:border-bd-blue transition"
            autoComplete="off"
          />
          <div
            className="min-h-[100px] flex items-center justify-center px-4 py-6 rounded-xl bg-bd-slate border border-dashed border-border/60"
            aria-hidden="true"
          >
            <span
              className="text-3xl sm:text-4xl text-foreground italic"
              style={{ fontFamily: '"Brush Script MT","Lucida Handwriting","Apple Chancery",cursive' }}
            >
              {typedValue || 'Your signature'}
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div
            ref={containerRef}
            className="relative w-full rounded-xl border border-border bg-white overflow-hidden"
          >
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="block w-full touch-none cursor-crosshair"
              style={{ height: 180 }}
            />
            {!drawnDataUrl && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-sm text-muted-foreground/50 select-none">
                Sign here using your mouse or finger
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Clear signature
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
