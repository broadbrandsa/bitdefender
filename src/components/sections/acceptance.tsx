'use client'

import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from '@/components/animate-on-scroll'
import SignaturePad from '@/components/signature-pad'
import { Check, Loader2, ShieldCheck, AlertCircle } from 'lucide-react'

type Mode = 'typed' | 'drawn'
type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  })
}

export default function Acceptance() {
  const [fullName, setFullName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('Vodacom Tanzania')
  const [sigMode, setSigMode] = useState<Mode>('typed')
  const [typedSig, setTypedSig] = useState('')
  const [drawnSig, setDrawnSig] = useState('')
  const [authority, setAuthority] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [result, setResult] = useState<{ id: string; accepted_at: string } | null>(null)

  const today = useMemo(() => {
    return new Date().toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }, [])

  const signatureValue = sigMode === 'typed' ? typedSig.trim() : drawnSig
  const canSubmit =
    !!fullName.trim() &&
    !!jobTitle.trim() &&
    EMAIL_RE.test(email.trim()) &&
    !!company.trim() &&
    !!signatureValue &&
    authority &&
    status !== 'submitting'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/acceptance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName.trim(),
          job_title: jobTitle.trim(),
          email: email.trim(),
          company: company.trim(),
          signature_type: sigMode,
          signature_data: signatureValue,
          authority_confirmed: authority,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Submission failed')
      }
      setResult({ id: data.id, accepted_at: data.accepted_at })
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  if (status === 'success' && result) {
    return (
      <section id="acceptance" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimateOnScroll animation="scale-in">
            <div className="p-10 lg:p-14 rounded-3xl bg-bd-slate border border-bd-blue/20 text-center">
              <div className="w-16 h-16 rounded-2xl bg-bd-blue/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-9 h-9 text-bd-blue" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground mb-3">
                Proposal Accepted
              </h2>
              <p className="text-base text-muted-foreground mb-8">
                Thank you, <strong className="text-foreground">{fullName}</strong>. Your acceptance has been recorded.
                We&apos;ll be in touch shortly with the next steps.
              </p>
              <div className="inline-flex flex-col gap-3 px-6 py-5 rounded-2xl bg-white border border-border/60 text-left">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Acceptance ID</div>
                  <div className="text-sm font-mono font-semibold text-bd-blue">{result.id}</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Recorded</div>
                  <div className="text-sm text-foreground">{formatDate(result.accepted_at)}</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    )
  }

  return (
    <section id="acceptance" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-6 border-bd-blue/20 bg-bd-blue-light text-bd-blue text-xs tracking-wider uppercase font-medium px-4 py-1.5"
            >
              Acceptance
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground leading-[0.95] mb-4">
              Accept this
              <br />
              <span className="text-bd-blue">Proposal</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Complete the form below to formally accept this proposal on behalf of your organisation.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0.05}>
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-bd-slate border border-border/50"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <Field
                label="Full name"
                required
                value={fullName}
                onChange={setFullName}
                placeholder="Jane Doe"
                autoComplete="name"
              />
              <Field
                label="Job title"
                required
                value={jobTitle}
                onChange={setJobTitle}
                placeholder="Chief Technology Officer"
                autoComplete="organization-title"
              />
              <Field
                label="Email address"
                required
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="jane@vodacom.co.tz"
                autoComplete="email"
                invalid={!!email && !EMAIL_RE.test(email)}
                invalidMessage="Please enter a valid email address."
              />
              <Field
                label="Company"
                required
                value={company}
                onChange={setCompany}
                placeholder="Vodacom Tanzania"
                autoComplete="organization"
              />
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                Signature <span className="text-bd-red">*</span>
              </label>
              <SignaturePad
                mode={sigMode}
                onModeChange={setSigMode}
                typedValue={typedSig}
                onTypedChange={setTypedSig}
                drawnDataUrl={drawnSig}
                onDrawnChange={setDrawnSig}
                fullName={fullName}
              />
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                Date
              </label>
              <div className="px-4 py-3 rounded-xl bg-white border border-border text-foreground/80 text-sm">
                {today}
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer mb-6 p-4 rounded-xl bg-white border border-border/60 hover:border-bd-blue/30 transition-colors">
              <input
                type="checkbox"
                checked={authority}
                onChange={(e) => setAuthority(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-border text-bd-blue focus:ring-bd-blue/30"
              />
              <span className="text-sm text-foreground leading-relaxed">
                I confirm I have the authority to accept this proposal on behalf of the company.
              </span>
            </label>

            {status === 'error' && (
              <div className="mb-4 p-4 rounded-xl bg-bd-red/5 border border-bd-red/20 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-0.5 text-bd-red flex-shrink-0" />
                <div className="text-sm text-bd-red">{errorMsg || 'Submission failed. Please try again.'}</div>
              </div>
            )}

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full inline-flex items-center justify-center gap-2 bg-bd-blue hover:bg-bd-blue-dark disabled:bg-muted-foreground/20 disabled:text-muted-foreground/60 disabled:cursor-not-allowed text-white font-semibold px-6 h-12 text-base rounded-xl transition-colors duration-150"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" /> Accept Proposal
                </>
              )}
            </button>

            <p className="mt-4 text-[11px] text-muted-foreground/70 text-center">
              By submitting, you acknowledge that this acceptance constitutes a legally binding intent and is recorded with
              a timestamp, IP address, and browser details for audit purposes.
            </p>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
  type = 'text',
  autoComplete,
  invalid,
  invalidMessage,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  required?: boolean
  type?: string
  autoComplete?: string
  invalid?: boolean
  invalidMessage?: string
}) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
        {label} {required && <span className="text-bd-red">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={invalid}
        className={`w-full px-4 py-3 rounded-xl border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 transition ${
          invalid
            ? 'border-bd-red/60 focus:ring-bd-red/20 focus:border-bd-red'
            : 'border-border focus:ring-bd-blue/30 focus:border-bd-blue'
        }`}
      />
      {invalid && invalidMessage && (
        <span className="block mt-1.5 text-xs text-bd-red">{invalidMessage}</span>
      )}
    </label>
  )
}
