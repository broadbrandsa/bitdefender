import { sql } from '@vercel/postgres'

let initPromise: Promise<void> | null = null

/**
 * Lazily creates the `acceptances` table on first use.
 * Idempotent — safe to call on every request; the CREATE TABLE
 * statement uses IF NOT EXISTS.
 */
export async function ensureSchema(): Promise<void> {
  if (!initPromise) {
    initPromise = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS acceptances (
          id TEXT PRIMARY KEY,
          full_name TEXT NOT NULL,
          job_title TEXT NOT NULL,
          email TEXT NOT NULL,
          company TEXT NOT NULL,
          signature_type TEXT NOT NULL,
          signature_data TEXT NOT NULL,
          authority_confirmed BOOLEAN NOT NULL,
          accepted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          ip_address TEXT,
          user_agent TEXT
        );
      `
      await sql`CREATE INDEX IF NOT EXISTS idx_acceptances_accepted_at ON acceptances (accepted_at DESC);`
    })().catch((err) => {
      // Reset so a retry can try again on next request
      initPromise = null
      throw err
    })
  }
  return initPromise
}

export type AcceptanceRecord = {
  id: string
  full_name: string
  job_title: string
  email: string
  company: string
  signature_type: 'typed' | 'drawn'
  signature_data: string
  authority_confirmed: boolean
  accepted_at: string
  ip_address: string | null
  user_agent: string | null
}

export type NewAcceptance = Omit<AcceptanceRecord, 'accepted_at'> & {
  accepted_at?: string
}

export async function insertAcceptance(record: NewAcceptance): Promise<AcceptanceRecord> {
  await ensureSchema()
  const acceptedAt = record.accepted_at ?? new Date().toISOString()
  const result = await sql<AcceptanceRecord>`
    INSERT INTO acceptances (
      id, full_name, job_title, email, company,
      signature_type, signature_data, authority_confirmed,
      accepted_at, ip_address, user_agent
    ) VALUES (
      ${record.id},
      ${record.full_name},
      ${record.job_title},
      ${record.email},
      ${record.company},
      ${record.signature_type},
      ${record.signature_data},
      ${record.authority_confirmed},
      ${acceptedAt},
      ${record.ip_address},
      ${record.user_agent}
    )
    RETURNING *;
  `
  return result.rows[0]
}

export async function listAcceptances(): Promise<AcceptanceRecord[]> {
  await ensureSchema()
  const result = await sql<AcceptanceRecord>`
    SELECT * FROM acceptances ORDER BY accepted_at DESC;
  `
  return result.rows
}

export function dbConfigured(): boolean {
  return !!process.env.POSTGRES_URL || !!process.env.POSTGRES_URL_NON_POOLING
}
