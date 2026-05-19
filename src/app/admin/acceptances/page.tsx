import { dbConfigured, listAcceptances, type AcceptanceRecord } from '@/lib/db'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

type SortDir = 'asc' | 'desc'

export default async function AcceptancesAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string }>
}) {
  const params = await searchParams
  const sort: SortDir = params.sort === 'asc' ? 'asc' : 'desc'

  if (!dbConfigured()) {
    return (
      <main className="min-h-screen bg-bd-slate py-16 px-6">
        <div className="mx-auto max-w-3xl p-8 rounded-2xl bg-white border border-bd-red/20">
          <h1 className="text-2xl font-black text-foreground mb-2">Database not configured</h1>
          <p className="text-sm text-muted-foreground">
            Set <code className="font-mono bg-bd-slate px-1.5 py-0.5 rounded">POSTGRES_URL</code> in your environment
            (Vercel project &rarr; Storage &rarr; Postgres) to enable acceptance recording and viewing.
          </p>
        </div>
      </main>
    )
  }

  let records: AcceptanceRecord[] = []
  let error: string | null = null
  try {
    records = await listAcceptances()
    if (sort === 'asc') records = [...records].reverse()
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load records'
  }

  return (
    <main className="min-h-screen bg-bd-slate py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl font-black text-foreground">Acceptance records</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {records.length} {records.length === 1 ? 'record' : 'records'} total
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Sort:</span>
            <a
              href="?sort=desc"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                sort === 'desc' ? 'bg-bd-blue text-white' : 'bg-white text-foreground border border-border hover:bg-bd-slate'
              }`}
            >
              Newest first
            </a>
            <a
              href="?sort=asc"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                sort === 'asc' ? 'bg-bd-blue text-white' : 'bg-white text-foreground border border-border hover:bg-bd-slate'
              }`}
            >
              Oldest first
            </a>
          </div>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-bd-red/5 border border-bd-red/20 text-bd-red text-sm">{error}</div>
        )}

        {!error && records.length === 0 && (
          <div className="p-12 rounded-2xl bg-white border border-border text-center text-muted-foreground">
            No acceptance records yet.
          </div>
        )}

        {!error && records.length > 0 && (
          <div className="overflow-x-auto rounded-2xl bg-white border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Date</th>
                  <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Name</th>
                  <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Job title</th>
                  <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Email</th>
                  <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Company</th>
                  <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Sig</th>
                  <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">IP</th>
                  <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">ID</th>
                </tr>
              </thead>
              <tbody>
                {records.map((r) => (
                  <tr key={r.id} className="border-b border-border/40 hover:bg-bd-slate/50">
                    <td className="px-4 py-3 text-foreground whitespace-nowrap">
                      {new Date(r.accepted_at).toLocaleString('en-GB')}
                    </td>
                    <td className="px-4 py-3 text-foreground font-medium">{r.full_name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r.job_title}</td>
                    <td className="px-4 py-3 text-bd-blue">{r.email}</td>
                    <td className="px-4 py-3 text-foreground">{r.company}</td>
                    <td className="px-4 py-3">
                      {r.signature_type === 'drawn' ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={r.signature_data} alt="" className="h-8 w-auto bg-bd-slate rounded border border-border/50" />
                      ) : (
                        <span className="text-foreground italic" style={{ fontFamily: '"Brush Script MT","Lucida Handwriting","Apple Chancery",cursive' }}>
                          {r.signature_data}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{r.ip_address || '—'}</td>
                    <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{r.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}
