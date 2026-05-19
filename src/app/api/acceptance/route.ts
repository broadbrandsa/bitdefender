import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { randomUUID } from 'crypto'
import { dbConfigured, insertAcceptance } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type SubmitBody = {
  full_name?: string
  job_title?: string
  email?: string
  company?: string
  signature_type?: 'typed' | 'drawn'
  signature_data?: string
  authority_confirmed?: boolean
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status })
}

export async function POST(request: Request) {
  let body: SubmitBody
  try {
    body = (await request.json()) as SubmitBody
  } catch {
    return bad('Invalid JSON body')
  }

  const full_name = (body.full_name ?? '').trim()
  const job_title = (body.job_title ?? '').trim()
  const email = (body.email ?? '').trim()
  const company = (body.company ?? '').trim()
  const signature_type = body.signature_type
  const signature_data = (body.signature_data ?? '').trim()
  const authority_confirmed = !!body.authority_confirmed

  if (!full_name) return bad('Full name is required')
  if (!job_title) return bad('Job title is required')
  if (!email || !EMAIL_RE.test(email)) return bad('A valid email is required')
  if (!company) return bad('Company is required')
  if (signature_type !== 'typed' && signature_type !== 'drawn') {
    return bad('Signature type must be "typed" or "drawn"')
  }
  if (!signature_data) return bad('A signature is required')
  if (!authority_confirmed) return bad('You must confirm you have authority to accept')

  if (!dbConfigured()) {
    return bad(
      'Database is not configured. Set POSTGRES_URL in environment to enable acceptance recording.',
      503,
    )
  }

  const hdrs = await headers()
  const ip =
    hdrs.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    hdrs.get('x-real-ip') ||
    null
  const user_agent = hdrs.get('user-agent') || null

  const id = `acc_${randomUUID().replace(/-/g, '').slice(0, 16)}`

  try {
    const record = await insertAcceptance({
      id,
      full_name,
      job_title,
      email,
      company,
      signature_type,
      signature_data,
      authority_confirmed,
      ip_address: ip,
      user_agent,
    })
    return NextResponse.json({
      ok: true,
      id: record.id,
      accepted_at: record.accepted_at,
    })
  } catch (err) {
    console.error('Failed to record acceptance', err)
    return bad('Failed to record acceptance. Please try again or contact us.', 500)
  }
}
